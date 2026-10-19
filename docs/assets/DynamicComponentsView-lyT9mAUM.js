import{C as e,H as t,Jt as n,St as r,V as i,W as a,Y as o,_ as s,at as c,g as l,h as u,ht as d,q as f,u as p,w as m,y as h}from"./vue-vendor-C4hU-6hB.js";import{n as g}from"./index-B62kKl9O.js";import{t as _}from"./ExamplePage-u9xwcdmO.js";var v=e=>(a(`data-v-bbeba30e`),e=e(),t(),e),y={class:`dynamic-panel`},b=v(()=>l(`h3`,null,`计数面板`,-1)),x={class:`demo-row`},S=g({__name:`CounterPanel`,setup(t){let r=d(0),a=d(``);return(t,o)=>{let s=f(`el-button`),u=f(`el-input`);return i(),h(`div`,y,[b,l(`div`,x,[l(`strong`,null,n(r.value),1),m(s,{type:`primary`,onClick:o[0]||=e=>r.value+=1},{default:c(()=>[e(`增加`)]),_:1})]),m(u,{modelValue:a.value,"onUpdate:modelValue":o[1]||=e=>a.value=e,placeholder:`写点内容后切换标签`},null,8,[`modelValue`]),l(`p`,null,`局部备注：`+n(a.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-bbeba30e`]]),C=e=>(a(`data-v-e79d823b`),e=e(),t(),e),w={class:`dynamic-panel`},T=C(()=>l(`h3`,null,`留言面板`,-1)),E=g({__name:`MessagePanel`,setup(e){let t=d(``);return(e,r)=>{let a=f(`el-input`);return i(),h(`div`,w,[T,m(a,{modelValue:t.value,"onUpdate:modelValue":r[0]||=e=>t.value=e,type:`textarea`,rows:3,placeholder:`输入一段留言后切换标签`},null,8,[`modelValue`]),l(`p`,null,`当前留言：`+n(t.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-e79d823b`]]),D={class:`content-card playground-card`},O={class:`playground-title`},k=l(`div`,null,[l(`h2`,null,`多面板切换`),l(`p`,null,`先改动组件状态，再切换到另一个面板并返回。`)],-1),A={class:`playground-content`},j={__name:`DynamicComponentsView`,setup(t){let n=d(`counter`),a=u(()=>n.value===`counter`?S:E),h=[{label:`动态组件`,url:`https://vuejs.org/guide/essentials/component-basics.html#dynamic-components`},{label:`KeepAlive`,url:`https://vuejs.org/guide/built-ins/keep-alive.html`}];return(t,u)=>{let d=f(`el-tag`),g=f(`el-radio-button`),v=f(`el-radio-group`);return i(),s(_,{eyebrow:`COMPONENTS · DYNAMIC COMPONENTS`,title:`动态组件与 KeepAlive`,description:`用 component :is 在多个组件间切换，并用 KeepAlive 缓存已离开的组件状态。`,concepts:[`component :is 可接收组件对象或注册名称，动态切换展示内容。`,`KeepAlive 缓存非活动组件实例，而不是销毁它。`,`输入计数或留言后切换标签，再切回验证状态被保留。`],code:`<script setup>
import { computed, ref } from 'vue'
import CounterPanel from './CounterPanel.vue'
import MessagePanel from './MessagePanel.vue'

const activeTab = ref('counter')
const activeComponent = computed(() =>
  activeTab.value === 'counter' ? CounterPanel : MessagePanel,
)
<\/script>

<template>
  <button @click="activeTab = 'counter'">计数器</button>
  <button @click="activeTab = 'message'">留言</button>
  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>
</template>`,resources:h},{default:c(()=>[l(`section`,D,[l(`div`,O,[k,m(d,{effect:`plain`},{default:c(()=>[e(`component :is · KeepAlive`)]),_:1})]),l(`div`,A,[m(v,{modelValue:n.value,"onUpdate:modelValue":u[0]||=e=>n.value=e,"aria-label":`选择动态组件`},{default:c(()=>[m(g,{label:`counter`},{default:c(()=>[e(`计数器`)]),_:1}),m(g,{label:`message`},{default:c(()=>[e(`留言`)]),_:1})]),_:1},8,[`modelValue`]),(i(),s(p,null,[(i(),s(o(r(a))))],1024))])])]),_:1})}}};export{j as default};