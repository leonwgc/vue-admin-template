import{$t as e,At as t,C as n,Ct as r,D as i,F as a,J as o,O as s,X as c,Y as l,Z as u,b as d,et as f,nn as p,pt as m,x as h}from"./vue-vendor-2WV6Jefd.js";import{r as g}from"./index-KdiVrdr8.js";import{t as _}from"./ExamplePage-BNsrRItr.js";var v=(e=>(u(`data-v-e233e455`),e=e(),l(),e))(()=>d(`span`,null,`此组件没有通过 props 接收主题。`,-1)),y=g({__name:`ThemeConsumer`,setup(r){let i=a(`example-theme`);return(r,a)=>(o(),n(`div`,{class:e([`theme-consumer`,`theme-${t(i)}`])},[d(`strong`,null,`深层组件已注入「`+p(t(i))+`」主题`,1),v],2))}},[[`__scopeId`,`data-v-e233e455`]]),b=e=>(u(`data-v-46d530c6`),e=e(),l(),e),x={class:`theme-layer`},S=b(()=>d(`div`,{class:`layer-label`},`中间层组件（不接收 theme prop）`,-1)),C=g({__name:`ThemeLayer`,setup(e){return(e,t)=>(o(),n(`div`,x,[S,s(y)]))}},[[`__scopeId`,`data-v-46d530c6`]]),w={class:`content-card playground-card`},T={class:`playground-title`},E=d(`div`,null,[d(`h2`,null,`跨层级主题注入`),d(`p`,null,`切换祖先组件的主题，观察深层后代即时更新。`)],-1),D={class:`playground-content`},O={__name:`ProvideInjectView`,setup(e){let t=r(`light`);c(`example-theme`,t);let n=[{label:`Provide / Inject`,url:`https://vuejs.org/guide/components/provide-inject.html`},{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`}];return(e,r)=>{let a=f(`el-tag`),c=f(`el-radio-button`),l=f(`el-radio-group`);return o(),h(_,{eyebrow:`REUSABILITY · PROVIDE AND INJECT`,title:`provide / inject`,description:`由祖先提供响应式主题设置，跨过中间组件直接注入到深层后代。`,concepts:[`provide 在祖先组件提供数据，inject 在任意深层后代读取。`,`注入 ref 时保留响应性；页面中间层不需要逐层接收和传递 props。`,`适合主题、表单上下文等跨层级依赖；局部状态仍优先使用 props/emits。`],code:`<!-- ProviderView.vue -->
<script setup>
import { provide, ref } from 'vue'
const theme = ref('light')
provide('example-theme', theme)
<\/script>

<template>
  <select v-model="theme">
    <option value="light">浅色</option>
    <option value="dark">深色</option>
  </select>
  <ThemeLayer />
</template>

<!-- ThemeLayer.vue: 不接收或传递 theme prop -->
<template><ThemeConsumer /></template>

<!-- ThemeConsumer.vue -->
<script setup>
import { inject } from 'vue'
const theme = inject('example-theme')
<\/script>
<template><p>注入的主题：{{ theme }}</p></template>`,resources:n},{default:m(()=>[d(`section`,w,[d(`div`,T,[E,s(a,{effect:`plain`},{default:m(()=>[i(`provide → inject`)]),_:1})]),d(`div`,D,[s(l,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,"aria-label":`选择演示主题`},{default:m(()=>[s(c,{label:`light`},{default:m(()=>[i(`浅色`)]),_:1}),s(c,{label:`dark`},{default:m(()=>[i(`深色`)]),_:1})]),_:1},8,[`modelValue`]),s(C)])])]),_:1})}}};export{O as default};