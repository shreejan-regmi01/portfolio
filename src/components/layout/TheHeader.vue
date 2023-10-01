<template>
  <header class="ml-5 flex justify-between items-center">
    <div class="w-40 xl:w-60">
      <img :src="logo" alt="" />
    </div>
    <the-hamburger class="xl:hidden"></the-hamburger>
  </header>
</template>

<script>
import logo from '../../assets/logo-transparent.svg'
import TheHamburger from './TheHamburger.vue'
export default {
  data() {
    return {
      logo
    }
  },
  components: {
    TheHamburger
  }
}
</script>
