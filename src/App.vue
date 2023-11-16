<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import TheHeader from './components/layout/TheHeader.vue'
import SocialProfile from './components/layout/SocialProfile.vue'
import TheNavigation from './components/layout/TheNavigation.vue'

useHead({
  meta: [
    {
      name: 'description',
      content:
        'Professional software automation QA engineer based in Nepal with over 2 years experience, specializing in automation and manual testing. Proven expertise with tools like Cypress, Playwright ensuring robust and high-quality software solutions.'
    }
  ]
})

import { provide, ref } from 'vue'
const isNavigationDrawerOpen = ref(false)
provide('isNavigationDrawerOpen', isNavigationDrawerOpen)

function updateNavigationDrawerState() {
  isNavigationDrawerOpen.value = !isNavigationDrawerOpen.value
}
</script>

<template>
  <div class="bg-dark bg-no-repeat bg-cover min-h-screen p-4 xl:p-16 xl:pr-14 xl:pt-8">
    <the-header @hamburger-clicked="updateNavigationDrawerState"></the-header>
    <div class="grid pt-14 gap-6 xl:grid-cols-8 xl:gap-8 xl:pt-36">
      <social-profile class="xl:col-start-1 xl:col-end-3"></social-profile>
      <router-view class="xl:col-start-3 xl:col-end-8"></router-view>
      <the-navigation
        @backdrop-clicked="updateNavigationDrawerState"
        @navigation-changed="updateNavigationDrawerState"
      ></the-navigation>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.main-bg-position {
  background-position: -18rem -24rem;
}
</style>
