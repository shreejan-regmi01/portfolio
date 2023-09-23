<template>
  <div class="input-group relative">
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="w-full h-full form__input pt-4 px-3 bg-transparent text-white rounded-md font-secondary"
    ></textarea>
    <label for="" class="absolute font-secondary text-secondary form__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ['label']
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
  top: -0.45rem;
  left: 1rem;
  font-size: 0.8rem;
  background-color: black;
  padding-inline: 4px;
}
</style>
