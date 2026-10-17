<script setup>
defineProps({
  count: { type: Number, required: true },
})

const emit = defineEmits(['increment'])
</script>

<template>
  <article class="message-card">
    <div class="message-heading"><strong><slot name="title">子组件</slot></strong><span>Child</span></div>
    <p><slot>默认插槽内容来自父组件。</slot></p>
    <div class="message-footer"><slot name="footer">底部插槽</slot><el-button size="small" type="primary" @click="emit('increment')">通知父组件 +1</el-button></div>
    <small>通过 Props 接收的值：{{ count }}</small>
  </article>
</template>

<style scoped>
.message-card{padding:15px;border:1px solid #e8ebfc;border-radius:9px;background:#fafaff}
.message-heading{display:flex;align-items:center;justify-content:space-between;color:#424d60;font-size:11px}
.message-heading span{padding:3px 6px;border-radius:5px;background:#eff1ff;color:#6879e8;font-size:9px}
.message-card p{margin:10px 0;color:#7e8898;font-size:10px}
.message-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}
.message-footer :deep(.el-button){font-size:10px}
.message-footer :deep(.el-button--small){height:27px;padding:0 9px}
.message-card small{color:#929baa;font-size:9px}
</style>
