<template>
  <base-container class="py-8 px-6 xl:pt-16 xl:pb-8 xl:px-14">
    <main-title headerTitle="About"></main-title>
    <p class="mt-6 text-secondary font-secondary text-base w-[90%]">
      I'm an experienced automation QA Engineer based in Nepal with over 2 years of industry
      experience. I have been involved in automation and manual testing of enterprise web
      applications in the FinTech industry. I have helped companies adopt automation testing to
      their development workflow from scratch.
    </p>
    <p class="mt-6 text-secondary font-secondary text-base w-[90%]">
      Having remotely collaborated with international firms, I have worked alongside distributed
      teams across Nepal, India, Phillipines, USA and Australia.
    </p>
    <secondary-title label="What I Do!" class="mt-8"></secondary-title>
    <div class="grid mt-7 gap-6 xl:grid-cols-2">
      <skills-card
        title="Automation Testing"
        subtitle="Creating end-to-end automated tests using Cypress, Selenium, and Playwright and integrating it with existing CI/CD pipelines."
      >
        <i class="fa-solid fa-gears fa-2xl text-purple-400"></i>
      </skills-card>
      <skills-card
        title="Manual Testing"
        subtitle="QA analysis along with functional & UI testing of new features, improvements, etc. Sound experience creating out of the box test cases."
      >
        <i class="fa-solid fa-bug-slash fa-2xl text-yellow-300"></i>
      </skills-card>
      <skills-card
        title="API Testing"
        subtitle="Testing expected functionality, security, performance, and reliablity of APIs. Experienced with tools: Postman, Insomnia, Cypress."
      >
        <i class="fa-solid fa-server fa-2xl text-red-400"></i>
      </skills-card>
      <skills-card
        title="Performance Testing"
        subtitle="Load testing and stress testing using JMeter."
      >
        <i class="fa-solid fa-gauge-high fa-2xl text-accent-blue"></i>
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
  }
}
</script>
