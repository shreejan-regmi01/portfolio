<template>
  <base-highlight
    class="p-4 rounded-xl hover:bg-accent-blue hover:text-white text-secondary"
    :class="active && 'active'"
  >
    <div>
      <slot></slot>
    </div>
    <p class="mt-2 text-sm font-medium" :class="customClassForLabel">{{ label }}</p>
  </base-highlight>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false
    },
    customClassForLabel: {
      type: String,
      required: false
    }
  }
}
</script>
