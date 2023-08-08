<template>
  <aside>
    <base-container class="h-full text-center">
      <div class="w-3/4 m-auto">
        <img :src="myPic" alt="" srcset="" class="w-full rounded-xl brightness-90" />
      </div>
      <p class="font-primary text-white text-4xl pt-7 font-medium">Shreejan Regmi</p>
    </base-container>
  </aside>
</template>

<script>
import myPic from '../../assets/shreejan_photo.jpg'

export default {
  data() {
    return {
      myPic
    }
  }
}
</script>

<style scoped>
.profile-image {
  top: -50px;
}
</style>
