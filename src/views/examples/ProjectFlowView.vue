<script setup>
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import ExamplePage from '../../components/ExamplePage.vue'
import { useTopicSearch } from '../../composables/useTopicSearch'
import { useLearningCartStore } from '../../stores/learningCart'

const route = useRoute()
const router = useRouter()
const keyword = computed(() => typeof route.query.keyword === 'string' ? route.query.keyword : '')
const input = ref(keyword.value)
const page = ref(1)
watch(keyword, (value) => {
  input.value = value
  page.value = 1
}, { flush: 'sync' })

const { result, status, error, reload } = useTopicSearch(() => ({
  keyword: keyword.value,
  page: page.value,
  delay: 300,
}))
const cart = useLearningCartStore()
const { items, total } = storeToRefs(cart)

function search() {
  const value = input.value.trim()
  router.replace({ name: 'example-project-flow', query: value ? { keyword: value } : {} })
}

const code = `// ProjectFlowView.vue：页面只持有输入和页码
const route = useRoute()
const router = useRouter()
const keyword = computed(() => typeof route.query.keyword === 'string'
  ? route.query.keyword : '')
const page = ref(1)
const { result, status, error, reload } = useTopicSearch(() => ({
  keyword: keyword.value,
  page: page.value,
  delay: 300,
}))
const cart = useLearningCartStore()

function search() {
  router.replace({ name: 'example-project-flow',
    query: input.value.trim() ? { keyword: input.value.trim() } : {} })
}

// 模板：按 status 显示加载、空状态、错误和结果；
// 点击结果时调用 cart.add(title)。
// useTopicSearch 负责取消旧请求；learningApi 通过 Axios 读取本地示例数据。`
</script>

<template>
  <ExamplePage
    eyebrow="GETTING STARTED · FEATURE FLOW"
    title="从路由到页面：完整功能链路"
    description="把路由参数、页面状态、Composable、API 请求和 Pinia 串成一个可操作的 Vue 功能。"
    :concepts="['路由 query 保存可分享的筛选条件；未提交的输入与当前页码留在页面本地。', 'Composable 负责异步请求状态及过期请求清理；API 模块统一通过 Axios 发请求。', '多个页面要共用的学习清单交给 Pinia；搜索结果本身不需要放入全局 Store。', '分别呈现加载、无结果、失败和成功；本例只读取隔离的学习数据，不写入用户 Mock。']"
    :code="code"
    :resources="[{ label: '路由与状态', url: 'https://router.vuejs.org/guide/essentials/dynamic-matching.html' }, { label: 'Composables', url: 'https://vuejs.org/guide/reusability/composables.html' }, { label: '状态管理', url: 'https://vuejs.org/guide/scaling-up/state-management.html' }]"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>搜索并加入学习清单</h2><p>输入关键词后提交，观察地址、请求状态和跨页面共享的清单。</p></div></div>
      <div class="playground-content">
        <div class="flow-steps" aria-label="功能数据流">
          <span>路由 query</span><span>页面</span><span>Composable</span><span>API</span><span>Pinia</span>
        </div>
        <form class="demo-row" @submit.prevent="search">
          <el-input v-model="input" aria-label="学习主题关键词" placeholder="试试 Vue、Pinia 或不存在的词" clearable />
          <el-button native-type="submit" type="primary">搜索</el-button>
          <el-button :disabled="status === 'loading'" @click="reload">重试</el-button>
        </form>
        <div class="demo-output" role="status">地址中的关键词：{{ keyword || '全部' }} · 请求状态：{{ status }} · 清单共 {{ total }} 项</div>
        <el-alert v-if="status === 'error'" :title="error" type="error" :closable="false" show-icon />
        <p v-else-if="status === 'loading'" class="demo-muted">正在读取学习主题…</p>
        <el-empty v-else-if="status === 'empty'" description="没有匹配的主题，请换一个关键词" :image-size="60" />
        <ul v-else-if="status === 'success'" class="topic-list">
          <li v-for="title in result.items" :key="title">
            <span>{{ title }}</span><el-button size="small" @click="cart.add(title)">加入清单</el-button>
          </li>
        </ul>
        <el-pagination v-if="status === 'success' && result.total > 3" v-model:current-page="page" :page-size="3" :total="result.total" layout="prev, pager, next" />
        <div v-if="items.length" class="demo-row"><span class="demo-muted">清单会在页面切换后保留。</span><RouterLink to="/examples/pinia-advanced">去 Pinia 页面查看清单 →</RouterLink></div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.flow-steps{display:flex;flex-wrap:wrap;gap:8px}
.flow-steps span{padding:7px 10px;border-radius:7px;background:#eff1ff;color:#5268c4;font-size:12px;font-weight:600}
.flow-steps span:not(:last-child):after{margin-left:10px;color:#8792a5;content:'→'}
.playground-content form .el-input{max-width:330px}
.topic-list{display:grid;gap:8px;margin:0;padding:0;list-style:none}
.topic-list li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 11px;border:1px solid #edf0f5;border-radius:8px;color:#556071;font-size:14px}
.playground-content a{color:#5268e8;font-size:14px}
</style>
