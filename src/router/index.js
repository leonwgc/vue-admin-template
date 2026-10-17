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
          path: 'examples/quick-start',
          name: 'example-quick-start',
          component: () => import('../views/examples/QuickStartView.vue'),
          meta: { title: '快速开始与 SFC', menuPath: '/examples/quick-start' },
        },
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
          path: 'examples/templates',
          name: 'example-templates',
          component: () => import('../views/examples/TemplatesView.vue'),
          meta: { title: '模板语法', menuPath: '/examples/templates' },
        },
        {
          path: 'examples/events',
          name: 'example-events',
          component: () => import('../views/examples/EventsView.vue'),
          meta: { title: '事件处理', menuPath: '/examples/events' },
        },
        {
          path: 'examples/components',
          name: 'example-components',
          component: () => import('../views/examples/ComponentsView.vue'),
          meta: { title: '组件通信', menuPath: '/examples/components' },
        },
        {
          path: 'examples/component-v-model',
          name: 'example-component-v-model',
          component: () => import('../views/examples/ComponentVModelView.vue'),
          meta: { title: '组件 v-model', menuPath: '/examples/component-v-model' },
        },
        {
          path: 'examples/dynamic-components',
          name: 'example-dynamic-components',
          component: () => import('../views/examples/DynamicComponentsView.vue'),
          meta: { title: '动态组件', menuPath: '/examples/dynamic-components' },
        },
        {
          path: 'examples/provide-inject',
          name: 'example-provide-inject',
          component: () => import('../views/examples/ProvideInjectView.vue'),
          meta: { title: 'provide / inject', menuPath: '/examples/provide-inject' },
        },
        {
          path: 'examples/composables',
          name: 'example-composables',
          component: () => import('../views/examples/ComposablesView.vue'),
          meta: { title: 'Composables 逻辑复用', menuPath: '/examples/composables' },
        },
        {
          path: 'examples/transitions',
          name: 'example-transitions',
          component: () => import('../views/examples/TransitionsView.vue'),
          meta: { title: 'Transition 过渡效果', menuPath: '/examples/transitions' },
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
