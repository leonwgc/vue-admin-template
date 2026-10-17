<script setup>
import { inject } from 'vue'

const theme = inject('example-theme')
</script>

<template>
  <div class="theme-consumer" :class="`theme-${theme}`">
    <strong>深层组件已注入「{{ theme }}」主题</strong>
    <span>此组件没有通过 props 接收主题。</span>
  </div>
</template>

<style scoped>
.theme-consumer{display:grid;gap:7px;padding:14px;border-radius:8px;font-size:14px}
.theme-consumer span{opacity:.8}
.theme-light{background:#f1f3ff;color:#4658ae}
.theme-dark{background:#30384c;color:#fff}
</style>
