import{$ as e,C as t,D as n,E as r,G as i,J as a,St as o,W as s,X as c,b as l,ft as u,kt as d,q as f,tn as p,x as m}from"./vue-vendor-CsbriK0s.js";import{n as h}from"./index-B_hZ1C-r.js";import{t as g}from"./ExamplePage-k1ZS3Qm1.js";function _(){let e=o(0),t=o(0);function n(n){e.value=n.clientX,t.value=n.clientY}return s(()=>window.addEventListener(`mousemove`,n)),i(()=>window.removeEventListener(`mousemove`,n)),{x:e,y:t}}var v=e=>(c(`data-v-c951c688`),e=e(),a(),e),y={class:`mouse-readout`},b=v(()=>l(`strong`,null,`子组件复用 useMouse`,-1)),x=h({__name:`MouseReadout`,setup(e){let{x:n,y:r}=_();return(e,i)=>(f(),t(`div`,y,[b,l(`span`,null,`x: `+p(d(n))+` · y: `+p(d(r)),1)]))}},[[`__scopeId`,`data-v-c951c688`]]),S={class:`content-card playground-card`},C={class:`playground-title`},w=l(`div`,null,[l(`h2`,null,`指针坐标组合式函数`),l(`p`,null,`移动鼠标观察两个独立组件复用 useMouse 的结果。`)],-1),T={class:`playground-content`},E={class:`demo-output`},D=l(`p`,{class:`demo-muted`},`离开本页后，两个组件各自注册的 mousemove 监听都会移除。`,-1),O={__name:`ComposablesView`,setup(t){let{x:i,y:a}=_(),o=[{label:`Composables（组合式函数）`,url:`https://vuejs.org/guide/reusability/composables.html`},{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`}];return(t,s)=>{let c=e(`el-tag`);return f(),m(g,{eyebrow:`REUSABILITY · COMPOSABLES`,title:`Composables：组合式函数`,description:`把指针坐标和事件监听封装到 useMouse，在页面和子组件中复用，并自动清理副作用。`,concepts:[`组合式函数是使用 Vue Composition API 封装可复用有状态逻辑的函数。`,`通常以 use 开头，返回响应式状态和方法。`,`在 onMounted 注册监听，并在 onUnmounted 清理，避免资源泄漏。`],code:`// src/composables/useMouse.js
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
`,resources:o},{default:u(()=>[l(`section`,S,[l(`div`,C,[w,n(c,{effect:`plain`},{default:u(()=>[r(`useMouse()`)]),_:1})]),l(`div`,T,[l(`div`,E,`页面组件：x = `+p(d(i))+`，y = `+p(d(a)),1),n(x),D])])]),_:1})}}};export{O as default};