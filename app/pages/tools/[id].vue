<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/content/tools/${route.params.id}`)
</script>

<template>
  <Post
    :post="post"
    type="tool"
    breadcrumb-url="/tools"
    breadcrumb-text="← All tools"
  />
</template>
