import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';

export default function listenScroll(reachBottomCB, elRef) {
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const clientHeight = ref(0);

  const scrollHandler = throttle(() => {
    scrollTop.value = elRef.scrollTop;
    scrollHeight.value = elRef.scrollHeight;
    clientHeight.value = elRef.clientHeight;

    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 8) {
      if (reachBottomCB) reachBottomCB();
    }
  }, 500);

  elRef.addEventListener("scroll", scrollHandler);

  onUnmounted(() => {
    elRef.removeEventListener("scroll", scrollHandler);
  });

  return { scrollTop, scrollHeight, clientHeight };
}
