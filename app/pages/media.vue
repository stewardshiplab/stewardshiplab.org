<script setup>
const { data: media } = await useFetch('/api/content/media')

const title = `Media ✸ Software Stewardship Lab`
const description = 'Want to learn more about our mission? Here are some places where we have spoken about our work.'
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <div class="container">
    <h1 class="page-title">
      Media
    </h1>
    <p>{{ description }}</p>
    <hr>
  </div>
  <MediaList :media="media" />
</template>
