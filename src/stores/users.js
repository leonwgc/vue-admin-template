import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { userApi } from '../api/users'

export const useUsersStore = defineStore('users', () => {
  const users = ref([])
  const loading = ref(false)
  const error = ref('')
  const searchText = ref('')
  const currentPage = ref(1)
  const pageSize = ref(6)

  const filteredUsers = computed(() => {
    const keyword = searchText.value.trim().toLowerCase()
    if (!keyword) return users.value
    return users.value.filter((user) => [user.name, user.email, user.role].some((value) => value.toLowerCase().includes(keyword)))
  })
  const pageUsers = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    return filteredUsers.value.slice(start, start + pageSize.value)
  })

  async function fetchUsers() {
    loading.value = true
    error.value = ''
    try {
      users.value = await userApi.list()
    } catch (cause) {
      error.value = cause.message || '用户列表加载失败'
      throw cause
    } finally {
      loading.value = false
    }
  }

  async function createUser(payload) {
    const user = await userApi.create(payload)
    users.value = [user, ...users.value]
    currentPage.value = 1
    return user
  }

  async function updateUser(id, payload) {
    const user = await userApi.update(id, payload)
    users.value = users.value.map((item) => item.id === id ? user : item)
    return user
  }

  async function deleteUser(id) {
    await userApi.remove(id)
    users.value = users.value.filter((user) => user.id !== id)
    if (currentPage.value > 1 && pageUsers.value.length === 0) currentPage.value -= 1
  }

  function setSearchText(value) {
    searchText.value = value
    currentPage.value = 1
  }

  return { users, loading, error, searchText, currentPage, pageSize, filteredUsers, pageUsers, fetchUsers, createUser, updateUser, deleteUser, setSearchText }
})
