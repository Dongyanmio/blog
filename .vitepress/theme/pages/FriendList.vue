<script setup lang="ts">
import FriendCard from '../components/FriendCard.vue';

type FriendInfo = {
    name: string;
    description: string;
    avatar: string;
    url: string;
}

defineProps({
    friendList: {
        type: Array as () => FriendInfo[],
        required: true
    }
})


</script>

<template>
    <div class="pristine-friendlist">
        <div v-for="item in friendList">
            <FriendCard :name="item.name" :description="item.description" :avatar="item.avatar" :url="item.url" />
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
    justify-content: center;
}
</style>