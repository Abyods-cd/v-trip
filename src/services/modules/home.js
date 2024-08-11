import AxiosInstance from '@/services/request/index.js'

export function getRoomCategories() {
  return AxiosInstance.get('home/categories')
}

export function getRoomList(currentPage) {
  return AxiosInstance.get("home/houselist", {
    params: {
      page: currentPage
    }
  })
}