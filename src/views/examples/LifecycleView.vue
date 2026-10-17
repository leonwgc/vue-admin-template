<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const seconds = ref(0)
const events = ref([])
const watchedValue = ref('Composition API')
const watchMessage = ref('修改内容，观察 watch 的反馈。')
let timerId

function logEvent(event) {
  events.value.unshift(`${new Date().toLocaleTimeString('zh-CN')} · ${event}`)
  events.value = events.value.slice(0, 5)
}

function startTimer() {
  if (timerId) return
  timerId = window.setInterval(() => {
    seconds.value += 1
  }, 1000)
  logEvent('计时器已启动')
}

function stopTimer() {
  if (!timerId) return
  window.clearInterval(timerId)
  timerId = undefined
  logEvent('计时器已停止')
}

watch(watchedValue, (value) => {
  watchMessage.value = `watch 观察到内容更新为「${value}」`
  logEvent('watch：演示内容已更新')
})

onMounted(() => logEvent('onMounted：组件已挂载'))
onUnmounted(() => {
  if (timerId) window.clearInterval(timerId)
})

const code = `<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const seconds = ref(0)
const watchedValue = ref('Composition API')
let timerId

function startTimer() {
  if (timerId) return
  timerId = window.setInterval(() => {
    seconds.value += 1
  }, 1000)
}

watch(watchedValue, (value) => {
  console.log('输入更新为', value)
})

onMounted(() => console.log('组件已挂载'))
onUnmounted(() => window.clearInterval(timerId))
<\/script>

<template>
  <p>计时：{{ seconds }} 秒</p>
  <button @click="startTimer">启动计时器</button>
  <input v-model="watchedValue" />
</template>`

const resources = [
  { label: '生命周期钩子', url: 'https://vuejs.org/guide/essentials/lifecycle.html' },
  { label: '侦听器', url: 'https://vuejs.org/guide/essentials/watchers.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="VUE FOUNDATION · LIFECYCLE"
    title="生命周期与侦听"
    description="观察组件挂载时机，并在组件卸载时清理计时器等副作用。"
    :concepts="['onMounted 在组件挂载后运行，适合启动浏览器相关工作。', 'onUnmounted 用于释放计时器、事件监听等资源。', '离开此页时计时器会自动清理，避免后台任务残留。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>组件生命周期实验</h2><p>启动计时器后切换页面，再返回观察卸载清理效果。</p></div><el-tag type="warning" effect="plain">onMounted / onUnmounted</el-tag></div>
      <div class="playground-content">
        <div class="timer-display"><span class="demo-label">组件已挂载</span><strong class="demo-value">{{ seconds }}<small> 秒</small></strong></div>
        <div class="demo-row"><el-button type="primary" :disabled="Boolean(timerId)" @click="startTimer">启动计时器</el-button><el-button :disabled="!timerId" @click="stopTimer">停止</el-button><span class="demo-muted">切换到其他菜单会卸载本页面。</span></div>
        <div class="demo-divider"></div>
        <div><label class="demo-label" for="watched-value">watch · 侦听输入变化</label><el-input id="watched-value" v-model="watchedValue" /><div class="demo-output">{{ watchMessage }}</div></div>
        <div class="demo-divider"></div>
        <div><span class="demo-label">生命周期事件</span><div v-if="events.length" class="event-list"><div v-for="event in events" :key="event" class="event-row"><el-icon><CircleCheck /></el-icon>{{ event }}</div></div><p v-else class="demo-muted">挂载时记录的事件会显示在这里。</p></div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.timer-display{display:flex;align-items:center;gap:22px;padding:16px;border-radius:9px;background:#f7f8fc}
.timer-display .demo-label{margin:0}
.timer-display .demo-value small{color:#8f98a8;font:400 11px 'Noto Sans SC',sans-serif}
.event-list{display:grid;gap:7px}
.event-row{display:flex;align-items:center;gap:7px;color:#697587;font-size:14px}
.event-row .el-icon{color:#28a97c}
</style>
