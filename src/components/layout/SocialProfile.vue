<template>
  <aside>
    <base-container class="h-full text-center">
      <div class="relative content">
        <div class="w-3/4 m-auto">
          <img :src="myPic" alt="" srcset="" class="w-full rounded-xl brightness-90" />
        </div>
        <p class="font-primary text-white text-4xl pt-7 font-medium">Shreejan Regmi</p>
        <base-highlight
          class="inline-block p-3 mt-4 text-secondary font-secondary font-medium text-lg"
        >
          Automation/Functional QA
        </base-highlight>
        <div class="pt-4 flex flex-row gap-4 justify-center">
          <social-icon>
            <i class="fa-brands fa-facebook-f fa-xl" style="color: #537bce"></i>
          </social-icon>
          <social-icon>
            <i class="fa-brands fa-instagram fa-xl" style="color: #dd2a7b"></i>
          </social-icon>
          <social-icon>
            <i class="fa-brands fa-linkedin-in fa-xl" style="color: #0a66c2"></i>
          </social-icon>
        </div>
      </div>
    </base-container>
  </aside>
</template>

<script>
import myPic from '../../assets/shreejan_photo.jpg'
import SocialIcon from '../SocialIcon.vue'
export default {
  data() {
    return {
      myPic
    }
  },
  components: {
    SocialIcon
  }
}
</script>

<style scoped>
.content {
  top: -100px;
}
</style>
