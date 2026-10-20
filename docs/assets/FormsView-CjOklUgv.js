import"./rolldown-runtime-hePW80VL.js";import{Ct as e,D as t,J as n,O as r,S as i,Y as a,Z as o,b as s,et as c,pt as l,x as u,xt as d}from"./vue-vendor-2WV6Jefd.js";import{r as f}from"./element-plus-D7Zy95m4.js";import{r as p}from"./index-KdiVrdr8.js";import{t as m}from"./ExamplePage-BNsrRItr.js";var h=e=>(o(`data-v-a60f8d78`),e=e(),a(),e),g={class:`content-card playground-card`},_={class:`playground-title`},v=h(()=>s(`div`,null,[s(`h2`,null,`新成员信息（本地演示）`),s(`p`,null,`试着留空提交，或输入无效邮箱查看校验提示。`)],-1)),y={class:`demo-row`},b=p({__name:`FormsView`,setup(a){let o=e(),p=e(!1),h=d({name:``,email:``,role:``}),b={name:[{required:!0,message:`请输入姓名`,trigger:`blur`}],email:[{required:!0,message:`请输入邮箱`,trigger:`blur`},{type:`email`,message:`请输入有效的邮箱地址`,trigger:`blur`}],role:[{required:!0,message:`请选择角色`,trigger:`change`}]};async function x(){await o.value.validate().catch(()=>!1)&&(p.value=!0,f.success(`本地示例提交成功，未写入后端数据`))}function S(){o.value?.resetFields(),p.value=!1}let C=[{label:`Element Plus 表单`,url:`https://element-plus.org/zh-CN/component/form.html`},{label:`Element Plus 输入框`,url:`https://element-plus.org/zh-CN/component/input.html`}];return(e,a)=>{let d=c(`el-tag`),f=c(`el-alert`),w=c(`el-input`),T=c(`el-form-item`),E=c(`el-option`),D=c(`el-select`),O=c(`el-button`),k=c(`el-form`);return n(),u(m,{eyebrow:`PRACTICE · FORMS`,title:`表单与校验`,description:`使用 Element Plus 表单规则进行校验，提交仅展示本地反馈，不会修改现有用户数据。`,concepts:[`表单项通过 prop 对应 model 字段和校验规则。`,`trigger 可选择 blur 或 change 等触发时机。`,`validate 成功后再执行提交逻辑，避免无效数据进入下一步。`],code:`<script setup>
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
</template>`,resources:C},{default:l(()=>[s(`section`,g,[s(`div`,_,[v,r(d,{type:`success`,effect:`plain`},{default:l(()=>[t(`Element Plus Form`)]),_:1})]),p.value?(n(),u(f,{key:0,title:`校验通过：表单已在本地完成演示提交。`,type:`success`,closable:!1,"show-icon":``,class:`submit-alert`})):i(``,!0),r(k,{ref_key:`formRef`,ref:o,model:h,rules:b,"label-position":`top`,class:`example-form`},{default:l(()=>[r(T,{label:`姓名`,prop:`name`},{default:l(()=>[r(w,{modelValue:h.name,"onUpdate:modelValue":a[0]||=e=>h.name=e,placeholder:`例如：林晓`},null,8,[`modelValue`])]),_:1}),r(T,{label:`邮箱地址`,prop:`email`},{default:l(()=>[r(w,{modelValue:h.email,"onUpdate:modelValue":a[1]||=e=>h.email=e,placeholder:`name@example.com`},null,8,[`modelValue`])]),_:1}),r(T,{label:`角色`,prop:`role`},{default:l(()=>[r(D,{modelValue:h.role,"onUpdate:modelValue":a[2]||=e=>h.role=e,placeholder:`请选择角色`,class:`role-select`},{default:l(()=>[r(E,{label:`管理员`,value:`管理员`}),r(E,{label:`编辑`,value:`编辑`}),r(E,{label:`访客`,value:`访客`})]),_:1},8,[`modelValue`])]),_:1}),s(`div`,y,[r(O,{type:`primary`,onClick:x},{default:l(()=>[t(`校验并提交`)]),_:1}),r(O,{onClick:S},{default:l(()=>[t(`重置`)]),_:1})])]),_:1},8,[`model`])])]),_:1})}}},[[`__scopeId`,`data-v-a60f8d78`]]);export{b as default};