<script setup>
const props = defineProps({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  firstNameModifiers: { type: Object, default: () => ({}) },
  lastNameModifiers: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:firstName', 'update:lastName'])

function updateFirstName(event) {
  const value = event.target.value
  emit('update:firstName', props.firstNameModifiers.capitalize
    ? value.charAt(0).toUpperCase() + value.slice(1)
    : value)
}

function updateLastName(event) {
  const value = event.target.value
  emit('update:lastName', props.lastNameModifiers.uppercase ? value.toUpperCase() : value)
}
</script>

<template>
  <div class="name-fields">
    <label for="model-first-name">名（首字母大写）</label>
    <input id="model-first-name" :value="firstName" @input="updateFirstName" />
    <label for="model-last-name">姓（全部大写）</label>
    <input id="model-last-name" :value="lastName" @input="updateLastName" />
  </div>
</template>

<style scoped>
.name-fields{display:grid;grid-template-columns:max-content minmax(0,280px);align-items:center;gap:9px}
.name-fields label{color:#697587;font-size:14px}
.name-fields input{min-width:0;padding:8px 10px;border:1px solid #dcdfe6;border-radius:6px;font:inherit}
.name-fields input:focus-visible{outline:2px solid #5268e8;outline-offset:2px}
@media(max-width:520px){.name-fields{grid-template-columns:1fr}}
</style>
