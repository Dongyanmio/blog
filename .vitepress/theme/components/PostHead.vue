<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter, theme } = useData();
</script>

<template>
    <ClientOnly>
        <div v-if="frontmatter.title" style="text-align: center;">
            <h1 style="letter-spacing: -0.02em;line-height: 40px;font-size: 32px;"><b>{{ frontmatter.title }}</b></h1>
        </div>
    </ClientOnly>
</template>