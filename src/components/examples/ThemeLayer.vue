<script setup>
import ThemeConsumer from './ThemeConsumer.vue'
</script>

<template>
  <div class="theme-layer">
    <div class="layer-label">中间层组件（不接收 theme prop）</div>
    <ThemeConsumer />
  </div>
</template>

<style scoped>
.theme-layer{display:grid;gap:10px;padding:14px;border:1px dashed #cdd4e2;border-radius:9px}
.layer-label{color:#8a94a3;font-size:14px}
</style>
