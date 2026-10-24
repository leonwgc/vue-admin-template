import{$ as e,C as t,D as n,E as r,J as i,X as a,Z as o,a as s,b as c,f as l,ft as u,kt as d,o as f,q as p,tn as m,x as h,y as g}from"./vue-vendor-CsbriK0s.js";import{n as _}from"./index-B_hZ1C-r.js";import{t as v}from"./ExamplePage-k1ZS3Qm1.js";var y=e=>(a(`data-v-3a078f35`),e=e(),i(),e),b={class:`content-card playground-card`},x={class:`playground-title`},S=y(()=>c(`div`,null,[c(`h2`,null,`路由参数实验`),c(`p`,null,`使用链接切换动态路由参数，再更新 query 字符串。`)],-1)),C={class:`playground-content`},w={class:`route-state`},T=y(()=>c(`span`,{class:`demo-label`},`route.params.demoId`,-1)),E=y(()=>c(`span`,{class:`demo-label`},`route.query.keyword`,-1)),D=y(()=>c(`div`,{class:`demo-divider`},null,-1)),O=y(()=>c(`span`,{class:`demo-label`},`RouterLink · 声明式导航`,-1)),k={class:`demo-row route-links`},A=y(()=>c(`span`,{class:`demo-label`},`router.push · 编程式更新 query`,-1)),j={class:`demo-row`},M={class:`demo-output`},N=_({__name:`RouterView`,setup(i){let a=s(),_=f(),y=g(()=>a.params.demoId||`overview`),N=g(()=>a.query.keyword||`（未设置）`);function P(e){_.push({name:`example-router`,params:{demoId:y.value},query:{...a.query,keyword:e}})}let F=[{label:`Vue Router 指南`,url:`https://router.vuejs.org/guide/`},{label:`动态路由匹配`,url:`https://router.vuejs.org/guide/essentials/dynamic-matching.html`},{label:`编程式导航`,url:`https://router.vuejs.org/guide/essentials/navigation.html`}];return(i,s)=>{let f=e(`el-tag`),g=e(`RouterLink`),_=e(`el-button`);return p(),h(v,{eyebrow:`ROUTING · VUE ROUTER`,title:`Vue Router`,description:`在示例路由内使用 RouterLink 和编程式导航，并观察动态 params 与 query 参数。`,concepts:[`RouterLink 适合声明式页面跳转。`,`useRoute 读取当前 params 和 query。`,`useRouter 执行编程式跳转；本示例不改动其他页面的路由。`],code:`// router/index.js
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
</template>`,resources:F},{default:u(()=>[c(`section`,b,[c(`div`,x,[S,n(f,{type:`warning`,effect:`plain`},{default:u(()=>[r(`params · query`)]),_:1})]),c(`div`,C,[c(`div`,w,[c(`div`,null,[T,c(`strong`,null,m(d(y)),1)]),c(`div`,null,[E,c(`strong`,null,m(d(N)),1)])]),D,O,c(`div`,k,[(p(),t(l,null,o([`overview`,`profile`,`settings`],e=>n(g,{key:e,to:{name:`example-router`,params:{demoId:e},query:{keyword:d(N)}},class:`route-link`},{default:u(()=>[r(m(e),1)]),_:2},1032,[`to`])),64))]),A,c(`div`,j,[(p(),t(l,null,o([`Vue`,`Pinia`,`Router`],e=>n(_,{key:e,size:`small`,type:d(N)===e?`primary`:`default`,onClick:t=>P(e)},{default:u(()=>[r(m(e),1)]),_:2},1032,[`type`,`onClick`])),64))]),c(`div`,M,`当前完整地址：`+m(d(a).fullPath),1)])])]),_:1})}}},[[`__scopeId`,`data-v-3a078f35`]]);export{N as default};