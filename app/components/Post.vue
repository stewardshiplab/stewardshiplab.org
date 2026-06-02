<script setup lang="ts">
import { ComarkRenderer } from '@comark/vue'
import { formatDate } from '../utils/format.ts'
import { PEOPLE, POST_CATEGORIES } from '../data/content.ts'

const props = defineProps(['post', 'type', 'breadcrumbUrl', 'breadcrumbText'])

const title = `${props.post.frontmatter.title} ✸ Software Stewardship Lab`

useSeoMeta({
  title: title,
  description: props.post.frontmatter.description,
  ogTitle: title,
  ogDescription: props.post.frontmatter.description,
  ogImage: props.post.frontmatter.metaImage,
})
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
      <div class="post-label post-label--category">
        {{ POST_CATEGORIES[post.frontmatter.category].name }}
      </div>
      <div class="post-label post-label--type">
        {{ type }}
      </div>
    </div>
  </div>
  <div class="container">
    <h1 class="page-title">
      {{ post.frontmatter.title }}
    </h1>
    <div
      v-if="post.frontmatter.authors || post.frontmatter.editor || post.frontmatter.date || post.frontmatter.location || (post.frontmatter.canonicalWebsiteName && post.frontmatter.canonicalUrl) || post.frontmatter.venue"
      class="post__meta"
    >
      <template v-if="post.frontmatter.authors">
        <div
          v-for="author in post.frontmatter.authors"
          class="post__meta-item"
        >
          <b v-if="post.frontmatter.authors.length == 1">Author</b>
          <b v-if="post.frontmatter.authors.length > 1">Co-author</b>
          <div class="post__person">
            <img
              :src="PEOPLE[author].image"
              :alt="'A portrait of ' + PEOPLE[author].name"
            >
            <span>{{ PEOPLE[author].name }}</span>
          </div>
        </div>
      </template>
      <div
        v-if="post.frontmatter.editor"
        class="post__meta-item"
      >
        <b>Editor</b>
        <div class="post__person">
          <img
            v-if="post.frontmatter.editorImage"
            :src="post.frontmatter.editorImage"
            :alt="'A portrait of ' + post.frontmatter.editor"
          >
          <span>{{ post.frontmatter.editor }}</span>
        </div>
      </div>
      <div
        v-if="post.frontmatter.date"
        class="post__meta-item"
      >
        <b>Date</b>
        <span>{{ formatDate(post.frontmatter.date.split(' ')[0]) }}</span>
      </div>
      <div
        v-if="post.frontmatter.location"
        class="post__meta-item"
      >
        <b>Location</b>
        <span>{{ post.frontmatter.location }}</span>
      </div>
      <div
        v-if="post.frontmatter.venue"
        class="post__meta-item"
      >
        <b>Talk given at</b>
        <a
          v-if="post.frontmatter.venueUrl"
          target="_blank"
          :href="post.frontmatter.venueUrl"
        >{{ post.frontmatter.venue }}</a>
        <span v-if="!post.frontmatter.venueUrl">{{ post.frontmatter.venue }}</span>
      </div>
      <div
        v-if="post.frontmatter.canonicalWebsiteName && post.frontmatter.canonicalUrl"
        class="post__meta-item"
      >
        <b>Original post</b>
        <a
          target="_blank"
          :href="post.frontmatter.canonicalUrl"
        >on {{ post.frontmatter.canonicalWebsiteName }}</a>
      </div>
    </div>
    <figure
      v-if="post.frontmatter.image"
      class="post__image"
    >
      <img
        :src="post.frontmatter.image"
        :alt="post.frontmatter.imageAlt"
      >
    </figure>
  </div>
  <div :class="{ container: !post.frontmatter.fullWidthLayout }">
    <ComarkRenderer
      :tree="post"
      class="prose"
    />
  </div>
  <div class="container post__after">
    <div v-if="breadcrumbUrl && breadcrumbText">
      <NuxtLink
        class="plain-link"
        :to="breadcrumbUrl"
      >{{ breadcrumbText }}</NuxtLink>
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
