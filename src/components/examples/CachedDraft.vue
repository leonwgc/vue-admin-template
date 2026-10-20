<script setup>
import { onActivated, onDeactivated, ref } from 'vue'
defineProps({ label: { type: String, required: true } })
const emit = defineEmits(['status'])
const draft = ref('')
onActivated(() => emit('status', '激活：可恢复轮询、订阅等资源'))
onDeactivated(() => emit('status', '停用：应暂停轮询、订阅等资源'))
</script>
<template><div><label class="demo-label">{{ label }}<el-input v-model="draft" :aria-label="label" placeholder="输入后切换标签，再切回来" /></label></div></template>
