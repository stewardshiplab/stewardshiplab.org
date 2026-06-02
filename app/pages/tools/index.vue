<script setup>
const { data: posts } = await useFetch('/api/content/tools')

const title = `Tools ✸ Software Stewardship Lab`
const description = 'Lab members build tools that help Open Source developers better navigate complex software ecosystems. Find them here.'
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
      Tools
    </h1>
    <p>{{ description }}</p>
    <hr>
  </div>
  <PostBrowser :posts="posts" />
</template>
