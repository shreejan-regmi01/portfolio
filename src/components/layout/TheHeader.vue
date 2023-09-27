<template>
  <header class="w-40 xl:w-60 ml-5">
    <img :src="logo" alt="" />
  </header>
</template>

<script>
import logo from '../../assets/logo-transparent.svg'
export default {
  data() {
    return {
      logo
    }
  }
}
</script>
