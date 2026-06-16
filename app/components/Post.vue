<script setup lang="ts">
import { formatDate } from '../utils/format.ts'
import { PEOPLE, POST_CATEGORIES } from '../data/content.ts'

const props = defineProps(['post', 'type', 'breadcrumbUrl', 'breadcrumbText'])

const title = `${props.post.title} ✸ Software Stewardship Lab`
const ogImageAlt = `OpenGraph image for “${props.post.title}”`

useSeoMeta({
  title: title,
  description: props.post.description,
  ogTitle: title,
  ogDescription: props.post.description,
})

if (props.post.metaImage) {
  defineOgImage('Post', {}, {
    url: props.post.metaImage,
    width: 1200,
    height: 630,
    alt: ogImageAlt,
  })
}
else {
  defineOgImage('Post', {
    title: props.post.title,
    category: POST_CATEGORIES[props.post.category].name,
    type: props.type,
  }, {
    alt: ogImageAlt,
  })
}
</script>

<template>
  <div class="container post__before">
    <div>
      <NuxtLink
       v-if="breadcrumbUrl && breadcrumbText"
        class="plain-link"
        :to="breadcrumbUrl"
      >{{ breadcrumbText }}</NuxtLink>
    </div>
    <div class="post__labels">
      <div class="post-label post-label--category">{{ POST_CATEGORIES[post.category].name }}</div>
      <div class="post-label post-label--type">{{ type }}</div>
    </div>
  </div>
  <div class="container">
    <h1 class="page-title">{{ post.title }}</h1>
    <div
      class="post__meta"
      v-if="post.authors || post.editor || post.date || post.location || (post.canonicalWebsiteName && post.canonicalUrl) || post.venue"
    >
      <template v-if="post.authors">
        <div class="post__meta-item" v-for="author in post.authors">
          <b v-if="post.authors.length == 1">Author</b>
          <b v-if="post.authors.length > 1">Co-author</b>
          <div class="post__person">
            <img :src="PEOPLE[author].image" :alt="'A portrait of ' + PEOPLE[author].name">
            <span>{{ PEOPLE[author].name }}</span>
          </div>
        </div>
      </template>
      <div class="post__meta-item" v-if="post.editor">
        <b>Editor</b>
        <div class="post__person">
          <img v-if="post.editorImage" :src="post.editorImage" :alt="'A portrait of ' + post.editor">
          <span>{{ post.editor }}</span>
        </div>
      </div>
      <div class="post__meta-item" v-if="post.date">
        <b>Date</b>
        <span>{{ formatDate(post.date) }}</span>
      </div>
      <div class="post__meta-item" v-if="post.location">
        <b>Location</b>
        <span>{{ post.location }}</span>
      </div>
      <div class="post__meta-item" v-if="post.venue">
        <b>Talk given at</b>
        <a target="_blank" :href="post.venueUrl" v-if="post.venueUrl">{{ post.venue }}</a>
        <span v-if="!post.venueUrl">{{ post.venue }}</span>
      </div>
      <div class="post__meta-item" v-if="post.canonicalWebsiteName && post.canonicalUrl">
        <b>Original post</b>
        <a target="_blank" :href="post.canonicalUrl">on {{ post.canonicalWebsiteName }}</a>
      </div>
    </div>
    <figure class="post__image" v-if="post.image">
      <img :src="post.image" :alt="post.imageAlt">
    </figure>
  </div>
  <div :class="{ 'container': !post.fullWidthLayout }">
    <ContentRenderer :value="post" class="prose" />
  </div>
  <div class="container post__after">
    <div v-if="breadcrumbUrl && breadcrumbText">
      <NuxtLink class="plain-link" :to="breadcrumbUrl">{{ breadcrumbText }}</NuxtLink>
    </div>
  </div>
</template>

<style>
.post__before, .post__after {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
}
.post__before {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}
.post__after {
  margin-top: 80px;
}
.post__labels {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.post-label {
  display: inline-block;
  padding: 0 8px;
  padding-top: 4px;
  padding-bottom: 6px;
  border-radius: var(--border-radius-s);
  background: var(--color-blue);
  color: white;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-xs);
  line-height: 1;
  font-variant-caps: small-caps;
  font-feature-settings: "smcp";
  text-transform: lowercase;
}
.post-label--type {
  background: var(--color-blue);
}
.post-label--category {
  background: var(--color-purple);
}
.post__meta {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 45px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-beige-pale);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  --person-image-size: 20px;
  .post__meta-item {
    display: flex;
    align-items: center;
    gap: 10px;
    b {
      min-width: 120px;
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: normal;
    }
  }
  .post__person {
    display: flex;
    align-items: center;
    gap: 7px;
    img {
      width: var(--person-image-size);
      height: var(--person-image-size);
      border-radius: 100%;
    }
  }
}
.post__image {
  img {
    max-height: 300px;
  }
}
.credit {
  display: block;
  margin-top: 45px;
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
}
.ender {
  display: none;
}
</style>
