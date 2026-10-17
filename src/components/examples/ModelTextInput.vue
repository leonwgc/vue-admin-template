<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '子组件输入' },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="model-field">
    <span>{{ label }}</span>
    <el-input :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" />
  </label>
</template>

<style scoped>
.model-field{display:grid;gap:7px;color:#778292;font-size:14px}
</style>
