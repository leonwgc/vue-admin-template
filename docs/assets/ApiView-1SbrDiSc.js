import{Ct as e,D as t,G as n,J as r,O as i,S as a,Y as o,Z as s,b as c,et as l,mt as u,nn as d,pt as f,tt as p,x as m}from"./vue-vendor-2WV6Jefd.js";import{r as h}from"./index-KdiVrdr8.js";import{t as g}from"./http-DdzC2r1C.js";import{t as _}from"./users-BJXnce9m.js";import{t as v}from"./ExamplePage-BNsrRItr.js";var y=e=>(s(`data-v-d93ac79b`),e=e(),o(),e),b={class:`content-card playground-card`},x={class:`playground-title`},S=y(()=>c(`div`,null,[c(`h2`,null,`只读用户列表接口`),c(`p`,null,`GET /api/users · 本地 Mock 延迟约 250ms`)],-1)),C={class:`playground-content`},w={class:`demo-row api-actions`},T=y(()=>c(`span`,{class:`demo-muted`},`错误按钮请求不存在的路径，不会写入数据。`,-1)),E={class:`content-card playground-card`},D=y(()=>c(`div`,{class:`playground-title`},[c(`div`,null,[c(`h2`,null,`JSON 响应预览`),c(`p`,null,`展示 Axios 拦截器解包后的 response.data。`)])],-1)),O={class:`demo-code`},k=h({__name:`ApiView`,setup(o){let s=e([]),h=e(!1),y=e(``),k=e(``);async function A(){h.value=!0,y.value=``;try{s.value=await _.list(),k.value=JSON.stringify(s.value,null,2)}catch(e){y.value=e.response?.data?.message||e.message||`请求失败`}finally{h.value=!1}}async function j(){h.value=!0,y.value=``;try{await g.get(`/not-a-real-endpoint`)}catch(e){y.value=e.response?.data?.message||e.message||`请求失败`}finally{h.value=!1}}n(A);let M=[{label:`Axios 实例`,url:`https://axios-http.com/docs/instance`},{label:`错误处理`,url:`https://axios-http.com/docs/handling_errors`}];return(e,n)=>{let o=l(`el-tag`),g=l(`el-button`),_=l(`el-alert`),N=l(`el-table-column`),P=l(`el-empty`),F=l(`el-table`),I=p(`loading`);return r(),m(v,{eyebrow:`PRACTICE · API REQUEST`,title:`API 请求与状态处理`,description:`复用现有只读 Mock 用户接口，演示请求、加载、响应数据与错误处理，不会更改用户数据。`,concepts:[`接口模块封装请求方法，页面不直接拼接 CRUD 逻辑。`,`loading 状态反馈请求过程，finally 确保状态复位。`,`失败时保留可读错误信息；错误通知仍由现有 Axios 拦截器处理。`],code:`// api/users.js
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
</template>`,resources:M},{default:f(()=>[c(`section`,b,[c(`div`,x,[S,i(o,{type:`success`,effect:`plain`},{default:f(()=>[t(`只读请求`)]),_:1})]),c(`div`,C,[c(`div`,w,[i(g,{type:`primary`,loading:h.value,onClick:A},{default:f(()=>[t(`请求用户列表`)]),_:1},8,[`loading`]),i(g,{loading:h.value,onClick:j},{default:f(()=>[t(`演示 404 错误`)]),_:1},8,[`loading`]),T]),y.value?(r(),m(_,{key:0,title:`请求失败：${y.value}`,type:`error`,closable:!1,"show-icon":``},null,8,[`title`])):a(``,!0),u((r(),m(F,{data:s.value,size:`small`,class:`api-table`,"row-key":`id`},{empty:f(()=>[i(P,{description:`点击请求按钮加载数据`,"image-size":58})]),default:f(()=>[i(N,{prop:`name`,label:`姓名`,"min-width":`85`}),i(N,{prop:`email`,label:`邮箱`,"min-width":`160`}),i(N,{prop:`role`,label:`角色`,width:`80`}),i(N,{prop:`status`,label:`状态`,width:`75`})]),_:1},8,[`data`])),[[I,h.value]])])]),c(`section`,E,[D,c(`pre`,O,d(k.value||`请求成功后会在此显示 JSON 响应。`),1)])]),_:1})}}},[[`__scopeId`,`data-v-d93ac79b`]]);export{k as default};