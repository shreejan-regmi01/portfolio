<template>
  <div
    class="w-70 p-2 xl:w-[40%] text-right border border-gray-500/50 xl:p-5 -mt-4 relative pointer rounded-md"
    :class="{ rotate }"
  >
    <h1 class="text-2xl font-semibold font-primary capitalize">{{ title }}</h1>
    <p class="text-secondary mt-2 text-sm font-md capitalize">{{ subtitle }}</p>
    <p class="text-secondary mt-2 text-sm font-semibold capitalize">{{ description }}</p>
    <div class="pt-4 font-light">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'description', 'rotate']
}
</script>

<style scoped>
.rotate {
  transform: translateX(153%) rotateY(180deg);
}
.rotate > * {
  transform: rotateY(180deg);
  text-align: left;
}
.pointer::after {
  content: '';
  width: 12px;
  height: 12px;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  opacity: 50%;
  transform: rotate(45deg);
  position: absolute;
  top: 30px;
  right: -7px;
  background-color: black;
}

/**Upto tailwind's xl breakpoint (1280px) */
@media only screen and (max-width: 1280px) {
  .rotate {
    transform: none;
  }
  .rotate > * {
    transform: none;
    text-align: left;
  }
  .pointer {
    transform: translateX(10%) rotateY(180deg);
  }

  .pointer > * {
    transform: rotateY(180deg);
    text-align: left;
  }
}
</style>
