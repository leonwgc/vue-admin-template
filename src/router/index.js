import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: import.meta.env.PROD
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        { path: '', redirect: { name: 'example-quick-start' } },
        {
          path: 'examples/reactivity-advanced',
          name: 'example-reactivity-advanced',
          component: () => import('../views/examples/ReactivityAdvancedView.vue'),
          meta: { title: '响应式进阶', menuPath: '/examples/reactivity-advanced' },
        },
        {
          path: 'examples/watchers',
          name: 'example-watchers',
          component: () => import('../views/examples/WatchersView.vue'),
          meta: { title: '计算属性与侦听器', menuPath: '/examples/watchers' },
        },
        {
          path: 'examples/dom-identity',
          name: 'example-dom-identity',
          component: () => import('../views/examples/DomIdentityView.vue'),
          meta: { title: 'DOM 更新与组件身份', menuPath: '/examples/dom-identity' },
        },
        {
          path: 'examples/component-boundaries',
          name: 'example-component-boundaries',
          component: () => import('../views/examples/ComponentAdvancedView.vue'),
          meta: { title: '组件接口与属性透传', menuPath: '/examples/component-boundaries' },
        },
        {
          path: 'examples/builtins',
          name: 'example-builtins',
          component: () => import('../views/examples/BuiltinsView.vue'),
          meta: { title: 'KeepAlive 与异步组件', menuPath: '/examples/builtins' },
        },
        {
          path: 'examples/request-advanced',
          name: 'example-request-advanced',
          component: () => import('../views/examples/RequestAdvancedView.vue'),
          meta: { title: '请求竞态与 Composables', menuPath: '/examples/request-advanced' },
        },
        {
          path: 'examples/pinia-advanced',
          name: 'example-pinia-advanced',
          component: () => import('../views/examples/PiniaAdvancedView.vue'),
          meta: { title: 'Pinia 进阶与状态边界', menuPath: '/examples/pinia-advanced' },
        },
        {
          path: 'examples/safety',
          name: 'example-safety',
          component: () => import('../views/examples/SafetyView.vue'),
          meta: { title: '错误、安全与可访问性', menuPath: '/examples/safety' },
        },
        {
          path: 'examples/engineering',
          name: 'example-engineering',
          component: () => import('../views/examples/EngineeringView.vue'),
          meta: { title: 'SFC 样式与工程实践', menuPath: '/examples/engineering' },
        },
        {
          path: 'examples/performance',
          name: 'example-performance',
          component: () => import('../views/examples/PerformanceView.vue'),
          meta: { title: '渲染原理与性能', menuPath: '/examples/performance' },
        },
        {
          path: 'examples/router-advanced/:lessonId?',
          name: 'example-router-advanced',
          component: () => import('../views/examples/RouterAdvancedView.vue'),
          meta: { title: '路由复用与离开守卫', menuPath: '/examples/router-advanced' },
          children: [
            { path: 'notes', component: () => import('../components/examples/RouteNotes.vue') },
            { path: ':pathMatch(.*)*', component: () => import('../components/examples/LessonNotFound.vue') },
          ],
        },
        {
          path: 'examples/quick-start',
          name: 'example-quick-start',
          component: () => import('../views/examples/QuickStartView.vue'),
          meta: { title: '快速开始与 SFC', menuPath: '/examples/quick-start' },
        },
        {
          path: 'examples/project-flow',
          name: 'example-project-flow',
          component: () => import('../views/examples/ProjectFlowView.vue'),
          meta: { title: '完整功能链路', menuPath: '/examples/project-flow' },
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
          path: 'examples/slots',
          name: 'example-slots',
          component: () => import('../views/examples/SlotsView.vue'),
          meta: { title: '组件插槽', menuPath: '/examples/slots' },
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
          meta: { title: 'Transition 与列表过渡', menuPath: '/examples/transitions' },
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

router.afterEach((to) => {
  document.title = `${to.meta.title || 'Vue 3 示例'} · Vue Admin 学习项目`
})

export default router
