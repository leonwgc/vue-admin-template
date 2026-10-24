import{$ as e,D as t,E as n,J as r,S as i,St as a,W as o,X as s,b as c,et as l,ft as u,pt as d,q as f,tn as p,x as m}from"./vue-vendor-CsbriK0s.js";import{n as h}from"./index-B_hZ1C-r.js";import{t as g}from"./http-ZKQe0QDq.js";import{t as _}from"./ExamplePage-k1ZS3Qm1.js";var v={list:()=>g.get(`/users`)},y=e=>(s(`data-v-d012fc2a`),e=e(),r(),e),b={class:`content-card playground-card`},x={class:`playground-title`},S=y(()=>c(`div`,null,[c(`h2`,null,`只读用户列表接口`),c(`p`,null,`GET /api/users · 本地 Mock 延迟约 250ms`)],-1)),C={class:`playground-content`},w={class:`demo-row api-actions`},T=y(()=>c(`span`,{class:`demo-muted`},`错误按钮请求不存在的路径，不会写入数据。`,-1)),E={class:`content-card playground-card`},D=y(()=>c(`div`,{class:`playground-title`},[c(`div`,null,[c(`h2`,null,`JSON 响应预览`),c(`p`,null,`展示 Axios 拦截器解包后的 response.data。`)])],-1)),O={class:`demo-code`},k=h({__name:`ApiView`,setup(r){let s=a([]),h=a(!1),y=a(``),k=a(``);async function A(){h.value=!0,y.value=``;try{s.value=await v.list(),k.value=JSON.stringify(s.value,null,2)}catch(e){y.value=e.response?.data?.message||e.message||`请求失败`}finally{h.value=!1}}async function j(){h.value=!0,y.value=``;try{await g.get(`/not-a-real-endpoint`)}catch(e){y.value=e.response?.data?.message||e.message||`请求失败`}finally{h.value=!1}}o(A);let M=[{label:`Axios 实例`,url:`https://axios-http.com/docs/instance`},{label:`错误处理`,url:`https://axios-http.com/docs/handling_errors`}];return(r,a)=>{let o=e(`el-tag`),g=e(`el-button`),v=e(`el-alert`),N=e(`el-table-column`),P=e(`el-empty`),F=e(`el-table`),I=l(`loading`);return f(),m(_,{eyebrow:`PRACTICE · API REQUEST`,title:`API 请求与状态处理`,description:`复用现有只读 Mock 用户接口，演示请求、加载、响应数据与错误处理，不会更改用户数据。`,concepts:[`接口模块封装请求方法，页面不直接拼接请求细节。`,`loading 状态反馈请求过程，finally 确保状态复位。`,`失败时保留可读错误信息；错误通知仍由现有 Axios 拦截器处理。`],code:`// api/users.js
import http from './http'
export const userApi = {
  list: () => http.get('/users'),
}

// ApiView.vue
<script setup>
import { onMounted, ref } from 'vue'
import { userApi } from '../api/users'
import http from '../api/http'

const users = ref([])
const loading = ref(false)
const error = ref('')

async function requestUsers() {
  loading.value = true
  error.value = ''
  try {
    users.value = await userApi.list()
  } catch (cause) {
    error.value = cause.response?.data?.message || cause.message
  } finally {
    loading.value = false
  }
}

async function demonstrate404() {
  loading.value = true
  error.value = ''
  try {
    await http.get('/not-a-real-endpoint')
  } catch (cause) {
    error.value = cause.response?.data?.message || cause.message
  } finally {
    loading.value = false
  }
}

onMounted(requestUsers)
<\/script>

<template>
  <el-button :loading="loading" @click="requestUsers">重新请求</el-button>
  <el-button :loading="loading" @click="demonstrate404">演示 404</el-button>
  <el-alert v-if="error" :title="error" type="error" :closable="false" />
  <el-table v-loading="loading" :data="users">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="email" label="邮箱" />
  </el-table>
</template>`,resources:M},{default:u(()=>[c(`section`,b,[c(`div`,x,[S,t(o,{type:`success`,effect:`plain`},{default:u(()=>[n(`只读请求`)]),_:1})]),c(`div`,C,[c(`div`,w,[t(g,{type:`primary`,loading:h.value,onClick:A},{default:u(()=>[n(`请求用户列表`)]),_:1},8,[`loading`]),t(g,{loading:h.value,onClick:j},{default:u(()=>[n(`演示 404 错误`)]),_:1},8,[`loading`]),T]),y.value?(f(),m(v,{key:0,title:`请求失败：${y.value}`,type:`error`,closable:!1,"show-icon":``},null,8,[`title`])):i(``,!0),d((f(),m(F,{data:s.value,size:`small`,class:`api-table`,"row-key":`id`},{empty:u(()=>[t(P,{description:`点击请求按钮加载数据`,"image-size":58})]),default:u(()=>[t(N,{prop:`name`,label:`姓名`,"min-width":`85`}),t(N,{prop:`email`,label:`邮箱`,"min-width":`160`}),t(N,{prop:`role`,label:`角色`,width:`80`}),t(N,{prop:`status`,label:`状态`,width:`75`})]),_:1},8,[`data`])),[[I,h.value]])])]),c(`section`,E,[D,c(`pre`,O,p(k.value||`请求成功后会在此显示 JSON 响应。`),1)])]),_:1})}}},[[`__scopeId`,`data-v-d012fc2a`]]);export{k as default};