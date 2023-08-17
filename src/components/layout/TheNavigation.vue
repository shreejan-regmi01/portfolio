<template>
  <base-container class="p-7 text-center h-min flex flex-col gap-5">
    <navigation-link label="About" :active="true">
      <i class="fa-regular fa-user fa-xl"></i>
    </navigation-link>
    <navigation-link label="Resume">
      <i class="fa-regular fa-file fa-xl"></i>
    </navigation-link>
    <navigation-link label="Work">
      <i class="fa-solid fa-toolbox fa-xl"></i>
    </navigation-link>
    <navigation-link label="Contact">
      <i class="fa-regular fa-address-book fa-xl"></i>
    </navigation-link>
    <navigation-link label="Testimonials" customClassForLabel="-ml-2">
      <i class="fa-regular fa-thumbs-up fa-xl"></i>
    </navigation-link>
  </base-container>
</template>

<script>
import NavigationLink from '../NavigationLink.vue'
export default {
  components: {
    NavigationLink
  }
}
</script>

<style scoped>
.active {
  background-color: #1b74e4;
  color: white;
}
</style>
