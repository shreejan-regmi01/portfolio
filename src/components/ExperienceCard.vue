<template>
  <base-card class="py-4 px-5">
    <div class="grid gap-2">
      <p class="text-secondary">{{ header }}</p>
      <p class="text-white text-xl">
        {{ title }}
        <span v-if="subtitle" class="text-secondary text-base">- {{ subtitle }}</span>
      </p>
      <p class="text-secondary">{{ description }}</p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    description: {
      type: String
    }
  }
}
</script>
