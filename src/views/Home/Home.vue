<script setup>
import { onMounted, ref, computed, watch, onActivated } from 'vue';
import HomeNavBar from './cpns/HomeNavBar.vue';
import HomeLocateBox from './cpns/HomeLocateBox.vue';
import BookingTimes from './cpns/BookingTimes.vue';
import BookingInfo from './cpns/BookingInfo.vue';
import RoomCategories from './cpns/RoomCategories.vue';
import RoomList from './cpns/RoomList.vue';
import useHomeStore from '@/stores/home';
import listenScroll from '@/hooks/listenScroll';
import BookingInfoBar from '@/components/BookingInfoBar.vue';

// References
const homeRef = ref(null);
const homeStore = useHomeStore();

// State and computed
const scrollTop = ref(0);
const clientHeight = ref(0);

const isShowBookingInfoBar = computed(() => {
  return scrollTop.value > clientHeight.value * 0.7;
});

// Initialize listenScroll when component is mounted
onMounted(() => {
  if (homeRef.value) {
    const { scrollTop: top, clientHeight: height } = listenScroll(() => {
      if (!homeStore.isFetching) {
        homeStore.fetchRoomList();
      }
    }, homeRef.value);

    // Watch the scrollTop ref for changes and update component state
    watch(() => top.value, (newValue) => {
      scrollTop.value = newValue;
    });

    watch(() => height.value, (newValue) => {
      clientHeight.value = newValue;
    });
  }
});

// when back to home page, keep its last time's scroll position
onActivated(() => {
  if (homeRef.value) {
    homeRef.value.scrollTo({
      top: scrollTop.value
    })
  }
})


</script>

<template>
  <div class="home" ref="homeRef">
    <HomeNavBar></HomeNavBar>
    <HomeLocateBox></HomeLocateBox>
    <BookingTimes></BookingTimes>
    <BookingInfo></BookingInfo>
    <RoomCategories></RoomCategories>
    <BookingInfoBar v-if="isShowBookingInfoBar"></BookingInfoBar>
    <RoomList></RoomList>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
}
</style>
