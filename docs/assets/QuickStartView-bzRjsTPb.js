import{$ as e,D as t,E as n,G as r,J as i,N as a,St as o,X as s,b as c,ft as l,q as u,tn as d,x as f}from"./vue-vendor-CsbriK0s.js";import{o as p}from"./element-plus-BrLZTTAh.js";import{n as m}from"./index-B_hZ1C-r.js";import{t as h}from"./ExamplePage-k1ZS3Qm1.js";import{t as g}from"./ExampleSection-CZj6jErA.js";var _=e=>(s(`data-v-89a2d20c`),e=e(),i(),e),v={class:`content-card playground-card`},y={class:`playground-title`},b=_(()=>c(`div`,null,[c(`h2`,null,`创建项目`),c(`p`,null,`命令用于新项目说明；此演示不会在当前仓库运行脚手架或更改依赖。`)],-1)),x=_(()=>c(`pre`,{class:`demo-code`},`npm create vue@latest
cd my-vue-app
npm install
npm run dev`,-1)),S=_(()=>c(`div`,{class:`demo-divider`},null,-1)),C=_(()=>c(`div`,{class:`playground-title`},[c(`div`,null,[c(`h2`,null,`体验一个 SFC`),c(`p`,null,`编辑名称或点击按钮，观察 template 与 script setup 的响应关系。`)])],-1)),w={class:`playground-content`},T={class:`demo-output`},E=_(()=>c(`strong`,null,`Template：`,-1)),D=_(()=>c(`div`,{class:`sfc-parts`},[c(`span`,null,[c(`b`,null,`template`),n(`描述界面`)]),c(`span`,null,[c(`b`,null,`script setup`),n(`声明响应式状态`)]),c(`span`,null,[c(`b`,null,`style scoped`),n(`编写组件样式`)])],-1)),O=_(()=>c(`div`,{class:`app-flow`},[c(`span`,null,`index.html · #app`),c(`span`,null,`createApp(App)`),c(`span`,null,`mount('#app')`),c(`span`,null,`根组件和子组件`)],-1)),k={class:`demo-row`},A=m({__name:`QuickStartView`,setup(i){let s=o(`Vue 3`),m=o(0),_=o(null),A=o(!1),j;function M(){!j&&_.value&&(j=p({setup(){let e=o(0);return()=>a(`button`,{onClick:()=>e.value++},`独立应用：点击 ${e.value} 次`)}}),j.mount(_.value),A.value=!0)}function N(){j?.unmount(),j=void 0,A.value=!1}r(N);let P=[{label:`Vue Quick Start`,url:`https://vuejs.org/guide/quick-start.html`},{label:`Single-File Components`,url:`https://vuejs.org/guide/scaling-up/sfc.html`}];return(r,i)=>{let a=e(`el-tag`),o=e(`el-input`),p=e(`el-button`);return u(),f(h,{eyebrow:`GETTING STARTED · SINGLE-FILE COMPONENTS`,title:`快速开始与 SFC`,description:`从官方 create-vue 脚手架到单文件组件结构，认识一个 Vue 页面从哪里开始。`,concepts:[`createApp 创建 Vue 应用实例，mount 将根组件挂到页面容器；应用配置属于该实例。`,`每个 .vue 单文件组件可以组合 template、script setup 和 scoped style。`,`官方推荐使用 npm create vue@latest 创建 Vite 项目；本仓库沿用 package.json 中的 npm run start。`],code:`<script setup>
import { ref } from 'vue'

const name = ref('Vue 3')
const count = ref(0)
<\/script>

<template>
  <h2>你好，{{ name }}</h2>
  <button @click="count++">点击次数：{{ count }}</button>
</template>

<style scoped>
button { color: #5268e8; }
</style>`,resources:P},{default:l(()=>[c(`section`,v,[c(`div`,y,[b,t(a,{effect:`plain`},{default:l(()=>[n(`官方流程`)]),_:1})]),x,S,C,c(`div`,w,[t(o,{modelValue:s.value,"onUpdate:modelValue":i[0]||=e=>s.value=e,"aria-label":`问候名称`},null,8,[`modelValue`]),c(`div`,T,[E,n(`你好，`+d(s.value),1)]),t(p,{type:`primary`,onClick:i[1]||=e=>m.value+=1},{default:l(()=>[n(`点击次数：`+d(m.value),1)]),_:1}),D])]),t(g,{title:`应用实例与挂载`,description:`先创建应用，再把根组件挂载到 HTML 容器；从这里开始形成组件树。`,code:`// main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// index.html 提供 <div id="app"></div> 作为挂载容器。
// 一个页面可以有多个独立的应用实例。`},{default:l(()=>[O,c(`div`,k,[t(p,{disabled:A.value,onClick:M},{default:l(()=>[n(`挂载独立应用`)]),_:1},8,[`disabled`]),t(p,{disabled:!A.value,onClick:N},{default:l(()=>[n(`卸载独立应用`)]),_:1},8,[`disabled`])]),c(`div`,{ref_key:`mountTarget`,ref:_,class:`demo-output`,"aria-live":`polite`},null,512)]),_:1})]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-89a2d20c`]]);export{A as default};