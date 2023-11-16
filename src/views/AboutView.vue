<template>
  <base-container class="py-8 px-6 xl:pt-16 xl:pb-8 xl:px-14">
    <main-title headerTitle="About"></main-title>
    <p class="mt-6 text-secondary font-secondary text-base w-[90%]">
      I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
      and print media. I enjoy turning complex problems into simple, beautiful and intuitive
      designs.
    </p>
    <p class="mt-6 text-secondary font-secondary text-base w-[90%]">
      My aim is to bring across your message and identity in the most creative way. I created web
      design for many famous brand companies.
    </p>
    <secondary-title label="What I Do!" class="mt-8"></secondary-title>
    <div class="grid mt-7 gap-6 xl:grid-cols-2">
      <skills-card
        title="Functional Testing"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, esse tempora
          officiis rem"
      >
        <i class="fa-solid fa-bug-slash fa-2xl text-purple-500"></i>
      </skills-card>
      <skills-card
        title="Functional Testing"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, esse tempora
          officiis rem"
      >
        <i class="fa-solid fa-bug-slash fa-2xl text-purple-500"></i>
      </skills-card>
      <skills-card
        title="Functional Testing"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, esse tempora
          officiis rem"
      >
        <i class="fa-solid fa-bug-slash fa-2xl text-purple-500"></i>
      </skills-card>
      <skills-card
        title="Functional Testing"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem, esse tempora
          officiis rem"
      >
        <i class="fa-solid fa-bug-slash fa-2xl text-purple-500"></i>
      </skills-card>
    </div>
    <copyright-text></copyright-text>
  </base-container>
</template>

<script>
import SecondaryTitle from '../components/SecondaryTitle.vue'
import SkillsCard from '../components/SkillsCard.vue'
export default {
  components: {
    SecondaryTitle,
    SkillsCard
  },
  head() {
    return {
      title: 'Portfolio | Shreejan Regmi'
    }
  }
}
</script>
