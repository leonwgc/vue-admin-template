import{$ as e,D as t,E as n,J as r,St as i,X as a,b as o,bt as s,ft as c,kt as l,lt as u,q as d,tn as f,x as p,y as m}from"./vue-vendor-CsbriK0s.js";import{n as h}from"./index-B_hZ1C-r.js";import{t as g}from"./ExamplePage-k1ZS3Qm1.js";var _=e=>(a(`data-v-c2b8eacb`),e=e(),r(),e),v={class:`content-card playground-card`},y={class:`playground-title`},b=_(()=>o(`div`,null,[o(`h2`,null,`响应式数据实验`),o(`p`,null,`点击按钮或编辑姓名，查看响应式状态与派生值。`)],-1)),x={class:`playground-content`},S={class:`demo-row`},C=_(()=>o(`span`,{class:`demo-label`},`ref · 当前计数`,-1)),w={class:`demo-value`},T=_(()=>o(`div`,{class:`demo-divider vertical-divider`},null,-1)),E=_(()=>o(`span`,{class:`demo-label`},`computed · 计数 × 2`,-1)),D={class:`demo-value`},O=_(()=>o(`div`,{class:`demo-divider`},null,-1)),k={class:`demo-row`},A=_(()=>o(`label`,{class:`demo-label`,for:`reactive-name`},`reactive · 姓名`,-1)),j={class:`demo-muted`},M={class:`demo-output`},N=_(()=>o(`strong`,null,`watch：`,-1)),P=h({__name:`ReactivityView`,setup(r){let a=i(1),h=s({name:`小林`}),_=m(()=>a.value*2),P=i(`修改计数，观察 watch 的反馈。`);u(a,e=>{P.value=`watch 观察到 count 更新为 ${e}`});let F=[{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`},{label:`计算属性`,url:`https://vuejs.org/guide/essentials/computed.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(r,i)=>{let s=e(`el-tag`),u=e(`el-button`),m=e(`el-button-group`),I=e(`el-input`);return d(),p(g,{eyebrow:`VUE FOUNDATION · REACTIVITY`,title:`响应式与 Composition API`,description:`通过 ref、reactive、computed 和 watch，观察数据变化如何驱动界面更新。`,concepts:[`ref 适合基本类型及需要整体替换的值。`,`reactive 为对象属性建立响应式追踪。`,`computed 派生状态；watch 在依赖变化时执行副作用。`],code:`<script setup>
import { computed, reactive, ref, watch } from 'vue'

const count = ref(1)
const person = reactive({ name: '小林' })
const doubled = computed(() => count.value * 2)
const watchMessage = ref('修改计数，观察 watch 的反馈。')

watch(count, (value) => {
  watchMessage.value = 'watch 观察到 count 更新为 ' + value
})
<\/script>

<template>
  <button @click="count -= 1">减少</button>
  <button @click="count += 1">增加</button>
  <p>count: {{ count }} · doubled: {{ doubled }}</p>
  <label>姓名 <input v-model="person.name" /></label>
  <p>你好，{{ person.name }}</p>
  <p>{{ watchMessage }}</p>
</template>`,resources:F},{default:c(()=>[o(`section`,v,[o(`div`,y,[b,t(s,{type:`success`,effect:`plain`},{default:c(()=>[n(`Composition API`)]),_:1})]),o(`div`,x,[o(`div`,S,[o(`div`,null,[C,o(`strong`,w,f(a.value),1)]),T,o(`div`,null,[E,o(`strong`,D,f(l(_)),1)]),t(m,{class:`counter-actions`},{default:c(()=>[t(u,{"aria-label":`减少计数`,onClick:i[0]||=e=>--a.value},{default:c(()=>[n(`−`)]),_:1}),t(u,{"aria-label":`增加计数`,type:`primary`,onClick:i[1]||=e=>a.value+=1},{default:c(()=>[n(`＋`)]),_:1})]),_:1})]),O,o(`div`,k,[A,t(I,{id:`reactive-name`,modelValue:h.name,"onUpdate:modelValue":i[2]||=e=>h.name=e,class:`name-input`},null,8,[`modelValue`]),o(`span`,j,`你好，`+f(h.name||`访客`),1)]),o(`div`,M,[N,n(f(P.value),1)])])])]),_:1})}}},[[`__scopeId`,`data-v-c2b8eacb`]]);export{P as default};