<script setup>
import { onErrorCaptured, ref } from 'vue'

const error = ref('')
const revision = ref(0)

onErrorCaptured((cause) => {
  error.value = cause.message
  return false
})

function retry() {
  error.value = ''
  revision.value++
}
</script>

<template>
  <div v-if="error" role="alert">
    <p>局部错误：{{ error }}</p>
    <el-button @click="retry">重新挂载子组件</el-button>
  </div>

  <slot v-else :key="revision" />
</template>
