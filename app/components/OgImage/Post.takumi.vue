<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="main">
    <h1>{{ title }}</h1>
  </div>
</template>

<style>
h1 {
  font-size: 10px;
}
</style>
