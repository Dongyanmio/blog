<script setup lang="ts">
defineProps<{
    title: string
    description: string
    date: string
    tags: string[]
    path: string
}>()
</script>

<template>
    <NuxtLink :to="path">
        <Card class="gap-1">
            <CardHeader>
                <CardTitle>{{ title }}</CardTitle>
                <CardDescription>编写日期: {{ date }}</CardDescription>
            </CardHeader>
            <CardContent>
                <div class="flex items-center gap-2">
                    <div class="flex flex-wrap gap-1">
                        <Badge v-for="tag in tags" :key="tag" variant="secondary">
                            {{ tag }}
                        </Badge>
                    </div>
                    <span>{{ description }}</span>
                </div>
            </CardContent>
        </Card>
    </NuxtLink>
</template>