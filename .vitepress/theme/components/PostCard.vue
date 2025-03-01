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
                <div class="pristine-postcard-date">
                    <i class="bi bi-clock"></i>&nbsp;{{ date.toLocaleString() }}
                </div>
                <div class="pristine-postcard-description">
                    {{ info.description }}
                </div>
            </div>
            <!-- <div class="pristine-postcard-info">
                <div v-if="info.tags" class="pristine-postcard-taglist">
                    <div class="pristine-postcard-tag-item" v-for="tag of info.tags">
                        <i class="bi bi-tag-fill"></i>&nbsp;{{ tag }}
                    </div>
                </div>
            </div> -->
        </div>
    </a>
</template>

<style>
.pristine-postcard {
    border-radius: 10px;

    color: black;
    background-color: white;
    border: rgba(30, 41, 59, calc(.1/ 1)) solid 1px;
}

html.dark .pristine-postcard {
    color: white;
    border: #3d3d3f solid 1px;
    background-color: #1b1b1f
}

.pristine-postcard-main {
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    padding-left: 1.25em;
    padding-right: 1.25em;
}

.pristine-postcard-main h3 {
    font-size: 1.25rem;
    /* 调整字体大小 */
    margin-top: 0px;
    color: #3451B2;
}

html.dark .pristine-postcard-main h3 {
    color: #A8B1FF;
}

.pristine-postcard-date {
    color: #8b8b92;
}

.pristine-postcard-main .pristine-postcard-description {
    color: #7d7d7d;
}

html.dark .pristine-postcard-main .pristine-postcard-description {
    color: #c7c7c7;
}
</style>