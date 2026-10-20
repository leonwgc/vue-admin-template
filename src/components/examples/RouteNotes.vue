<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template><div class="demo-output">笔记子路由 · 父级主题：{{ route.params.lessonId }}。父级页面保持挂载，这里由嵌套 RouterView 渲染。</div></template>
