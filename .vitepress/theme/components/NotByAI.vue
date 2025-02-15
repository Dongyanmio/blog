<script setup>
import { useData } from 'vitepress';

const { isDark, frontmatter } = useData();
</script>

<template>
    <a v-if="frontmatter.notbyai != false" href="https://notbyai.fyi">
        <img v-if="isDark == false" src="/assets/notbyai/Written-By-Human-Not-By-AI-Badge-white.svg" alt="Not By AI">
        <img v-else src="/assets/notbyai/Written-By-Human-Not-By-AI-Badge-black.svg" alt="Not By AI">
    </a>
</template>