<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'

const formRef = ref()
const submitted = ref(false)
const form = reactive({ name: '', email: '', role: '' })
const nativeName = ref('')
const nativeAge = ref('')
const nativeNote = ref('')
const interests = ref([])
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

const code = `<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref()
const form = reactive({ name: '', email: '', role: '' })
const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效邮箱', trigger: 'blur' },
  ],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
}

async function submitForm() {
  const valid = await formRef.value.validate().catch(() => false)
  if (valid) ElMessage.success('本地提交成功')
}
<\/script>

<template>
  <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
    <el-form-item label="姓名" prop="name"><el-input v-model="form.name" /></el-form-item>
    <el-form-item label="邮箱" prop="email"><el-input v-model="form.email" /></el-form-item>
    <el-form-item label="角色" prop="role">
      <el-select v-model="form.role">
        <el-option label="管理员" value="管理员" />
        <el-option label="编辑" value="编辑" />
        <el-option label="访客" value="访客" />
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="submitForm">校验并提交</el-button>
  </el-form>
</template>`

const nativeCode = `<script setup>
import { ref } from 'vue'
const name = ref('')
const age = ref('')
const note = ref('')
const interests = ref([])
<\/script>

<template>
  <input v-model.trim="name" placeholder="去掉首尾空格" />
  <input v-model.number="age" type="number" />
  <input v-model.lazy="note" placeholder="失焦后更新" />
  <label><input v-model="interests" type="checkbox" value="组件" />组件</label>
  <label><input v-model="interests" type="checkbox" value="路由" />路由</label>
</template>`

const resources = [
  { label: 'Vue 表单输入绑定', url: 'https://vuejs.org/guide/essentials/forms.html' },
  { label: 'Element Plus 表单', url: 'https://element-plus.org/zh-CN/component/form.html' },
  { label: 'Element Plus 输入框', url: 'https://element-plus.org/zh-CN/component/input.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="PRACTICE · FORMS"
    title="表单与校验"
    description="使用 Element Plus 表单规则进行校验，提交仅展示本地反馈，不会修改 API 示例数据。"
    :concepts="['原生表单的 v-model 可绑定文本、数字和复选框数组；.trim、.number、.lazy 改变同步方式或值。', 'Element Plus 表单项通过 prop 对应 model 字段和校验规则。', 'trigger 可选择 blur 或 change 等触发时机；validate 成功后再执行提交逻辑。']"
    :code="code"
    :resources="resources"
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
    <ExampleSection title="原生 v-model 与修饰符" description="直接体验 .trim、.number、.lazy 和多个复选框绑定数组；这些是 Vue 的表单能力，不依赖 Element Plus。" :code="nativeCode">
      <div class="native-fields">
        <label for="native-name">姓名（.trim）</label><input id="native-name" v-model.trim="nativeName" placeholder="试着输入首尾空格" />
        <label for="native-age">年龄（.number）</label><input id="native-age" v-model.number="nativeAge" type="number" min="0" placeholder="输入数字" />
        <label for="native-note">备注（.lazy）</label><input id="native-note" v-model.lazy="nativeNote" placeholder="失焦后再观察结果" />
      </div>
      <fieldset class="native-options"><legend>想学习的主题</legend><label><input v-model="interests" type="checkbox" value="组件" />组件</label><label><input v-model="interests" type="checkbox" value="路由" />路由</label></fieldset>
      <div class="demo-output" role="status">姓名：“{{ nativeName }}” · 年龄：{{ nativeAge || '未填写' }}（{{ typeof nativeAge }}） · 备注：“{{ nativeNote }}” · 主题：{{ interests.join('、') || '未选择' }}</div>
    </ExampleSection>
  </ExamplePage>
</template>

<style scoped>
.submit-alert{margin-bottom:15px}
.role-select{width:100%}
.example-form :deep(.el-form-item__label){color:#697587;font-size:14px}
.example-form :deep(.el-form-item){margin-bottom:17px}
.example-form :deep(.el-input__wrapper),.example-form :deep(.el-select__wrapper){min-height:37px}
.native-fields{display:grid;grid-template-columns:max-content minmax(0,280px);align-items:center;gap:10px}
.native-fields label,.native-options{color:#697587;font-size:14px}
.native-fields input{min-width:0;padding:8px 10px;border:1px solid #dcdfe6;border-radius:6px;font:inherit}
.native-fields input:focus-visible,.native-options input:focus-visible{outline:2px solid #5268e8;outline-offset:2px}
.native-options{display:flex;gap:15px;margin:0;padding:9px 12px;border:1px solid #edf0f5;border-radius:8px}
.native-options label{display:flex;align-items:center;gap:5px}
@media(max-width:520px){.native-fields{grid-template-columns:1fr}.native-options{flex-wrap:wrap}}
</style>
