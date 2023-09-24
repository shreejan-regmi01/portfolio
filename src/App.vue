<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import SocialProfile from './components/layout/SocialProfile.vue'
import TheNavigation from './components/layout/TheNavigation.vue'
</script>

<template>
  <!-- add bg-dark -->
  <div class="bg-dark bg-no-repeat bg-cover min-h-screen p-4 xl:p-16 xl:pr-14 pt-8">
    <the-header></the-header>
    <div class="grid pt-14 gap-6 xl:grid-cols-8 xl:gap-8 xl:pt-36">
      <social-profile class="xl:col-start-1 xl:col-end-3"></social-profile>
      <router-view class="xl:col-start-3 xl:col-end-8"></router-view>
      <the-navigation></the-navigation>
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
