<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => {
    return queryCollection('blog').path(`/posts/${route.params.slug}`).first()
})

useSeoMeta({
    title: post.value?.title ? `${post.value.title} | 冬烟 の 小窝` : '404 Not Found',
    description: post.value?.description ?? '',
})
</script>

<template>
    <NuxtLayout v-if="post">
        <template #pagename>{{ post.title }}</template>
        <ContentRenderer :value="post" :prose="true" />
        <AppComment />
    </NuxtLayout>
    <NuxtLayout v-else>
        <template #pagename>404 Not Found</template>
        <div class="text-center py-12">
            <p class="text-muted-foreground">文章未找到</p>
        </div>
    </NuxtLayout>
</template>