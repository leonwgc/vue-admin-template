import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const username = ref(localStorage.getItem('demo-user') || '')
  const isLoggedIn = computed(() => Boolean(username.value))

  function login(account, password) {
    if (account !== 'admin' || password !== 'admin') throw new Error('用户名或密码错误')
    username.value = account
    localStorage.setItem('demo-user', account)
    localStorage.setItem('demo-token', 'local-demo-token')
  }

  function logout() {
    username.value = ''
    localStorage.removeItem('demo-user')
    localStorage.removeItem('demo-token')
  }

  return { username, isLoggedIn, login, logout }
})
