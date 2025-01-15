<script setup>
import { useData } from 'vitepress';

const { isDark } = useData();
</script>

<template>
    <a href="https://notbyai.fyi">
        <img v-if="isDark == false" src="/assets/notbyai/Written-By-Human-Not-By-AI-Badge-white.svg" alt="Not By AI">
        <img v-else src="/assets/notbyai/Written-By-Human-Not-By-AI-Badge-black.svg" alt="Not By AI">
    </a>
</template>