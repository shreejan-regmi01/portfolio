<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Education & Experience" class="mb-10"></main-title>
    <div class="w-full h-52 timeline-container relative">
      <div class="timeline-line-container relative w-full h-full pt-10 text-white">
        <h2
          class="font-semibold font-secondary text-xl py-2 bg-dark-primary absolute left-1/2 -ml-[54px]"
        >
          2014 - 2016
        </h2>
        <div class="w-[40%] text-right border border-gray-500/50 p-5 -mt-4 relative pointer">
          <h1 class="text-2xl font-semibold font-primary">HIGH SCHOOL</h1>
          <p class="text-secondary mt-2 text-sm font-md">Arniko Higher Secondary School</p>
          <p class="text-secondary mt-2 text-sm font-semibold">Science</p>
        </div>
      </div>
    </div>
  </base-container>
</template>

<style scoped>
.timeline-container::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
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
  left: 50%;
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
  left: 50%;
  width: 2px;
  background: rgb(166, 166, 166);
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

.pointer.rotate {
  transform: translateX(153%) rotateY(180deg);
}

.pointer.rotate > * {
  transform: rotateY(180deg);
  text-align: left;
}
</style>
