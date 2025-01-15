<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

import PostHead from './components/PostHead.vue';
import NotByAI from './components/NotByAI.vue';
</script>

<template>
    <Layout>
        <template #doc-before>
            <PostHead />
        </template>
        <template #aside-top>
            <NotByAI style="width: 70%;"/>
            <br>
        </template>
    </Layout>
</template>