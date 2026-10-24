import axios from 'axios'
import { ElMessage } from 'element-plus'
import { mockAdapter } from './mock'

const http = axios.create({
  baseURL: '/api',
  timeout: 8000,
  adapter: mockAdapter,
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (axios.isCancel(error)) return Promise.reject(error)
    const message = error.response?.data?.message || error.message || '请求失败'
    ElMessage.error(message)
    return Promise.reject(error)
  },
)

export default http
