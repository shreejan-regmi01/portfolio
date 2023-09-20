<template>
  <base-container class="p-7 text-center h-min flex flex-col gap-5">
    <router-link to="/about">
      <navigation-link label="About">
        <i class="fa-regular fa-user fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/resume">
      <navigation-link label="Resume">
        <i class="fa-regular fa-file fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/experience">
      <navigation-link label="Experience" customClassForLabel="-ml-1">
        <i class="fa-solid fa-toolbox fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/contact">
      <navigation-link label="Contact">
        <i class="fa-regular fa-address-book fa-xl"></i>
      </navigation-link>
    </router-link>
    <navigation-link label="Testimonials" customClassForLabel="-ml-2">
      <i class="fa-regular fa-thumbs-up fa-xl"></i>
    </navigation-link>
  </base-container>
</template>

<script>
import NavigationLink from '../NavigationLink.vue'
import { RouterLink } from 'vue-router'
export default {
  components: {
    NavigationLink,
    RouterLink
  }
}
</script>

<style scoped>
.router-link-active > div {
  background-color: #1b74e4;
  color: white;
}
</style>
