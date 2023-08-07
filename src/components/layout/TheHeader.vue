<template>
  <header class="w-64">
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
