<script setup lang="ts">
import { useData } from 'vitepress'
const { page } = useData()

import PostHead from './components/PostHead.vue';
import NotByAI from './components/NotByAI.vue';

import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #doc-before>
            <PostHead />
        </template>
        <Content />
    </Layout>
</template>