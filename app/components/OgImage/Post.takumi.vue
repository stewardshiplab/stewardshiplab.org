<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'

const props = defineProps<{
  title: string
  category: string
  type: string
}>()

const titleFontSize = computed(() => {
  if (props.title.length > 110) {
    return '54px'
  }
  if (props.title.length > 80) {
    return '62px'
  }
  return '74px'
})

const typeLabel = computed(() => props.type.charAt(0).toUpperCase() + props.type.slice(1))
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 1200px;
      height: 630px;
      padding: 70px;
      overflow: hidden;
      background: #fdf1f0;
      color: #0a1030;
      font-family: Montreuil, sans-serif;
    "
  >
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 30px;">
      <Logo
        width="340"
        height="72"
        style="display: block; width: 340px; height: 72px;"
      />
      <div
        style="
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border: 2px solid #e3d8df;
          border-radius: 5px;
          color: #505673;
          font-size: 24px;
          line-height: 1;
          white-space: nowrap;
        "
      >
        <span>{{ category }}</span>
        <span style="color: #e3d8df;">/</span>
        <span>{{ typeLabel }}</span>
      </div>
    </div>

    <div
      style="
        display: flex;
        flex: 1;
        align-items: center;
        max-width: 980px;
        padding: 30px 0;
      "
    >
      <h1
        :style="{
          margin: '0',
          color: '#1c35bc',
          fontFamily: 'Valkyrie, serif',
          fontSize: titleFontSize,
          fontWeight: '400',
          lineHeight: '1.05',
          letterSpacing: '0',
          textWrap: 'balance',
        }"
      >
        {{ title }}
      </h1>
    </div>

    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        border-top: 2px solid #e3d8df;
        padding-top: 28px;
        padding-bottom: 4px;
        color: #505673;
        font-size: 25px;
        line-height: 1.2;
      "
    >
      <span>stewardshiplab.org</span>
      <span style="color: #6e1d7a;">Open Source stability and sustainability</span>
    </div>
  </div>
</template>
