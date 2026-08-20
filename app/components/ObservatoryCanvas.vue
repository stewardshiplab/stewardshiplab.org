<template>
  <div ref="myCanvasWrapper">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
// Naming it `ref="canvas"` specifically yields a Vue warning. Interesting.
const $myCanvas = useTemplateRef('myCanvas');
const $myCanvasWrapper = useTemplateRef('myCanvasWrapper');

let $canvas = null;
let $canvasWrapper = null;
let ctx = null;

type Node = {
  cx: number // x position of center
  cy: number // y position of center
  r: number // circle radius
  vx: number // x velocity
  vx_max: number // maximum x velocity
  vy: number // y velocity
  ax: number // x acceleration
  ay: number // y acceleration
  radar_interval: number // time between radar pulses
  radar_t_to_pulse: number // time under radar pulse
  radar_pulse_duration: number // how long a pulse lasts
  radar_t_left: number // time left in radar pulse
  radar_r: number // radar radius
  radar_vr: number // radar radius velocity
  radar_ar: number // radar radius acceleration
};

type State = {
  dt: number
  tPrev: number
  nodes: Node[]
};

const state: State = {
  dt: 0,
  tPrev: 0,
  nodes: [],
};

function rand(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function getRandomNodeCx() {
  const n = Math.random();
  if (n < 0.4) {
    return rand(0, $canvas.width / 4);
  } else if (n < 0.8) {
    return rand($canvas.width * (3 / 4), $canvas.width);
  } else {
    return rand(0, $canvas.width);
  }
}

function generateNodes() {
  const ENT_VY = [-0.01, -0.02, -0.03];
  const ENT_VX_MAX = [0.002, 0.01, 0.02];
  const ENT_COUNT = 50;
  for (let idx = 0; idx < ENT_COUNT; idx += 1) {
    const node: Node = {
      cx: getRandomNodeCx(),
      cy: rand(0, $canvas.height),
      r: rand(10, 50),
      vx: 0.0,
      vx_max: ENT_VX_MAX[rand(0, ENT_VX_MAX.length - 1)],
      vy: ENT_VY[rand(0, ENT_VY.length - 1)],
      ax: 0.0005,
      ay: 0.0,
      radar_interval: rand(20000.0, 40000.0),
      radar_t_to_pulse: rand(0.0, 40000.0),
      radar_pulse_duration: 6000.0,
      radar_t_left: 0,
      radar_r: 0,
      radar_init_vr: 0.030,
      radar_vr: 0.0,
      radar_ar: -0.000007,
    };
    state.nodes.push(node);
  }
}

function draw() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  state.nodes.forEach((node) => {

    ctx.beginPath();
    ctx.arc(node.cx, node.cy, node.r, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#3a4de6';
    ctx.stroke();
    // const grad = ctx.createRadialGradient(node.cx, node.cy, 0, node.cx, node.cy, node.r);
    // grad.addColorStop(0.0, "#ffffff00");
    // grad.addColorStop(0.5, "#ffffff00");
    // grad.addColorStop(1.0, "#ffffff05");
    // ctx.fillStyle = grad;
    // ctx.fill();

    if (node.radar_t_left > 0) {
      ctx.beginPath();
      ctx.arc(node.cx, node.cy, Math.max(0, node.radar_r), 0, Math.PI * 2, false);
      const alpha = 0.8 - Math.max(0, Math.abs(node.r - node.radar_r) / 65);
      ctx.strokeStyle = `rgba(150, 150, 255, ${alpha})`;
      ctx.stroke();
    }
  });
}

function update() {
  state.nodes.forEach((node) => {
    if (node.radar_t_left == 0) {
      node.radar_t_to_pulse -= state.dt;
    }

    if (node.radar_t_to_pulse < 0) {
      console.log('pulse');
      node.radar_t_to_pulse = 0;
      node.radar_t_left = node.radar_pulse_duration;
      node.radar_r = node.r;
      node.radar_vr = node.radar_init_vr;
    }

    if (node.radar_t_left > 0) {
      node.radar_t_left -= state.dt;
      if (node.radar_vr > 0) {
        node.radar_r += node.radar_vr * state.dt;
      }
      node.radar_vr += node.radar_ar * state.dt;
    }

    if (node.radar_t_left < 0) {
      node.radar_t_left = 0;
      node.radar_t_to_pulse = node.radar_interval;
    }

    node.vx += node.ax;
    if (Math.abs(node.vx) > node.vx_max) {
      node.ax *= -1;
    }

    node.cx += node.vx * state.dt;
    node.cy += node.vy * state.dt;
    if ((node.cy + node.r) < 0) {
      node.cy = $canvas.height + node.r;
      node.cx = getRandomNodeCx();
    }
  });
}

function render(t) {
  // Just to get slightly bigger numbers for velocities etc, which are easier to right
  state.dt = t - state.tPrev;
  state.tPrev = t;
  draw();
  update();
  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  $canvas.width = window.innerWidth;
  $canvas.height = $canvasWrapper.offsetHeight;
  draw();
}

function setupCanvas() {
  $canvas = $myCanvas.value;
  $canvasWrapper = $myCanvasWrapper.value;
  ctx = $canvas.getContext('2d');
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  generateNodes();
  window.requestAnimationFrame(render);
}

watch($myCanvas, () => {
  setupCanvas();
}, { once: true });
</script>
