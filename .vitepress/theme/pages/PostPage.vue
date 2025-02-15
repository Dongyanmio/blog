<script setup>
import { data as posts } from '../posts.data.ts'
import PostCard from '../components/PostCard.vue';

posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
</script>

<template>
  <div class="pristine-postlist ">
    <div v-for="post of posts" class="pristine-postlist-item">
      <PostCard :title="post.frontmatter.title" :date_string="post.frontmatter.date" :tags="post.frontmatter.tags"
        :description="post.frontmatter.description" :url="post.url" />
    </div>
  </div>
</template>

<style></style>