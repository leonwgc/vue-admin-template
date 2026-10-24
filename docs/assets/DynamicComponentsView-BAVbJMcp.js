import{$ as e,C as t,D as n,E as r,J as i,St as a,X as o,b as s,ft as c,kt as l,p as u,q as d,tn as f,tt as p,x as m,y as h}from"./vue-vendor-CsbriK0s.js";import{n as g}from"./index-B_hZ1C-r.js";import{t as _}from"./ExamplePage-k1ZS3Qm1.js";var v=e=>(o(`data-v-bbeba30e`),e=e(),i(),e),y={class:`dynamic-panel`},b=v(()=>s(`h3`,null,`计数面板`,-1)),x={class:`demo-row`},S=g({__name:`CounterPanel`,setup(i){let o=a(0),l=a(``);return(i,a)=>{let u=e(`el-button`),p=e(`el-input`);return d(),t(`div`,y,[b,s(`div`,x,[s(`strong`,null,f(o.value),1),n(u,{type:`primary`,onClick:a[0]||=e=>o.value+=1},{default:c(()=>[r(`增加`)]),_:1})]),n(p,{modelValue:l.value,"onUpdate:modelValue":a[1]||=e=>l.value=e,placeholder:`写点内容后切换标签`},null,8,[`modelValue`]),s(`p`,null,`局部备注：`+f(l.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-bbeba30e`]]),C=e=>(o(`data-v-e79d823b`),e=e(),i(),e),w={class:`dynamic-panel`},T=C(()=>s(`h3`,null,`留言面板`,-1)),E=g({__name:`MessagePanel`,setup(r){let i=a(``);return(r,a)=>{let o=e(`el-input`);return d(),t(`div`,w,[T,n(o,{modelValue:i.value,"onUpdate:modelValue":a[0]||=e=>i.value=e,type:`textarea`,rows:3,placeholder:`输入一段留言后切换标签`},null,8,[`modelValue`]),s(`p`,null,`当前留言：`+f(i.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-e79d823b`]]),D={class:`content-card playground-card`},O={class:`playground-title`},k=s(`div`,null,[s(`h2`,null,`多面板切换`),s(`p`,null,`先改动组件状态，再切换到另一个面板并返回。`)],-1),A={class:`playground-content`},j={__name:`DynamicComponentsView`,setup(t){let i=a(`counter`),o=h(()=>i.value===`counter`?S:E),f=[{label:`动态组件`,url:`https://vuejs.org/guide/essentials/component-basics.html#dynamic-components`},{label:`KeepAlive`,url:`https://vuejs.org/guide/built-ins/keep-alive.html`}];return(t,a)=>{let h=e(`el-tag`),g=e(`el-radio-button`),v=e(`el-radio-group`);return d(),m(_,{eyebrow:`COMPONENTS · DYNAMIC COMPONENTS`,title:`动态组件与 KeepAlive`,description:`用 component :is 在多个组件间切换，并用 KeepAlive 缓存已离开的组件状态。`,concepts:[`component :is 可接收组件对象或注册名称，动态切换展示内容。`,`KeepAlive 缓存非活动组件实例，而不是销毁它。`,`输入计数或留言后切换标签，再切回验证状态被保留。`],code:`<script setup>
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
</template>`,resources:f},{default:c(()=>[s(`section`,D,[s(`div`,O,[k,n(h,{effect:`plain`},{default:c(()=>[r(`component :is · KeepAlive`)]),_:1})]),s(`div`,A,[n(v,{modelValue:i.value,"onUpdate:modelValue":a[0]||=e=>i.value=e,"aria-label":`选择动态组件`},{default:c(()=>[n(g,{label:`counter`},{default:c(()=>[r(`计数器`)]),_:1}),n(g,{label:`message`},{default:c(()=>[r(`留言`)]),_:1})]),_:1},8,[`modelValue`]),(d(),m(u,null,[(d(),m(p(l(o))))],1024))])])]),_:1})}}};export{j as default};