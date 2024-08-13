<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
function onClickLeft() {
  router.back()
}

const props = defineProps({
  navTitle: {
    type: String,
    default: "V Trip"
  }
})
</script>


<template>
  <div class="nav">
    <van-nav-bar :title="navTitle" left-text="Back" left-arrow @click-left="onClickLeft" class="nav" />
  </div>
</template>


<style lang="less" scoped>
.nav{
  font-size: 22px;
}
</style>