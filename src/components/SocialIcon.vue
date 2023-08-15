<template>
  <base-highlight
    class="inline-block px-3 py-2 rounded-lg hover:!text-white"
    :style="{ color }"
    :class="background"
  >
    <slot></slot>
  </base-highlight>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    background() {
      return `hover:bg-[${this.color}]`
    }
  }
}
</script>

<style scoped>
/* .rounded {
  background-color: #0a66c2;
} */
</style>
