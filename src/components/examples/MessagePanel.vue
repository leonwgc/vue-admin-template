<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div class="dynamic-panel">
    <h3>留言面板</h3>
    <el-input v-model="message" type="textarea" :rows="3" placeholder="输入一段留言后切换标签" />
    <p>当前留言：{{ message || '尚未填写' }}</p>
  </div>
</template>

<style scoped>
.dynamic-panel{display:grid;gap:12px;padding:16px;border:1px solid #edf0f5;border-radius:9px}
.dynamic-panel h3{margin:0;color:#465269;font-size:15px}
.dynamic-panel p{margin:0;color:#788394;font-size:14px;overflow-wrap:anywhere}
</style>
