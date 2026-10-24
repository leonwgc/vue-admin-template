<script setup>
import HighlightedCode from './HighlightedCode.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  code: { type: String, default: '' },
})
</script>

<template>
  <section class="content-card playground-card">
    <div class="playground-title"><div><h2>{{ title }}</h2><p v-if="description">{{ description }}</p></div></div>
    <div class="playground-content"><slot /></div>
    <details v-if="code" class="section-code"><summary>查看本例代码</summary><pre class="demo-code"><HighlightedCode :code="code" /></pre></details>
  </section>
</template>

<style scoped>
.section-code{margin-top:16px;color:#5f72df;font-size:14px}
.section-code summary{cursor:pointer;width:fit-content;padding:5px 0}
.section-code pre{margin-top:9px}
</style>
