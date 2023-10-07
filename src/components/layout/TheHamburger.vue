<template>
  <div
    class="w-12 h-11 px-3 py-3 rounded-full bg-black grid gap-y-[5px] grid-cols-1 grid-rows-3 z-30"
    :class="classForHamburger"
    @click="$emit('hamburgerClicked')"
    ref="hamburger"
  >
    <div class="h-[3px] bg-white rounded-sm bar"></div>
    <div class="h-[3px] bg-white rounded-sm bar"></div>
    <div class="h-[3px] bg-white rounded-sm bar"></div>
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
    classForHamburger() {
      return {
        active: this.isNavigationDrawerOpen,
        'fixed bottom-8 right-8 animation-fade-in': this.displayHamburgerAtBottom,
        '!bg-accent-blue': this.displayHamburgerAtBottom && !this.isNavigationDrawerOpen
      }
    }
  },
  mounted() {
    if (this.isMobile()) {
      window.addEventListener('scroll', () => {
        this.displayHamburgerAtBottom = document.documentElement.scrollTop > 85
      })
    }
  },
  setup() {
    const { isMobile } = useScreen()
    return {
      isMobile
    }
  },
  inject: ['isNavigationDrawerOpen'],
  emits: ['hamburgerClicked']
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

.active > .bar:nth-child(1) {
  transform-origin: top left;
  transform: rotate(45deg) translate(3.5px, -3px);
  transition: 0.5s;
}
.active > .bar:nth-child(2) {
  background-color: transparent;
  transition: 0.5s;
}
.active > .bar:nth-child(3) {
  transform-origin: bottom left;
  transform: rotate(-45deg) translate(3px, 3px);
  transition: 0.5s;
}

.bar {
  transition: 0.5s;
}
</style>
