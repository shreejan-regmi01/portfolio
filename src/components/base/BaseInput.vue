<template>
  <div class="input-group relative">
    <input
      type="text"
      class="w-full h-full form__input py-2.5 pl-3 bg-transparent text-white rounded-md font-secondary"
      placeholder=" "
      :id="id"
    />
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
    id: String
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
</style>
