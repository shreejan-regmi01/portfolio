<template>
  <base-card>
    <div class="flex gap-4 p-4">
      <div class="translate-y-2">
        <slot></slot>
      </div>
      <div>
        <p class="text-white font-secondary font-medium text-lg">{{ title }}</p>
        <p class="text-secondary font-secondary mt-3 leading-7">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>
