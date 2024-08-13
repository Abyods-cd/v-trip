<script setup>
import { useBookingStore } from '@/stores/booking';
import { useLocateStore } from '@/stores/locate'
import Nav from '@/components/Nav.vue'
const bookingStore = useBookingStore()
const locateStore = useLocateStore()

</script>


<template>
  <div class="search-result">
    <Nav navTitle="Search Result"></Nav>
    {{ bookingStore.startDateFormatted }}
    {{ bookingStore.endDateFormatted }}
    {{ $route.query.destination }}
    {{ locateStore.input }}
  </div>
</template>


<style lang="less" scoped></style>