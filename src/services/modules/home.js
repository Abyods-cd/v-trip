import AxiosInstance from '@/services/request/index.js'

export function getRoomCategories() {
  return AxiosInstance.get('/home/categories')
}