import { defineStore } from "pinia";
import { getRoomCategories, getRoomList } from '@/services/modules/home.js'

const useHomeStore = defineStore("home", {
  state: () => ({
    roomCategories: [],
    roomList: [],
    currentPage: 1
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
      const res = await getRoomList(this.currentPage)
      this.roomList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore