<script setup>
const { data: posts } = await useFetch('/api/content/ideas')

const title = `Ideas ✸ Software Stewardship Lab`
const description = 'We regularly write about Open Source governance and burnout, software supply chains, package management, funding and metrics, and other topics in Open Source sustainability.'
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
      Ideas
    </h1>
    <p>{{ description }}</p>
    <hr>
  </div>
  <PostBrowser :posts="posts" />
</template>
