<script setup>
import { useBookingStore } from '@/stores/booking';
import { useLocateStore } from '@/stores/locate'
const bookingStore = useBookingStore()
const locateStore = useLocateStore()

</script>


<template>
  <div class="search-result">
    search-result
    {{ bookingStore.startDateFormatted }}
    {{ bookingStore.endDateFormatted }}
    {{ $route.query.destination }}
    {{ locateStore.input }}
  </div>
</template>


<style lang="less" scoped></style>