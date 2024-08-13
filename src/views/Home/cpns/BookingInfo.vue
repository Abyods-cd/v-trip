<script setup>
import { ref } from 'vue';
import { useBookingStore } from '@/stores/booking'
import { Search } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';
import { useLocateStore } from '@/stores/locate';
const router = useRouter()

const bookingStore = useBookingStore()
let roomNum = ref(bookingStore.roomNum)
let adultNum = ref(bookingStore.adultNum)
let childrenNum = ref(bookingStore.childrenNum)

const locateStore = useLocateStore()
function searchClick() {
  router.push({
    path: '/search-result',
    query: {
      startDate: bookingStore.dates[0],
      endDate: bookingStore.dates[1],
      destination: locateStore.input
    }
  })
}
</script>


<template>
  <div class="booking-info">
    <!-- let users input hotel keywords(if have) -->
    <div class="hotel-info">Hotel Keywords
      <div class="mt-4" style="display: block;">
        <el-input v-model="bookingStore.hotelKeywords" style="width: 100%" placeholder="Please input"
          class="input-with-select">
        </el-input>
      </div>
    </div>
    <div class="guest">
      <!-- let users input numbers of rooms and guests -->
      <div class="guest-title">
        Rooms and Guests
      </div>
      <div class="guest-info">
        <div class="room">
          <el-input-number v-model="roomNum" :min="1" :max="20" @change="bookingStore.setRoomNum" />
          <div class="input-text">rooms,</div>
        </div>
        <div class="adult">
          <el-input-number v-model="adultNum" :min="1" :max="20" @change="bookingStore.setAdultNum" />
          <div class="input-text">adults,</div>
        </div>

        <div class="children">
          <el-input-number v-model="childrenNum" :min="0" :max="20" @change="bookingStore.setChildrenNum" />
          <div class="input-text">children</div>
        </div>
      </div>
    </div>

    <!-- Search btn -->
    <el-button size="large" :icon="Search" class="search" @click="searchClick">Search</el-button>
  </div>
</template>


<style lang="less" scoped>
.booking-info {
  margin: 5px;
  border-radius: 5px;
  background-color: var(--bg-color);

  ::v-deep .el-input,
  .el-input-number,
  .el-input__wrapper {
    --el-input-focus-border-color: var(--primary-color) !important;
  }

  .mt-4 {
    position: static;
    padding: 0;
  }

  .guest-info {
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    width: 100%;

    .room,
    .adult,
    .children {
      display: flex;
      flex: 1;
      justify-content: start;
      align-items: center;

      .el-input-number {
        // min-width: 60px;
        flex: 1 1 20%;
      }

      .input-text {
        text-align: center;
        // max-width: 60px;
        flex: 1;
      }
    }
  }

  .search {
    color: #eeeeee;
    background-color: #FEAF3D;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    border-color: #FEAF3D;
  }

  .el-button:hover {
    background-color: var(--primary-color);
  }

  .el-button:active {
    border-color: var(--primary-color);
  }
}
</style>