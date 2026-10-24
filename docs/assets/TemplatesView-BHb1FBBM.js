import{$ as e,C as t,D as n,E as r,J as i,Qt as a,St as o,X as s,Z as c,b as l,en as u,f as d,ft as f,kt as p,q as m,tn as h,x as g,y as _}from"./vue-vendor-CsbriK0s.js";import{p as v}from"./element-plus-BrLZTTAh.js";import{n as y}from"./index-B_hZ1C-r.js";import{t as b}from"./ExamplePage-k1ZS3Qm1.js";var x=e=>(s(`data-v-4db01f34`),e=e(),i(),e),S={class:`content-card playground-card`},C={class:`playground-title`},w=x(()=>l(`div`,null,[l(`h2`,null,`模板语法任务板`),l(`p`,null,`新增任务、筛选文字、标记完成，观察列表和样式随状态变化。`)],-1)),T={class:`playground-content`},E={class:`demo-row`},D={class:`demo-muted`},O={key:0,class:`task-list`},k=y({__name:`TemplatesView`,setup(i){let s=o(``),y=o(``),x=o([{id:1,title:`学习 v-if 条件渲染`,done:!0},{id:2,title:`通过 v-for 渲染列表`,done:!1},{id:3,title:`用 class 绑定标记完成项`,done:!1}]),k=_(()=>{let e=s.value.trim().toLowerCase();return x.value.filter(t=>t.title.toLowerCase().includes(e))});function A(){let e=y.value.trim();e&&(x.value.push({id:Date.now(),title:e,done:!1}),y.value=``)}let j=[{label:`模板语法与绑定`,url:`https://vuejs.org/guide/essentials/template-syntax.html`},{label:`条件渲染`,url:`https://vuejs.org/guide/essentials/conditional.html`},{label:`列表渲染`,url:`https://vuejs.org/guide/essentials/list.html`}];return(i,o)=>{let _=e(`el-tag`),x=e(`el-input`),M=e(`el-button`),N=e(`el-form`),P=e(`el-checkbox`),F=e(`el-empty`);return m(),g(b,{eyebrow:`ESSENTIALS · TEMPLATE SYNTAX`,title:`模板语法与列表渲染`,description:`在同一个任务列表中练习文本/属性绑定、条件渲染、列表渲染和动态 class/style。`,concepts:[`{{ }} 插值读取响应式文本；v-bind（:）绑定属性和 class/style。`,`v-if/v-else 控制条件分支，v-for 配合稳定的 :key 渲染列表。`,`v-model 绑定输入和复选框；computed 派生筛选结果。`],code:`<script setup>
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
</template>`,resources:j},{default:f(()=>[l(`section`,S,[l(`div`,C,[w,n(_,{effect:`plain`},{default:f(()=>[r(`v-if · v-for · v-bind`)]),_:1})]),l(`div`,T,[n(N,{class:`demo-row`,onSubmit:v(A,[`prevent`])},{default:f(()=>[n(x,{modelValue:y.value,"onUpdate:modelValue":o[0]||=e=>y.value=e,"aria-label":`新任务`,placeholder:`输入新任务`},null,8,[`modelValue`]),n(M,{type:`primary`,disabled:!y.value.trim(),onClick:A},{default:f(()=>[r(`添加任务`)]),_:1},8,[`disabled`])]),_:1},8,[`onSubmit`]),l(`div`,E,[n(x,{modelValue:s.value,"onUpdate:modelValue":o[1]||=e=>s.value=e,"aria-label":`筛选任务`,placeholder:`筛选任务内容`,clearable:``},null,8,[`modelValue`]),l(`span`,D,`匹配 `+h(p(k).length)+` 项`,1)]),p(k).length?(m(),t(`ul`,O,[(m(!0),t(d,null,c(p(k),e=>(m(),t(`li`,{key:e.id,class:a([`task-item`,{"is-done":e.done}]),style:u({borderLeftColor:e.done?`#35ae81`:`#7988ed`})},[n(P,{modelValue:e.done,"onUpdate:modelValue":t=>e.done=t,"aria-label":`完成${e.title}`},null,8,[`modelValue`,`onUpdate:modelValue`,`aria-label`]),l(`span`,null,h(e.title),1),e.done?(m(),g(_,{key:0,type:`success`,effect:`plain`},{default:f(()=>[r(`已完成`)]),_:1})):(m(),g(_,{key:1,effect:`plain`},{default:f(()=>[r(`进行中`)]),_:1}))],6))),128))])):(m(),g(F,{key:1,description:`没有匹配的任务`,"image-size":72}))])])]),_:1})}}},[[`__scopeId`,`data-v-4db01f34`]]);export{k as default};