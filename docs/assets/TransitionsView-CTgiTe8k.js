import{C as e,H as t,Jt as n,V as r,W as i,_ as a,at as o,g as s,ht as c,q as l,v as u,w as d,y as f}from"./vue-vendor-C4hU-6hB.js";import{a as p}from"./element-plus-DdNPs73K.js";import{n as m}from"./index-BOfDxGO0.js";import{t as h}from"./ExamplePage-D4dHdpJ5.js";var g=e=>(i(`data-v-bc0a4466`),e=e(),t(),e),_={class:`content-card playground-card`},v={class:`playground-title`},y=g(()=>s(`div`,null,[s(`h2`,null,`卡片进入与离开`),s(`p`,null,`反复切换显示状态，观察淡入、淡出和位移。`)],-1)),b={class:`playground-content`},x={class:`transition-stage`},S={key:0,class:`transition-card`},C=g(()=>s(`div`,null,[s(`strong`,null,`过渡动画已启用`),s(`p`,null,`Vue 自动切换 fade-enter / fade-leave 类名。`)],-1)),w=m({__name:`TransitionsView`,setup(t){let i=c(!0),m=[{label:`Transition`,url:`https://vuejs.org/guide/built-ins/transition.html`}];return(t,c)=>{let g=l(`el-tag`),w=l(`el-button`),T=l(`CircleCheck`),E=l(`el-icon`);return r(),a(h,{eyebrow:`BUILT-IN · TRANSITION`,title:`Transition 过渡效果`,description:`用内置 Transition 包装条件渲染节点，通过约定的 CSS 类名完成进入和离开动画。`,concepts:[`Transition 为单个元素或组件的插入、移除提供过渡钩子。`,`Vue 在进入/离开阶段自动添加 -enter/-leave CSS 类。`,`动画使用原生 CSS，不需要额外依赖。`],code:`<script setup>
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
</style>`,resources:m},{default:o(()=>[s(`section`,_,[s(`div`,v,[y,d(g,{effect:`plain`},{default:o(()=>[e(`Transition + CSS`)]),_:1})]),s(`div`,b,[d(w,{type:`primary`,onClick:c[0]||=e=>i.value=!i.value},{default:o(()=>[e(n(i.value?`隐藏卡片`:`显示卡片`),1)]),_:1}),s(`div`,x,[d(p,{name:`fade`},{default:o(()=>[i.value?(r(),f(`article`,S,[d(E,null,{default:o(()=>[d(T)]),_:1}),C])):u(``,!0)]),_:1})])])])]),_:1})}}},[[`__scopeId`,`data-v-bc0a4466`]]);export{w as default};