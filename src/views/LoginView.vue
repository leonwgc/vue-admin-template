<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
const loading = ref(false)
const form = reactive({ username: 'admin', password: 'admin' })

async function submit() {
  loading.value = true
  try {
    auth.login(form.username, form.password)
    ElMessage.success('登录成功')
    await router.replace(route.query.redirect || '/')
  } catch (error) {
    ElMessage.error(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="login-page">
    <section class="login-art">
      <div class="art-orb orb-one"></div><div class="art-orb orb-two"></div>
      <div class="art-content">
        <div class="brand brand-light"><span class="brand-mark">V</span><span>Vue Admin</span></div>
        <div class="art-copy"><div class="eyebrow">ADMIN CONSOLE · 2024</div><h1>把日常管理<br />变得简单。</h1><p>清晰、高效的管理工作空间，<br />让每一次操作都有迹可循。</p></div>
        <div class="art-bottom">Vue 3.2 · Pinia · Element Plus</div>
      </div>
    </section>
    <section class="login-panel">
      <div class="login-form-wrap">
        <div class="mobile-brand brand"><span class="brand-mark">V</span><span>Vue Admin</span></div>
        <div class="form-eyebrow">WELCOME BACK</div>
        <h2>欢迎回来</h2>
        <p class="login-intro">登录你的管理工作空间</p>
        <el-form :model="form" label-position="top" @keyup.enter="submit">
          <el-form-item label="用户名"><el-input v-model="form.username" size="large" autocomplete="username" placeholder="请输入用户名"><template #prefix><el-icon><User /></el-icon></template></el-input></el-form-item>
          <el-form-item label="密码"><el-input v-model="form.password" size="large" type="password" autocomplete="current-password" show-password placeholder="请输入密码"><template #prefix><el-icon><Lock /></el-icon></template></el-input></el-form-item>
          <el-button class="login-submit" type="primary" size="large" :loading="loading" @click="submit">登录工作空间 <el-icon class="button-arrow"><ArrowRight /></el-icon></el-button>
        </el-form>
        <div class="demo-note"><el-icon><InfoFilled /></el-icon><span><strong>演示账号</strong>　admin / admin</span></div>
        <div class="login-caption">© 2024 Vue Admin 学习项目</div>
      </div>
    </section>
  </main>
</template>
