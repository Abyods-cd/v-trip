<script setup>
import tabbarData from '@/assets/LocalData/TabBar'
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import getImageURL from '@/utils/getLocalImage'

// use router
const router = useRouter()

// select icon which status is active
const currentIndex = ref(0)

// click icon to add path and change active icon's image
function itemClick(item, index) {
  router.push(item.path)
  currentIndex.value = index
}

// watch currentIndex's change caused by route change
const route = useRoute()
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === route.path)
  if (index === -1) return
  currentIndex.value = index
})

</script>


<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tabbar-item" @click="itemClick(item, index)" :class="{ active: currentIndex === index }">
        <img v-if="currentIndex === index" :src="getImageURL(item.iconActiveURL)" alt="tabbar-img" class="tabbar-img">
        <img v-else :src="getImageURL(item.iconURL)" alt="tabbar-img" class="tabbar-img">
        <div class="tabbar-text">
          {{ item.iconText }}
        </div>
      </div>

    </template>
  </div>
</template>


<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-top: 1px solid var(--primary-color);
  cursor: pointer;
  background-color: #fff;
  font-size: 20px;

  .tabbar-item {
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    &.active {
      color: var(--primary-color);
    }

    .tabbar-img {
      width: 30px;
    }
  }
}
</style>