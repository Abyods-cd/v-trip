<script setup>
import TabBar from './components/TabBar.vue';
import { useRoute } from 'vue-router';
import Loading from './components/Loading.vue';

const route = useRoute()


</script>


<template>
  <div class="app">
    <router-view></router-view>
    <TabBar v-if="!route.meta.hideTabBar"></TabBar>
    <Loading></Loading>
</div>
</template>


<style lang="less" scoped>

</style>