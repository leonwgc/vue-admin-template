<script setup>
import { useMouse } from '../../composables/useMouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="mouse-readout">
    <strong>子组件复用 useMouse</strong>
    <span>x: {{ x }} · y: {{ y }}</span>
  </div>
</template>

<style scoped>
.mouse-readout{display:grid;gap:7px;padding:13px;border-radius:8px;background:#f1f3ff;color:#596bce;font-size:14px}
.mouse-readout span{color:#687386}
</style>
