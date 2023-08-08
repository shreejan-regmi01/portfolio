<template>
  <div class="flex items-center gap-4 py-2 border-b border-gray-700/60">
    <social-icon class="bg-dark px-4 py-3">
      <slot></slot>
    </social-icon>
    <div class="flex flex-col font-secondary text-left gap-1">
      <p class="text-secondary text-xs">{{ label }}</p>
      <p class="text-white text-sm break-all">{{ value }}</p>
    </div>
  </div>
</template>

<script>
import SocialIcon from './SocialIcon.vue'

export default {
  components: {
    SocialIcon
  },
  props: {
    label: String,
    value: String
  }
}
</script>
