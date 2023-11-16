<template>
  <base-container class="py-8 px-6 xl:pt-16 xl:pb-8 xl:px-14">
    <main-title headerTitle="Resume"></main-title>
    <div class="grid xl:grid-cols-2 font-secondary mt-9 gap-5 gap-x-7">
      <icon-heading label="Education">
        <i class="fa-solid fa-graduation-cap fa-xl"></i>
      </icon-heading>

      <icon-heading label="Experience" class="order-3 xl:order-2">
        <i class="fa-solid fa-briefcase fa-xl"></i>
      </icon-heading>
      <div class="order-2 xl:order-3 grid gap-5">
        <experience-card
          header="2021-2023"
          title="Phd. in Something"
          description="Modern Era"
        ></experience-card>
        <experience-card
          header="2021-2023"
          title="Phd. in Something"
          description="Modern Era"
        ></experience-card>
      </div>
      <div class="order-4 grid gap-5">
        <experience-card
          header="2021-2023"
          title="Phd. in Something"
          description="Modern Era"
        ></experience-card>
        <experience-card
          header="2021-2023"
          title="Phd. in Something"
          description="Modern Era"
        ></experience-card>
      </div>
    </div>
    <div class="mt-8 grid gap-10 xl:mt-10 xl:grid-cols-2 xl:gap-x-10">
      <div class="grid gap-7 h-min">
        <icon-heading label="Working Skills"></icon-heading>
        <base-expbar label="Automation Testing" :value="80" colour="#ff6464"></base-expbar>
        <base-expbar label="Manual Testing" :value="85" colour="#9272d4"></base-expbar>
        <base-expbar label="QA Analysis" :value="80" colour="#ca56f2"></base-expbar>
        <base-expbar label="Web Development" :value="55" colour="#5185d4"></base-expbar>
      </div>
      <div>
        <icon-heading label="Knowledges" class="mb-7"></icon-heading>
        <div class="flex flex-wrap gap-4">
          <base-tag>Automation Testing</base-tag>
          <base-tag>Cypress</base-tag>
          <base-tag>Datadog Synthetic Tests</base-tag>
          <base-tag>Selenium</base-tag>
          <base-tag>Percy</base-tag>
          <base-tag>LambdaTest</base-tag>
          <base-tag>Manual Testing</base-tag>
          <base-tag>QA Analysis</base-tag>
          <base-tag>Usability Testing</base-tag>
          <base-tag>Performance Testing</base-tag>
          <base-tag>Salesforce Testing</base-tag>
          <base-tag>JIRA</base-tag>
          <base-tag>Documentation</base-tag>
          <base-tag>Agile</base-tag>
        </div>
      </div>
    </div>
    <copyright-text></copyright-text>
  </base-container>
</template>

<script>
import IconHeading from '../components/IconHeading.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import BaseExpbar from '../components/base/BaseExpbar.vue'
export default {
  components: {
    IconHeading,
    ExperienceCard,
    BaseExpbar
  },
  head() {
    return {
      title: 'Resume | Shreejan Regmi'
    }
  }
}
</script>
