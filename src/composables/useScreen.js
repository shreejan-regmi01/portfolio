import { ref } from 'vue'

export function useScreen() {
  const sm = '768'
  const screenWidth = ref(document.documentElement.clientWidth)

  function isMobile() {
    return screenWidth.value <= sm
  }

  return {
    isMobile
  }
}
