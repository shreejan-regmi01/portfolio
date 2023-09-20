<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Contact"></main-title>
    <p class="mt-6 text-secondary font-secondary">Let's get connected!</p>
    <div class="">
      <div class="input-group">
        <input
          type="text"
          class="bg-dark-primary text-white py-3 px-3 custom-input rounded-sm placeholder:font-medium placeholder:text-secondary placeholder:font-secondary"
          placeholder="Firstname"
        />
      </div>
    </div>
  </base-container>
</template>

<style scoped>
.custom-input {
  outline: 1.5px solid #474747;
}

.custom-input:focus {
  outline: 1.5px solid #66b2ff;
}

.custom-input:focus .custom-input::placeholder {
  position: relative;
  top: 10px;
}
</style>
