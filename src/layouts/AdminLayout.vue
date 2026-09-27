<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

function logout() {
  auth.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <el-container class="admin-shell">
    <el-aside class="sidebar" width="232px">
      <div class="brand"><span class="brand-mark">V</span><span>Vue Admin</span></div>
      <div class="workspace-label">WORKSPACE</div>
      <el-menu :default-active="route.path" router class="nav-menu">
        <el-menu-item index="/">
          <el-icon><Odometer /></el-icon><span>工作台</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><User /></el-icon><span>用户管理</span>
        </el-menu-item>
      </el-menu>
      <div class="sidebar-foot"><span class="status-dot"></span>本地 Mock 数据已就绪</div>
    </el-aside>
    <el-container class="main-column">
      <el-header class="topbar">
        <div class="crumb"><span>工作空间</span><el-icon><ArrowRight /></el-icon><strong>{{ route.meta.title }}</strong></div>
        <el-dropdown @command="logout">
          <button class="profile-button" type="button"><span class="avatar">A</span><span class="profile-name">{{ auth.username }}</span><el-icon><ArrowDown /></el-icon></button>
          <template #dropdown><el-dropdown-menu><el-dropdown-item command="logout">退出登录</el-dropdown-item></el-dropdown-menu></template>
        </el-dropdown>
      </el-header>
      <main class="page-content"><router-view /></main>
    </el-container>
  </el-container>
</template>
