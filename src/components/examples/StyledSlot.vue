<script setup>
defineProps({
  accent: {
    type: String,
    default: '#5268e8',
  },
})
</script>

<template>
  <div class="styled-slot">
    <span class="inner">子组件内部</span>
    <slot />
  </div>
</template>

<style scoped>
.styled-slot {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 15px;
  border: 1px solid v-bind(accent);
  border-radius: 8px;
}

.inner {
  color: v-bind(accent);
}

:slotted(strong) {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
