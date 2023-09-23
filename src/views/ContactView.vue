<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Contact"></main-title>
    <p class="mt-6 text-secondary font-secondary">Let's get connected!</p>
    <form class="mt-8">
      <div class="grid grid-cols-2 gap-8">
        <BaseInput label="Firstname" id="firstname" />
        <BaseInput label="Lastname" id="lastname" />
        <BaseInput label="Email" id="email" />
        <BaseInput label="Mobile" id="mobile" />
        <BaseTextArea label="Message" class="col-span-2" />
      </div>
    </form>
  </base-container>
</template>
