import"./rolldown-runtime-hePW80VL.js";import{C as e,H as t,V as n,W as r,_ as i,at as a,g as o,ht as s,pt as c,q as l,v as u,w as d}from"./vue-vendor-C4hU-6hB.js";import{r as f}from"./element-plus-DdNPs73K.js";import{n as p}from"./index-CC0QjMSP.js";import{t as m}from"./ExamplePage-nW8YSaAW.js";var h=e=>(r(`data-v-a60f8d78`),e=e(),t(),e),g={class:`content-card playground-card`},_={class:`playground-title`},v=h(()=>o(`div`,null,[o(`h2`,null,`新成员信息（本地演示）`),o(`p`,null,`试着留空提交，或输入无效邮箱查看校验提示。`)],-1)),y={class:`demo-row`},b=p({__name:`FormsView`,setup(t){let r=s(),p=s(!1),h=c({name:``,email:``,role:``}),b={name:[{required:!0,message:`请输入姓名`,trigger:`blur`}],email:[{required:!0,message:`请输入邮箱`,trigger:`blur`},{type:`email`,message:`请输入有效的邮箱地址`,trigger:`blur`}],role:[{required:!0,message:`请选择角色`,trigger:`change`}]};async function x(){await r.value.validate().catch(()=>!1)&&(p.value=!0,f.success(`本地示例提交成功，未写入后端数据`))}function S(){r.value?.resetFields(),p.value=!1}let C=[{label:`Element Plus 表单`,url:`https://element-plus.org/zh-CN/component/form.html`},{label:`Element Plus 输入框`,url:`https://element-plus.org/zh-CN/component/input.html`}];return(t,s)=>{let c=l(`el-tag`),f=l(`el-alert`),w=l(`el-input`),T=l(`el-form-item`),E=l(`el-option`),D=l(`el-select`),O=l(`el-button`),k=l(`el-form`);return n(),i(m,{eyebrow:`PRACTICE · FORMS`,title:`表单与校验`,description:`使用 Element Plus 表单规则进行校验，提交仅展示本地反馈，不会修改现有用户数据。`,concepts:[`表单项通过 prop 对应 model 字段和校验规则。`,`trigger 可选择 blur 或 change 等触发时机。`,`validate 成功后再执行提交逻辑，避免无效数据进入下一步。`],code:`<script setup>
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
</template>`,resources:C},{default:a(()=>[o(`section`,g,[o(`div`,_,[v,d(c,{type:`success`,effect:`plain`},{default:a(()=>[e(`Element Plus Form`)]),_:1})]),p.value?(n(),i(f,{key:0,title:`校验通过：表单已在本地完成演示提交。`,type:`success`,closable:!1,"show-icon":``,class:`submit-alert`})):u(``,!0),d(k,{ref_key:`formRef`,ref:r,model:h,rules:b,"label-position":`top`,class:`example-form`},{default:a(()=>[d(T,{label:`姓名`,prop:`name`},{default:a(()=>[d(w,{modelValue:h.name,"onUpdate:modelValue":s[0]||=e=>h.name=e,placeholder:`例如：林晓`},null,8,[`modelValue`])]),_:1}),d(T,{label:`邮箱地址`,prop:`email`},{default:a(()=>[d(w,{modelValue:h.email,"onUpdate:modelValue":s[1]||=e=>h.email=e,placeholder:`name@example.com`},null,8,[`modelValue`])]),_:1}),d(T,{label:`角色`,prop:`role`},{default:a(()=>[d(D,{modelValue:h.role,"onUpdate:modelValue":s[2]||=e=>h.role=e,placeholder:`请选择角色`,class:`role-select`},{default:a(()=>[d(E,{label:`管理员`,value:`管理员`}),d(E,{label:`编辑`,value:`编辑`}),d(E,{label:`访客`,value:`访客`})]),_:1},8,[`modelValue`])]),_:1}),o(`div`,y,[d(O,{type:`primary`,onClick:x},{default:a(()=>[e(`校验并提交`)]),_:1}),d(O,{onClick:S},{default:a(()=>[e(`重置`)]),_:1})])]),_:1},8,[`model`])])]),_:1})}}},[[`__scopeId`,`data-v-a60f8d78`]]);export{b as default};