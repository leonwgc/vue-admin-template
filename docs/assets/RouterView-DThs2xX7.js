import{At as e,C as t,D as n,J as r,O as i,Q as a,Y as o,Z as s,a as c,b as l,et as u,f as d,nn as f,o as p,pt as m,x as h,y as g}from"./vue-vendor-2WV6Jefd.js";import{r as _}from"./index-KdiVrdr8.js";import{t as v}from"./ExamplePage-BNsrRItr.js";var y=e=>(s(`data-v-bb0dd8dc`),e=e(),o(),e),b={class:`content-card playground-card`},x={class:`playground-title`},S=y(()=>l(`div`,null,[l(`h2`,null,`路由参数实验`),l(`p`,null,`使用链接切换动态路由参数，再更新 query 字符串。`)],-1)),C={class:`playground-content`},w={class:`route-state`},T=y(()=>l(`span`,{class:`demo-label`},`route.params.demoId`,-1)),E=y(()=>l(`span`,{class:`demo-label`},`route.query.keyword`,-1)),D=y(()=>l(`div`,{class:`demo-divider`},null,-1)),O=y(()=>l(`span`,{class:`demo-label`},`RouterLink · 声明式导航`,-1)),k={class:`demo-row route-links`},A=y(()=>l(`span`,{class:`demo-label`},`router.push · 编程式更新 query`,-1)),j={class:`demo-row`},M={class:`demo-output`},N=_({__name:`RouterView`,setup(o){let s=c(),_=p(),y=g(()=>s.params.demoId||`overview`),N=g(()=>s.query.keyword||`（未设置）`);function P(e){_.push({name:`example-router`,params:{demoId:y.value},query:{...s.query,keyword:e}})}let F=[{label:`Vue Router 指南`,url:`https://router.vuejs.org/guide/`},{label:`动态路由匹配`,url:`https://router.vuejs.org/guide/essentials/dynamic-matching.html`},{label:`编程式导航`,url:`https://router.vuejs.org/guide/essentials/navigation.html`}];return(o,c)=>{let p=u(`el-tag`),g=u(`RouterLink`),_=u(`el-button`);return r(),h(v,{eyebrow:`ROUTING · VUE ROUTER`,title:`Vue Router`,description:`在示例路由内使用 RouterLink 和编程式导航，并观察动态 params 与 query 参数。`,concepts:[`RouterLink 适合声明式页面跳转。`,`useRoute 读取当前 params 和 query。`,`useRouter 执行编程式跳转；本示例不改动全局登录守卫。`],code:`// router/index.js
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
</template>`,resources:F},{default:m(()=>[l(`section`,b,[l(`div`,x,[S,i(p,{type:`warning`,effect:`plain`},{default:m(()=>[n(`params · query`)]),_:1})]),l(`div`,C,[l(`div`,w,[l(`div`,null,[T,l(`strong`,null,f(e(y)),1)]),l(`div`,null,[E,l(`strong`,null,f(e(N)),1)])]),D,O,l(`div`,k,[(r(),t(d,null,a([`overview`,`profile`,`settings`],t=>i(g,{key:t,to:{name:`example-router`,params:{demoId:t},query:{keyword:e(N)}},class:`route-link`},{default:m(()=>[n(f(t),1)]),_:2},1032,[`to`])),64))]),A,l(`div`,j,[(r(),t(d,null,a([`Vue`,`Pinia`,`Router`],t=>i(_,{key:t,size:`small`,type:e(N)===t?`primary`:`default`,onClick:e=>P(t)},{default:m(()=>[n(f(t),1)]),_:2},1032,[`type`,`onClick`])),64))]),l(`div`,M,`当前完整地址：`+f(e(s).fullPath),1)])])]),_:1})}}},[[`__scopeId`,`data-v-bb0dd8dc`]]);export{N as default};