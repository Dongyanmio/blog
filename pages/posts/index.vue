<script setup lang="ts">
const allPosts = await queryCollection('blog').order('date', 'DESC').all()

useSeoMeta({
    title: `文章 | 冬烟 の 小窝`,
    description: `柳庭风静人眠昼，昼眠人静风庭柳。`,
})
</script>

<template>
    <NuxtLayout>
        <template #pagename>
            文章
        </template>
        <div class="space-y-3">
            <div v-for="post in allPosts">
                <PostCard :key="post.id" :title="post.title" :date="post.date" :description="post.description"
                    :path="post.path" :tags="post.tags" />
            </div>
        </div>
    </NuxtLayout>
</template>
