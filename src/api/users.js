import http from './http'

export const userApi = {
  list: () => http.get('/users'),
  create: (payload) => http.post('/users', payload),
  update: (id, payload) => http.put(`/users/${id}`, payload),
  remove: (id) => http.delete(`/users/${id}`),
}
