import{At as e,C as t,Ct as n,D as r,G as i,J as a,K as o,O as s,Y as c,Z as l,b as u,et as d,nn as f,pt as p,x as m}from"./vue-vendor-2WV6Jefd.js";import{r as h}from"./index-KdiVrdr8.js";import{t as g}from"./ExamplePage-BNsrRItr.js";function _(){let e=n(0),t=n(0);function r(n){e.value=n.clientX,t.value=n.clientY}return i(()=>window.addEventListener(`mousemove`,r)),o(()=>window.removeEventListener(`mousemove`,r)),{x:e,y:t}}var v=e=>(l(`data-v-c951c688`),e=e(),c(),e),y={class:`mouse-readout`},b=v(()=>u(`strong`,null,`子组件复用 useMouse`,-1)),x=h({__name:`MouseReadout`,setup(n){let{x:r,y:i}=_();return(n,o)=>(a(),t(`div`,y,[b,u(`span`,null,`x: `+f(e(r))+` · y: `+f(e(i)),1)]))}},[[`__scopeId`,`data-v-c951c688`]]),S={class:`content-card playground-card`},C={class:`playground-title`},w=u(`div`,null,[u(`h2`,null,`指针坐标组合式函数`),u(`p`,null,`移动鼠标观察两个独立组件复用 useMouse 的结果。`)],-1),T={class:`playground-content`},E={class:`demo-output`},D=u(`p`,{class:`demo-muted`},`离开本页后，两个组件各自注册的 mousemove 监听都会移除。`,-1),O={__name:`ComposablesView`,setup(t){let{x:n,y:i}=_(),o=[{label:`Composables（组合式函数）`,url:`https://vuejs.org/guide/reusability/composables.html`},{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`}];return(t,c)=>{let l=d(`el-tag`);return a(),m(g,{eyebrow:`REUSABILITY · COMPOSABLES`,title:`Composables：组合式函数`,description:`把指针坐标和事件监听封装到 useMouse，在页面和子组件中复用，并自动清理副作用。`,concepts:[`组合式函数是使用 Vue Composition API 封装可复用有状态逻辑的函数。`,`通常以 use 开头，返回响应式状态和方法。`,`在 onMounted 注册监听，并在 onUnmounted 清理，避免资源泄漏。`],code:`// src/composables/useMouse.js
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
`,resources:o},{default:p(()=>[u(`section`,S,[u(`div`,C,[w,s(l,{effect:`plain`},{default:p(()=>[r(`useMouse()`)]),_:1})]),u(`div`,T,[u(`div`,E,`页面组件：x = `+f(e(n))+`，y = `+f(e(i)),1),s(x),D])])]),_:1})}}};export{O as default};