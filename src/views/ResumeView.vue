<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Resume"></main-title>
    <div class="grid grid-cols-2 font-secondary mt-9 gap-5 gap-x-7">
      <icon-heading label="Education">
        <i class="fa-solid fa-graduation-cap fa-xl"></i>
      </icon-heading>

      <icon-heading label="Experience">
        <i class="fa-solid fa-briefcase fa-xl"></i>
      </icon-heading>

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
    <div class="mt-16 grid grid-cols-2 gap-x-10">
      <div class="grid gap-7 h-min">
        <icon-heading label="Working Skills"></icon-heading>
        <base-expbar label="Automation Testing" :value="80" colour="#ff6464"></base-expbar>
        <base-expbar label="Functional Testing" :value="85" colour="#9272d4"></base-expbar>
        <base-expbar label="Web Development" :value="55" colour="#5185d4"></base-expbar>
        <base-expbar label="Documentation" :value="75" colour="#ca56f2"></base-expbar>
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
          <base-tag>Usability Testing</base-tag>
          <base-tag>Performance Testing</base-tag>
          <base-tag>Salesforce Testing</base-tag>
          <base-tag>JIRA</base-tag>
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
  }
}
</script>
