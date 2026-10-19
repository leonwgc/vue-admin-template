import{C as e,H as t,Jt as n,St as r,V as i,W as a,_ as o,at as s,g as c,h as l,ht as u,pt as d,q as f,rt as p,w as m}from"./vue-vendor-C4hU-6hB.js";import{n as h}from"./index-Bde975Y_.js";import{t as g}from"./ExamplePage-CKuGKbtx.js";var _=e=>(a(`data-v-c2b8eacb`),e=e(),t(),e),v={class:`content-card playground-card`},y={class:`playground-title`},b=_(()=>c(`div`,null,[c(`h2`,null,`响应式数据实验`),c(`p`,null,`点击按钮或编辑姓名，查看响应式状态与派生值。`)],-1)),x={class:`playground-content`},S={class:`demo-row`},C=_(()=>c(`span`,{class:`demo-label`},`ref · 当前计数`,-1)),w={class:`demo-value`},T=_(()=>c(`div`,{class:`demo-divider vertical-divider`},null,-1)),E=_(()=>c(`span`,{class:`demo-label`},`computed · 计数 × 2`,-1)),D={class:`demo-value`},O=_(()=>c(`div`,{class:`demo-divider`},null,-1)),k={class:`demo-row`},A=_(()=>c(`label`,{class:`demo-label`,for:`reactive-name`},`reactive · 姓名`,-1)),j={class:`demo-muted`},M={class:`demo-output`},N=_(()=>c(`strong`,null,`watch：`,-1)),P=h({__name:`ReactivityView`,setup(t){let a=u(1),h=d({name:`小林`}),_=l(()=>a.value*2),P=u(`修改计数，观察 watch 的反馈。`);p(a,e=>{P.value=`watch 观察到 count 更新为 ${e}`});let F=[{label:`响应式基础`,url:`https://vuejs.org/guide/essentials/reactivity-fundamentals.html`},{label:`计算属性`,url:`https://vuejs.org/guide/essentials/computed.html`},{label:`侦听器`,url:`https://vuejs.org/guide/essentials/watchers.html`}];return(t,l)=>{let u=f(`el-tag`),d=f(`el-button`),p=f(`el-button-group`),I=f(`el-input`);return i(),o(g,{eyebrow:`VUE FOUNDATION · REACTIVITY`,title:`响应式与 Composition API`,description:`通过 ref、reactive、computed 和 watch，观察数据变化如何驱动界面更新。`,concepts:[`ref 适合基本类型及需要整体替换的值。`,`reactive 为对象属性建立响应式追踪。`,`computed 派生状态；watch 在依赖变化时执行副作用。`],code:`<script setup>
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
</template>`,resources:F},{default:s(()=>[c(`section`,v,[c(`div`,y,[b,m(u,{type:`success`,effect:`plain`},{default:s(()=>[e(`Composition API`)]),_:1})]),c(`div`,x,[c(`div`,S,[c(`div`,null,[C,c(`strong`,w,n(a.value),1)]),T,c(`div`,null,[E,c(`strong`,D,n(r(_)),1)]),m(p,{class:`counter-actions`},{default:s(()=>[m(d,{"aria-label":`减少计数`,onClick:l[0]||=e=>--a.value},{default:s(()=>[e(`−`)]),_:1}),m(d,{"aria-label":`增加计数`,type:`primary`,onClick:l[1]||=e=>a.value+=1},{default:s(()=>[e(`＋`)]),_:1})]),_:1})]),O,c(`div`,k,[A,m(I,{id:`reactive-name`,modelValue:h.name,"onUpdate:modelValue":l[2]||=e=>h.name=e,class:`name-input`},null,8,[`modelValue`]),c(`span`,j,`你好，`+n(h.name||`访客`),1)]),c(`div`,M,[N,e(n(P.value),1)])])])]),_:1})}}},[[`__scopeId`,`data-v-c2b8eacb`]]);export{P as default};