<script setup lang="ts">
import { Sun, Moon, Laptop } from 'lucide-vue-next'

const colorMode = useColorMode()
</script>


<template>
    <ToggleGroup type="single" variant="outline" v-model="colorMode.preference">
        <ToggleGroupItem value="light" aria-label="浅色模式">
            <Sun class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="system" aria-label="跟随系统">
            <Laptop class="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="深色模式">
            <Moon class="h-4 w-4" />
        </ToggleGroupItem>
    </ToggleGroup>
</template>