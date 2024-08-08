import { defineStore } from "pinia";
import { computed } from "vue";

export const useLocateStore = defineStore("locate", {
  state: () => ({
    input: ''
  }),
  actions: {
    setInput(value) {
      this.input = value
    }
  }
})