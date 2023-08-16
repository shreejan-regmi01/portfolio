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
      <div class="">
        <icon-heading label="Working Skills"></icon-heading>
      </div>
    </div>
  </base-container>
</template>

<script>
import IconHeading from '../components/IconHeading.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
export default {
  components: {
    IconHeading,
    ExperienceCard
  }
}
</script>
