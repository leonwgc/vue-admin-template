import{Ct as e,D as t,J as n,O as r,Y as i,Z as a,b as o,et as s,nn as c,pt as l,x as u}from"./vue-vendor-2WV6Jefd.js";import{r as d}from"./index-KdiVrdr8.js";import{t as f}from"./ExamplePage-BNsrRItr.js";var p=e=>(a(`data-v-5700ab8c`),e=e(),i(),e),m={class:`content-card playground-card`},h={class:`playground-title`},g=p(()=>o(`div`,null,[o(`h2`,null,`创建项目`),o(`p`,null,`命令用于新项目说明；此演示不会在当前仓库运行脚手架或更改依赖。`)],-1)),_=p(()=>o(`pre`,{class:`demo-code`},`npm create vue@latest
cd my-vue-app
npm install
npm run dev`,-1)),v=p(()=>o(`div`,{class:`demo-divider`},null,-1)),y=p(()=>o(`div`,{class:`playground-title`},[o(`div`,null,[o(`h2`,null,`体验一个 SFC`),o(`p`,null,`编辑名称或点击按钮，观察 template 与 script setup 的响应关系。`)])],-1)),b={class:`playground-content`},x={class:`demo-output`},S=p(()=>o(`strong`,null,`Template：`,-1)),C=p(()=>o(`div`,{class:`sfc-parts`},[o(`span`,null,[o(`b`,null,`template`),t(`描述界面`)]),o(`span`,null,[o(`b`,null,`script setup`),t(`声明响应式状态`)]),o(`span`,null,[o(`b`,null,`style scoped`),t(`编写组件样式`)])],-1)),w=d({__name:`QuickStartView`,setup(i){let a=e(`Vue 3`),d=e(0),p=[{label:`Vue Quick Start`,url:`https://vuejs.org/guide/quick-start.html`},{label:`Single-File Components`,url:`https://vuejs.org/guide/scaling-up/sfc.html`}];return(e,i)=>{let w=s(`el-tag`),T=s(`el-input`),E=s(`el-button`);return n(),u(f,{eyebrow:`GETTING STARTED · SINGLE-FILE COMPONENTS`,title:`快速开始与 SFC`,description:`从官方 create-vue 脚手架到单文件组件结构，认识一个 Vue 页面从哪里开始。`,concepts:[`官方推荐使用 npm create vue@latest 创建 Vite 项目，再按向导选择 Router、Pinia 等功能。`,`每个 .vue 单文件组件可以组合 template、script setup 和 scoped style。`,`新项目的 npm run dev 命令由脚手架生成；本仓库沿用 package.json 中的 npm run start。`],code:`<script setup>
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
</style>`,resources:p},{default:l(()=>[o(`section`,m,[o(`div`,h,[g,r(w,{effect:`plain`},{default:l(()=>[t(`官方流程`)]),_:1})]),_,v,y,o(`div`,b,[r(T,{modelValue:a.value,"onUpdate:modelValue":i[0]||=e=>a.value=e,"aria-label":`问候名称`},null,8,[`modelValue`]),o(`div`,x,[S,t(`你好，`+c(a.value),1)]),r(E,{type:`primary`,onClick:i[1]||=e=>d.value+=1},{default:l(()=>[t(`点击次数：`+c(d.value),1)]),_:1}),C])])]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-5700ab8c`]]);export{w as default};