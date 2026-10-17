<script setup>
import { provide, ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ThemeLayer from '../../components/examples/ThemeLayer.vue'

const theme = ref('light')
provide('example-theme', theme)

const code = `<!-- ProviderView.vue -->
<script setup>
import { provide, ref } from 'vue'
const theme = ref('light')
provide('example-theme', theme)
<\/script>

<template>
  <select v-model="theme">
    <option value="light">浅色</option>
    <option value="dark">深色</option>
  </select>
  <ThemeLayer />
</template>

<!-- ThemeLayer.vue: 不接收或传递 theme prop -->
<template><ThemeConsumer /></template>

<!-- ThemeConsumer.vue -->
<script setup>
import { inject } from 'vue'
const theme = inject('example-theme')
<\/script>
<template><p>注入的主题：{{ theme }}</p></template>`

const resources = [
  { label: 'Provide / Inject', url: 'https://vuejs.org/guide/components/provide-inject.html' },
  { label: '响应式基础', url: 'https://vuejs.org/guide/essentials/reactivity-fundamentals.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="REUSABILITY · PROVIDE AND INJECT"
    title="provide / inject"
    description="由祖先提供响应式主题设置，跨过中间组件直接注入到深层后代。"
    :concepts="['provide 在祖先组件提供数据，inject 在任意深层后代读取。', '注入 ref 时保留响应性；页面中间层不需要逐层接收和传递 props。', '适合主题、表单上下文等跨层级依赖；局部状态仍优先使用 props/emits。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>跨层级主题注入</h2><p>切换祖先组件的主题，观察深层后代即时更新。</p></div><el-tag effect="plain">provide → inject</el-tag></div>
      <div class="playground-content">
        <el-radio-group v-model="theme" aria-label="选择演示主题">
          <el-radio-button label="light">浅色</el-radio-button>
          <el-radio-button label="dark">深色</el-radio-button>
        </el-radio-group>
        <ThemeLayer />
      </div>
    </section>
  </ExamplePage>
</template>
