import"./rolldown-runtime-hePW80VL.js";import{$ as e,D as t,E as n,J as r,S as i,St as a,X as o,b as s,bt as c,ft as l,pt as u,q as d,tn as f,x as p}from"./vue-vendor-CsbriK0s.js";import{c as m,n as h,u as g}from"./element-plus-BrLZTTAh.js";import{n as _}from"./index-B_hZ1C-r.js";import{t as v}from"./ExamplePage-k1ZS3Qm1.js";import{t as y}from"./ExampleSection-CZj6jErA.js";var b=e=>(o(`data-v-465223db`),e=e(),r(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>s(`div`,null,[s(`h2`,null,`新成员信息（本地演示）`),s(`p`,null,`试着留空提交，或输入无效邮箱查看校验提示。`)],-1)),w={class:`demo-row`},T={class:`native-fields`},E=b(()=>s(`label`,{for:`native-name`},`姓名（.trim）`,-1)),D=b(()=>s(`label`,{for:`native-age`},`年龄（.number）`,-1)),O=b(()=>s(`label`,{for:`native-note`},`备注（.lazy）`,-1)),k={class:`native-options`},A=b(()=>s(`legend`,null,`想学习的主题`,-1)),j={class:`demo-output`,role:`status`},M=_({__name:`FormsView`,setup(r){let o=a(),_=a(!1),b=c({name:``,email:``,role:``}),M=a(``),N=a(``),P=a(``),F=a([]),I={name:[{required:!0,message:`请输入姓名`,trigger:`blur`}],email:[{required:!0,message:`请输入邮箱`,trigger:`blur`},{type:`email`,message:`请输入有效的邮箱地址`,trigger:`blur`}],role:[{required:!0,message:`请选择角色`,trigger:`change`}]};async function L(){await o.value.validate().catch(()=>!1)&&(_.value=!0,h.success(`本地示例提交成功，未写入后端数据`))}function R(){o.value?.resetFields(),_.value=!1}let z=[{label:`Vue 表单输入绑定`,url:`https://vuejs.org/guide/essentials/forms.html`},{label:`Element Plus 表单`,url:`https://element-plus.org/zh-CN/component/form.html`},{label:`Element Plus 输入框`,url:`https://element-plus.org/zh-CN/component/input.html`}];return(r,a)=>{let c=e(`el-tag`),h=e(`el-alert`),B=e(`el-input`),V=e(`el-form-item`),H=e(`el-option`),U=e(`el-select`),W=e(`el-button`),G=e(`el-form`);return d(),p(v,{eyebrow:`PRACTICE · FORMS`,title:`表单与校验`,description:`使用 Element Plus 表单规则进行校验，提交仅展示本地反馈，不会修改 API 示例数据。`,concepts:[`原生表单的 v-model 可绑定文本、数字和复选框数组；.trim、.number、.lazy 改变同步方式或值。`,`Element Plus 表单项通过 prop 对应 model 字段和校验规则。`,`trigger 可选择 blur 或 change 等触发时机；validate 成功后再执行提交逻辑。`],code:`<script setup>
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
</template>`,resources:z},{default:l(()=>[s(`section`,x,[s(`div`,S,[C,t(c,{type:`success`,effect:`plain`},{default:l(()=>[n(`Element Plus Form`)]),_:1})]),_.value?(d(),p(h,{key:0,title:`校验通过：表单已在本地完成演示提交。`,type:`success`,closable:!1,"show-icon":``,class:`submit-alert`})):i(``,!0),t(G,{ref_key:`formRef`,ref:o,model:b,rules:I,"label-position":`top`,class:`example-form`},{default:l(()=>[t(V,{label:`姓名`,prop:`name`},{default:l(()=>[t(B,{modelValue:b.name,"onUpdate:modelValue":a[0]||=e=>b.name=e,placeholder:`例如：林晓`},null,8,[`modelValue`])]),_:1}),t(V,{label:`邮箱地址`,prop:`email`},{default:l(()=>[t(B,{modelValue:b.email,"onUpdate:modelValue":a[1]||=e=>b.email=e,placeholder:`name@example.com`},null,8,[`modelValue`])]),_:1}),t(V,{label:`角色`,prop:`role`},{default:l(()=>[t(U,{modelValue:b.role,"onUpdate:modelValue":a[2]||=e=>b.role=e,placeholder:`请选择角色`,class:`role-select`},{default:l(()=>[t(H,{label:`管理员`,value:`管理员`}),t(H,{label:`编辑`,value:`编辑`}),t(H,{label:`访客`,value:`访客`})]),_:1},8,[`modelValue`])]),_:1}),s(`div`,w,[t(W,{type:`primary`,onClick:L},{default:l(()=>[n(`校验并提交`)]),_:1}),t(W,{onClick:R},{default:l(()=>[n(`重置`)]),_:1})])]),_:1},8,[`model`])]),t(y,{title:`原生 v-model 与修饰符`,description:`直接体验 .trim、.number、.lazy 和多个复选框绑定数组；这些是 Vue 的表单能力，不依赖 Element Plus。`,code:`<script setup>
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
</template>`},{default:l(()=>[s(`div`,T,[E,u(s(`input`,{id:`native-name`,"onUpdate:modelValue":a[3]||=e=>M.value=e,placeholder:`试着输入首尾空格`},null,512),[[g,M.value,void 0,{trim:!0}]]),D,u(s(`input`,{id:`native-age`,"onUpdate:modelValue":a[4]||=e=>N.value=e,type:`number`,min:`0`,placeholder:`输入数字`},null,512),[[g,N.value,void 0,{number:!0}]]),O,u(s(`input`,{id:`native-note`,"onUpdate:modelValue":a[5]||=e=>P.value=e,placeholder:`失焦后再观察结果`},null,512),[[g,P.value,void 0,{lazy:!0}]])]),s(`fieldset`,k,[A,s(`label`,null,[u(s(`input`,{"onUpdate:modelValue":a[6]||=e=>F.value=e,type:`checkbox`,value:`组件`},null,512),[[m,F.value]]),n(`组件`)]),s(`label`,null,[u(s(`input`,{"onUpdate:modelValue":a[7]||=e=>F.value=e,type:`checkbox`,value:`路由`},null,512),[[m,F.value]]),n(`路由`)])]),s(`div`,j,`姓名：“`+f(M.value)+`” · 年龄：`+f(N.value||`未填写`)+`（`+f(typeof N.value)+`） · 备注：“`+f(P.value)+`” · 主题：`+f(F.value.join(`、`)||`未选择`),1)]),_:1})]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-465223db`]]);export{M as default};