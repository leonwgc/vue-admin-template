import{C as e,G as t,H as n,Jt as r,St as i,V as a,W as o,_ as s,at as c,g as l,h as u,i as d,l as f,q as p,r as m,w as h,y as g}from"./vue-vendor-C4hU-6hB.js";import{n as _}from"./index-B62kKl9O.js";import{t as v}from"./ExamplePage-u9xwcdmO.js";var y=e=>(o(`data-v-bb0dd8dc`),e=e(),n(),e),b={class:`content-card playground-card`},x={class:`playground-title`},S=y(()=>l(`div`,null,[l(`h2`,null,`路由参数实验`),l(`p`,null,`使用链接切换动态路由参数，再更新 query 字符串。`)],-1)),C={class:`playground-content`},w={class:`route-state`},T=y(()=>l(`span`,{class:`demo-label`},`route.params.demoId`,-1)),E=y(()=>l(`span`,{class:`demo-label`},`route.query.keyword`,-1)),D=y(()=>l(`div`,{class:`demo-divider`},null,-1)),O=y(()=>l(`span`,{class:`demo-label`},`RouterLink · 声明式导航`,-1)),k={class:`demo-row route-links`},A=y(()=>l(`span`,{class:`demo-label`},`router.push · 编程式更新 query`,-1)),j={class:`demo-row`},M={class:`demo-output`},N=_({__name:`RouterView`,setup(n){let o=m(),_=d(),y=u(()=>o.params.demoId||`overview`),N=u(()=>o.query.keyword||`（未设置）`);function P(e){_.push({name:`example-router`,params:{demoId:y.value},query:{...o.query,keyword:e}})}let F=[{label:`Vue Router 指南`,url:`https://router.vuejs.org/guide/`},{label:`动态路由匹配`,url:`https://router.vuejs.org/guide/essentials/dynamic-matching.html`},{label:`编程式导航`,url:`https://router.vuejs.org/guide/essentials/navigation.html`}];return(n,u)=>{let d=p(`el-tag`),m=p(`RouterLink`),_=p(`el-button`);return a(),s(v,{eyebrow:`ROUTING · VUE ROUTER`,title:`Vue Router`,description:`在示例路由内使用 RouterLink 和编程式导航，并观察动态 params 与 query 参数。`,concepts:[`RouterLink 适合声明式页面跳转。`,`useRoute 读取当前 params 和 query。`,`useRouter 执行编程式跳转；本示例不改动全局登录守卫。`],code:`// router/index.js
{
  path: 'examples/router/:demoId?',
  name: 'example-router',
  component: () => import('../views/examples/RouterView.vue'),
}

// RouterView.vue
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

function openProfile() {
  router.push({
    name: 'example-router',
    params: { demoId: 'profile' },
    query: { keyword: 'Vue' },
  })
}
<\/script>

<template>
  <RouterLink :to="{ name: 'example-router',
    params: { demoId: 'settings' },
    query: { keyword: 'Router' } }">
    设置
  </RouterLink>
  <button @click="openProfile">个人资料</button>
  <p>params: {{ route.params.demoId }}</p>
  <p>query: {{ route.query.keyword }}</p>
</template>`,resources:F},{default:c(()=>[l(`section`,b,[l(`div`,x,[S,h(d,{type:`warning`,effect:`plain`},{default:c(()=>[e(`params · query`)]),_:1})]),l(`div`,C,[l(`div`,w,[l(`div`,null,[T,l(`strong`,null,r(i(y)),1)]),l(`div`,null,[E,l(`strong`,null,r(i(N)),1)])]),D,O,l(`div`,k,[(a(),g(f,null,t([`overview`,`profile`,`settings`],t=>h(m,{key:t,to:{name:`example-router`,params:{demoId:t},query:{keyword:i(N)}},class:`route-link`},{default:c(()=>[e(r(t),1)]),_:2},1032,[`to`])),64))]),A,l(`div`,j,[(a(),g(f,null,t([`Vue`,`Pinia`,`Router`],t=>h(_,{key:t,size:`small`,type:i(N)===t?`primary`:`default`,onClick:e=>P(t)},{default:c(()=>[e(r(t),1)]),_:2},1032,[`type`,`onClick`])),64))]),l(`div`,M,`当前完整地址：`+r(i(o).fullPath),1)])])]),_:1})}}},[[`__scopeId`,`data-v-bb0dd8dc`]]);export{N as default};