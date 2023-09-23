<template>
  <base-container class="pt-16 pb-8 px-14">
    <main-title headerTitle="Contact"></main-title>
    <p class="mt-6 text-secondary font-secondary">Let's get connected!</p>
    <form class="mt-8">
      <div class="grid grid-cols-2 gap-8">
        <base-input
          v-model="firstname"
          label="Firstname"
          id="firstname"
          :error="errors.firstname"
        ></base-input>
        <base-input
          v-model="lastname"
          label="Lastname"
          id="lastname"
          :error="errors.lastname"
        ></base-input>
        <base-input v-model="email" label="Email" id="email"></base-input>
        <base-input v-model="mobile" label="Mobile" id="mobile" type="number"></base-input>
        <base-text-area v-model="message" label="Message" class="col-span-2"></base-text-area>
        <base-button
          label="Download CV"
          class="bg-accent-blue text-white font-medium text-lg mt-2"
        ></base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      message: '',
      errors: {
        firstname: 'firstname',
        lastname: '',
        email: '',
        mobile: ''
      }
    }
  }
}
</script>
