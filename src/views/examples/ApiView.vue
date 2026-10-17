<script setup>
import { onMounted, ref } from 'vue'
import { userApi } from '../../api/users'
import http from '../../api/http'
import ExamplePage from '../../components/ExamplePage.vue'

const users = ref([])
const loading = ref(false)
const error = ref('')
const responsePreview = ref('')

async function requestUsers() {
  loading.value = true
  error.value = ''
  try {
    users.value = await userApi.list()
    responsePreview.value = JSON.stringify(users.value, null, 2)
  } catch (cause) {
    error.value = cause.response?.data?.message || cause.message || '请求失败'
  } finally {
    loading.value = false
  }
}

async function demonstrateError() {
  loading.value = true
  error.value = ''
  try {
    await http.get('/not-a-real-endpoint')
  } catch (cause) {
    error.value = cause.response?.data?.message || cause.message || '请求失败'
  } finally {
    loading.value = false
  }
}

onMounted(requestUsers)

const code = `try {
  loading.value = true
  users.value = await userApi.list()
} catch (error) {
  message.value = error.message
} finally {
  loading.value = false
}`
</script>

<template>
  <ExamplePage
    eyebrow="PRACTICE · API REQUEST"
    title="API 请求与状态处理"
    description="复用现有只读 Mock 用户接口，演示请求、加载、响应数据与错误处理，不会更改用户数据。"
    :concepts="['接口模块封装请求方法，页面不直接拼接 CRUD 逻辑。', 'loading 状态反馈请求过程，finally 确保状态复位。', '失败时保留可读错误信息；错误通知仍由现有 Axios 拦截器处理。']"
    :code="code"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>只读用户列表接口</h2><p>GET /api/users · 本地 Mock 延迟约 250ms</p></div><el-tag type="success" effect="plain">只读请求</el-tag></div>
      <div class="playground-content">
        <div class="demo-row api-actions"><el-button type="primary" :loading="loading" @click="requestUsers">请求用户列表</el-button><el-button :loading="loading" @click="demonstrateError">演示 404 错误</el-button><span class="demo-muted">错误按钮请求不存在的路径，不会写入数据。</span></div>
        <el-alert v-if="error" :title="`请求失败：${error}`" type="error" :closable="false" show-icon />
        <el-table v-loading="loading" :data="users" size="small" class="api-table" row-key="id">
          <el-table-column prop="name" label="姓名" min-width="85" />
          <el-table-column prop="email" label="邮箱" min-width="160" />
          <el-table-column prop="role" label="角色" width="80" />
          <el-table-column prop="status" label="状态" width="75" />
          <template #empty><el-empty description="点击请求按钮加载数据" :image-size="58" /></template>
        </el-table>
      </div>
    </section>
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>JSON 响应预览</h2><p>展示 Axios 拦截器解包后的 response.data。</p></div></div>
      <pre class="demo-code">{{ responsePreview || '请求成功后会在此显示 JSON 响应。' }}</pre>
    </section>
  </ExamplePage>
</template>

<style scoped>
.api-actions{margin-bottom:2px}
.api-table{width:100%;border-radius:8px}
.api-table :deep(.cell){font-size:10px}
.playground-content :deep(.el-alert){margin-bottom:2px}
@media(max-width:600px){.api-actions .demo-muted{width:100%}}
</style>
