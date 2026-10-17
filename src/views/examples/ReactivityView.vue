<script setup>
import { computed, reactive, ref, watch } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const count = ref(1)
const person = reactive({ name: '小林' })
const doubled = computed(() => count.value * 2)
const watchMessage = ref('修改计数，观察 watch 的反馈。')

watch(count, (value) => {
  watchMessage.value = `watch 观察到 count 更新为 ${value}`
})

const code = `<script setup>
import { computed, reactive, ref, watch } from 'vue'

const count = ref(1)
const person = reactive({ name: '小林' })
const doubled = computed(() => count.value * 2)
const watchMessage = ref('修改计数，观察 watch 的反馈。')

watch(count, (value) => {
  watchMessage.value = 'watch 观察到 count 更新为 ' + value
})
<\/script>

<template>
  <button @click="count -= 1">减少</button>
  <button @click="count += 1">增加</button>
  <p>count: {{ count }} · doubled: {{ doubled }}</p>
  <label>姓名 <input v-model="person.name" /></label>
  <p>你好，{{ person.name }}</p>
  <p>{{ watchMessage }}</p>
</template>`

const resources = [
  { label: '响应式基础', url: 'https://vuejs.org/guide/essentials/reactivity-fundamentals.html' },
  { label: '计算属性', url: 'https://vuejs.org/guide/essentials/computed.html' },
  { label: '侦听器', url: 'https://vuejs.org/guide/essentials/watchers.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="VUE FOUNDATION · REACTIVITY"
    title="响应式与 Composition API"
    description="通过 ref、reactive、computed 和 watch，观察数据变化如何驱动界面更新。"
    :concepts="['ref 适合基本类型及需要整体替换的值。', 'reactive 为对象属性建立响应式追踪。', 'computed 派生状态；watch 在依赖变化时执行副作用。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>响应式数据实验</h2><p>点击按钮或编辑姓名，查看响应式状态与派生值。</p></div><el-tag type="success" effect="plain">Composition API</el-tag></div>
      <div class="playground-content">
        <div class="demo-row">
          <div><span class="demo-label">ref · 当前计数</span><strong class="demo-value">{{ count }}</strong></div>
          <div class="demo-divider vertical-divider"></div>
          <div><span class="demo-label">computed · 计数 × 2</span><strong class="demo-value">{{ doubled }}</strong></div>
          <el-button-group class="counter-actions"><el-button aria-label="减少计数" @click="count -= 1">−</el-button><el-button aria-label="增加计数" type="primary" @click="count += 1">＋</el-button></el-button-group>
        </div>
        <div class="demo-divider"></div>
        <div class="demo-row"><label class="demo-label" for="reactive-name">reactive · 姓名</label><el-input id="reactive-name" v-model="person.name" class="name-input" /><span class="demo-muted">你好，{{ person.name || '访客' }}</span></div>
        <div class="demo-output"><strong>watch：</strong>{{ watchMessage }}</div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.vertical-divider{width:1px;height:45px;margin:0 5px}
.counter-actions{margin-left:auto}
.name-input{max-width:210px}
@media(max-width:600px){.counter-actions{margin-left:0}.demo-row{align-items:flex-start}}
</style>
