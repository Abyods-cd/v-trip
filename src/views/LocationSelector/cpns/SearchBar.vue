<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { useLocateStore } from '@/stores/locate'

const store = useLocateStore()
const inputValue = computed({
  get: () => store.input,
  set: (value) => store.setInput(value)
})

const select = ref('')

const router = useRouter()
function confirmClick() {
  router.push('/home')
}
</script>

<template>
  <div class="mt-4">
    <div class="search-container">
      <el-input v-model="inputValue" placeholder="Please input" class="input-with-select" clearable>
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 85px;">
            <el-option label="China's Provinces" value="1" />
            <el-option label="Other Countries" value="2" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" class="custom-button" style="width: 50px;" />
        </template>
      </el-input>
      <button class="confirm-search" @click="confirmClick">Confirm</button>
    </div>
  </div>
</template>



<style>
.mt-4 {
  padding: 5px;
  background-color: #fff !important;
  height: 32px;
  position: fixed;
  top: 0;
  width: 100%;
}

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

.el-input__inner {
  color: #333 !important;
  font-weight: 500;
}

.el-input__inner::placeholder {
  color: #666 !important;
  /* Change the placeholder text color */
}

.el-select__placeholder {
  color: var(--primary-color) !important;
  /* Change the placeholder text color */
}

.custom-button {
  color: var(--primary-color) !important;
  transform: scale(1.2);
}

.search-container {
  position: relative;
  display: flex;
  /* Positioning context for absolute children */
}

.input-with-select {
  flex: 1;
  min-width: 200px;
  max-width: calc(100% - 80px);
}

.confirm-search {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  color: var(--primary-color);
  width: 70px;
  height: 32px;
  font-size: 16px;
  font-weight: 400 !important;
  border: 1px solid #DCDFE6;
  border-radius: 10%;
  cursor: pointer;
  background-color: #F5F7FA;
}
</style>
