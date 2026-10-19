import{C as e,G as t,H as n,Jt as r,R as i,St as a,V as o,W as s,_ as c,at as l,g as u,ht as d,l as f,q as p,rt as m,w as h,y as g,z as _}from"./vue-vendor-C4hU-6hB.js";import{n as v}from"./index-CC0QjMSP.js";import{t as y}from"./ExamplePage-nW8YSaAW.js";var b=e=>(s(`data-v-2c4cd5dc`),e=e(),n(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>u(`div`,null,[u(`h2`,null,`组件生命周期实验`),u(`p`,null,`启动计时器后切换页面，再返回观察卸载清理效果。`)],-1)),w={class:`playground-content`},T={class:`timer-display`},E=b(()=>u(`span`,{class:`demo-label`},`组件已挂载`,-1)),D={class:`demo-value`},O=b(()=>u(`small`,null,` 秒`,-1)),k={class:`demo-row`},A=b(()=>u(`span`,{class:`demo-muted`},`切换到其他菜单会卸载本页面。`,-1)),j=b(()=>u(`div`,{class:`demo-divider`},null,-1)),M=b(()=>u(`label`,{class:`demo-label`,for:`watched-value`},`watch · 侦听输入变化`,-1)),N={class:`demo-output`},P=b(()=>u(`div`,{class:`demo-divider`},null,-1)),F=b(()=>u(`span`,{class:`demo-label`},`生命周期事件`,-1)),I={key:0,class:`event-list`},L={key:1,class:`demo-muted`},R=v({__name:`LifecycleView`,setup(n){let s=d(0),v=d([]),b=d(`Composition API`),R=d(`修改内容，观察 watch 的反馈。`),z;function B(e){v.value.unshift(`${new Date().toLocaleTimeString(`zh-CN`)} · ${e}`),v.value=v.value.slice(0,5)}function V(){z||(z=window.setInterval(()=>{s.value+=1},1e3),B(`计时器已启动`))}function H(){z&&(window.clearInterval(z),z=void 0,B(`计时器已停止`))}m(b,e=>{R.value=`watch 观察到内容更新为「${e}」`,B(`watch：演示内容已更新`)}),i(()=>B(`onMounted：组件已挂载`)),_(()=>{z&&window.clearInterval(z)});let U=[{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(n,i)=>{let d=p(`el-tag`),m=p(`el-button`),_=p(`el-input`),B=p(`CircleCheck`),W=p(`el-icon`);return o(),c(y,{eyebrow:`VUE FOUNDATION · LIFECYCLE`,title:`生命周期与侦听`,description:`观察组件挂载时机，并在组件卸载时清理计时器等副作用。`,concepts:[`onMounted 在组件挂载后运行，适合启动浏览器相关工作。`,`onUnmounted 用于释放计时器、事件监听等资源。`,`离开此页时计时器会自动清理，避免后台任务残留。`],code:`<script setup>
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
</template>`,resources:U},{default:l(()=>[u(`section`,x,[u(`div`,S,[C,h(d,{type:`warning`,effect:`plain`},{default:l(()=>[e(`onMounted / onUnmounted`)]),_:1})]),u(`div`,w,[u(`div`,T,[E,u(`strong`,D,[e(r(s.value),1),O])]),u(`div`,k,[h(m,{type:`primary`,disabled:!!a(z),onClick:V},{default:l(()=>[e(`启动计时器`)]),_:1},8,[`disabled`]),h(m,{disabled:!a(z),onClick:H},{default:l(()=>[e(`停止`)]),_:1},8,[`disabled`]),A]),j,u(`div`,null,[M,h(_,{id:`watched-value`,modelValue:b.value,"onUpdate:modelValue":i[0]||=e=>b.value=e},null,8,[`modelValue`]),u(`div`,N,r(R.value),1)]),P,u(`div`,null,[F,v.value.length?(o(),g(`div`,I,[(o(!0),g(f,null,t(v.value,t=>(o(),g(`div`,{key:t,class:`event-row`},[h(W,null,{default:l(()=>[h(B)]),_:1}),e(r(t),1)]))),128))])):(o(),g(`p`,L,`挂载时记录的事件会显示在这里。`))])])])]),_:1})}}},[[`__scopeId`,`data-v-2c4cd5dc`]]);export{R as default};