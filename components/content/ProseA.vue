<template>
    <NuxtLink :href="props.href" :target="props.target" class="font-medium text-primary underline underline-offset-4">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
        default: undefined,
        required: false
    }
})
</script>