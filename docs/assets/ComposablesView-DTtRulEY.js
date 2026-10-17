import{C as e,H as t,Jt as n,R as r,St as i,V as a,W as o,_ as s,at as c,g as l,ht as u,q as d,w as f,y as p,z as m}from"./vue-vendor-C4hU-6hB.js";import{n as h}from"./index-BfcPDWmE.js";import{t as g}from"./ExamplePage-BSiVK_aH.js";function _(){let e=u(0),t=u(0);function n(n){e.value=n.clientX,t.value=n.clientY}return r(()=>window.addEventListener(`mousemove`,n)),m(()=>window.removeEventListener(`mousemove`,n)),{x:e,y:t}}var v=e=>(o(`data-v-c951c688`),e=e(),t(),e),y={class:`mouse-readout`},b=v(()=>l(`strong`,null,`子组件复用 useMouse`,-1)),x=h({__name:`MouseReadout`,setup(e){let{x:t,y:r}=_();return(e,o)=>(a(),p(`div`,y,[b,l(`span`,null,`x: `+n(i(t))+` · y: `+n(i(r)),1)]))}},[[`__scopeId`,`data-v-c951c688`]]),S={class:`content-card playground-card`},C={class:`playground-title`},w=l(`div`,null,[l(`h2`,null,`指针坐标组合式函数`),l(`p`,null,`移动鼠标观察两个独立组件复用 useMouse 的结果。`)],-1),T={class:`playground-content`},E={class:`demo-output`},D=l(`p`,{class:`demo-muted`},`离开本页后，两个组件各自注册的 mousemove 监听都会移除。`,-1),O={__name:`ComposablesView`,setup(t){let{x:r,y:o}=_(),u=[{label:`Composables（组合式函数）`,url:`https://vuejs.org/guide/reusability/composables.html`},{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`}];return(t,p)=>{let m=d(`el-tag`);return a(),s(g,{eyebrow:`REUSABILITY · COMPOSABLES`,title:`Composables：组合式函数`,description:`把指针坐标和事件监听封装到 useMouse，在页面和子组件中复用，并自动清理副作用。`,concepts:[`组合式函数是使用 Vue Composition API 封装可复用有状态逻辑的函数。`,`通常以 use 开头，返回响应式状态和方法。`,`在 onMounted 注册监听，并在 onUnmounted 清理，避免资源泄漏。`],code:`// src/composables/useMouse.js
import { onMounted, onUnmounted, ref } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function updatePosition(event) {
    x.value = event.clientX
    y.value = event.clientY
  }
  onMounted(() => window.addEventListener('mousemove', updatePosition))
  onUnmounted(() => window.removeEventListener('mousemove', updatePosition))
  return { x, y }
}

// ComposablesView.vue
<script setup>
import { useMouse } from '../../composables/useMouse'
const { x, y } = useMouse()
<\/script>
<template><p>指针位置：{{ x }}, {{ y }}</p></template>

// 子组件可在自己的 setup 中再次调用 useMouse()
`,resources:u},{default:c(()=>[l(`section`,S,[l(`div`,C,[w,f(m,{effect:`plain`},{default:c(()=>[e(`useMouse()`)]),_:1})]),l(`div`,T,[l(`div`,E,`页面组件：x = `+n(i(r))+`，y = `+n(i(o)),1),f(x),D])])]),_:1})}}};export{O as default};