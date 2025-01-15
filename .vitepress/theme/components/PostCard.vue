<script setup lang="ts">
const post = defineProps({
    title: {
        type: String,
        default: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: false,
    },
    url: {
        type: String,
        default: '/'
    },
});
</script>

<template>
    <a :href="post.url" style="text-decoration: none;">
        <div class="pristine-postcard">
            <a :href="post.url" style="text-decoration: none;">
                <h3 class="pristine-postcard-title">{{ post.title }}</h3>
            </a>
            <div class="pristine-postcard-description">
                {{ post.description }}
            </div>
            <div v-if="post.tags" class="pristine-postcard-tags">
                <div class="pristine-postcard-tags-item" v-for="tag of post.tags">
                    <svg t="1726300885369" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5198" width="200" height="200">
                        <path
                            d="M945.334 364.218l14.286-80c2.626-14.71-8.684-28.218-23.626-28.218h-149.62l29.246-163.782C818.246 77.508 806.936 64 791.994 64h-81.264a24 24 0 0 0-23.626 19.782L656.35 256H459.08l29.246-163.782C490.954 77.508 479.644 64 464.7 64h-81.264a24 24 0 0 0-23.626 19.782L329.056 256H170.864a24 24 0 0 0-23.626 19.782l-14.286 80C130.326 370.492 141.636 384 156.578 384h149.62L260.484 640H102.292a24 24 0 0 0-23.626 19.782l-14.286 80C61.754 754.492 73.064 768 88.006 768h149.62L208.38 931.782C205.754 946.492 217.064 960 232.006 960h81.264a24 24 0 0 0 23.626-19.782L367.652 768h197.268l-29.246 163.782C533.046 946.492 544.356 960 559.3 960h81.264a24 24 0 0 0 23.626-19.782L694.944 768h158.192a24 24 0 0 0 23.626-19.782l14.286-80c2.626-14.71-8.684-28.218-23.626-28.218h-149.62l45.714-256h158.192a24 24 0 0 0 23.626-19.782zM587.778 640h-197.268l45.714-256h197.268l-45.714 256z"
                            p-id="5199" fill="#8b8b92"></path>
                    </svg>
                    {{ tag }}
                </div>
            </div>
        </div>
    </a>
</template>

<style>
.pristine-postcard {
    padding-left: 15px;
    padding-right: 15px;
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

.pristine-postcard h3 {
    font-size: 1.25rem;
    /* 调整字体大小 */
    margin-top: 10px;
    color: #3451B2;
}

html.dark .pristine-postcard h3 {
    color: #A8B1FF;
}

.pristine-postcard .pristine-postcard-description {
    color: #7d7d7d;
}

html.dark .pristine-postcard .pristine-postcard-description {
    color: #c7c7c7;
}

.pristine-postcard-tags {
    display: flex;
    flex-wrap: wrap;
    /* 允许换行 */
    gap: 10px;
    /* 卡片之间的间距 */
}

.pristine-postcard-tags-item {
    display: inline-block;
    color: #8b8b92;
    font-weight: 1.5px;
}

.pristine-postcard-tags-item svg {
    display: inline-block;
    vertical-align: -0.15rem;

    height: 1em;
    /* 高度与字体大小相同 */
    width: 1em;
    /* 宽度与字体大小相同 */
}
</style>