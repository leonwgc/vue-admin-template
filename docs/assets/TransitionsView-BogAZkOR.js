import{$ as e,C as t,D as n,E as r,J as i,S as a,St as o,X as s,Z as c,b as l,f as u,ft as d,q as f,tn as p,x as m}from"./vue-vendor-CsbriK0s.js";import{a as h,i as g}from"./element-plus-BrLZTTAh.js";import{n as _}from"./index-B_hZ1C-r.js";import{t as v}from"./ExamplePage-k1ZS3Qm1.js";import{t as y}from"./ExampleSection-CZj6jErA.js";var b=e=>(s(`data-v-d9ce5a46`),e=e(),i(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>l(`div`,null,[l(`h2`,null,`卡片进入与离开`),l(`p`,null,`反复切换显示状态，观察淡入、淡出和位移。`)],-1)),w={class:`playground-content`},T={class:`transition-stage`},E={key:0,class:`transition-card`},D=b(()=>l(`div`,null,[l(`strong`,null,`过渡动画已启用`),l(`p`,null,`Vue 自动切换 fade-enter / fade-leave 类名。`)],-1)),O={class:`demo-row`},k=_({__name:`TransitionsView`,setup(i){let s=o(!0),_=o([{id:1,label:`响应式`},{id:2,label:`组件`},{id:3,label:`路由`}]),b=4;function k(){_.value.push({id:b,label:`新主题 ${b}`}),b++}let A=[{label:`Transition`,url:`https://vuejs.org/guide/built-ins/transition.html`},{label:`TransitionGroup`,url:`https://vuejs.org/guide/built-ins/transition-group.html`}];return(i,o)=>{let b=e(`el-tag`),j=e(`el-button`),M=e(`CircleCheck`),N=e(`el-icon`),P=e(`el-empty`);return f(),m(v,{eyebrow:`BUILT-IN · TRANSITION`,title:`Transition 与 TransitionGroup`,description:`对比单个节点的进入离开和列表项目的增删、重排动画。`,concepts:[`Transition 为单个元素或组件的插入、移除提供过渡钩子。`,`TransitionGroup 用于 v-for 列表，每项必须有稳定且唯一的 key；-move 类处理位置变化。`,`Vue 在进入/离开阶段自动添加 -enter/-leave CSS 类；动画使用原生 CSS。`],code:`<script setup>
import { ref } from 'vue'
const visible = ref(true)
const items = ref([{ id: 1, label: '响应式' }, { id: 2, label: '组件' }])
let nextId = 3
function addItem() {
  items.value.push({ id: nextId, label: '新主题 ' + nextId })
  nextId++
}
<\/script>

<template>
  <button @click="visible = !visible">切换卡片</button>
  <Transition name="fade">
    <article v-if="visible">带有过渡效果的内容</article>
  </Transition>
  <button @click="addItem">添加主题</button>
  <button @click="items = [...items].reverse()">反转顺序</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
      <button @click="items = items.filter((entry) => entry.id !== item.id)">移除</button>
    </li>
  </TransitionGroup>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.list-enter-active, .list-leave-active, .list-move {
  transition: opacity .25s ease, transform .25s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>`,resources:A},{default:d(()=>[l(`section`,x,[l(`div`,S,[C,n(b,{effect:`plain`},{default:d(()=>[r(`Transition + CSS`)]),_:1})]),l(`div`,w,[n(j,{type:`primary`,onClick:o[0]||=e=>s.value=!s.value},{default:d(()=>[r(p(s.value?`隐藏卡片`:`显示卡片`),1)]),_:1}),l(`div`,T,[n(g,{name:`fade`},{default:d(()=>[s.value?(f(),t(`article`,E,[n(N,null,{default:d(()=>[n(M)]),_:1}),D])):a(``,!0)]),_:1})])])]),n(y,{title:`列表增删与重排`,description:`添加、移除或反转列表，观察每项的进入、离开和移动。`},{default:d(()=>[l(`div`,O,[n(j,{onClick:k},{default:d(()=>[r(`添加主题`)]),_:1}),n(j,{disabled:_.value.length<2,onClick:o[1]||=e=>_.value=[..._.value].reverse()},{default:d(()=>[r(`反转顺序`)]),_:1},8,[`disabled`])]),n(h,{name:`list`,tag:`ul`,class:`transition-list`},{default:d(()=>[(f(!0),t(u,null,c(_.value,e=>(f(),t(`li`,{key:e.id},[l(`span`,null,p(e.label),1),n(j,{size:`small`,"aria-label":`移除${e.label}`,onClick:t=>_.value=_.value.filter(t=>t.id!==e.id)},{default:d(()=>[r(`移除`)]),_:2},1032,[`aria-label`,`onClick`])]))),128))]),_:1}),_.value.length?a(``,!0):(f(),m(P,{key:0,description:`列表为空，可以添加主题`,"image-size":55}))]),_:1})]),_:1})}}},[[`__scopeId`,`data-v-d9ce5a46`]]);export{k as default};