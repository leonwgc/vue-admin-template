<script setup>
import ExamplePage from '../../components/ExamplePage.vue'

const vFocus = {
  mounted(element) {
    element.focus()
  },
}

const code = `const vFocus = {
  mounted(element) {
    element.focus()
  },
}

<el-input v-focus placeholder="自动获得焦点" />`
</script>

<template>
  <ExamplePage
    eyebrow="PRACTICE · DIRECTIVES"
    title="自定义指令"
    description="用 v-focus 封装 DOM 自动聚焦行为，观察自定义指令如何在元素挂载时执行。"
    :concepts="['自定义指令适合封装直接操作 DOM 的可复用行为。', 'mounted 钩子在绑定元素插入 DOM 后调用。', '在 script setup 中声明 vFocus，可在模板中写作 v-focus。']"
    :code="code"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>v-focus 自动聚焦</h2><p>点击“重新聚焦”后切换示例面板，观察指令在重新挂载时生效。</p></div><el-tag effect="plain">directive · mounted</el-tag></div>
      <div class="playground-content">
        <el-alert title="输入框在组件挂载时会自动获得焦点。" type="info" :closable="false" show-icon />
        <el-input v-focus placeholder="我会自动获得焦点" clearable />
        <p class="demo-muted">script setup 中的 vFocus 指令会自动映射为模板里的 v-focus。</p>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.playground-content :deep(.el-input){max-width:420px}
.playground-content :deep(.el-alert){--el-alert-padding:10px 12px}
.playground-content :deep(.el-alert__title){font-size:10px}
</style>
