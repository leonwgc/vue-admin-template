<script setup>
import { nextTick, ref, watch } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import IdentityInput from '../../components/examples/IdentityInput.vue'
import CachedDraft from '../../components/examples/CachedDraft.vue'

const visible = ref(false)
const showForms = ref(true)
const input = ref(null)
const value = ref(0)
const output = ref(null)
const before = ref('尚未更新')
const after = ref('尚未更新')
const post = ref('尚未更新')
const items = ref([{ id: 1, label: '甲' }, { id: 2, label: '乙' }, { id: 3, label: '丙' }])
async function reveal() {
  visible.value = true
  await nextTick()
  input.value?.focus()
}
async function update() {
  value.value++
  before.value = output.value.textContent
  await nextTick()
  after.value = output.value.textContent
}
watch(value, () => { post.value = output.value.textContent }, { flush: 'post' })
const code = `const input = ref(null)
async function reveal() {
  visible.value = true
  await nextTick()
  input.value?.focus()
}
watch(value, () => readUpdatedDom(), { flush: 'post' })
// key 标识组件身份，不能只为消除警告而填写索引。
<IdentityInput v-for="item in items" :key="item.id" :label="item.label" />`
</script>
<template>
  <ExamplePage eyebrow="RENDERING · DOM & IDENTITY" title="DOM 更新与组件身份" description="观察状态与 DOM 更新的时间差，并用可编辑列表理解 key 与本地状态的关系。"
    :concepts="['模板引用在挂载后可用，v-if 卸载后会变成 null。', 'Vue 批量处理 DOM 更新；nextTick 等待本轮 DOM 刷新，不代表等待网络请求。', 'v-if 创建和销毁组件，v-show 通过 display 控制可见性。', 'key 用于识别同级节点；稳定的业务 ID 能让状态随对应条目移动。']"
    :code="code" :resources="[{ label: '模板引用', url: 'https://vuejs.org/guide/essentials/template-refs.html' }, { label: '列表渲染', url: 'https://vuejs.org/guide/essentials/list.html' }]">
    <ExampleSection title="nextTick 与 flush: post">
      <div class="demo-row"><el-button @click="reveal">显示并聚焦输入框</el-button><el-button @click="visible = false">卸载输入框</el-button></div>
      <input v-if="visible" ref="input" aria-label="nextTick 聚焦演示" placeholder="已自动聚焦" />
      <el-button @click="update">更新计数并读取 DOM</el-button><strong ref="output">{{ value }}</strong>
      <div class="demo-output">同步读取：{{ before }} · nextTick：{{ after }} · post watcher：{{ post }}</div>
    </ExampleSection>
    <ExampleSection title="v-if 与 v-show 的状态差异" description="先填写两份草稿，再隐藏并显示。v-if 的实例被销毁而丢失草稿，v-show 仅改变 display，草稿保持。"
      :code="`<CachedDraft v-if='showForms' label='v-if 草稿' />
<CachedDraft v-show='showForms' label='v-show 草稿' />`">
      <el-button @click="showForms = !showForms">{{ showForms ? '隐藏表单' : '显示表单' }}</el-button>
      <CachedDraft v-if="showForms" label="v-if 草稿" /><CachedDraft v-show="showForms" label="v-show 草稿" />
    </ExampleSection>
    <ExampleSection title="稳定 ID 与索引 key" description="先修改甲的草稿，再反转列表。左侧草稿跟随条目，右侧草稿留在原位置。">
      <el-button @click="items = [...items].reverse()">反转列表</el-button>
      <div class="identity-grid"><div><h3>稳定 ID</h3><IdentityInput v-for="item in items" :key="item.id" :label="item.label" /></div><div><h3>索引（反例）</h3><IdentityInput v-for="(item, index) in items" :key="index" :label="item.label" /></div></div>
    </ExampleSection>
  </ExamplePage>
</template>
<style scoped>
.identity-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}h3{font-size:14px;color:#556071}input{padding:8px;border:1px solid #dcdfe6;border-radius:5px}@media(max-width:600px){.identity-grid{grid-template-columns:1fr}}
</style>
