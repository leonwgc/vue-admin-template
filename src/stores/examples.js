import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamplesStore = defineStore('examples', () => {
  const count = ref(0)
  const todos = ref([
    { id: 1, text: '理解 Pinia state', done: true },
    { id: 2, text: '调用 action 更新状态', done: false },
  ])
  const doubledCount = computed(() => count.value * 2)
  const completedCount = computed(() => todos.value.filter((todo) => todo.done).length)

  function increment() {
    count.value += 1
  }

  function addTodo(text) {
    const trimmedText = text.trim()
    if (!trimmedText) return
    todos.value.push({ id: Date.now(), text: trimmedText, done: false })
  }

  function toggleTodo(id) {
    const todo = todos.value.find((item) => item.id === id)
    if (todo) todo.done = !todo.done
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return { count, todos, doubledCount, completedCount, increment, addTodo, toggleTodo, removeTodo }
})
