<template>
  <base-container class="py-8 px-6 xl:pt-16 xl:pb-8 xl:px-14">
    <main-title headerTitle="Contact"></main-title>
    <p class="mt-6 text-secondary font-secondary">Let's get connected!</p>
    <form @submit.prevent="submitForm" class="mt-8">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
        <base-input v-model="email" label="Email" id="email" :error="errors.email"></base-input>
        <base-input
          v-model="mobile"
          label="Mobile"
          id="mobile"
          type="tel"
          :error="errors.mobile"
          onwheel="return false"
          maxlength="10"
          inputmode="numeric"
        ></base-input>
        <base-text-area v-model="message" label="Message" class="xl:col-span-2"></base-text-area>
      </div>
      <base-button
        type="Submit"
        label="Submit"
        class="bg-accent-blue text-white font-medium text-lg w-1/2 mt-8 mx-auto block"
      ></base-button>
    </form>
  </base-container>
</template>

<script>
import {
  FIRSTNAME_ERR,
  LASTNAME_ERR,
  EMAIL_EMPTY_ERR,
  EMAIL_INVALID_ERR,
  MOBILE_INVALID_ERR
} from '../types'
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      message: '',
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        mobile: ''
      }
    }
  },
  watch: {
    firstname(newVal) {
      this.validateFirstname(newVal)
    },
    lastname(newVal) {
      this.validateLastname(newVal)
    },
    email(newVal) {
      this.validateEmail(newVal)
    },
    mobile(newVal) {
      this.validateMobile(newVal)
    }
  },
  methods: {
    submitForm() {
      this.validateFirstname(this.firstname)
      this.validateLastname(this.lastname)
      this.validateEmail(this.email)
      this.validateMobile(this.mobile)

      const { firstname, lastname, email, mobile } = this.$data.errors
      if (firstname || lastname || email || mobile) {
        console.error('Did not submit')
        return
      }
      //TODO: send this data to some db and store
      console.log(this.$data)
    },
    validateFirstname(value) {
      if (value.trim() == '') return (this.errors.firstname = FIRSTNAME_ERR)
      this.errors.firstname = ''
    },
    validateLastname(value) {
      if (value.trim() == '') return (this.errors.lastname = LASTNAME_ERR)
      this.errors.lastname = ''
    },
    validateEmail(value) {
      if (value.trim() == '') return (this.errors.email = EMAIL_EMPTY_ERR)
      // eslint-disable-next-line no-useless-escape
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return (this.errors.email = EMAIL_INVALID_ERR)
      }
      this.errors.email = ''
    },
    validateMobile(value) {
      if (isNaN(Number(value))) {
        return (this.errors.mobile = MOBILE_INVALID_ERR)
      }
      this.errors.mobile = ''
    }
  }
}
</script>
