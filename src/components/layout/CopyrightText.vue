<template>
  <p class="text-secondary font-secondary text-center mt-16">&copy; {{ year }} Shreejan Regmi</p>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
