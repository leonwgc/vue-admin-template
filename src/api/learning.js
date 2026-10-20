import http from './http'

const topics = ['Vue 响应式', 'Vue Router', 'Pinia 状态管理', '组件插槽', 'Composables', 'Teleport', 'KeepAlive']

// 独立、只读的学习 adapter，不读取用户数据，也不写入 localStorage。
function learningAdapter(config) {
  return new Promise((resolve, reject) => {
    const { keyword = '', delay = 500, fail = false, page = 1 } = config.params || {}
    function cancel() {
      clearTimeout(timer)
      config.signal?.removeEventListener('abort', cancel)
      reject(new DOMException('请求已取消', 'AbortError'))
    }
    const timer = setTimeout(() => {
      config.signal?.removeEventListener('abort', cancel)
      if (fail) {
        reject({ config, message: '模拟服务暂时不可用', response: { status: 503, data: { message: '模拟服务暂时不可用' } } })
        return
      }
      const matches = topics.filter((title) => title.toLowerCase().includes(keyword.trim().toLowerCase()))
      resolve({ config, status: 200, statusText: 'OK', headers: {}, data: { items: matches.slice((page - 1) * 3, page * 3), total: matches.length } })
    }, delay)
    if (config.signal?.aborted) cancel()
    else config.signal?.addEventListener('abort', cancel, { once: true })
  })
}

export const learningApi = {
  search: (params, signal) => http.get('/learning/topics', { params, signal, adapter: learningAdapter }),
}
