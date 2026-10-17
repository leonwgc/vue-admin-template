<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ExamplePage from '../../components/ExamplePage.vue'

const formRef = ref()
const submitted = ref(false)
const form = reactive({ name: '', email: '', role: '' })
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }, { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
}

async function submitForm() {
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return
  submitted.value = true
  ElMessage.success('本地示例提交成功，未写入后端数据')
}

function resetForm() {
  formRef.value?.resetFields()
  submitted.value = false
}

const code = `const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  email: [{ type: 'email', message: '请输入有效邮箱' }],
}

async function submitForm() {
  const valid = await formRef.value.validate()
  if (valid) showSuccess()
}`
</script>

<template>
  <ExamplePage
    eyebrow="PRACTICE · FORMS"
    title="表单与校验"
    description="使用 Element Plus 表单规则进行校验，提交仅展示本地反馈，不会修改现有用户数据。"
    :concepts="['表单项通过 prop 对应 model 字段和校验规则。', 'trigger 可选择 blur 或 change 等触发时机。', 'validate 成功后再执行提交逻辑，避免无效数据进入下一步。']"
    :code="code"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>新成员信息（本地演示）</h2><p>试着留空提交，或输入无效邮箱查看校验提示。</p></div><el-tag type="success" effect="plain">Element Plus Form</el-tag></div>
      <el-alert v-if="submitted" title="校验通过：表单已在本地完成演示提交。" type="success" :closable="false" show-icon class="submit-alert" />
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top" class="example-form">
        <el-form-item label="姓名" prop="name"><el-input v-model="form.name" placeholder="例如：林晓" /></el-form-item>
        <el-form-item label="邮箱地址" prop="email"><el-input v-model="form.email" placeholder="name@example.com" /></el-form-item>
        <el-form-item label="角色" prop="role"><el-select v-model="form.role" placeholder="请选择角色" class="role-select"><el-option label="管理员" value="管理员" /><el-option label="编辑" value="编辑" /><el-option label="访客" value="访客" /></el-select></el-form-item>
        <div class="demo-row"><el-button type="primary" @click="submitForm">校验并提交</el-button><el-button @click="resetForm">重置</el-button></div>
      </el-form>
    </section>
  </ExamplePage>
</template>

<style scoped>
.submit-alert{margin-bottom:15px}
.role-select{width:100%}
.example-form :deep(.el-form-item__label){color:#697587;font-size:10px}
.example-form :deep(.el-form-item){margin-bottom:17px}
.example-form :deep(.el-input__wrapper),.example-form :deep(.el-select__wrapper){min-height:37px}
</style>
