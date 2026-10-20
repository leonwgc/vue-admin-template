<script setup>
import { ref } from 'vue'

// Vue 3.2 使用普通 script 声明 inheritAttrs。
// defineOptions 需要 Vue 3.3+。
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'confirm'])
const input = ref(null)

function focus() {
  input.value?.focus()
}

defineExpose({ focus })
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="boundary-input">
    <input
      ref="input"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keydown.enter="emit('confirm', modelValue)"
    />
  </div>
</template>

<style scoped>
.boundary-input input {
  box-sizing: border-box;
  width: 100%;
  padding: 9px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  font: inherit;
}

.boundary-input input:focus-visible {
  outline: 2px solid #6879e8;
  outline-offset: 2px;
}
</style>
