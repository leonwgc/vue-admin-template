import { onScopeDispose, ref, unref, watch } from 'vue'
import { learningApi } from '../api/learning'

// 每次调用创建独立状态；支持 ref 或 getter，兼容 Vue 3.2。
export function useTopicSearch(options) {
  const result = ref({ items: [], total: 0 })
  const status = ref('idle')
  const error = ref('')
  const revision = ref(0)
  let controller
  let requestId = 0
  const readOptions = () => (
    typeof options === 'function' ? options() : unref(options)
  )

  function cancel() {
    requestId++
    controller?.abort()
    status.value = 'cancelled'
  }

  watch(
    [readOptions, revision],
    async ([params], oldValue, onCleanup) => {
      const id = ++requestId
      controller = new AbortController()
      const current = controller
      onCleanup(() => current.abort())
      status.value = 'loading'
      error.value = ''
      result.value = { items: [], total: 0 }
      try {
        const data = await learningApi.search(params, current.signal)
        if (id !== requestId) return
        result.value = data
        status.value = data.total ? 'success' : 'empty'
      } catch (cause) {
        if (id !== requestId || current.signal.aborted) return
        error.value = cause.response?.data?.message || cause.message || '请求失败'
        status.value = 'error'
      }
    },
    { immediate: true },
  )

  onScopeDispose(() => {
    requestId++
    controller?.abort()
  })

  return {
    result,
    status,
    error,
    cancel,
    reload: () => revision.value++,
  }
}
