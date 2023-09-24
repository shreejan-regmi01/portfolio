<template>
  <h1 id="title" class="text-white font-semibold font-primary text-4xl relative inline-block">
    {{ headerTitle }}
  </h1>
</template>

<script>
export default {
  props: {
    headerTitle: String
  }
}
</script>

<style scoped>
#title::after {
  content: '';
  position: absolute;
  top: 48%;
  left: 115%;
  background-color: #1b74e4;
  width: 190px;
  height: 3px;
}
/**Upto tailwind's xl breakpoint (1280px) */
@media only screen and (max-width: 1280px) {
  #title::after {
    width: 100px;
  }
}
</style>
