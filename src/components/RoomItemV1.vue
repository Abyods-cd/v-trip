<script setup>
import { defineProps } from 'vue';
import { ref, computed } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const numericCommentScore = computed(() => {
  return Number(props.itemData.commentScore);
})

</script>


<template>
  <div class="room-item-v1">
    <div class="item-inner">
      <div class="cover">
        <img :src="props.itemData.image.url" alt="cover-img" class="cover-img">
      </div>
      <div class="info">
        <el-rate v-model="numericCommentScore" disabled show-score text-color="#fff" score-template="{value} "
          class="rate" size='large' />
        <div class="price">
          ${{ props.itemData.finalPrice }}
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.room-item-v1 {
  cursor: pointer;
  width: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
    /* Makes the box grow */
  }


  .item-inner {
    position: relative;
    margin: 5px;

    .cover {
      .cover-img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .info {
      position: absolute;
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .rate {
        flex: 1 1 auto;
        // white-space: nowrap;
        margin-bottom: 3px;
      }

      .price {
        flex: 1 1 auto;
        text-align: right;
        color: #fff;
        font-size: 17px;
        font-weight: 600;
        margin-right: 2px;
      }
    }

  }
}
</style>