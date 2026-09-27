import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), meta: { title: '登录' } },
    {
      path: '/',
      component: () => import('../layouts/AdminLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'dashboard', component: () => import('../views/DashboardView.vue'), meta: { title: '工作台' } },
        { path: 'users', name: 'users', component: () => import('../views/UsersView.vue'), meta: { title: '用户管理' } },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLoggedIn) return { name: 'login', query: { redirect: to.fullPath } }
  if (to.name === 'login' && auth.isLoggedIn) return { name: 'dashboard' }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || '管理后台'} · Vue Admin 学习项目`
})

export default router
