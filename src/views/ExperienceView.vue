<template>
  <base-container class="pt-16 pb-8 px-14 relative">
    <main-title headerTitle="Education & Experience" class="mb-10"></main-title>
    <!-- <div class="border-secondary border-r-2 h-56 text-secondary w-1/2 circle-on-top pt-8">
      <h2
        class="text-white font-semibold font-secondary text-xl text-right py-2 bg-dark-primary relative -right-5"
      >
        2014 - 2016
      </h2>
    </div> -->
    <div class="absolute h-40 w-[2px] circle-on-top-again bg-secondary text-secondary"></div>
    <h2
      class="text-white font-semibold font-secondary text-xl py-2 bg-dark-primary absolute left-[44%] top-[34%]"
    >
      2014 - 2016
    </h2>
  </base-container>
</template>

<style scoped>
.circle-on-top {
  position: relative;
}
.circle-on-top::before {
  content: '';
  position: absolute;
  top: -3px;
  right: -5.5px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
}

.circle-on-top::after {
  content: '';
  position: absolute;
  bottom: -3px;
  right: -5.5px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
}

.circle-on-top-again {
  left: 50%;
  top: 30%;
}
.circle-on-top-again::before {
  content: '';
  position: absolute;
  top: -6.4px;
  right: -4.1px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
}

.circle-on-top-again::after {
  content: '';
  position: absolute;
  bottom: -6.4px;
  right: -4.1px;
  height: 10px;
  width: 10px;
  background: rgb(166, 166, 166);
  transform: rotate(45deg);
}
</style>
