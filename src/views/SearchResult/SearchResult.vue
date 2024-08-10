<script setup>
import { useBookingStore } from '@/stores/booking';
const bookingStore = useBookingStore()

</script>


<template>
  <div class="search-result">
    search-result
    {{ bookingStore.startDateFormatted }}
    {{ bookingStore.endDateFormatted }}
    {{ $route.query.destination }}
  </div>
</template>


<style lang="less" scoped></style>