<script setup>
import { ref } from 'vue'
const props = defineProps({ label: { type: String, required: true } })
const draft = ref(props.label)
</script>
<template>
  <label class="identity-row"><span>{{ label }}</span><el-input v-model="draft" :aria-label="`${label} 的本地草稿`" /></label>
</template>
<style scoped>
.identity-row{display:flex;align-items:center;gap:12px;margin-bottom:8px}.identity-row span{min-width:35px}
</style>
