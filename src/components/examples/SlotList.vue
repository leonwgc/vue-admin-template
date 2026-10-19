<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <ul class="slot-list">
    <li v-for="(item, index) in items" :key="item.id">
      <slot :item="item" :index="index">
        <span>{{ item.label }}</span>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
.slot-list{display:grid;gap:8px;margin:0;padding:0;list-style:none}
.slot-list li{min-width:0}
</style>
