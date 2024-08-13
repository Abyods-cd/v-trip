<script setup>
import useHomeStore from '@/stores/home';
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import RoomItemV1 from '@/components/RoomItemV1.vue';
import RoomItemV2 from '@/components/RoomItemV2.vue';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()

onMounted(() => {
  homeStore.fetchRoomList()
})

const { roomList } = storeToRefs(homeStore)

const router = useRouter()
function listItemClick(item) {
  router.push('/room-detail/' + item.houseId)
}

</script>


<template>
  <div class="room-list">
    <h2 class="title">
      Top Picks
    </h2>
    <div class="list">
      <template v-for="(item, index) in roomList" :key="item.houseId">
        <RoomItemV1 v-if="item.discoveryContentType === 9" :itemData="item.data" class="list-item"
          @click="listItemClick(item.data)"></RoomItemV1>
        <RoomItemV2 v-else-if="item.discoveryContentType === 3" :itemData="item.data" class="list-item"
          @click="listItemClick(item.data)"></RoomItemV2>
      </template>
    </div>
  </div>
</template>


<style lang="less" scoped>
.room-list {
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 50px;

  .title {
    font-size: 19px;
    font-weight: 500;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>