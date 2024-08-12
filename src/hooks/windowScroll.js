import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

const scrollTop = ref(0)
const scrollHeight = ref(0)
const clientHeight = ref(0)

export default function windowScroll(reachBottomCB) {
  // listen window's scroll status
  const windowScrollHandler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 8) {
      if (reachBottomCB) reachBottomCB()
    }
  }, 500)
  
  onMounted(() => {
    window.addEventListener("scroll", windowScrollHandler)
  })

  // stop listening window's scroll
  onUnmounted(() => {
    window.removeEventListener("scroll", windowScrollHandler)
  })
  return { scrollTop, scrollHeight, clientHeight }
}