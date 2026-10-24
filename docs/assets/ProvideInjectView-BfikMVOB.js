import{$ as e,C as t,D as n,E as r,J as i,P as a,Qt as o,St as s,X as c,Y as l,b as u,ft as d,kt as f,q as p,tn as m,x as h}from"./vue-vendor-CsbriK0s.js";import{n as g}from"./index-B_hZ1C-r.js";import{t as _}from"./ExamplePage-k1ZS3Qm1.js";var v=(e=>(c(`data-v-e233e455`),e=e(),i(),e))(()=>u(`span`,null,`此组件没有通过 props 接收主题。`,-1)),y=g({__name:`ThemeConsumer`,setup(e){let n=a(`example-theme`);return(e,r)=>(p(),t(`div`,{class:o([`theme-consumer`,`theme-${f(n)}`])},[u(`strong`,null,`深层组件已注入「`+m(f(n))+`」主题`,1),v],2))}},[[`__scopeId`,`data-v-e233e455`]]),b=e=>(c(`data-v-46d530c6`),e=e(),i(),e),x={class:`theme-layer`},S=b(()=>u(`div`,{class:`layer-label`},`中间层组件（不接收 theme prop）`,-1)),C=g({__name:`ThemeLayer`,setup(e){return(e,r)=>(p(),t(`div`,x,[S,n(y)]))}},[[`__scopeId`,`data-v-46d530c6`]]),w={class:`content-card playground-card`},T={class:`playground-title`},E=u(`div`,null,[u(`h2`,null,`跨层级主题注入`),u(`p`,null,`切换祖先组件的主题，观察深层后代即时更新。`)],-1),D={class:`playground-content`},O={__name:`ProvideInjectView`,setup(t){let i=s(`light`);l(`example-theme`,i);let a=[{label:`Provide / Inject`,url:`https://vuejs.org/guide/components/provide-inject.html`},{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`}];return(t,o)=>{let s=e(`el-tag`),c=e(`el-radio-button`),l=e(`el-radio-group`);return p(),h(_,{eyebrow:`REUSABILITY · PROVIDE AND INJECT`,title:`provide / inject`,description:`由祖先提供响应式主题设置，跨过中间组件直接注入到深层后代。`,concepts:[`provide 在祖先组件提供数据，inject 在任意深层后代读取。`,`注入 ref 时保留响应性；页面中间层不需要逐层接收和传递 props。`,`适合主题、表单上下文等跨层级依赖；局部状态仍优先使用 props/emits。`],code:`<!-- ProviderView.vue -->
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
<template><p>注入的主题：{{ theme }}</p></template>`,resources:a},{default:d(()=>[u(`section`,w,[u(`div`,T,[E,n(s,{effect:`plain`},{default:d(()=>[r(`provide → inject`)]),_:1})]),u(`div`,D,[n(l,{modelValue:i.value,"onUpdate:modelValue":o[0]||=e=>i.value=e,"aria-label":`选择演示主题`},{default:d(()=>[n(c,{label:`light`},{default:d(()=>[r(`浅色`)]),_:1}),n(c,{label:`dark`},{default:d(()=>[r(`深色`)]),_:1})]),_:1},8,[`modelValue`]),n(C)])])]),_:1})}}};export{O as default};