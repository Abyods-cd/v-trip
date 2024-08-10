<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLocateStore } from '@/stores/locate';

const router = useRouter()
const store = useLocateStore()
const location = ref(store.input);

// Navigate to the manual country/city selection page
function locationSelectorClick() {
  router.push('/location-selector')
}

// Use OpenStreetMap's Nominatim API
function locateClick() {
  navigator.geolocation.getCurrentPosition(async res => {
    const { latitude, longitude } = res.coords;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      location.value = data.address.city || data.address.town || data.address.village || 'Unknown location';
      store.input = data.address.city || data.address.town || data.address.village || 'Unknown location';
    } catch (err) {
      console.log('Error fetching location', err);
    }
  }, err => {
    console.log('Error getting geolocation', err);
  });
}
</script>


<template>
  <div class="locate-box">
    <div class="locate" @click="locateClick">
      <div class="locate-text">Find my location</div>
      <img src="@/assets/image/home/locate.png" alt="locate-img" class="locate-img">
    </div>
    <div class="location" @click="locationSelectorClick">{{ location }}</div>

  </div>
</template>


<style lang="less" scoped>
.el-card {
  --el-card-padding: 5px
}

.locate-box {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
  margin: 5px;
  background-color: #F8F8F8;
  border-radius: 5px;
  height: 30px;

  .location {
    cursor: pointer;
    flex: 0 0 auto;
    color: var(--primary-color);
  }

  .locate {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .locate-img {
      width: 25px;
      margin-left: 5px;
    }
  }
}
</style>