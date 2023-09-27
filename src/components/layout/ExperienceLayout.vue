<template>
  <div class="w-full timeline-container relative">
    <!-- <div class="timeline-line-container relative w-full h-full pt-10 text-white"> pt-10 is removed below-->
    <div class="timeline-line-container relative w-full h-full text-white pl-9">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.timeline-container::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 18px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
  margin-left: -4px;
}
.timeline-container::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 18px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
  margin-left: -4px;
}

.timeline-line-container::before {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  left: 18px;
  width: 2px;
  background: rgb(166, 166, 166);
}

/**Upto tailwind's xl breakpoint (1280px) */
@media only screen and (max-width: 1280px) {
  .timeline-container::before {
  }
  .timeline-container::after {
  }

  .timeline-line-container::before {
  }
}
</style>
