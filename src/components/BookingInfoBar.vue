<script setup>
import { useBookingStore } from '@/stores/booking'

const bookingStore = useBookingStore()

</script>


<template>
  <div class="booking-info-bar">
    <div class="inner">
      <div class="date">
        <div class="check-in">Check-in: {{ bookingStore.startDateFormatted }}</div>
        <div class="check-out">Check-out: {{ bookingStore.endDateFormatted }}</div>
      </div>
      <div class="input mt-4">
        <el-input v-model="bookingStore.hotelKeywords" placeholder="Hotel keywords" class="input-with-select">
        </el-input>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.booking-info-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 40px;
  padding: 5px;
  z-index: 2;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;

    .date {
      color: #555;
    }

    .input {
      flex: 1;
      margin-left: 5px;

      ::v-deep .el-input {
        --el-input-focus-border-color: var(--primary-color) !important;
      }
    }
  }
}
</style>