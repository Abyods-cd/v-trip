import { defineStore } from "pinia";
import { getRoomCategories, getRoomList } from '@/services/modules/home.js'

const useHomeStore = defineStore("home", {
  state: () => ({
    roomCategories: [],
    roomList: [],
    currentPage: 1,
    isFetching: false
  }),
  actions: {
    async fetchCategoriesData() {
      const res = await getRoomCategories().then(data => {
        this.roomCategories = data.data
      }).catch(err => {
        console.log(err);
      })
    },
    async fetchRoomList() {
      if (this.isFetching) return;
      this.isFetching = true;
      await getRoomList(this.currentPage).then((res) => {
        this.roomList.push(...res.data)
        this.currentPage++
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        this.isFetching = false
      })
    }
  }
})

export default useHomeStore