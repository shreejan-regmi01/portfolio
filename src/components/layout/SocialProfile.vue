<template>
  <aside>
    <base-container class="text-center px-7 py-8 xl:py-0">
      <div class="xl:relative content">
        <div class="w-10/12 m-auto">
          <img :src="myPic" alt="" srcset="" class="w-full rounded-xl brightness-90" />
        </div>
        <p class="font-primary text-white text-2xl pt-7 font-medium tracking-wide">
          Shreejan Regmi
        </p>
        <base-highlight class="inline-block py-2 px-4 mt-4 text-secondary font-secondary text-sm">
          Automation/Functional QA
        </base-highlight>
        <div class="pt-4 flex flex-row gap-4 justify-center">
          <social-icon color="#537bce">
            <i class="fa-brands fa-facebook-f fa-lg"></i>
          </social-icon>
          <social-icon color="#dd2a7b">
            <i class="fa-brands fa-instagram fa-lg"></i>
          </social-icon>
          <social-icon color="#0a66c2">
            <i class="fa-brands fa-linkedin-in fa-lg"></i>
          </social-icon>
        </div>
        <base-highlight class="mt-6 px-6 py-4 rounded-xl">
          <contact-item label="Phone" value="+977 984 248 5455">
            <i class="fa-solid fa-mobile-screen-button fa-xl" style="color: #dd2a7b"></i>
          </contact-item>
          <contact-item label="Email" value="shreejan.regmi@gmail.com">
            <i class="fa-regular fa-envelope fa-xl text-accent-green"></i>
          </contact-item>
          <contact-item label="Location" value="Biratnagar, Nepal">
            <i class="fa-solid fa-location-dot fa-xl text-orange-500"></i>
          </contact-item>
          <contact-item label="Birthday" value="19 October, 1999" class="border-none">
            <i class="fa-solid fa-calendar-days fa-xl text-purple-500"></i>
          </contact-item>
        </base-highlight>
        <base-button label="Download CV" class="bg-accent-blue text-white font-medium text-lg mt-6">
          <i class="fa-solid fa-file-arrow-down fa-sm text-white"></i>
        </base-button>
      </div>
    </base-container>
  </aside>
</template>

<script>
import myPic from '../../assets/shreejan_photo.jpg'
import SocialIcon from '../SocialIcon.vue'
import ContactItem from '../ContactItem.vue'
export default {
  data() {
    return {
      myPic
    }
  },
  components: {
    SocialIcon,
    ContactItem
  }
}
</script>

<style scoped>
.content {
  top: -100px;
}
</style>
