<template>
  <div
    v-if="isNavigationDrawerOpen"
    class="fixed left-0 top-0 w-screen h-screen bg-gray-950/70"
    @click="$emit('backdropClicked')"
  ></div>
  <base-container
    class="text-center flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:w-[60vw] max-lg:h-screen max-lg:rounded-none max-lg:pt-[20vh] xl:flex xl:p-7 xl:h-min xl:gap-5"
    :class="{ hidden: !isNavigationDrawerOpen }"
  >
    <router-link to="/about">
      <navigation-link label="About" class="max-lg:pl-[1px]">
        <i class="fa-regular fa-user fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/resume">
      <navigation-link label="Resume" class="max-lg:pl-1">
        <i class="fa-regular fa-file fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/experience">
      <navigation-link label="Experience" class="xl:-ml-1">
        <i class="fa-solid fa-toolbox fa-xl"></i>
      </navigation-link>
    </router-link>
    <router-link to="/contact">
      <navigation-link label="Contact">
        <i class="fa-regular fa-address-book fa-xl"></i>
      </navigation-link>
    </router-link>
    <navigation-link label="Testimonials" class="xl:-ml-2">
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
  },
  inject: ['isNavigationDrawerOpen'],
  emits: ['backdropClicked']
}
</script>

<style scoped>
.router-link-active > div {
  background-color: #1b74e4;
  color: white;
}
</style>
