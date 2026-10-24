import{$ as e,C as t,D as n,E as r,G as i,J as a,St as o,W as s,X as c,Z as l,b as u,f as d,ft as f,kt as p,lt as m,q as h,tn as g,x as _}from"./vue-vendor-CsbriK0s.js";import{n as v}from"./index-B_hZ1C-r.js";import{t as y}from"./ExamplePage-k1ZS3Qm1.js";var b=e=>(c(`data-v-2c4cd5dc`),e=e(),a(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>u(`div`,null,[u(`h2`,null,`组件生命周期实验`),u(`p`,null,`启动计时器后切换页面，再返回观察卸载清理效果。`)],-1)),w={class:`playground-content`},T={class:`timer-display`},E=b(()=>u(`span`,{class:`demo-label`},`组件已挂载`,-1)),D={class:`demo-value`},O=b(()=>u(`small`,null,` 秒`,-1)),k={class:`demo-row`},A=b(()=>u(`span`,{class:`demo-muted`},`切换到其他菜单会卸载本页面。`,-1)),j=b(()=>u(`div`,{class:`demo-divider`},null,-1)),M=b(()=>u(`label`,{class:`demo-label`,for:`watched-value`},`watch · 侦听输入变化`,-1)),N={class:`demo-output`},P=b(()=>u(`div`,{class:`demo-divider`},null,-1)),F=b(()=>u(`span`,{class:`demo-label`},`生命周期事件`,-1)),I={key:0,class:`event-list`},L={key:1,class:`demo-muted`},R=v({__name:`LifecycleView`,setup(a){let c=o(0),v=o([]),b=o(`Composition API`),R=o(`修改内容，观察 watch 的反馈。`),z;function B(e){v.value.unshift(`${new Date().toLocaleTimeString(`zh-CN`)} · ${e}`),v.value=v.value.slice(0,5)}function V(){z||(z=window.setInterval(()=>{c.value+=1},1e3),B(`计时器已启动`))}function H(){z&&(window.clearInterval(z),z=void 0,B(`计时器已停止`))}m(b,e=>{R.value=`watch 观察到内容更新为「${e}」`,B(`watch：演示内容已更新`)}),s(()=>B(`onMounted：组件已挂载`)),i(()=>{z&&window.clearInterval(z)});let U=[{label:`生命周期钩子`,url:`https://vuejs.org/guide/essentials/lifecycle.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(i,a)=>{let o=e(`el-tag`),s=e(`el-button`),m=e(`el-input`),B=e(`CircleCheck`),W=e(`el-icon`);return h(),_(y,{eyebrow:`VUE FOUNDATION · LIFECYCLE`,title:`生命周期与侦听`,description:`观察组件挂载时机，并在组件卸载时清理计时器等副作用。`,concepts:[`onMounted 在组件挂载后运行，适合启动浏览器相关工作。`,`onUnmounted 用于释放计时器、事件监听等资源。`,`离开此页时计时器会自动清理，避免后台任务残留。`],code:`<script setup>
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
</template>`,resources:U},{default:f(()=>[u(`section`,x,[u(`div`,S,[C,n(o,{type:`warning`,effect:`plain`},{default:f(()=>[r(`onMounted / onUnmounted`)]),_:1})]),u(`div`,w,[u(`div`,T,[E,u(`strong`,D,[r(g(c.value),1),O])]),u(`div`,k,[n(s,{type:`primary`,disabled:!!p(z),onClick:V},{default:f(()=>[r(`启动计时器`)]),_:1},8,[`disabled`]),n(s,{disabled:!p(z),onClick:H},{default:f(()=>[r(`停止`)]),_:1},8,[`disabled`]),A]),j,u(`div`,null,[M,n(m,{id:`watched-value`,modelValue:b.value,"onUpdate:modelValue":a[0]||=e=>b.value=e},null,8,[`modelValue`]),u(`div`,N,g(R.value),1)]),P,u(`div`,null,[F,v.value.length?(h(),t(`div`,I,[(h(!0),t(d,null,l(v.value,e=>(h(),t(`div`,{key:e,class:`event-row`},[n(W,null,{default:f(()=>[n(B)]),_:1}),r(g(e),1)]))),128))])):(h(),t(`p`,L,`挂载时记录的事件会显示在这里。`))])])])]),_:1})}}},[[`__scopeId`,`data-v-2c4cd5dc`]]);export{R as default};