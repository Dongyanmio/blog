<script setup>
defineProps({
    friendList: Array
})
</script>

<template>
    <div class="pristine-friendlist">
        <div v-for="item in friendList">
            <a :href="item.link" style="text-decoration: none;">
                <div class="pristine-friendlist-item">
                    <div class="pristine-friendcard-avatar"><img :src="item.avatar" :alt="item.name" class="pristine-friendcard-avatar"
                            loading="lazy" referrerpolicy="no-referrer"></div>
                    <div class="pristine-friendcard-name">{{ item.name }}</div>
                    <div class="pristine-friendcard-description">{{ item.description }}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style>
.pristine-friendlist {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    /* 允许换行 */
    gap: 10px;
    /* 卡片之间的间距 */
}

.pristine-friendlist-item {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    width: 300px;
    height: 100px;
    border: rgba(30, 41, 59, calc(.1/ 1)) solid 1px;
    border-radius: 10px;
    background-color: #ffffff;
}

html.dark .pristine-friendlist-item {
    border: #3d3d3f solid 1px;
    border-radius: 10px;
    background-color: #1b1b1f
}

.pristine-friendcard-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    grid-area: 2 / 2 / 8 / 8;
}

.pristine-friendcard-name {
    grid-area: 2 / 9 / 4 / 24;
    color: black;
}

html.dark .pristine-friendcard-name {
    color: white;
}

.pristine-friendcard-description {
    grid-area: 4 / 9 / 8 / 24;
    color: #3c3c43cc;
}

html.dark .pristine-friendcard-description {
    color: #c5c7cc;
}
</style>