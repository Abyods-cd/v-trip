<script setup>
import useHomeStore from '@/stores/home';
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import RoomItemV1 from '@/components/RoomItemV1.vue';
import RoomItemV2 from '@/components/RoomItemV2.vue';

const homeStore = useHomeStore()


onMounted(() => {
  homeStore.fetchRoomList()
})

function moreBtnClick() {
  homeStore.fetchRoomList()
}

const { roomList } = storeToRefs(homeStore)


</script>


<template>
  <div class="room-list">
    <h2 class="title">
      Top Picks
    </h2>
    <div class="list">
      <template v-for="(item, index) in roomList" :key="item.houseId">
        <RoomItemV1 v-if="item.discoveryContentType === 9" :itemData="item.data" class="list-item"></RoomItemV1>
        <RoomItemV2 v-else-if="item.discoveryContentType === 3" :itemData="item.data" class="list-item"></RoomItemV2>
      </template>
    </div>
    <button class="more-data" @click="moreBtnClick">
      more data
    </button>
  </div>
</template>


<style lang="less" scoped>
.room-list {
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 50px;

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>