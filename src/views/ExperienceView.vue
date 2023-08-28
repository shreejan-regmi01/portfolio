<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Education & Experience" class="mb-10"></main-title>
    <experience-layout>
      <h2
        class="font-semibold font-secondary text-xl py-2 bg-dark-primary absolute left-1/2 -ml-[54px]"
      >
        2014 - 2016
      </h2>
      <ExperienceDescription
        title="high school"
        subtitle="arniko higher secondary school"
        description="science"
      ></ExperienceDescription>
      <div class="mt-10"></div>
      <h2
        class="font-semibold font-secondary text-xl py-2 bg-dark-primary absolute left-1/2 -ml-[54px]"
      >
        2017 - 2020
      </h2>
      <ExperienceDescription
        title="bachelor's degree"
        subtitle="university of northampton"
        description="Bsc. (Hons) Software Engineering"
        :rotate="true"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio magnam numquam nemo
        dolorem?
      </ExperienceDescription>
    </experience-layout>
  </base-container>
</template>

<script>
import ExperienceDescription from '../components/ExperienceDescription.vue'
import ExperienceLayout from '../components/layout/ExperienceLayout.vue'
export default {
  components: {
    ExperienceDescription,
    ExperienceLayout
  }
}
</script>
