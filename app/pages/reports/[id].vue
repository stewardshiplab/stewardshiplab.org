<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/content/reports/${route.params.id}`)
</script>

<template>
  <Post
    :post="post"
    type="report"
    breadcrumb-url="/reports"
    breadcrumb-text="← All reports"
  />
</template>
