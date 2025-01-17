<script setup lang="ts">
const info = defineProps({
    title: {
        type: String,
        default: true,
    },
    date_string: {
        type: String,
        required: false,
        default: "2025-01-01T00:00:00+08:00",
    },
    tags: {
        type: Array,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        default: '/'
    },
});

const date = new Date(info.date_string);
</script>

<template>
    <a :href="info.url" style="text-decoration: none;">
        <div class="pristine-postcard">
            <div class="pristine-postcard-main">
                <a :href="info.url" style="text-decoration: none;">
                    <h3 class="pristine-postcard-title">{{ info.title }}</h3>
                </a>
                <div class="pristine-postcard-description">
                    {{ info.description }}
                </div>
            </div>
            <div class="pristine-postcard-info">
                <div v-if="info.tags" class="pristine-postcard-taglist">
                    <div class="pristine-postcard-tag-item" v-for="tag of info.tags">
                        <i class="bi bi-tag-fill"></i>&nbsp;{{ tag }}
                    </div>
                </div>
                <div>
                    <i class="bi bi-clock"></i>&nbsp;{{ date.toLocaleString() }}
                </div>
            </div>
        </div>
    </a>
</template>

<style>
.pristine-postcard {
    padding-bottom: 10px;
    margin-top: 20px;
    border: rgba(30, 41, 59, calc(.1/ 1)) solid 1px;
    border-radius: 8px;
    color: black;
    background-color: #ffffff;
}

html.dark .pristine-postcard {
    color: white;
    border: #3d3d3f solid 1px;
    background-color: #1b1b1f;
}

.pristine-postcard-main {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
    border-bottom: rgba(30, 41, 59, calc(.1/ 1)) solid 1px;
}

html.dark .pristine-postcard-main {
    border-bottom: #3d3d3f solid 1px;
}

.pristine-postcard-main h3 {
    font-size: 1.25rem;
    /* 调整字体大小 */
    margin-top: 10px;
    color: #3451B2;
}

html.dark .pristine-postcard-main h3 {
    color: #A8B1FF;
}

.pristine-postcard-main .pristine-postcard-description {
    color: #7d7d7d;
}

html.dark .pristine-postcard-main .pristine-postcard-description {
    color: #c7c7c7;
}

.pristine-postcard-info {
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    color: #8b8b92;
}

.pristine-postcard-taglist {
    display: flex;
    flex-wrap: wrap;
    /* 允许换行 */
    gap: 1.5em;
    /* 卡片之间的间距 */
}

.pristine-postcard-tag-item {
    display: inline-block;
    font-weight: 1.5px;
}
</style>