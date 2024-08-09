<script setup>
import { ref } from 'vue';
import { useBookingStore } from '@/stores/booking'

const store = useBookingStore()
let roomNum = ref(store.roomNum)
let adultNum = ref(store.adultNum)
let childrenNum = ref(store.childrenNum)

</script>


<template>
  <div class="booking-info">
    <div class="hotel-info">Hotel Keywords
      <div class="mt-4">
        <el-input v-model="input3" style="max-width: 600px" placeholder="Please input" class="input-with-select">
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
    </div>
    <div class="guest">
      <div class="guest-title">
        Rooms and Guests
      </div>
      <div class="guest-info">
        <div class="room">
          <el-input-number v-model="roomNum" :min="1" :max="20" @change="store.setRoomNum" />
          <div class="input-text">rooms,</div>
        </div>
        <div class="adult">
          <el-input-number v-model="adultNum" :min="1" :max="20" @change="store.setAdultNum" />
          <div class="input-text">adults,</div>
        </div>

        <div class="children">
          <el-input-number v-model="childrenNum" :min="0" :max="20" @change="store.setChildrenNum" />
          <div class="input-text">children</div>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="less" scoped>
.booking-info {
  margin: 5px;
  border-radius: 5px;
  background-color: var(--bg-color);

  .guest-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .room,
    .adult,
    .children {
      display: flex;
      flex: 1;
      align-items: center;

      .el-input-number {
        min-width: 80px;
        flex: 1 1 80px;
      }

      .input-text {
        text-align: center;
        max-width: 60px;
        flex: 1 1 40px;
      }
    }
  }
}
</style>