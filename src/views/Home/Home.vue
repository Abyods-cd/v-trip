<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeLocateBox from './cpns/HomeLocateBox.vue';
import BookingTimes from './cpns/BookingTimes.vue';
import BookingInfo from './cpns/BookingInfo.vue';
import RoomCategories from './cpns/RoomCategories.vue';
</script>


<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <HomeLocateBox></HomeLocateBox>
    <BookingTimes></BookingTimes>
    <BookingInfo></BookingInfo>
    <RoomCategories></RoomCategories>
  </div>
</template>


<style lang="less" scoped></style>