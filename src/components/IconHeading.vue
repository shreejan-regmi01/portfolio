<template>
  <div class="flex items-center gap-2">
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
  }
}
</script>
