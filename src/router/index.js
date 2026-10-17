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
        {
          path: 'examples/reactivity',
          name: 'example-reactivity',
          component: () => import('../views/examples/ReactivityView.vue'),
          meta: { title: '响应式与 Composition API', menuPath: '/examples/reactivity' },
        },
        {
          path: 'examples/lifecycle',
          name: 'example-lifecycle',
          component: () => import('../views/examples/LifecycleView.vue'),
          meta: { title: '生命周期与侦听', menuPath: '/examples/lifecycle' },
        },
        {
          path: 'examples/components',
          name: 'example-components',
          component: () => import('../views/examples/ComponentsView.vue'),
          meta: { title: '组件通信', menuPath: '/examples/components' },
        },
        {
          path: 'examples/pinia',
          name: 'example-pinia',
          component: () => import('../views/examples/PiniaView.vue'),
          meta: { title: 'Pinia 状态管理', menuPath: '/examples/pinia' },
        },
        {
          path: 'examples/router/:demoId?',
          name: 'example-router',
          component: () => import('../views/examples/RouterView.vue'),
          meta: { title: 'Vue Router', menuPath: '/examples/router' },
        },
        {
          path: 'examples/forms',
          name: 'example-forms',
          component: () => import('../views/examples/FormsView.vue'),
          meta: { title: '表单与校验', menuPath: '/examples/forms' },
        },
        {
          path: 'examples/directives',
          name: 'example-directives',
          component: () => import('../views/examples/DirectivesView.vue'),
          meta: { title: '自定义指令', menuPath: '/examples/directives' },
        },
        {
          path: 'examples/api',
          name: 'example-api',
          component: () => import('../views/examples/ApiView.vue'),
          meta: { title: 'API 请求', menuPath: '/examples/api' },
        },
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
