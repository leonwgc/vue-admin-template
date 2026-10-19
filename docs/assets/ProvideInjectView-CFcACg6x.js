import{A as e,C as t,Gt as n,H as r,Jt as i,St as a,U as o,V as s,W as c,_ as l,at as u,g as d,ht as f,q as p,w as m,y as h}from"./vue-vendor-C4hU-6hB.js";import{n as g}from"./index-B62kKl9O.js";import{t as _}from"./ExamplePage-u9xwcdmO.js";var v=(e=>(c(`data-v-e233e455`),e=e(),r(),e))(()=>d(`span`,null,`此组件没有通过 props 接收主题。`,-1)),y=g({__name:`ThemeConsumer`,setup(t){let r=e(`example-theme`);return(e,t)=>(s(),h(`div`,{class:n([`theme-consumer`,`theme-${a(r)}`])},[d(`strong`,null,`深层组件已注入「`+i(a(r))+`」主题`,1),v],2))}},[[`__scopeId`,`data-v-e233e455`]]),b=e=>(c(`data-v-46d530c6`),e=e(),r(),e),x={class:`theme-layer`},S=b(()=>d(`div`,{class:`layer-label`},`中间层组件（不接收 theme prop）`,-1)),C=g({__name:`ThemeLayer`,setup(e){return(e,t)=>(s(),h(`div`,x,[S,m(y)]))}},[[`__scopeId`,`data-v-46d530c6`]]),w={class:`content-card playground-card`},T={class:`playground-title`},E=d(`div`,null,[d(`h2`,null,`跨层级主题注入`),d(`p`,null,`切换祖先组件的主题，观察深层后代即时更新。`)],-1),D={class:`playground-content`},O={__name:`ProvideInjectView`,setup(e){let n=f(`light`);o(`example-theme`,n);let r=[{label:`Provide / Inject`,url:`https://vuejs.org/guide/components/provide-inject.html`},{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`}];return(e,i)=>{let a=p(`el-tag`),o=p(`el-radio-button`),c=p(`el-radio-group`);return s(),l(_,{eyebrow:`REUSABILITY · PROVIDE AND INJECT`,title:`provide / inject`,description:`由祖先提供响应式主题设置，跨过中间组件直接注入到深层后代。`,concepts:[`provide 在祖先组件提供数据，inject 在任意深层后代读取。`,`注入 ref 时保留响应性；页面中间层不需要逐层接收和传递 props。`,`适合主题、表单上下文等跨层级依赖；局部状态仍优先使用 props/emits。`],code:`<!-- ProviderView.vue -->
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
<template><p>注入的主题：{{ theme }}</p></template>`,resources:r},{default:u(()=>[d(`section`,w,[d(`div`,T,[E,m(a,{effect:`plain`},{default:u(()=>[t(`provide → inject`)]),_:1})]),d(`div`,D,[m(c,{modelValue:n.value,"onUpdate:modelValue":i[0]||=e=>n.value=e,"aria-label":`选择演示主题`},{default:u(()=>[m(o,{label:`light`},{default:u(()=>[t(`浅色`)]),_:1}),m(o,{label:`dark`},{default:u(()=>[t(`深色`)]),_:1})]),_:1},8,[`modelValue`]),m(C)])])]),_:1})}}};export{O as default};