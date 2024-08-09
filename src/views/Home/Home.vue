<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeLocateBox from './cpns/HomeLocateBox.vue';
import BookingTimes from './cpns/BookingTimes.vue';
import BookingInfo from './cpns/BookingInfo.vue';
</script>


<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <HomeLocateBox></HomeLocateBox>
    <BookingTimes></BookingTimes>
    <BookingInfo></BookingInfo>
  </div>
</template>


<style lang="less" scoped></style>