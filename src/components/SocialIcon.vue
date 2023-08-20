<template>
  <base-highlight class="inline-block px-3 py-2 rounded-lg custom" :style="cssProps">
    <slot></slot>
  </base-highlight>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    cssProps() {
      return { '--text-color': this.color }
    }
  }
}
</script>

<style scoped>
.custom {
  color: var(--text-color);
}

.custom:hover {
  color: white;
  background-color: var(--text-color);
  transition: 0.15s ease-in;
}
</style>
