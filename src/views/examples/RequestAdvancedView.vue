<script setup>
import { ref, watch } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import { useTopicSearch } from '../../composables/useTopicSearch'
import source from '../../composables/useTopicSearch.js?raw'
const keyword = ref('')
const delay = ref(500)
const fail = ref(false)
const page = ref(1)
watch(keyword, () => { page.value = 1 }, { flush: 'sync' })
const { result, status, error, cancel, reload } = useTopicSearch(() => ({ keyword: keyword.value, delay: delay.value, fail: fail.value, page: page.value }))
function race() {
  fail.value = false
  keyword.value = 'Vue'
  delay.value = 1600
  page.value = 1
}
function fast() { fail.value = false; keyword.value = 'Pinia'; delay.value = 200; page.value = 1 }
</script>
<template>
  <ExamplePage eyebrow="PRACTICE · ASYNC COMPOSABLES" title="请求竞态与 Composables" description="使用独立的本地只读接口，练习异步状态、取消、分页和可复用组合式函数。"
    :concepts="['输入是 ref 或 getter，返回普通对象中的 refs，解构后仍保持响应式；每次调用拥有独立状态。', '侦听输入变化发起请求，onCleanup 取消旧请求，onScopeDispose 清理离开页面后的资源。', 'AbortController 节省资源，递增请求编号进一步防止过期响应覆盖最新结果。', '分别呈现 loading、success、empty、error、cancelled；派生状态不必放入全局 store。']"
    :code="source" :resources="[{ label: 'Composables 设计', url: 'https://vuejs.org/guide/reusability/composables.html' }, { label: 'Axios 取消', url: 'https://axios-http.com/docs/cancellation' }]">
    <ExampleSection title="可取消的搜索与分页" description="搜索 Vue、Pinia，或输入不存在的词观察空状态。勾选失败后可取消勾选并重试。">
      <label for="topic-keyword">主题关键词</label><el-input id="topic-keyword" v-model="keyword" clearable />
      <el-checkbox v-model="fail">模拟服务失败</el-checkbox>
      <div class="demo-row"><el-button @click="reload">重新请求</el-button><el-button :disabled="status !== 'loading'" @click="cancel">取消请求</el-button></div>
      <div class="demo-output" role="status">当前状态：{{ status }} · 延迟 {{ delay }}ms</div>
      <el-alert v-if="status === 'error'" :title="error" type="error" :closable="false" />
      <p v-else-if="status === 'loading'">正在加载…</p>
      <el-empty v-else-if="status === 'empty'" description="没有匹配主题，请更换关键词" :image-size="50" />
      <p v-else-if="status === 'cancelled'">请求已取消，可重新请求。</p>
      <ul v-else><li v-for="item in result.items" :key="item">{{ item }}</li></ul>
      <el-pagination v-if="status === 'success'" v-model:current-page="page" :page-size="3" :total="result.total" layout="prev, pager, next" />
    </ExampleSection>
    <ExampleSection title="复现快慢响应竞争" description="先发起慢请求，在 1.6 秒内再发起快请求。最终应只显示 Pinia，不会被旧 Vue 请求覆盖。">
      <div class="demo-row"><el-button @click="race">① 慢请求：Vue</el-button><el-button @click="fast">② 快请求：Pinia</el-button></div>
    </ExampleSection>
  </ExamplePage>
</template>
