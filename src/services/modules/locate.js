import AxiosInstance from '@/services/request/index.js'

export default function getAllCity() {
  return AxiosInstance.get('city/all')
}
