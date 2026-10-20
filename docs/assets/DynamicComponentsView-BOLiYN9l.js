import{At as e,C as t,Ct as n,D as r,J as i,O as a,Y as o,Z as s,b as c,et as l,nn as u,nt as d,p as f,pt as p,x as m,y as h}from"./vue-vendor-2WV6Jefd.js";import{r as g}from"./index-KdiVrdr8.js";import{t as _}from"./ExamplePage-BNsrRItr.js";var v=e=>(s(`data-v-bbeba30e`),e=e(),o(),e),y={class:`dynamic-panel`},b=v(()=>c(`h3`,null,`计数面板`,-1)),x={class:`demo-row`},S=g({__name:`CounterPanel`,setup(e){let o=n(0),s=n(``);return(e,n)=>{let d=l(`el-button`),f=l(`el-input`);return i(),t(`div`,y,[b,c(`div`,x,[c(`strong`,null,u(o.value),1),a(d,{type:`primary`,onClick:n[0]||=e=>o.value+=1},{default:p(()=>[r(`增加`)]),_:1})]),a(f,{modelValue:s.value,"onUpdate:modelValue":n[1]||=e=>s.value=e,placeholder:`写点内容后切换标签`},null,8,[`modelValue`]),c(`p`,null,`局部备注：`+u(s.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-bbeba30e`]]),C=e=>(s(`data-v-e79d823b`),e=e(),o(),e),w={class:`dynamic-panel`},T=C(()=>c(`h3`,null,`留言面板`,-1)),E=g({__name:`MessagePanel`,setup(e){let r=n(``);return(e,n)=>{let o=l(`el-input`);return i(),t(`div`,w,[T,a(o,{modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,type:`textarea`,rows:3,placeholder:`输入一段留言后切换标签`},null,8,[`modelValue`]),c(`p`,null,`当前留言：`+u(r.value||`尚未填写`),1)])}}},[[`__scopeId`,`data-v-e79d823b`]]),D={class:`content-card playground-card`},O={class:`playground-title`},k=c(`div`,null,[c(`h2`,null,`多面板切换`),c(`p`,null,`先改动组件状态，再切换到另一个面板并返回。`)],-1),A={class:`playground-content`},j={__name:`DynamicComponentsView`,setup(t){let o=n(`counter`),s=h(()=>o.value===`counter`?S:E),u=[{label:`动态组件`,url:`https://vuejs.org/guide/essentials/component-basics.html#dynamic-components`},{label:`KeepAlive`,url:`https://vuejs.org/guide/built-ins/keep-alive.html`}];return(t,n)=>{let h=l(`el-tag`),g=l(`el-radio-button`),v=l(`el-radio-group`);return i(),m(_,{eyebrow:`COMPONENTS · DYNAMIC COMPONENTS`,title:`动态组件与 KeepAlive`,description:`用 component :is 在多个组件间切换，并用 KeepAlive 缓存已离开的组件状态。`,concepts:[`component :is 可接收组件对象或注册名称，动态切换展示内容。`,`KeepAlive 缓存非活动组件实例，而不是销毁它。`,`输入计数或留言后切换标签，再切回验证状态被保留。`],code:`<script setup>
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
</template>`,resources:u},{default:p(()=>[c(`section`,D,[c(`div`,O,[k,a(h,{effect:`plain`},{default:p(()=>[r(`component :is · KeepAlive`)]),_:1})]),c(`div`,A,[a(v,{modelValue:o.value,"onUpdate:modelValue":n[0]||=e=>o.value=e,"aria-label":`选择动态组件`},{default:p(()=>[a(g,{label:`counter`},{default:p(()=>[r(`计数器`)]),_:1}),a(g,{label:`message`},{default:p(()=>[r(`留言`)]),_:1})]),_:1},8,[`modelValue`]),(i(),m(f,null,[(i(),m(d(e(s))))],1024))])])]),_:1})}}};export{j as default};