<template>
  <div class="input-group relative">
    <input
      type="text"
      class="w-full form__input py-2.5 pl-3 bg-transparent text-white rounded-md font-secondary"
      :class="{ error }"
      placeholder=" "
      :id="id"
      autocomplete="off"
      :value="modelValue"
      v-on:input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <p v-if="error" class="text-[0.8rem] font-secondary text-red-600 mt-1">{{ error }}</p>
    <label :for="id" class="absolute font-secondary text-secondary form__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    error: String,
    id: String,
    modelValue: {
      type: [String, Number],
      default: ''
    },
    maxInput: {
      type: [Number],
      default: null
    }
  }
}
</script>

<style scoped>
.form__input {
  border: 2px solid #e1e5ee;
  outline: none;
}

.form__input:hover {
  border-color: #adffff;
}

.form__input:focus {
  border-color: #18ffff;
}

.form__input.error {
  border-color: rgb(220, 38, 38);
}

.form__label {
  top: 0.7rem;
  left: 1rem;
  cursor: text;
}

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown) ~ .form__label {
  top: -0.45rem;
  font-size: 0.8rem;
  transition: all 0.25s ease-out;
  background-color: black;
  padding-inline: 4px;
}

/* Chrome, Safari, Edge, Opera */
.form__input::-webkit-outer-spin-button,
.form__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.form__input[type='number'] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
