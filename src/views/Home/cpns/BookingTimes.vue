<script setup>
import { ref, onMounted, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useBookingStore } from '@/stores/booking'

const store = useBookingStore()
const datesRef = ref(store.dates || [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))]);

// Watch for changes in datesRef and update the store
watch(datesRef, (newDates) => {
  if (newDates) {
    store.setDates(newDates);
  }
}, { immediate: true });


// Initialize dates on mounted
onMounted(() => {
  if (!store.dates || store.dates.length === 0) {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    store.setDates([startDate, endDate]);
  }
});

</script>


<template>
  <div class="booking-times" shadow="hover">
    <div class="booking-text">
      <span class="l-text">
        Select Dates
      </span>
      <span class="r-text">
        Stay for <span class="stay-days">{{ store.stayDays }}</span> nights
      </span>
    </div>
    <div class="calendar">
      <VueDatePicker v-model="datesRef" range />
    </div>

  </div>
</template>


<style lang="less" scoped>
.el-card {
  --el-card-padding: 5px
}

.booking-times {
  margin: 5px;
  background-color: #F8F8F8;
  border-radius: 5px;

  .booking-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    .stay-days {
      color: var(--primary-color);
      font-weight: 500;
    }
  }

  .calendar {
    font-size: 10px !important;
  }
}
</style>