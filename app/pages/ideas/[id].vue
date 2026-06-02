<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/content/ideas/${route.params.id}`)
</script>

<template>
  <Post
    :post="post"
    type="idea"
    breadcrumb-url="/ideas"
    breadcrumb-text="← All ideas"
  />
</template>
