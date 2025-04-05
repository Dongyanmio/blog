<script setup lang="ts">
import Giscus from '@giscus/vue'

const colorMode = useColorMode()
</script>

<template>
    <ClientOnly>
        <Separator class="my-4" label="Or" />
        <Giscus repo="Dongyanmio/blog" repo-id="R_kgDONzkOQw" category="博客评论" category-id="DIC_kwDONzkOQ84Cmw3l"
            mapping="pathname" strict="0" reactions-enabled="1" emit-metadata="0" input-position="top"
            :theme="colorMode.value === 'dark' ? 'dark' : 'light'" lang="zh-CN" crossorigin="anonymous" />
    </ClientOnly>
</template>
