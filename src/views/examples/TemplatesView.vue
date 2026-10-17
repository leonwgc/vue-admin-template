<script setup>
import { computed, ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const filter = ref('')
const newTask = ref('')
const tasks = ref([
  { id: 1, title: '学习 v-if 条件渲染', done: true },
  { id: 2, title: '通过 v-for 渲染列表', done: false },
  { id: 3, title: '用 class 绑定标记完成项', done: false },
])
const filteredTasks = computed(() => {
  const keyword = filter.value.trim().toLowerCase()
  return tasks.value.filter((task) => task.title.toLowerCase().includes(keyword))
})

function addTask() {
  const title = newTask.value.trim()
  if (!title) return
  tasks.value.push({ id: Date.now(), title, done: false })
  newTask.value = ''
}

const code = `<script setup>
import { computed, ref } from 'vue'

const filter = ref('')
const tasks = ref([{ id: 1, title: '学习 v-if', done: false }])
const visibleTasks = computed(() =>
  tasks.value.filter((task) => task.title.includes(filter.value)),
)

function addTask(title) {
  tasks.value.push({ id: Date.now(), title, done: false })
}
<\/script>

<template>
  <input v-model="filter" placeholder="筛选任务" />
  <button :disabled="!filter" @click="addTask(filter)">添加筛选词</button>
  <p v-if="!visibleTasks.length">没有匹配项</p>
  <ul v-else>
    <li v-for="task in visibleTasks" :key="task.id"
        :class="{ done: task.done }">
      <input v-model="task.done" type="checkbox" />
      {{ task.title }}
    </li>
  </ul>
</template>`

const resources = [
  { label: '模板语法与绑定', url: 'https://vuejs.org/guide/essentials/template-syntax.html' },
  { label: '条件渲染', url: 'https://vuejs.org/guide/essentials/conditional.html' },
  { label: '列表渲染', url: 'https://vuejs.org/guide/essentials/list.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="ESSENTIALS · TEMPLATE SYNTAX"
    title="模板语法与列表渲染"
    description="在同一个任务列表中练习文本/属性绑定、条件渲染、列表渲染和动态 class/style。"
    :concepts="['{{ }} 插值读取响应式文本；v-bind（:）绑定属性和 class/style。', 'v-if/v-else 控制条件分支，v-for 配合稳定的 :key 渲染列表。', 'v-model 绑定输入和复选框；computed 派生筛选结果。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>模板语法任务板</h2><p>新增任务、筛选文字、标记完成，观察列表和样式随状态变化。</p></div><el-tag effect="plain">v-if · v-for · v-bind</el-tag></div>
      <div class="playground-content">
        <el-form class="demo-row" @submit.prevent="addTask">
          <el-input v-model="newTask" aria-label="新任务" placeholder="输入新任务" />
          <el-button type="primary" :disabled="!newTask.trim()" @click="addTask">添加任务</el-button>
        </el-form>
        <div class="demo-row">
          <el-input v-model="filter" aria-label="筛选任务" placeholder="筛选任务内容" clearable />
          <span class="demo-muted">匹配 {{ filteredTasks.length }} 项</span>
        </div>
        <ul v-if="filteredTasks.length" class="task-list">
          <li v-for="task in filteredTasks" :key="task.id" class="task-item" :class="{ 'is-done': task.done }" :style="{ borderLeftColor: task.done ? '#35ae81' : '#7988ed' }">
            <el-checkbox v-model="task.done" :aria-label="`完成${task.title}`" />
            <span>{{ task.title }}</span>
            <el-tag v-if="task.done" type="success" effect="plain">已完成</el-tag>
            <el-tag v-else effect="plain">进行中</el-tag>
          </li>
        </ul>
        <el-empty v-else description="没有匹配的任务" :image-size="72" />
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.task-list{display:grid;gap:9px;margin:0;padding:0;list-style:none}
.task-item{display:flex;align-items:center;gap:10px;padding:11px;border:1px solid #edf0f5;border-left:3px solid;border-radius:8px}
.task-item>span{flex:1;color:#556071;font-size:14px}
.task-item.is-done>span{color:#98a1af;text-decoration:line-through}
.playground-content :deep(.el-form .el-input),.playground-content>.demo-row .el-input{max-width:330px}
</style>
