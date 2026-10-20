<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import { useExamplesStore } from '../../stores/examples'

const store = useExamplesStore()
const newTodo = ref('')
const code = `// stores/examples.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamplesStore = defineStore('examples', () => {
  const count = ref(0)
  const todos = ref([])
  const doubledCount = computed(() => count.value * 2)
  const completedCount = computed(
    () => todos.value.filter((todo) => todo.done).length,
  )

  function increment() {
    count.value += 1
  }

  function addTodo(text) {
    const value = text.trim()
    if (value) todos.value.push({ id: Date.now(), text: value, done: false })
  }

  function toggleTodo(id) {
    const todo = todos.value.find((item) => item.id === id)
    if (todo) todo.done = !todo.done
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    count, todos, doubledCount, completedCount,
    increment, addTodo, toggleTodo, removeTodo,
  }
})

// PiniaView.vue
<script setup>
import { ref } from 'vue'
import { useExamplesStore } from '../../stores/examples'
const store = useExamplesStore()
const newTodo = ref('')

function addTodo() {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
<\/script>

<template>
  <p>{{ store.count }} × 2 = {{ store.doubledCount }}</p>
  <button @click="store.increment">增加</button>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button :disabled="!newTodo.trim()">添加待办</button>
  </form>
  <ul>
    <li v-for="todo in store.todos" :key="todo.id">
      <label><input
        type="checkbox"
        :checked="todo.done"
        @change="store.toggleTodo(todo.id)"
      />{{ todo.text }}</label>
      <button @click="store.removeTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>`

const resources = [
  { label: 'Pinia 核心概念', url: 'https://pinia.vuejs.org/core-concepts/' },
  { label: 'State', url: 'https://pinia.vuejs.org/core-concepts/state.html' },
  { label: 'Getters 与 Actions', url: 'https://pinia.vuejs.org/core-concepts/getters.html' },
]

function addTodo() {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <ExamplePage
    eyebrow="STATE MANAGEMENT · PINIA"
    title="Pinia 状态管理"
    description="使用独立的 Pinia store 管理可复用状态；本示例只保存在当前内存中，不影响登录和用户管理数据。"
    :concepts="['state 保存共享状态，组件可直接读取和更新。', 'getter（此处为 computed）派生状态。', 'action 封装状态变化逻辑，示例切页保留，刷新后重置。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>Store 计数器</h2><p>修改共享 state，观察 computed getter 同步变化。</p></div><el-tag type="success" effect="plain">state · getter · action</el-tag></div>
      <div class="playground-content">
        <div class="demo-row"><div><span class="demo-label">state · count</span><strong class="demo-value">{{ store.count }}</strong></div><div class="demo-divider vertical-divider"></div><div><span class="demo-label">getter · doubledCount</span><strong class="demo-value">{{ store.doubledCount }}</strong></div><el-button type="primary" class="count-button" @click="store.increment">调用 increment action</el-button></div>
      </div>
    </section>
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>Store 待办列表</h2><p>输入任务，尝试新增、完成和删除操作。</p></div><el-tag effect="plain">{{ store.completedCount }} / {{ store.todos.length }} 已完成</el-tag></div>
      <div class="playground-content">
        <el-form class="demo-row" @submit.prevent="addTodo"><el-input v-model="newTodo" aria-label="待办内容" placeholder="输入一项待办" @keyup.enter="addTodo" /><el-button type="primary" :disabled="!newTodo.trim()" @click="addTodo">添加</el-button></el-form>
        <div v-for="todo in store.todos" :key="todo.id" class="todo-row" :class="{ 'is-done': todo.done }">
          <el-checkbox :model-value="todo.done" :aria-label="`完成${todo.text}`" @change="store.toggleTodo(todo.id)" />
          <span class="todo-text">{{ todo.text }}</span>
          <el-button text type="danger" aria-label="删除待办" @click="store.removeTodo(todo.id)">删除</el-button>
        </div>
        <el-empty v-if="!store.todos.length" description="添加一项待办开始体验" :image-size="64" />
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.vertical-divider{width:1px;height:40px;margin:0 4px}
.count-button{margin-left:auto}
.demo-row :deep(.el-input){max-width:320px}
.todo-row :deep(.el-checkbox){margin-right:0}
@media(max-width:600px){.count-button{margin-left:0}.demo-row{align-items:flex-start}}
</style>
