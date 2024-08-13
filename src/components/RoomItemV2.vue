<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const numericCommentScore = computed(() => {
  return Number(props.itemData.commentScore);
})

const discount = computed(() => {
  return Number(props.itemData.productPrice) - Number(props.itemData.finalPrice)
})
</script>


<template>
  <div class="room-item-v2">
    <div class="item-inner">
      <div class="cover">
        <img :src="props.itemData.image.url" alt="cover-img" class="cover-img">
      </div>
      <div class="info">
        <el-rate v-model="numericCommentScore" disabled show-score text-color="#ff9900" score-template="{value} Points"
          size='large' class="rate" />
        <div class="price">
          <div class="final-price">
            Current Price: ${{ props.itemData.finalPrice }}
          </div>
          <div class="product-price">
            Original Price: ${{ props.itemData.productPrice }}
          </div>
          <div class="discount">
            <div class="discount-text">
              ${{ discount }} Off
            </div>
            <img src="../assets/image/home/discount.png" alt="discount" class="discount-img">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.room-item-v2 {
  cursor: pointer;
  width: 50%;
  position: relative;

  // background-color: red;
  &:hover {
    transform: scale(1.01);
    /* Makes the box grow */
  }

  .item-inner {
    margin: 5px;
    background-color: var(--bg-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100% - 2px;

    .cover {
      .cover-img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .info {
      // position: absolute;
      // bottom: 10%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .price {
        .final-price {
          color: var(--primary-color);
          font-size: 18px;
          font-weight: 600;
        }

        .product-price {
          color: #666;
          text-decoration: line-through;
        }

        .discount {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgb(242, 66, 66);
          font-weight: 600;
          font-size: 18px;

          .discount-img {
            width: 30%;
          }
        }
      }
    }

  }
}
</style>