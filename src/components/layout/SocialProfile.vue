<template>
  <!-- <aside class="bg-dark-primary rounded-2xl">
    <div class="w-full">
      <img :src="myPic" alt="" srcset="" />
    </div>
  </aside> -->
  <aside>
    <base-container class="h-full">
      <div class="p-10">
        <img :src="myPic" alt="" srcset="" class="w-full rounded-xl" />
      </div>
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
