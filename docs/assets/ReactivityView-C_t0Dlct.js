import{At as e,Ct as t,D as n,J as r,O as i,Y as a,Z as o,b as s,et as c,nn as l,pt as u,ut as d,x as f,xt as p,y as m}from"./vue-vendor-2WV6Jefd.js";import{r as h}from"./index-KdiVrdr8.js";import{t as g}from"./ExamplePage-BNsrRItr.js";var _=e=>(o(`data-v-c2b8eacb`),e=e(),a(),e),v={class:`content-card playground-card`},y={class:`playground-title`},b=_(()=>s(`div`,null,[s(`h2`,null,`响应式数据实验`),s(`p`,null,`点击按钮或编辑姓名，查看响应式状态与派生值。`)],-1)),x={class:`playground-content`},S={class:`demo-row`},C=_(()=>s(`span`,{class:`demo-label`},`ref · 当前计数`,-1)),w={class:`demo-value`},T=_(()=>s(`div`,{class:`demo-divider vertical-divider`},null,-1)),E=_(()=>s(`span`,{class:`demo-label`},`computed · 计数 × 2`,-1)),D={class:`demo-value`},O=_(()=>s(`div`,{class:`demo-divider`},null,-1)),k={class:`demo-row`},A=_(()=>s(`label`,{class:`demo-label`,for:`reactive-name`},`reactive · 姓名`,-1)),j={class:`demo-muted`},M={class:`demo-output`},N=_(()=>s(`strong`,null,`watch：`,-1)),P=h({__name:`ReactivityView`,setup(a){let o=t(1),h=p({name:`小林`}),_=m(()=>o.value*2),P=t(`修改计数，观察 watch 的反馈。`);d(o,e=>{P.value=`watch 观察到 count 更新为 ${e}`});let F=[{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`},{label:`计算属性`,url:`https://vuejs.org/guide/essentials/computed.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(t,a)=>{let d=c(`el-tag`),p=c(`el-button`),m=c(`el-button-group`),I=c(`el-input`);return r(),f(g,{eyebrow:`VUE FOUNDATION · REACTIVITY`,title:`响应式与 Composition API`,description:`通过 ref、reactive、computed 和 watch，观察数据变化如何驱动界面更新。`,concepts:[`ref 适合基本类型及需要整体替换的值。`,`reactive 为对象属性建立响应式追踪。`,`computed 派生状态；watch 在依赖变化时执行副作用。`],code:`<script setup>
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
</template>`,resources:F},{default:u(()=>[s(`section`,v,[s(`div`,y,[b,i(d,{type:`success`,effect:`plain`},{default:u(()=>[n(`Composition API`)]),_:1})]),s(`div`,x,[s(`div`,S,[s(`div`,null,[C,s(`strong`,w,l(o.value),1)]),T,s(`div`,null,[E,s(`strong`,D,l(e(_)),1)]),i(m,{class:`counter-actions`},{default:u(()=>[i(p,{"aria-label":`减少计数`,onClick:a[0]||=e=>--o.value},{default:u(()=>[n(`−`)]),_:1}),i(p,{"aria-label":`增加计数`,type:`primary`,onClick:a[1]||=e=>o.value+=1},{default:u(()=>[n(`＋`)]),_:1})]),_:1})]),O,s(`div`,k,[A,i(I,{id:`reactive-name`,modelValue:h.name,"onUpdate:modelValue":a[2]||=e=>h.name=e,class:`name-input`},null,8,[`modelValue`]),s(`span`,j,`你好，`+l(h.name||`访客`),1)]),s(`div`,M,[N,n(l(P.value),1)])])])]),_:1})}}},[[`__scopeId`,`data-v-c2b8eacb`]]);export{P as default};