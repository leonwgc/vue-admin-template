<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function reset() {
  count.value = 0
}
</script>

<template>
  <article class="slot-panel">
    <header v-if="$slots.header">
      <slot name="header" :count="count" />
    </header>

    <div>
      <slot
        :count="count"
        :increment="increment"
        :reset="reset"
      >
        子组件回退内容：未提供默认插槽。
      </slot>
    </div>

    <footer v-if="$slots.footer">
      <slot name="footer" :count="count" />
    </footer>
  </article>
</template>

<style scoped>
.slot-panel {
  padding: 15px;
  border: 1px solid #e8ebfc;
  border-radius: 9px;
  color: #556071;
  background: #fafaff;
}

.slot-panel header {
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8ebfc;
}

.slot-panel footer {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid #e8ebfc;
}
</style>
