<script setup lang="ts">
defineProps<{
    name: string
    description: string
    avatar: string
    url: string
}>()
</script>

<template>
    <NuxtLink :to="url">
        <Card>
            <CardContent>
                <div class="flex items-center">
                    <Avatar class="h-10 w-10">
                        <AvatarImage :src="avatar" :alt="name" />
                        <AvatarFallback>{{ name }}</AvatarFallback>
                    </Avatar>
                    <div class="ml-4 space-y-1">
                        <p class="text-sm font-medium leading-none line-clamp-1">
                            {{ name }}
                        </p>
                        <p class="text-sm text-muted-foreground line-clamp-1">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </NuxtLink>
</template>