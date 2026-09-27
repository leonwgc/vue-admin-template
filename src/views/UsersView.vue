<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUsersStore } from '../stores/users'

const store = useUsersStore()
const dialogVisible = ref(false)
const editingUser = ref(null)
const formRef = ref()
const form = reactive({ name: '', email: '', role: '访客', status: '启用' })
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 2, max: 20, message: '姓名长度为 2 至 20 个字符', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
}
const dialogTitle = computed(() => editingUser.value ? '编辑用户' : '添加用户')

onMounted(() => {
  if (!store.users.length) store.fetchUsers()
})

function openCreate() {
  editingUser.value = null
  Object.assign(form, { name: '', email: '', role: '访客', status: '启用' })
  dialogVisible.value = true
}

function openEdit(user) {
  editingUser.value = user
  Object.assign(form, { name: user.name, email: user.email, role: user.role, status: user.status })
  dialogVisible.value = true
}

async function saveUser() {
  if (!await formRef.value.validate().catch(() => false)) return
  if (editingUser.value) {
    await store.updateUser(editingUser.value.id, { ...form })
    ElMessage.success('用户信息已更新')
  } else {
    await store.createUser({ ...form })
    ElMessage.success('用户已添加')
  }
  dialogVisible.value = false
}

async function removeUser(user) {
  try {
    await ElMessageBox.confirm(`确定删除用户「${user.name}」吗？删除后无法恢复。`, '删除用户', { confirmButtonText: '确认删除', cancelButtonText: '取消', type: 'warning' })
    await store.deleteUser(user.id)
    ElMessage.success('用户已删除')
  } catch (error) {
    if (error !== 'cancel' && error !== 'close') ElMessage.error('删除失败')
  }
}

function changePage(page) {
  store.currentPage = page
}
</script>

<template>
  <section class="page-heading users-heading">
    <div><div class="eyebrow">TEAM DIRECTORY</div><h1>用户管理</h1><p>管理团队成员、角色和账号状态。</p></div>
    <el-button type="primary" size="large" class="add-button" @click="openCreate"><el-icon><Plus /></el-icon>添加用户</el-button>
  </section>
  <section class="content-card user-table-card">
    <div class="table-toolbar"><div><h3>所有用户 <span class="count-badge">{{ store.filteredUsers.length }}</span></h3><p>团队成员及其账号信息</p></div><el-input :model-value="store.searchText" class="search-input" clearable placeholder="搜索姓名、邮箱或角色" @update:model-value="store.setSearchText"><template #prefix><el-icon><Search /></el-icon></template></el-input></div>
    <el-table v-loading="store.loading" :data="store.pageUsers" class="users-table" row-key="id">
      <el-table-column label="用户" min-width="230"><template #default="{ row }"><div class="table-user"><span class="user-avatar" :class="`tone-${row.id % 4}`">{{ row.name.slice(0, 1) }}</span><span><strong>{{ row.name }}</strong><small>{{ row.email }}</small></span></div></template></el-table-column>
      <el-table-column prop="role" label="角色" width="130"><template #default="{ row }"><span class="role-pill">{{ row.role }}</span></template></el-table-column>
      <el-table-column prop="status" label="状态" width="130"><template #default="{ row }"><span class="status-label" :class="row.status === '启用' ? 'is-active' : 'is-disabled'"><i></i>{{ row.status }}</span></template></el-table-column>
      <el-table-column prop="createdAt" label="创建时间" min-width="165" />
      <el-table-column label="操作" width="140" align="right"><template #default="{ row }"><div class="row-actions"><el-button text type="primary" @click="openEdit(row)">编辑</el-button><el-button text type="danger" @click="removeUser(row)">删除</el-button></div></template></el-table-column>
      <template #empty><el-empty description="没有找到用户" :image-size="88" /></template>
    </el-table>
    <div class="table-footer"><span>共 {{ store.filteredUsers.length }} 位用户</span><el-pagination v-if="store.filteredUsers.length" background layout="prev, pager, next" :total="store.filteredUsers.length" :page-size="store.pageSize" :current-page="store.currentPage" @current-change="changePage" /></div>
  </section>
  <el-dialog v-model="dialogVisible" :title="dialogTitle" width="480px" destroy-on-close class="user-dialog">
    <p class="dialog-description">{{ editingUser ? '更新这位成员的资料与权限。' : '填写成员资料，将其添加到团队中。' }}</p>
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top" class="user-form">
      <el-form-item label="姓名" prop="name"><el-input v-model="form.name" placeholder="例如：林晓" /></el-form-item>
      <el-form-item label="邮箱地址" prop="email"><el-input v-model="form.email" placeholder="name@example.com" /></el-form-item>
      <div class="form-pair"><el-form-item label="角色" prop="role"><el-select v-model="form.role" class="full-width"><el-option label="管理员" value="管理员" /><el-option label="编辑" value="编辑" /><el-option label="访客" value="访客" /></el-select></el-form-item><el-form-item label="账号状态" prop="status"><el-select v-model="form.status" class="full-width"><el-option label="启用" value="启用" /><el-option label="禁用" value="禁用" /></el-select></el-form-item></div>
    </el-form>
    <template #footer><el-button @click="dialogVisible = false">取消</el-button><el-button type="primary" @click="saveUser">{{ editingUser ? '保存修改' : '添加用户' }}</el-button></template>
  </el-dialog>
</template>
