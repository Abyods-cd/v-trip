import { defineStore } from "pinia";
import { getRoomCategories } from '@/services/modules/home.js'

const useHomeStore = defineStore("home", {
  state: () => ({
    roomCategories: []
  }),
  actions: {
    async fetchCategoriesData() {
      const res = await getRoomCategories().then(data => {
        this.roomCategories = data.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
})

export default useHomeStore