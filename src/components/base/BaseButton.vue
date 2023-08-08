<template>
  <button class="rounded-lg py-3 px-6">
    <slot></slot>
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>
