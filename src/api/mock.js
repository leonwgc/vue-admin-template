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

function response(config, data, status = 200) {
  return { config, data, status, statusText: 'OK', headers: {}, request: {} }
}

export async function mockAdapter(config) {
  await wait()
  const method = config.method.toLowerCase()
  const path = config.url.replace(/^\/api/, '').replace(/\/$/, '')
  if (path === '/users' && method === 'get') return response(config, readUsers())
  return Promise.reject({ config, message: '接口不存在', response: { data: { message: '接口不存在' }, status: 404 } })
}
