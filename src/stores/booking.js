import { defineStore } from "pinia";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    dates: [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))]
  }),
  getters: {
    stayDays: (state) => {
      const [startDate, endDate] = state.dates;
      if (startDate && endDate && endDate > startDate) {
        const timeDiff = endDate.getTime() - startDate.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      } else {
        return 0;
      }
    }
  },
  actions: {
    setDates(newDates) {
      this.dates = newDates;
    }
  }
})