<template>
  <div class="flex items-center" :class="hasIconSlot ? 'gap-2' : null">
    <div class="text-accent-blue">
      <slot></slot>
    </div>
    <h2 class="text-white text-2xl font-medium">{{ label }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    hasIconSlot() {
      return this.$slots.default
    }
  }
}
</script>
