<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeLocateBox from './cpns/HomeLocateBox.vue';
import BookingTimes from './cpns/BookingTimes.vue';
import BookingInfo from './cpns/BookingInfo.vue';
import RoomCategories from './cpns/RoomCategories.vue';
import RoomList from './cpns/RoomList.vue';
import useHomeStore from '@/stores/home';
import windowScroll from '@/hooks/windowScroll'
import { computed, ref } from 'vue'
import BookingInfoBar from '@/components/BookingInfoBar.vue'

const { scrollTop, clientHeight } = windowScroll()

const homeStore = useHomeStore()
// call back
windowScroll(() => {
  if (!homeStore.isFetching) {
    homeStore.fetchRoomList();
  }
})

const isShowBookingInfoBar = computed(() => {
  return scrollTop.value > clientHeight.value * 0.7
})

</script>


<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <HomeLocateBox></HomeLocateBox>
    <BookingTimes></BookingTimes>
    <BookingInfo></BookingInfo>
    <RoomCategories></RoomCategories>
    <BookingInfoBar v-if="isShowBookingInfoBar"></BookingInfoBar>
    <RoomList></RoomList>
  </div>
</template>


<style lang="less" scoped></style>