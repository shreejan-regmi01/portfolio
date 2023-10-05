<template>
  <div
    class="w-12 h-11 px-3 py-3 rounded-full bg-black grid gap-y-[5px] grid-cols-1 grid-rows-3"
    :class="classForHamburger"
    @click="isMenuOpen = !isMenuOpen"
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
      displayHamburgerAtBottom: false,
      isMenuOpen: false
    }
  },
  computed: {
    classForHamburger() {
      return {
        active: this.isMenuOpen,
        'fixed bottom-8 right-8 !bg-accent-blue animation-fade-in': this.displayHamburgerAtBottom
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
