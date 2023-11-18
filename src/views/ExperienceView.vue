<template>
  <base-container class="px-6 py-8 xl:pt-16 xl:pb-8 xl:px-14">
    <main-title headerTitle="Education & Experience" class="mb-10"></main-title>
    <icon-heading label="Education" class="mb-8">
      <i class="fa-solid fa-graduation-cap fa-xl"></i>
    </icon-heading>
    <experience-layout>
      <experience-title> 2014 - 2016 </experience-title>
      <ExperienceDescription title="high school" subtitle="arniko higher secondary school">
        Studied Physics, Chemistry, Biology, and Maths</ExperienceDescription
      >
      <div class="mt-10"></div>
      <experience-title> 2017 - 2020 </experience-title>
      <ExperienceDescription
        title="bachelor's degree"
        subtitle="university of northampton"
        description="Bsc. (Hons) Software Engineering"
        :rotate="true"
      >
        Graduated with First Class Honours, the highest division. Excellent hands-on and practical
        course with multiple projects in each semester. Learnt a lot about programming, software
        development principles, agile methodologies, and many more.
      </ExperienceDescription>
    </experience-layout>
    <icon-heading label="Experience" class="mt-16 mb-8">
      <i class="fa-solid fa-briefcase fa-xl"></i>
    </icon-heading>
    <experience-layout>
      <experience-title>2022 - Present</experience-title>
      <ExperienceDescription
        title="Automation/Functional QA Engineer"
        subtitle="CarClarity"
        description="responsibilities"
      >
        <ul class="ml-4 list-disc">
          <li>Planning out test automation architecture for existing web applications</li>
          <li>Writing automated tests for legacy systems</li>
          <li>Co-ordinating with dev team to write automated tests for new features</li>
          <li>
            Attending requirements planning meeting & helping product owner in formulating the
            requirements
          </li>
          <li>Analyzing requirement spec documents and preparing test plan documentation</li>
          <li>Writing test cases for new web applications and features</li>
          <li>UI testing to ensure UI resembles mockups as closely as possible</li>
          <li>Functional & API testing</li>
          <li>Reproducing complex production bugs</li>
          <li>Running automated regression suites and maintaining/updating test scripts</li>
        </ul>
      </ExperienceDescription>
      <div class="mt-10"></div>
      <experience-title>2021 - 2022</experience-title>
      <ExperienceDescription title="QA Engineer" subtitle="WhiteHat Engineering" :rotate="true">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio magnam numquam nemo
        dolorem?
      </ExperienceDescription>
    </experience-layout>
  </base-container>
</template>

<script>
import ExperienceDescription from '../components/ExperienceDescription.vue'
import ExperienceLayout from '../components/layout/ExperienceLayout.vue'
import IconHeading from '../components/IconHeading.vue'
import ExperienceTitle from '../components/ExperienceTitle.vue'
export default {
  components: {
    ExperienceDescription,
    ExperienceLayout,
    IconHeading,
    ExperienceTitle
  }
}
</script>
