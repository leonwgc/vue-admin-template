const STORAGE_KEY = 'vue-admin-users'
const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms))

const initialUsers = [
  { id: 1001, name: '林晓', email: 'lin.xiao@example.com', role: '管理员', status: '启用', createdAt: '2024-03-12 09:30' },
  { id: 1002, name: '陈远', email: 'chen.yuan@example.com', role: '编辑', status: '启用', createdAt: '2024-03-18 14:10' },
  { id: 1003, name: '周宁', email: 'zhou.ning@example.com', role: '访客', status: '禁用', createdAt: '2024-04-02 11:45' },
  { id: 1004, name: '许安', email: 'xu.an@example.com', role: '编辑', status: '启用', createdAt: '2024-04-15 16:20' },
  { id: 1005, name: '沈可', email: 'shen.ke@example.com', role: '访客', status: '启用', createdAt: '2024-05-06 10:05' },
  { id: 1006, name: '顾言', email: 'gu.yan@example.com', role: '编辑', status: '禁用', createdAt: '2024-05-21 13:15' },
  { id: 1007, name: '唐宁', email: 'tang.ning@example.com', role: '访客', status: '启用', createdAt: '2024-06-08 08:50' },
  { id: 1008, name: '叶青', email: 'ye.qing@example.com', role: '编辑', status: '启用', createdAt: '2024-06-24 17:40' },
]

function readUsers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    localStorage.removeItem(STORAGE_KEY)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialUsers))
  return [...initialUsers]
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

function response(config, data, status = 200) {
  return { config, data, status, statusText: 'OK', headers: {}, request: {} }
}

export async function mockAdapter(config) {
  await wait()
  const method = config.method.toLowerCase()
  const path = config.url.replace(/^\/api/, '').replace(/\/$/, '')
  let data

  if (path === '/users' && method === 'get') data = readUsers()
  else if (path === '/users' && method === 'post') {
    const users = readUsers()
    const now = new Date()
    const createdAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    const user = { ...JSON.parse(config.data), id: Date.now(), createdAt }
    saveUsers([user, ...users])
    data = user
  } else {
    const match = path.match(/^\/users\/(\d+)$/)
    if (!match) return Promise.reject({ config, message: '接口不存在', response: { data: { message: '接口不存在' }, status: 404 } })
    const id = Number(match[1])
    if (method === 'put') {
      const users = readUsers()
      const updated = users.map((user) => user.id === id ? { ...user, ...JSON.parse(config.data) } : user)
      saveUsers(updated)
      data = updated.find((user) => user.id === id)
    } else if (method === 'delete') {
      saveUsers(readUsers().filter((user) => user.id !== id))
      data = { success: true }
    } else return Promise.reject({ config, message: '不支持的请求方法', response: { data: { message: '不支持的请求方法' }, status: 405 } })
  }

  return response(config, data)
}
