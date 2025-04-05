<script setup lang="ts">
import friends from '~/content/friends';

useSeoMeta({
    title: `友情链接 | 冬烟 の 小窝`,
    description: `柳庭风静人眠昼，昼眠人静风庭柳。`,
})
</script>

<template>
    <NuxtLayout>
        <template #pagename>友情链接</template>
        <!-- 控制每排两个 -->
        <div class="grid grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-5">
            <div class="h-full aspect-w-1 aspect-h-1" v-for="friend in friends">
                <FriendCard :key="friend.name" :name="friend.name"
                :description="friend.description" :avatar="friend.avatar" :url="friend.url" class="h-full" />
            </div>
        </div>
        <AppComment />
    </NuxtLayout>
</template>