import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isLoading: false
  })
})

export default useMainStore