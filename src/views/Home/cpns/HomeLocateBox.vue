<script setup>

</script>


<template>
  <div class="locate-box">
    <div class="city">Yunnan</div>
    <div class="locate">
      <div class="locate-text">Find my location</div>
      <img src="@/assets/image/home/locate.png" alt="locate-img" class="locate-img">
    </div>
  </div>
</template>


<style lang="less" scoped>
.locate-box {
  display: flex;
  justify-content: space-between;
  padding: 5px;

  .locate {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .locate-img {
    width: 25px;
    margin-left: 5px;
  }
}
</style>