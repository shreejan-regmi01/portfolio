<template>
  <base-container class="py-16 px-14">
    <main-title headerTitle="About"></main-title>
    <p class="mt-6 text-secondary font-secondary text-base">
      I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
      and print media. I enjoy turning complex problems into simple, beautiful and intuitive
      designs.
    </p>
    <p class="mt-6 text-secondary font-secondary text-base">
      My aim is to bring across your message and identity in the most creative way. I created web
      design for many famous brand companies.
    </p>
    <secondary-title label="What I Do!" class="mt-6"></secondary-title>
  </base-container>
</template>

<script>
import MainTitle from '../components/MainTitle.vue'
import SecondaryTitle from '../components/SecondaryTitle.vue'
export default {
  components: {
    MainTitle,
    SecondaryTitle
  }
}
</script>
