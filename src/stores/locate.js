import { defineStore } from "pinia";
import { computed } from "vue";

export const useLocateStore = defineStore("locate", {
  state: () => ({
    input: 'Yunnan'
  }),
  actions: {
    setInput(value) {
      this.input = value
    }
  }
})

export default useLocateStore