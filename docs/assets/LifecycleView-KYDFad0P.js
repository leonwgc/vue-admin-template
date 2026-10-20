import{At as e,C as t,Ct as n,D as r,G as i,J as a,K as o,O as s,Q as c,Y as l,Z as u,b as d,et as f,f as p,nn as m,pt as h,ut as g,x as _}from"./vue-vendor-2WV6Jefd.js";import{r as v}from"./index-KdiVrdr8.js";import{t as y}from"./ExamplePage-BNsrRItr.js";var b=e=>(u(`data-v-2c4cd5dc`),e=e(),l(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>d(`div`,null,[d(`h2`,null,`组件生命周期实验`),d(`p`,null,`启动计时器后切换页面，再返回观察卸载清理效果。`)],-1)),w={class:`playground-content`},T={class:`timer-display`},E=b(()=>d(`span`,{class:`demo-label`},`组件已挂载`,-1)),D={class:`demo-value`},O=b(()=>d(`small`,null,` 秒`,-1)),k={class:`demo-row`},A=b(()=>d(`span`,{class:`demo-muted`},`切换到其他菜单会卸载本页面。`,-1)),j=b(()=>d(`div`,{class:`demo-divider`},null,-1)),M=b(()=>d(`label`,{class:`demo-label`,for:`watched-value`},`watch · 侦听输入变化`,-1)),N={class:`demo-output`},P=b(()=>d(`div`,{class:`demo-divider`},null,-1)),F=b(()=>d(`span`,{class:`demo-label`},`生命周期事件`,-1)),I={key:0,class:`event-list`},L={key:1,class:`demo-muted`},R=v({__name:`LifecycleView`,setup(l){let u=n(0),v=n([]),b=n(`Composition API`),R=n(`修改内容，观察 watch 的反馈。`),z;function B(e){v.value.unshift(`${new Date().toLocaleTimeString(`zh-CN`)} · ${e}`),v.value=v.value.slice(0,5)}function V(){z||(z=window.setInterval(()=>{u.value+=1},1e3),B(`计时器已启动`))}function H(){z&&(window.clearInterval(z),z=void 0,B(`计时器已停止`))}g(b,e=>{R.value=`watch 观察到内容更新为「${e}」`,B(`watch：演示内容已更新`)}),i(()=>B(`onMounted：组件已挂载`)),o(()=>{z&&window.clearInterval(z)});let U=[{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(n,i)=>{let o=f(`el-tag`),l=f(`el-button`),g=f(`el-input`),B=f(`CircleCheck`),W=f(`el-icon`);return a(),_(y,{eyebrow:`VUE FOUNDATION · LIFECYCLE`,title:`生命周期与侦听`,description:`观察组件挂载时机，并在组件卸载时清理计时器等副作用。`,concepts:[`onMounted 在组件挂载后运行，适合启动浏览器相关工作。`,`onUnmounted 用于释放计时器、事件监听等资源。`,`离开此页时计时器会自动清理，避免后台任务残留。`],code:`<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const seconds = ref(0)
const watchedValue = ref('Composition API')
let timerId

function startTimer() {
  if (timerId) return
  timerId = window.setInterval(() => {
    seconds.value += 1
  }, 1000)
}

watch(watchedValue, (value) => {
  console.log('输入更新为', value)
})

onMounted(() => console.log('组件已挂载'))
onUnmounted(() => window.clearInterval(timerId))
<\/script>

<template>
  <p>计时：{{ seconds }} 秒</p>
  <button @click="startTimer">启动计时器</button>
  <input v-model="watchedValue" />
</template>`,resources:U},{default:h(()=>[d(`section`,x,[d(`div`,S,[C,s(o,{type:`warning`,effect:`plain`},{default:h(()=>[r(`onMounted / onUnmounted`)]),_:1})]),d(`div`,w,[d(`div`,T,[E,d(`strong`,D,[r(m(u.value),1),O])]),d(`div`,k,[s(l,{type:`primary`,disabled:!!e(z),onClick:V},{default:h(()=>[r(`启动计时器`)]),_:1},8,[`disabled`]),s(l,{disabled:!e(z),onClick:H},{default:h(()=>[r(`停止`)]),_:1},8,[`disabled`]),A]),j,d(`div`,null,[M,s(g,{id:`watched-value`,modelValue:b.value,"onUpdate:modelValue":i[0]||=e=>b.value=e},null,8,[`modelValue`]),d(`div`,N,m(R.value),1)]),P,d(`div`,null,[F,v.value.length?(a(),t(`div`,I,[(a(!0),t(p,null,c(v.value,e=>(a(),t(`div`,{key:e,class:`event-row`},[s(W,null,{default:h(()=>[s(B)]),_:1}),r(m(e),1)]))),128))])):(a(),t(`p`,L,`挂载时记录的事件会显示在这里。`))])])])]),_:1})}}},[[`__scopeId`,`data-v-2c4cd5dc`]]);export{R as default};