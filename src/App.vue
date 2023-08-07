<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import SocialProfile from './components/layout/SocialProfile.vue'
</script>

<template>
  <div class="bg-dark bg-center min-h-screen p-16">
    <the-header></the-header>
    <div class="grid grid-cols-8 gap-8 pt-12">
      <social-profile class="col-start-1 col-end-3"></social-profile>
      <social-profile class="col-start-3 col-end-8"></social-profile>
      <social-profile class="col-span-1"></social-profile>
    </div>
    <!-- <nav>
      <RouterLink to=."/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
    <!-- <RouterView /> -->
  </div>
</template>

<style scoped></style>
