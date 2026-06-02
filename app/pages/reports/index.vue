<script setup>
const { data: posts } = await useFetch(`/api/content/reports`)
const title = `Reports ✸ Software Stewardship Lab`
const description = 'Detailed investigations. Living documents. Taxonomies. Reference materials. Our reports help Open Source folks do better work and design better policies and institutions.'
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
      Reports
    </h1>
    <p>{{ description }}</p>
    <hr>
  </div>
  <PostBrowser :posts="posts" />
</template>
