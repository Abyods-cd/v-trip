<script setup>
import TabBar from './components/TabBar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()


</script>


<template>
  <div class="app">
    <router-view></router-view>
    <TabBar v-if="!route.meta.hideTabBar"></TabBar>
  </div>
</template>


<style lang="less" scoped></style>