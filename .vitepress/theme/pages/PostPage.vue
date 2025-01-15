<script setup>
import { data as posts } from '../posts.data.ts'
import PostCard from '../components/PostCard.vue';

posts.sort((a, b) => b.frontmatter.date - a.frontmatter.date)
</script>

<template>
  <div class="pristine-postlist ">
    <div v-for="post of posts" class="pristine-postlist-item">
      <PostCard :title="post.frontmatter.title" :description="post.frontmatter.description"
        :tags="post.frontmatter.tags" :url="post.url"/>
    </div>
  </div>
</template>

<style>
</style>