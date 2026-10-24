<script setup>
import { effectScope, onUnmounted, reactive, ref, shallowRef, toRef, toRefs, watch, watchEffect } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'

const state = reactive({ count: 0, name: '小林' })
const { count: snapshot } = state
const linkedCount = toRef(state, 'count')
const { name } = toRefs(state)
const deep = ref({ count: 0 })
const shallow = shallowRef({ count: 0 })
const deepUpdates = ref(0)
const shallowUpdates = ref(0)
watch(() => deep.value.count, () => deepUpdates.value++)
watch(() => shallow.value.count, () => shallowUpdates.value++)

const scopeCount = ref(0)
const scopeEvents = ref([])
const scopeRuns = ref(0)
const scopeActive = ref(false)
const records = []
let scope

function startScope() {
  scope?.stop()
  scope = effectScope()
  scope.run(() => {
    watchEffect(() => {
      records.push(`观察到 count = ${scopeCount.value}`)
      scopeEvents.value = records.slice(-5)
      scopeRuns.value = records.length
    })
  })
  scopeActive.value = true
}

function stopScope() {
  scope?.stop()
  scope = undefined
  scopeActive.value = false
}

onUnmounted(stopScope)

const scopeCode = `import { effectScope, ref, watchEffect } from 'vue'

const count = ref(0)
const scope = effectScope()
scope.run(() => {
  watchEffect(() => console.log('count:', count.value))
})

count.value++ // 会运行副作用
scope.stop()
count.value++ // 不再运行该副作用`
</script>

<template>
  <ExamplePage eyebrow="REACTIVITY · ADVANCED" title="响应式进阶" description="区分值拷贝与响应式引用，并观察浅层与深层状态的更新边界。"
    :concepts="['ref 可承载基本值或对象，普通对象会被深层转换；脚本中通过 .value 读写。', 'reactive 返回代理对象；解构基本类型得到当前值，toRef / toRefs 保留与原属性的联系。', 'shallowRef 只追踪 .value 的替换，适合不可变数据或外部系统对象。', 'effectScope 将其中创建的侦听和计算副作用收集在一起，可统一停止。']"
    :code="`const state = reactive({ count: 0 })
const { count } = state // 当前数值的拷贝
const linkedCount = toRef(state, 'count')
const { name } = toRefs(state)
// 不要替换 reactive 变量并期待旧引用继续关联新对象。`"
    :resources="[{ label: '响应式 API', url: 'https://vuejs.org/api/reactivity-advanced.html' }]">
    <ExampleSection title="解构与 toRef / toRefs" description="修改原对象或关联引用，普通解构值始终保留初始值。">
      <div class="demo-row"><el-button @click="state.count++">原对象 +1</el-button><el-button @click="linkedCount++">toRef +1</el-button></div>
      <div class="demo-output">state.count = {{ state.count }} · 普通解构 = {{ snapshot }} · toRef = {{ linkedCount }}</div>
      <label for="linked-name">toRefs 关联姓名</label><el-input id="linked-name" v-model="name" /><p class="demo-muted">原对象姓名：{{ state.name }}</p>
    </ExampleSection>
    <ExampleSection title="ref 与 shallowRef" description="下面只统计对象属性的侦听通知，避免其他界面更新掩盖浅层引用的行为。"
      :code="`watch(() => deep.value.count, () => deepUpdates.value++)
watch(() => shallow.value.count, () => shallowUpdates.value++)
deep.value.count++ // 通知侦听器
shallow.value.count++ // 不通知
shallow.value = { count: shallow.value.count + 1 } // 替换后通知`">
      <div class="demo-row"><el-button @click="deep.count++">深层属性 +1</el-button><el-button @click="shallow.count++">浅层属性 +1</el-button><el-button @click="shallow = { count: shallow.count + 1 }">替换浅层对象 +1</el-button></div>
      <div class="demo-output" aria-live="polite">深层通知次数：{{ deepUpdates }} · 浅层通知次数：{{ shallowUpdates }}</div>
    </ExampleSection>
    <ExampleSection title="effectScope：成组管理副作用" description="启动后修改计数会记录观察结果；停止后继续修改，记录不会再增加。离开页面也会停止作用域。" :code="scopeCode">
      <div class="demo-row"><el-button :disabled="scopeActive" @click="startScope">启动观察</el-button><el-button :disabled="!scopeActive" @click="stopScope">停止观察</el-button><el-button @click="scopeCount++">计数 +1</el-button></div>
      <div class="demo-output" role="status">当前 count：{{ scopeCount }} · 观察状态：{{ scopeActive ? '运行中' : '已停止' }} · 运行 {{ scopeRuns }} 次</div>
      <ul v-if="scopeEvents.length"><li v-for="(event, index) in scopeEvents" :key="index">{{ event }}</li></ul>
    </ExampleSection>
  </ExamplePage>
</template>
