<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const activeMenu = computed(() => route.meta.menuPath || route.path)

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
      <el-menu :default-active="activeMenu" router class="nav-menu">
        <el-menu-item index="/">
          <el-icon><Odometer /></el-icon><span>工作台</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><User /></el-icon><span>用户管理</span>
        </el-menu-item>
        <el-sub-menu index="vue-basics">
          <template #title>Vue 基础</template>
          <el-menu-item index="/examples/reactivity">响应式与组合式 API</el-menu-item>
          <el-menu-item index="/examples/lifecycle">生命周期与侦听</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-components">
          <template #title>组件</template>
          <el-menu-item index="/examples/components">组件通信</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-state">
          <template #title>状态管理</template>
          <el-menu-item index="/examples/pinia">Pinia</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-routing">
          <template #title>路由</template>
          <el-menu-item index="/examples/router">Vue Router</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-practice">
          <template #title>开发实践</template>
          <el-menu-item index="/examples/forms">表单与校验</el-menu-item>
          <el-menu-item index="/examples/directives">自定义指令</el-menu-item>
          <el-menu-item index="/examples/api">API 请求</el-menu-item>
        </el-sub-menu>
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

<style scoped>
.nav-menu :deep(.el-sub-menu__title) {
  height: 43px;
  margin-bottom: 3px;
  border-radius: 9px;
  color: #707a8a;
  font-size: 12px;
}

.nav-menu :deep(.el-sub-menu__title:hover) {
  background: #f6f7fc;
  color: var(--blue);
}

.nav-menu :deep(.el-sub-menu.is-active > .el-sub-menu__title) {
  background-color: transparent;
  color: #707a8a;
}

.nav-menu :deep(.el-sub-menu.is-active > .el-sub-menu__title:hover) {
  background-color: #f6f7fc;
  color: var(--blue);
}

.nav-menu :deep(.el-sub-menu .el-menu-item) {
  min-width: 0;
  height: 38px;
  padding-right: 8px;
  padding-left: 37px !important;
  font-size: 11px;
}

</style>
