<script setup>
import { computed, ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import CounterPanel from '../../components/examples/CounterPanel.vue'
import MessagePanel from '../../components/examples/MessagePanel.vue'

const activeTab = ref('counter')
const activeComponent = computed(() => activeTab.value === 'counter' ? CounterPanel : MessagePanel)
const code = `<script setup>
import { computed, ref } from 'vue'
import CounterPanel from './CounterPanel.vue'
import MessagePanel from './MessagePanel.vue'

const activeTab = ref('counter')
const activeComponent = computed(() =>
  activeTab.value === 'counter' ? CounterPanel : MessagePanel,
)
<\/script>

<template>
  <button @click="activeTab = 'counter'">计数器</button>
  <button @click="activeTab = 'message'">留言</button>
  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>
</template>`

const resources = [
  { label: '动态组件', url: 'https://vuejs.org/guide/essentials/component-basics.html#dynamic-components' },
  { label: 'KeepAlive', url: 'https://vuejs.org/guide/built-ins/keep-alive.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="COMPONENTS · DYNAMIC COMPONENTS"
    title="动态组件与 KeepAlive"
    description="用 component :is 在多个组件间切换，并用 KeepAlive 缓存已离开的组件状态。"
    :concepts="['component :is 可接收组件对象或注册名称，动态切换展示内容。', 'KeepAlive 缓存非活动组件实例，而不是销毁它。', '输入计数或留言后切换标签，再切回验证状态被保留。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>多面板切换</h2><p>先改动组件状态，再切换到另一个面板并返回。</p></div><el-tag effect="plain">component :is · KeepAlive</el-tag></div>
      <div class="playground-content">
        <el-radio-group v-model="activeTab" aria-label="选择动态组件">
          <el-radio-button label="counter">计数器</el-radio-button>
          <el-radio-button label="message">留言</el-radio-button>
        </el-radio-group>
        <KeepAlive><component :is="activeComponent" /></KeepAlive>
      </div>
    </section>
  </ExamplePage>
</template>
