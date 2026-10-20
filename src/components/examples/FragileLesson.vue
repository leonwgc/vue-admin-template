<script setup>
function fail() { throw new Error('学习演示：子组件事件处理失败') }
</script>
<template><el-button @click="fail">触发子组件错误</el-button></template>
