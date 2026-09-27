<script setup>
import { computed, onMounted } from 'vue'
import { useUsersStore } from '../stores/users'

const store = useUsersStore()
const enabledCount = computed(() => store.users.filter((user) => user.status === '启用').length)

onMounted(() => {
  if (!store.users.length) store.fetchUsers()
})
</script>

<template>
  <section class="page-heading">
    <div><div class="eyebrow">OVERVIEW</div><h1>工作台</h1><p>欢迎回来，查看你的管理概览。</p></div>
    <div class="date-chip"><el-icon><Calendar /></el-icon>{{ new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
  </section>
  <section class="welcome-card"><div class="welcome-copy"><div class="welcome-kicker">今天也从容开始</div><h2>你好，管理员 <span>✦</span></h2><p>在这里快速了解用户数据，或继续管理你的团队成员。</p><router-link to="/users" class="welcome-link">前往用户管理 <el-icon><ArrowRight /></el-icon></router-link></div><div class="welcome-illustration"><div class="illu-window"><div class="illu-top"><i></i><i></i><i></i></div><div class="illu-row"><b></b><span></span><em></em></div><div class="illu-row"><b></b><span></span><em></em></div><div class="illu-row"><b></b><span></span><em></em></div><div class="illu-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div class="illu-sparkle">✦</div></div></section>
  <section class="stats-grid">
    <article class="stat-card"><div class="stat-top"><span>用户总数</span><span class="stat-icon icon-blue"><el-icon><User /></el-icon></span></div><div class="stat-value">{{ store.users.length }}<small>位</small></div><div class="stat-foot"><span class="trend-up"><el-icon><Top /></el-icon> 全部用户</span><span>当前记录</span></div></article>
    <article class="stat-card"><div class="stat-top"><span>启用用户</span><span class="stat-icon icon-green"><el-icon><CircleCheck /></el-icon></span></div><div class="stat-value">{{ enabledCount }}<small>位</small></div><div class="stat-foot"><span class="trend-up"><el-icon><Top /></el-icon> {{ store.users.length ? Math.round(enabledCount / store.users.length * 100) : 0 }}%</span><span>账号正常</span></div></article>
    <article class="stat-card"><div class="stat-top"><span>角色类型</span><span class="stat-icon icon-purple"><el-icon><Grid /></el-icon></span></div><div class="stat-value">{{ new Set(store.users.map((user) => user.role)).size }}<small>种</small></div><div class="stat-foot"><span class="stat-neutral">管理员 · 编辑 · 访客</span></div></article>
  </section>
  <section class="lower-grid">
    <article class="content-card recent-card"><div class="card-heading"><div><h3>最近加入</h3><p>最新添加的团队成员</p></div><router-link to="/users" class="text-link">查看全部 <el-icon><ArrowRight /></el-icon></router-link></div><div v-if="store.users.length" class="recent-list"><div v-for="user in store.users.slice(0, 4)" :key="user.id" class="recent-row"><span class="user-avatar" :class="`tone-${user.id % 4}`">{{ user.name.slice(0, 1) }}</span><div class="recent-info"><strong>{{ user.name }}</strong><span>{{ user.email }}</span></div><span class="role-pill">{{ user.role }}</span><span class="recent-date">{{ user.createdAt.slice(0, 10) }}</span></div></div><el-empty v-else description="暂无用户" :image-size="72" /></article>
    <article class="content-card quick-card"><div class="card-heading"><div><h3>快捷操作</h3><p>常用功能入口</p></div><span class="quick-mark"><el-icon><MagicStick /></el-icon></span></div><router-link to="/users" class="quick-action"><span class="quick-icon"><el-icon><Plus /></el-icon></span><span><strong>添加新用户</strong><small>邀请一位新成员加入</small></span><el-icon class="quick-arrow"><ArrowRight /></el-icon></router-link><div class="quick-tip"><el-icon><InfoFilled /></el-icon><span>所有用户数据保存在当前浏览器中。</span></div></article>
  </section>
</template>
