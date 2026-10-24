import http from './http'

export const userApi = {
  list: () => http.get('/users'),
}
