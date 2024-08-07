<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import chinaProvinces from '@/assets/LocalData/ChinaProvinces';
import otherCountries from '@/assets/LocalData/OtherCountries';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
    <el-tab-pane label="China" name="first">
      <template v-for="(item, index) in chinaProvinces" :key="index">
        <div class="china-province">
          {{ item.name }}
        </div>
      </template>
    </el-tab-pane>
    <el-tab-pane label="Other Countries" name="second">
      <template v-for="(item, index) in otherCountries" :key="index">
        <div class="other-countries">
          {{ item.name }}
        </div>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.demo-tabs {
  padding: 5px;
}

.demo-tabs>.el-tabs__content {
  /* color: #6b778c; */
  color: #666;
  font-size: 14px;
  font-weight: 400;
  height: calc(100vh - 90px);
  overflow-y: scroll;
}

.china-province,
.other-countries {
  margin-bottom: 7px !important;
  cursor: pointer;
}


.el-tabs__item.is-active,
.el-tabs__item:hover {
  /* Change text color of active tab */
  color: var(--primary-color) !important;
}

.el-tabs__active-bar {
  background-color: var(--primary-color) !important;
}
</style>
