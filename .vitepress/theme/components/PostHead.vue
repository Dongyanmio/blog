<script setup>
import { useData } from "vitepress";

const { frontmatter, theme } = useData();
</script>

<template>
    <ClientOnly>
        <center v-if="frontmatter.title">
            <h1 style="letter-spacing: -0.02em;line-height: 40px;font-size: 32px;"><b>{{ frontmatter.title }}</b></h1>
        </center>
    </ClientOnly>
</template>