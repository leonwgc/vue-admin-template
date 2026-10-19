<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const SIDEBAR_COLLAPSED_KEY = 'vue-admin-sidebar-collapsed'
const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const activeMenu = computed(() => route.meta.menuPath || route.path)
const isDesktop = ref(false)
const savedCollapsedPreference = ref(false)
const isCollapsed = computed(() => isDesktop.value && savedCollapsedPreference.value)

function readSavedCollapseState() {
  savedCollapsedPreference.value = localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true'
}

function updateDesktopState() {
  isDesktop.value = window.innerWidth > 720
}

function toggleSidebar() {
  savedCollapsedPreference.value = !savedCollapsedPreference.value
  localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(savedCollapsedPreference.value))
}

onMounted(() => {
  readSavedCollapseState()
  updateDesktopState()
  window.addEventListener('resize', updateDesktopState)
})

onUnmounted(() => window.removeEventListener('resize', updateDesktopState))

function logout() {
  auth.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <el-container class="admin-shell">
    <el-aside class="sidebar" :class="{ 'is-collapsed': isCollapsed }" :width="isCollapsed ? '64px' : '232px'">
      <div class="brand"><span class="brand-mark">V</span><span class="brand-name">Vue Admin</span></div>
      <div class="workspace-label">WORKSPACE</div>
      <el-menu :default-active="activeMenu" :collapse="isCollapsed" router class="nav-menu">
        <el-menu-item index="/">
          <el-icon><Odometer /></el-icon><span>工作台</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><User /></el-icon><span>用户管理</span>
        </el-menu-item>
        <el-sub-menu index="quick-start">
          <template #title><el-icon><Flag /></el-icon><span>快速开始</span></template>
          <el-menu-item index="/examples/quick-start">项目创建与 SFC</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-basics">
          <template #title><el-icon><Reading /></el-icon><span>Vue 基础</span></template>
          <el-menu-item index="/examples/reactivity">响应式与组合式 API</el-menu-item>
          <el-menu-item index="/examples/lifecycle">生命周期与侦听</el-menu-item>
          <el-menu-item index="/examples/templates">模板语法</el-menu-item>
          <el-menu-item index="/examples/events">事件处理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-components">
          <template #title><el-icon><Grid /></el-icon><span>组件</span></template>
          <el-menu-item index="/examples/components">组件通信</el-menu-item>
          <el-menu-item index="/examples/slots">组件插槽</el-menu-item>
          <el-menu-item index="/examples/component-v-model">组件 v-model</el-menu-item>
          <el-menu-item index="/examples/dynamic-components">动态组件</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-state">
          <template #title><el-icon><Coin /></el-icon><span>状态管理</span></template>
          <el-menu-item index="/examples/pinia">Pinia</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-reuse">
          <template #title><el-icon><Connection /></el-icon><span>逻辑复用</span></template>
          <el-menu-item index="/examples/provide-inject">provide / inject</el-menu-item>
          <el-menu-item index="/examples/composables">Composables</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-routing">
          <template #title><el-icon><Guide /></el-icon><span>路由</span></template>
          <el-menu-item index="/examples/router">Vue Router</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-motion">
          <template #title><el-icon><VideoPlay /></el-icon><span>动画</span></template>
          <el-menu-item index="/examples/transitions">Transition</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="vue-practice">
          <template #title><el-icon><Tools /></el-icon><span>开发实践</span></template>
          <el-menu-item index="/examples/forms">表单与校验</el-menu-item>
          <el-menu-item index="/examples/directives">自定义指令</el-menu-item>
          <el-menu-item index="/examples/api">API 请求</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div class="sidebar-foot"><span class="status-dot"></span><span>本地 Mock 数据已就绪</span></div>
    </el-aside>
    <el-container class="main-column" :class="{ 'is-collapsed': isCollapsed }">
      <el-header class="topbar">
        <div class="topbar-leading">
          <button
            v-if="isDesktop"
            class="sidebar-toggle"
            type="button"
            :aria-label="isCollapsed ? '展开侧边栏' : '收起侧边栏'"
            :aria-expanded="!isCollapsed"
            @click="toggleSidebar"
          >
            <el-icon><Expand v-if="isCollapsed" /><Fold v-else /></el-icon>
          </button>
          <div class="crumb"><span>工作空间</span><el-icon><ArrowRight /></el-icon><strong>{{ route.meta.title }}</strong></div>
        </div>
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

.topbar-leading {
  display: flex;
  align-items: center;
  gap: 17px;
}

.sidebar-toggle {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid #edf0f5;
  border-radius: 8px;
  background: #fff;
  color: #707a8a;
  cursor: pointer;
}

.sidebar-toggle:hover {
  border-color: #dce1fb;
  background: #f6f7fc;
  color: var(--blue);
}

:global(.sidebar.is-collapsed) {
  width: 64px !important;
  padding-right: 0;
  padding-left: 0;
}

:global(.sidebar.is-collapsed .brand) {
  justify-content: center;
  padding: 0;
}

:global(.sidebar.is-collapsed .brand-name),
:global(.sidebar.is-collapsed .workspace-label),
:global(.sidebar.is-collapsed .sidebar-foot) {
  display: none;
}

:global(.sidebar.is-collapsed .nav-menu) {
  width: 64px;
}

:global(.sidebar.is-collapsed .nav-menu .el-menu-item),
:global(.sidebar.is-collapsed .nav-menu .el-sub-menu__title) {
  justify-content: center;
  padding: 0 !important;
}

:global(.sidebar.is-collapsed .nav-menu .el-icon) {
  margin: 0;
}

:global(.main-column.is-collapsed) {
  margin-left: 64px !important;
}

@media (min-width: 721px) {
  :global(.sidebar) {
    transition: width 0.2s ease;
  }

  :global(.main-column) {
    transition: margin-left 0.2s ease;
  }

  :global(.sidebar .nav-menu > .el-menu-item > span),
  :global(.sidebar .nav-menu > .el-sub-menu > .el-sub-menu__title > span) {
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    visibility: visible;
    transition: opacity 0.2s ease, max-width 0.2s ease;
  }

  :global(.sidebar.is-collapsed .nav-menu > .el-menu-item > span),
  :global(.sidebar.is-collapsed .nav-menu > .el-sub-menu > .el-sub-menu__title > span) {
    width: auto;
    height: auto;
    max-width: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, max-width 0.2s ease;
  }
}

@media (min-width: 721px) and (prefers-reduced-motion: reduce) {
  :global(.sidebar),
  :global(.main-column),
  :global(.sidebar .nav-menu > .el-menu-item > span),
  :global(.sidebar .nav-menu > .el-sub-menu > .el-sub-menu__title > span),
  :global(.sidebar.is-collapsed .nav-menu > .el-menu-item > span),
  :global(.sidebar.is-collapsed .nav-menu > .el-sub-menu > .el-sub-menu__title > span) {
    transition: none;
  }
}

@media (max-width: 720px) {
  :global(.nav-menu .el-sub-menu__title .el-icon) {
    display: none;
  }
}

</style>
