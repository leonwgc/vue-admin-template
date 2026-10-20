import { defineStore } from 'pinia'
import { learningApi } from '../api/learning'

export const useLearningCartStore = defineStore('learning-cart', {
  state: () => ({
    items: [],
    loading: false,
    error: '',
  }),

  getters: {
    total: (state) => state.items.reduce(
      (sum, item) => sum + item.quantity,
      0,
    ),
  },

  actions: {
    add(title) {
      const item = this.items.find((entry) => entry.title === title)
      if (item) {
        item.quantity++
      } else {
        this.items.push({ title, quantity: 1 })
      }
    },

    async loadSuggestions() {
      if (this.loading) return
      this.loading = true
      this.error = ''
      try {
        const data = await learningApi.search({ keyword: 'Vue', delay: 400 })
        data.items.forEach((title) => this.add(title))
      } catch (cause) {
        this.error = cause.message || '加载失败'
      } finally {
        this.loading = false
      }
    },
  },
})
