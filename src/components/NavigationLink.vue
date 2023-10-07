<template>
  <base-highlight
    class="py-3 pl-5 max-lg:bg-transparent max-lg:flex max-lg:gap-7 max-lg:items-center xl:p-4 xl:rounded-xl hover:bg-accent-blue hover:text-white text-secondary"
    :class="active && 'active'"
  >
    <div>
      <slot></slot>
    </div>
    <p class="xl:mt-2 text-sm font-medium" :class="customClassForLabel">{{ label }}</p>
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
