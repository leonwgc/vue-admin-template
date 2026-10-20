import{$t as e,At as t,C as n,Ct as r,D as i,J as a,O as o,Q as s,Y as c,Z as l,b as u,et as d,f,nn as p,pt as m,tn as h,x as g,y as _}from"./vue-vendor-2WV6Jefd.js";import{d as v}from"./element-plus-D7Zy95m4.js";import{r as y}from"./index-KdiVrdr8.js";import{t as b}from"./ExamplePage-BNsrRItr.js";var x=e=>(l(`data-v-4db01f34`),e=e(),c(),e),S={class:`content-card playground-card`},C={class:`playground-title`},w=x(()=>u(`div`,null,[u(`h2`,null,`模板语法任务板`),u(`p`,null,`新增任务、筛选文字、标记完成，观察列表和样式随状态变化。`)],-1)),T={class:`playground-content`},E={class:`demo-row`},D={class:`demo-muted`},O={key:0,class:`task-list`},k=y({__name:`TemplatesView`,setup(c){let l=r(``),y=r(``),x=r([{id:1,title:`学习 v-if 条件渲染`,done:!0},{id:2,title:`通过 v-for 渲染列表`,done:!1},{id:3,title:`用 class 绑定标记完成项`,done:!1}]),k=_(()=>{let e=l.value.trim().toLowerCase();return x.value.filter(t=>t.title.toLowerCase().includes(e))});function A(){let e=y.value.trim();e&&(x.value.push({id:Date.now(),title:e,done:!1}),y.value=``)}let j=[{label:`模板语法与绑定`,url:`https://vuejs.org/guide/essentials/template-syntax.html`},{label:`条件渲染`,url:`https://vuejs.org/guide/essentials/conditional.html`},{label:`列表渲染`,url:`https://vuejs.org/guide/essentials/list.html`}];return(r,c)=>{let _=d(`el-tag`),x=d(`el-input`),M=d(`el-button`),N=d(`el-form`),P=d(`el-checkbox`),F=d(`el-empty`);return a(),g(b,{eyebrow:`ESSENTIALS · TEMPLATE SYNTAX`,title:`模板语法与列表渲染`,description:`在同一个任务列表中练习文本/属性绑定、条件渲染、列表渲染和动态 class/style。`,concepts:[`{{ }} 插值读取响应式文本；v-bind（:）绑定属性和 class/style。`,`v-if/v-else 控制条件分支，v-for 配合稳定的 :key 渲染列表。`,`v-model 绑定输入和复选框；computed 派生筛选结果。`],code:`<script setup>
import { computed, ref } from 'vue'

const filter = ref('')
const tasks = ref([{ id: 1, title: '学习 v-if', done: false }])
const visibleTasks = computed(() =>
  tasks.value.filter((task) => task.title.includes(filter.value)),
)

function addTask(title) {
  tasks.value.push({ id: Date.now(), title, done: false })
}
<\/script>

<template>
  <input v-model="filter" placeholder="筛选任务" />
  <button :disabled="!filter" @click="addTask(filter)">添加筛选词</button>
  <p v-if="!visibleTasks.length">没有匹配项</p>
  <ul v-else>
    <li v-for="task in visibleTasks" :key="task.id"
        :class="{ done: task.done }">
      <input v-model="task.done" type="checkbox" />
      {{ task.title }}
    </li>
  </ul>
</template>`,resources:j},{default:m(()=>[u(`section`,S,[u(`div`,C,[w,o(_,{effect:`plain`},{default:m(()=>[i(`v-if · v-for · v-bind`)]),_:1})]),u(`div`,T,[o(N,{class:`demo-row`,onSubmit:v(A,[`prevent`])},{default:m(()=>[o(x,{modelValue:y.value,"onUpdate:modelValue":c[0]||=e=>y.value=e,"aria-label":`新任务`,placeholder:`输入新任务`},null,8,[`modelValue`]),o(M,{type:`primary`,disabled:!y.value.trim(),onClick:A},{default:m(()=>[i(`添加任务`)]),_:1},8,[`disabled`])]),_:1},8,[`onSubmit`]),u(`div`,E,[o(x,{modelValue:l.value,"onUpdate:modelValue":c[1]||=e=>l.value=e,"aria-label":`筛选任务`,placeholder:`筛选任务内容`,clearable:``},null,8,[`modelValue`]),u(`span`,D,`匹配 `+p(t(k).length)+` 项`,1)]),t(k).length?(a(),n(`ul`,O,[(a(!0),n(f,null,s(t(k),t=>(a(),n(`li`,{key:t.id,class:e([`task-item`,{"is-done":t.done}]),style:h({borderLeftColor:t.done?`#35ae81`:`#7988ed`})},[o(P,{modelValue:t.done,"onUpdate:modelValue":e=>t.done=e,"aria-label":`完成${t.title}`},null,8,[`modelValue`,`onUpdate:modelValue`,`aria-label`]),u(`span`,null,p(t.title),1),t.done?(a(),g(_,{key:0,type:`success`,effect:`plain`},{default:m(()=>[i(`已完成`)]),_:1})):(a(),g(_,{key:1,effect:`plain`},{default:m(()=>[i(`进行中`)]),_:1}))],6))),128))])):(a(),g(F,{key:1,description:`没有匹配的任务`,"image-size":72}))])])]),_:1})}}},[[`__scopeId`,`data-v-4db01f34`]]);export{k as default};