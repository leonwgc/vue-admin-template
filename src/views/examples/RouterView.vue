<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ExamplePage from '../../components/ExamplePage.vue'

const route = useRoute()
const router = useRouter()
const demoId = computed(() => route.params.demoId || 'overview')
const keyword = computed(() => route.query.keyword || '（未设置）')

function setKeyword(value) {
  router.push({ name: 'example-router', params: { demoId: demoId.value }, query: { ...route.query, keyword: value } })
}

const code = `// router/index.js
{
  path: 'examples/router/:demoId?',
  name: 'example-router',
  component: () => import('../views/examples/RouterView.vue'),
}

// RouterView.vue
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function openProfile() {
  router.push({
    name: 'example-router',
    params: { demoId: 'profile' },
    query: { keyword: 'Vue' },
  })
}
<\/script>

<template>
  <RouterLink :to="{ name: 'example-router',
    params: { demoId: 'settings' },
    query: { keyword: 'Router' } }">
    设置
  </RouterLink>
  <button @click="openProfile">个人资料</button>
  <p>params: {{ route.params.demoId }}</p>
  <p>query: {{ route.query.keyword }}</p>
</template>`

const resources = [
  { label: 'Vue Router 指南', url: 'https://router.vuejs.org/guide/' },
  { label: '动态路由匹配', url: 'https://router.vuejs.org/guide/essentials/dynamic-matching.html' },
  { label: '编程式导航', url: 'https://router.vuejs.org/guide/essentials/navigation.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="ROUTING · VUE ROUTER"
    title="Vue Router"
    description="在示例路由内使用 RouterLink 和编程式导航，并观察动态 params 与 query 参数。"
    :concepts="['RouterLink 适合声明式页面跳转。', 'useRoute 读取当前 params 和 query。', 'useRouter 执行编程式跳转；本示例不改动其他页面的路由。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>路由参数实验</h2><p>使用链接切换动态路由参数，再更新 query 字符串。</p></div><el-tag type="warning" effect="plain">params · query</el-tag></div>
      <div class="playground-content">
        <div class="route-state"><div><span class="demo-label">route.params.demoId</span><strong>{{ demoId }}</strong></div><div><span class="demo-label">route.query.keyword</span><strong>{{ keyword }}</strong></div></div>
        <div class="demo-divider"></div>
        <span class="demo-label">RouterLink · 声明式导航</span>
        <div class="demo-row route-links">
          <RouterLink v-for="id in ['overview', 'profile', 'settings']" :key="id" :to="{ name: 'example-router', params: { demoId: id }, query: { keyword } }" class="route-link">{{ id }}</RouterLink>
        </div>
        <span class="demo-label">router.push · 编程式更新 query</span>
        <div class="demo-row"><el-button v-for="value in ['Vue', 'Pinia', 'Router']" :key="value" size="small" :type="keyword === value ? 'primary' : 'default'" @click="setKeyword(value)">{{ value }}</el-button></div>
        <div class="demo-output">当前完整地址：{{ route.fullPath }}</div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.route-state{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.route-state>div{display:grid;gap:7px;padding:12px;border-radius:8px;background:#f7f8fc}
.route-state strong{color:#465269;font-size:14px;overflow-wrap:anywhere}
.route-link{padding:7px 10px;border:1px solid #e9edf3;border-radius:7px;color:#697587;font-size:14px}
.route-link.router-link-active{border-color:#dce1ff;background:#f1f3ff;color:#5d70e2}
</style>
