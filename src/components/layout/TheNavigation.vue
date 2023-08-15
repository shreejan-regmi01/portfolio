<template>
  <base-container class="p-7 text-center h-min flex flex-col gap-5">
    <base-highlight class="p-4 rounded-xl active">
      <div>
        <i class="fa-regular fa-user fa-xl"></i>
      </div>
      <p class="mt-2 text-sm font-medium">About</p>
    </base-highlight>
    <base-highlight class="p-4 rounded-xl text-secondary hover:bg-accent-blue hover:text-white">
      <div>
        <i class="fa-regular fa-file fa-xl"></i>
      </div>
      <p class="mt-2 text-sm font-medium">Resume</p>
    </base-highlight>
    <base-highlight class="p-4 rounded-xl text-secondary hover:bg-accent-blue hover:text-white">
      <div>
        <i class="fa-solid fa-toolbox fa-xl"></i>
      </div>
      <p class="mt-2 text-sm font-medium">Work</p>
    </base-highlight>
    <base-highlight class="p-4 rounded-xl text-secondary hover:bg-accent-blue hover:text-white">
      <div>
        <i class="fa-regular fa-address-book fa-xl"></i>
      </div>
      <p class="mt-2 text-sm font-medium">Contact</p>
    </base-highlight>
    <base-highlight class="p-4 rounded-xl text-secondary hover:bg-accent-blue hover:text-white">
      <div>
        <i class="fa-regular fa-thumbs-up fa-xl"></i>
      </div>
      <p class="mt-2 text-sm font-medium -ml-2">Testimonials</p>
    </base-highlight>
  </base-container>
</template>

<script></script>

<style scoped>
.active {
  background-color: #1b74e4;
  color: white;
}
</style>
