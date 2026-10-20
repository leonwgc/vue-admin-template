import{C as e,Ct as t,D as n,J as r,O as i,S as a,Y as o,Z as s,b as c,et as l,nn as u,pt as d,x as f}from"./vue-vendor-2WV6Jefd.js";import{a as p}from"./element-plus-D7Zy95m4.js";import{r as m}from"./index-KdiVrdr8.js";import{t as h}from"./ExamplePage-BNsrRItr.js";var g=e=>(s(`data-v-bc0a4466`),e=e(),o(),e),_={class:`content-card playground-card`},v={class:`playground-title`},y=g(()=>c(`div`,null,[c(`h2`,null,`卡片进入与离开`),c(`p`,null,`反复切换显示状态，观察淡入、淡出和位移。`)],-1)),b={class:`playground-content`},x={class:`transition-stage`},S={key:0,class:`transition-card`},C=g(()=>c(`div`,null,[c(`strong`,null,`过渡动画已启用`),c(`p`,null,`Vue 自动切换 fade-enter / fade-leave 类名。`)],-1)),w=m({__name:`TransitionsView`,setup(o){let s=t(!0),m=[{label:`Transition`,url:`https://vuejs.org/guide/built-ins/transition.html`}];return(t,o)=>{let g=l(`el-tag`),w=l(`el-button`),T=l(`CircleCheck`),E=l(`el-icon`);return r(),f(h,{eyebrow:`BUILT-IN · TRANSITION`,title:`Transition 过渡效果`,description:`用内置 Transition 包装条件渲染节点，通过约定的 CSS 类名完成进入和离开动画。`,concepts:[`Transition 为单个元素或组件的插入、移除提供过渡钩子。`,`Vue 在进入/离开阶段自动添加 -enter/-leave CSS 类。`,`动画使用原生 CSS，不需要额外依赖。`],code:`<script setup>
import { ref } from 'vue'
const visible = ref(true)
<\/script>

<template>
  <button @click="visible = !visible">切换卡片</button>
  <Transition name="fade">
    <article v-if="visible">带有过渡效果的内容</article>
  </Transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>`,resources:m},{default:d(()=>[c(`section`,_,[c(`div`,v,[y,i(g,{effect:`plain`},{default:d(()=>[n(`Transition + CSS`)]),_:1})]),c(`div`,b,[i(w,{type:`primary`,onClick:o[0]||=e=>s.value=!s.value},{default:d(()=>[n(u(s.value?`隐藏卡片`:`显示卡片`),1)]),_:1}),c(`div`,x,[i(p,{name:`fade`},{default:d(()=>[s.value?(r(),e(`article`,S,[i(E,null,{default:d(()=>[i(T)]),_:1}),C])):a(``,!0)]),_:1})])])])]),_:1})}}},[[`__scopeId`,`data-v-bc0a4466`]]);export{w as default};