<template>
  <base-highlight
    class="py-3 pl-5 max-lg:bg-transparent max-lg:flex max-lg:gap-7 max-lg:items-center xl:p-4 xl:rounded-xl hover:bg-accent-blue hover:text-white text-secondary"
    :class="active && 'active'"
    @click="onClick"
  >
    <div>
      <slot></slot>
    </div>
    <p class="xl:mt-2 text-sm font-medium" v-bind="$attrs">
      {{ label }}
    </p>
  </base-highlight>
</template>

<script>
import { useScreen } from '../composables/useScreen'
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    onClick() {
      if (this.isMobile()) this.$emit('navigation-changed')
    }
  },
  setup() {
    const { isMobile } = useScreen()
    return {
      isMobile
    }
  },
  inheritAttrs: false,
  emits: ['navigation-changed']
}
</script>
