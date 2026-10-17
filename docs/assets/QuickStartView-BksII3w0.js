import{C as e,H as t,Jt as n,V as r,W as i,_ as a,at as o,g as s,ht as c,q as l,w as u}from"./vue-vendor-C4hU-6hB.js";import{n as d}from"./index-BfcPDWmE.js";import{t as f}from"./ExamplePage-BSiVK_aH.js";var p=e=>(i(`data-v-5700ab8c`),e=e(),t(),e),m={class:`content-card playground-card`},h={class:`playground-title`},g=p(()=>s(`div`,null,[s(`h2`,null,`创建项目`),s(`p`,null,`命令用于新项目说明；此演示不会在当前仓库运行脚手架或更改依赖。`)],-1)),_=p(()=>s(`pre`,{class:`demo-code`},`npm create vue@latest
cd my-vue-app
npm install
npm run dev`,-1)),v=p(()=>s(`div`,{class:`demo-divider`},null,-1)),y=p(()=>s(`div`,{class:`playground-title`},[s(`div`,null,[s(`h2`,null,`体验一个 SFC`),s(`p`,null,`编辑名称或点击按钮，观察 template 与 script setup 的响应关系。`)])],-1)),b={class:`playground-content`},x={class:`demo-output`},S=p(()=>s(`strong`,null,`Template：`,-1)),C=p(()=>s(`div`,{class:`sfc-parts`},[s(`span`,null,[s(`b`,null,`template`),e(`描述界面`)]),s(`span`,null,[s(`b`,null,`script setup`),e(`声明响应式状态`)]),s(`span`,null,[s(`b`,null,`style scoped`),e(`编写组件样式`)])],-1)),w=d({__name:`QuickStartView`,setup(t){let i=c(`Vue 3`),d=c(0),p=[{label:`Vue Quick Start`,url:`https://vuejs.org/guide/quick-start.html`},{label:`Single-File Components`,url:`https://vuejs.org/guide/scaling-up/sfc.html`}];return(t,c)=>{let w=l(`el-tag`),T=l(`el-input`),E=l(`el-button`);return r(),a(f,{eyebrow:`GETTING STARTED · SINGLE-FILE COMPONENTS`,title:`快速开始与 SFC`,description:`从官方 create-vue 脚手架到单文件组件结构，认识一个 Vue 页面从哪里开始。`,concepts:[`官方推荐使用 npm create vue@latest 创建 Vite 项目，再按向导选择 Router、Pinia 等功能。`,`每个 .vue 单文件组件可以组合 template、script setup 和 scoped style。`,`新项目的 npm run dev 命令由脚手架生成；本仓库沿用 package.json 中的 npm run start。`],code:`<script setup>
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
</style>`,resources:p},{default:o(()=>[s(`section`,m,[s(`div`,h,[g,u(w,{effect:`plain`},{default:o(()=>[e(`官方流程`)]),_:1})]),_,v,y,s(`div`,b,[u(T,{modelValue:i.value,"onUpdate:modelValue":c[0]||=e=>i.value=e,"aria-label":`问候名称`},null,8,[`modelValue`]),s(`div`,x,[S,e(`你好，`+n(i.value),1)]),u(E,{type:`primary`,onClick:c[1]||=e=>d.value+=1},{default:o(()=>[e(`点击次数：`+n(d.value),1)]),_:1}),C])])]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-5700ab8c`]]);export{w as default};