<script setup>
import useMainStore from '@/stores/main';
import { storeToRefs } from 'pinia';
const { isLoading } = storeToRefs(useMainStore())
</script>


<template>
  <div class="loading" v-if="isLoading">
    <img src="@/assets/image/home/loading.gif" alt="loading-img" class="loading-img">
  </div>
</template>


<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .2);
  z-index: 3;

  .loading-img {
    width: 25%;
  }
}
</style>