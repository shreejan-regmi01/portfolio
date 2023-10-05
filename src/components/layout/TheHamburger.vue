<template>
  <div
    class="w-12 h-11 px-3 py-3 rounded-full bg-black grid gap-y-[5px] grid-cols-1 grid-rows-3"
    :class="classForBottomHamburger"
    ref="hamburger"
  >
    <div class="h-[3px] bg-white rounded-sm"></div>
    <div class="h-[3px] bg-white rounded-sm"></div>
    <div class="h-[3px] bg-white rounded-sm"></div>
  </div>
</template>

<script>
//todo: move hamburger to bottom on scroll ref: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
import { useScreen } from '../../composables/useScreen'
export default {
  data() {
    return {
      displayHamburgerAtBottom: false
    }
  },
  computed: {
    classForBottomHamburger() {
      return this.displayHamburgerAtBottom
        ? `fixed bottom-8 right-8 !bg-accent-blue animation-fade-in`
        : null
    }
  },
  mounted() {
    if (this.isMobile()) {
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 85) {
          return (this.displayHamburgerAtBottom = true)
        }
        return (this.displayHamburgerAtBottom = false)
      })
    }
  },
  setup() {
    const { isMobile } = useScreen()
    return {
      isMobile
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animation-fade-in {
  animation-name: fadeIn;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
}
</style>
