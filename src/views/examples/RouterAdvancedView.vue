<script setup>
import { computed, ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
const route = useRoute()
const router = useRouter()
const draft = ref('')
const saved = ref('')
const dirty = computed(() => draft.value !== saved.value)
const blocked = ref(false)
const detail = computed(() => route.params.lessonId || 'overview')
function guard() {
  if (dirty.value) { blocked.value = true; return false }
}
onBeforeRouteLeave(guard)
onBeforeRouteUpdate((to, from) => {
  if (to.params.lessonId !== from.params.lessonId) {
    if (guard() === false) return false
    draft.value = ''; saved.value = ''; blocked.value = false
  }
})
function save() { saved.value = draft.value; blocked.value = false }
function discard() { draft.value = saved.value; blocked.value = false }
const code = `// 同一个路由记录切换 params 会复用组件实例。
onBeforeRouteUpdate((to, from) => {
  if (dirty.value) return false
  // 接受导航后按新参数重置表单或加载数据。
})
onBeforeRouteLeave(() => {
  if (dirty.value) return false
})
// 嵌套路由：父组件提供 <RouterView />，children 定义子页面。
{ path: 'router-advanced/:lessonId?', component: LessonView,
  children: [{ path: 'notes', component: NotesView }] }`
</script>
<template>
  <ExamplePage eyebrow="ROUTING · ADVANCED" title="路由复用与离开守卫" description="在隔离的学习路由内观察参数变化、嵌套路由与未保存表单拦截。"
    :concepts="['同一路由记录的参数变化通常复用实例，不能只在 onMounted 中读取参数。', '侦听具体 params，或使用 onBeforeRouteUpdate 响应参数变化，避免侦听整个 route。', 'onBeforeRouteLeave 可返回 false 取消导航；页面内守卫不替代真正的服务端权限检查。', 'children 的相对路径与父级 RouterView 组合形成嵌套界面；本例的未知子路径显示局部 404。']"
    :code="code" :resources="[{ label: '组合式路由守卫', url: 'https://router.vuejs.org/guide/advanced/composition-api.html' }, { label: '嵌套路由', url: 'https://router.vuejs.org/guide/essentials/nested-routes.html' }]">
    <ExampleSection title="复用详情与草稿保护" description="输入草稿后尝试切换主题或离开页面。保存或放弃修改后，可重新执行导航。">
      <div class="demo-row"><el-button v-for="id in ['reactivity', 'components']" :key="id" @click="router.push({ name: 'example-router-advanced', params: { lessonId: id } })">主题：{{ id }}</el-button></div>
      <div class="demo-output">当前参数：{{ detail }} · {{ dirty ? '有未保存修改' : '已保存' }}</div>
      <label for="route-draft">主题笔记</label><el-input id="route-draft" v-model="draft" />
      <div class="demo-row"><el-button @click="save">本地保存</el-button><el-button @click="discard">放弃修改</el-button></div>
      <el-alert v-if="blocked" title="导航已拦截：请保存或放弃修改，然后再次导航。" type="warning" :closable="false" />
    </ExampleSection>
    <ExampleSection title="嵌套路由与局部 404">
      <div class="demo-row"><RouterLink :to="`/examples/router-advanced/${detail}/notes`">打开笔记子路由</RouterLink><RouterLink :to="`/examples/router-advanced/${detail}/missing/page`">打开不存在的子路由</RouterLink></div>
      <RouterView />
    </ExampleSection>
  </ExamplePage>
</template>
