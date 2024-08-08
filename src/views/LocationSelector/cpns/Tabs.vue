<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import chinaProvinces from '@/assets/LocalData/ChinaProvinces';
import otherCountries from '@/assets/LocalData/OtherCountries';
import { useLocateStore } from '@/stores/locate';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event)
}

const chinaIndexList = Object.keys(chinaProvinces)
const otherIndexList = Object.keys(otherCountries)

const hotProvinces = chinaProvinces['*']
const hotCountries = otherCountries['*']

const store = useLocateStore()
function setInput(value) {
  store.setInput(value)
}

function btnClick(btnName) {
  console.log(btnName);
  setInput(btnName)
}

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
    <!-- China's provinces list -->
    <el-tab-pane label="China" name="first">
      <van-index-bar :index-list="chinaIndexList">
        <template v-for="(provinces, provincesLetter, provincesIndex) in chinaProvinces" :key="provincesIndex">
          <!-- Display hot China's provinces -->
          <template v-if="String(provincesLetter) === '*'">
            <van-index-anchor index="Hot Cities" />
            <div class="hot-provinces-list">
              <template v-for="(province, index) in hotProvinces" :key="'hot-' + index">
                <el-button class="hot-provinces" @click="btnClick(province)">{{ province }}</el-button>
              </template>
            </div>
          </template>
          <!-- Display all China's provinces -->
          <template v-else>
            <van-index-anchor :index="provincesLetter" />
            <template v-for="(province, provinceIndex) in provinces" :key="provinceIndex" class="china-province">
              <van-cell :title="province['name'] ? province['name'] : province" @click="btnClick(province['name'])" />
            </template>
          </template>
        </template>
      </van-index-bar>
    </el-tab-pane>
    <!-- Other countries-->
    <el-tab-pane label="Other Countries" name="second">
      <van-index-bar :index-list="otherIndexList">
        <template v-for="(otherCountriesList, otherCountriesLetter, otherCountriesIndex) in otherCountries"
          :key="otherCountriesIndex">
          <!-- Display hot countries -->
          <template v-if="String(otherCountriesLetter) === '*'">
            <van-index-anchor index="Hot Countries" />
            <div class="hot-countries-list">
              <template v-for="(hotCountry, countryIndex) in hotCountries" :key="'hot-' + countryIndex">
                <el-button class="hot-countries" @click="btnClick(hotCountry)">{{ hotCountry }}</el-button>
              </template>
            </div>
          </template>
          <!-- Display all other countries -->
          <template v-else>
            <van-index-anchor :index="otherCountriesLetter" />
            <template v-for="(country, countryIndex) in otherCountriesList" :key="countryIndex" class="other-countries">
              <van-cell :title="country['name'] ? country['name'] : country" @click="btnClick(country['name'])" />
            </template>
          </template>
        </template>
      </van-index-bar>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="less">
.demo-tabs {
  padding: 5px;
  position: fixed;
  top: 32px;
  width: 100%;
}

.demo-tabs>.el-tabs__content {
  /* color: #6b778c; */
  color: #666;
  font-size: 14px;
  font-weight: 400;
  height: calc(100vh - 90px);
  overflow-y: auto;
}

.el-tabs__item {
  cursor: pointer;
  color: #444;
}

.china-province,
.other-countries {
  margin-bottom: 7px !important;
  cursor: pointer;
}

.hot-provinces-list,
.hot-countries-list {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 0.5px solid #E4E7ED;
  padding-bottom: 10px;
}

.el-button.hot-provinces,
.el-button.hot-countries {
  flex: 1 1 70px;
  margin: 10px 10px 0 10px;
  height: auto;
  background-color: #FCF5F1;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-color: transparent;
  color: #666;
  font-weight: 400;
  font-size: 14px;

  padding: 6px;

  .van-cell__title {
    text-align: center;
  }
}

.china-province:hover,
.other-countries:hover {
  color: var(--primary-color) !important
}

.van-index-anchor,
.van-index-bar__index--active {
  color: var(--primary-color);
}

.van-cell {
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
