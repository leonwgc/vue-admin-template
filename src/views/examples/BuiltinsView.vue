<script setup>
import { defineAsyncComponent, h, ref, shallowRef } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import CachedDraft from '../../components/examples/CachedDraft.vue'
const tab = ref('A')
const cache = ref(true)
const status = ref('切换标签观察激活状态')
const showAsync = ref(false)
const generation = ref(0)
function createAsyncLesson(shouldFail = false) {
  return defineAsyncComponent({
    loader: async () => {
      await new Promise((resolve) => setTimeout(resolve, 700))
      if (shouldFail) throw new Error('演示加载失败')
      return import('../../components/examples/AsyncLesson.vue')
    },
    delay: 0,
    loadingComponent: { render: () => h('p', { role: 'status' }, '正在加载独立代码块…') },
    errorComponent: { render: () => h('p', { role: 'alert' }, '加载失败，请点击“重新加载”。') },
  })
}
const AsyncLesson = shallowRef(createAsyncLesson())
function reload(fail = false) {
  AsyncLesson.value = createAsyncLesson(fail)
  generation.value++
  showAsync.value = true
}
const code = `<KeepAlive :max="2">
  <CachedDraft :key="tab" :label="tab" />
</KeepAlive>
// 组件内部使用 onActivated / onDeactivated 管理资源。
const AsyncLesson = defineAsyncComponent({
  loader: () => import('./AsyncLesson.vue'),
  loadingComponent: LoadingView,
  errorComponent: ErrorView,
})
// Teleport 的焦点管理与 Escape 行为见“安全与可访问性”。`
</script>
<template>
  <ExamplePage eyebrow="COMPONENTS · BUILT-INS" title="KeepAlive 与异步组件" description="对比缓存与卸载，体验异步组件的加载、失败和重新加载。"
    :concepts="['KeepAlive 缓存组件实例，max 限制缓存数量；不同 key 可保留不同实例。', '停用不等于卸载：缓存组件的后台副作用应在 onDeactivated 中暂停。', 'defineAsyncComponent 将组件加载封装为 Promise，可配置 loading、error 和重试策略。', 'Suspense 属于实验性能力，本项目不将其作为稳定依赖。']"
    :code="code" :resources="[{ label: 'KeepAlive', url: 'https://vuejs.org/guide/built-ins/keep-alive.html' }, { label: '异步组件', url: 'https://vuejs.org/guide/components/async.html' }]">
    <ExampleSection title="缓存表单草稿" description="开启缓存时 A / B 各保留草稿；关闭缓存后，切换会销毁旧组件。切换缓存模式也会重建演示实例。">
      <el-switch v-model="cache" active-text="启用 KeepAlive" /><div class="demo-row"><el-button v-for="id in ['A', 'B']" :key="id" :type="tab === id ? 'primary' : 'default'" @click="tab = id">标签 {{ id }}</el-button></div>
      <KeepAlive v-if="cache" :max="2"><CachedDraft :key="tab" :label="`缓存草稿 ${tab}`" @status="status = $event" /></KeepAlive>
      <CachedDraft v-else :key="tab" :label="`普通草稿 ${tab}`" />
      <p class="demo-muted">{{ cache ? status : '普通模式：切换标签触发卸载和重新挂载。' }}</p>
    </ExampleSection>
    <ExampleSection title="异步加载与失败恢复" description="使用 700ms 本地延迟观察加载提示；可以主动模拟加载失败。">
      <div class="demo-row"><el-button @click="reload(false)">重新加载</el-button><el-button @click="reload(true)">模拟加载失败</el-button></div>
      <component :is="AsyncLesson" v-if="showAsync" :key="generation" />
    </ExampleSection>
  </ExamplePage>
</template>
