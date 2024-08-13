<script setup>
import useHomeStore from '@/stores/home.js'
import { onMounted, computed, ref } from 'vue';
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()

onMounted(async () => {
  await homeStore.fetchCategoriesData();
});

// const categoriesData = computed(() => homeStore.roomCategories)
const { roomCategories: categoriesData } = storeToRefs(homeStore)

const categoriesTitle = [
  "New Deals",
  "Branded Stays",
  "Entire Place",
  "Easy Cooking",
  "Loft",
  "Serviced Apt.",
  "Villa"
]

function categoryClick(navigateUrl) {
  window.location.href = navigateUrl
}
</script>


<template>
  <div class="room-categories">
    <div v-if="categoriesData.length" class="categories">
      <div class="category" v-for="(category, index) in categoriesData" :key="category.id"
        @click="categoryClick(category.navigateUrl)">
        <img class="category-img" :src="category.pictureUrl">
        <div class="category-title">
          {{ categoriesTitle[index] }}
        </div>
      </div>


    </div>
    <!-- <div v-else>
      Loading categories...
    </div> -->
  </div>
</template>


<style lang="less" scoped>
.room-categories {
  margin: 10px 5px 5px 5px;

  .categories {
    width: 100vw;
    display: flex;
    overflow: auto;
    justify-content: space-between;

    .category {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 15px;

      .category-img {
        width: 45px;
        cursor: pointer;
      }

      .category-title {
        font-size: 16px;
        white-space: nowrap;
      }

      &:hover {
        color: var(--primary-color);
      }
    }

  }
}
</style>