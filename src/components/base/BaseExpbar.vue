<template>
  <div>
    <div class="flex justify-between text-secondary text-base font-secondary mb-3">
      <p>{{ label }}</p>
      <p>{{ value }}%</p>
    </div>
    <div class="h-[6px] bg-white rounded-lg overflow-hidden">
      <div :style="cssProps" class="h-full z-10 custom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    colour: String,
    colorClass: String
  },
  computed: {
    cssProps() {
      return { '--custom-bg': this.colour, '--custom-width': this.value + '%' }
    }
  }
}
</script>

<style scoped>
.custom {
  background-color: var(--custom-bg);
  width: var(--custom-width);
}
</style>
