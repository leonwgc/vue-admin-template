<script setup>
import ExamplePage from '../../components/ExamplePage.vue'
import MouseReadout from '../../components/examples/MouseReadout.vue'
import { useMouse } from '../../composables/useMouse'

const { x, y } = useMouse()
const code = `// src/composables/useMouse.js
import { onMounted, onUnmounted, ref } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function updatePosition(event) {
    x.value = event.clientX
    y.value = event.clientY
  }
  onMounted(() => window.addEventListener('mousemove', updatePosition))
  onUnmounted(() => window.removeEventListener('mousemove', updatePosition))
  return { x, y }
}

// ComposablesView.vue
<script setup>
import { useMouse } from '../../composables/useMouse'
const { x, y } = useMouse()
<\/script>
<template><p>指针位置：{{ x }}, {{ y }}</p></template>

// 子组件可在自己的 setup 中再次调用 useMouse()
`

const resources = [
  { label: 'Composables（组合式函数）', url: 'https://vuejs.org/guide/reusability/composables.html' },
  { label: '生命周期钩子', url: 'https://vuejs.org/guide/essentials/lifecycle.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="REUSABILITY · COMPOSABLES"
    title="Composables：组合式函数"
    description="把指针坐标和事件监听封装到 useMouse，在页面和子组件中复用，并自动清理副作用。"
    :concepts="['组合式函数是使用 Vue Composition API 封装可复用有状态逻辑的函数。', '通常以 use 开头，返回响应式状态和方法。', '在 onMounted 注册监听，并在 onUnmounted 清理，避免资源泄漏。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>指针坐标组合式函数</h2><p>移动鼠标观察两个独立组件复用 useMouse 的结果。</p></div><el-tag effect="plain">useMouse()</el-tag></div>
      <div class="playground-content">
        <div class="demo-output">页面组件：x = {{ x }}，y = {{ y }}</div>
        <MouseReadout />
        <p class="demo-muted">离开本页后，两个组件各自注册的 mousemove 监听都会移除。</p>
      </div>
    </section>
  </ExamplePage>
</template>
