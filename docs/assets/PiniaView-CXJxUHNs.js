import{$ as e,C as t,D as n,E as r,J as i,Qt as a,S as o,St as s,X as c,Z as l,b as u,c as d,f,ft as p,kt as m,q as h,tn as g,x as _,y as v}from"./vue-vendor-CsbriK0s.js";import{f as y,p as b}from"./element-plus-BrLZTTAh.js";import{n as x}from"./index-B_hZ1C-r.js";import{t as S}from"./ExamplePage-k1ZS3Qm1.js";var C=d(`examples`,()=>{let e=s(0),t=s([{id:1,text:`理解 Pinia state`,done:!0},{id:2,text:`调用 action 更新状态`,done:!1}]),n=v(()=>e.value*2),r=v(()=>t.value.filter(e=>e.done).length);function i(){e.value+=1}function a(e){let n=e.trim();n&&t.value.push({id:Date.now(),text:n,done:!1})}function o(e){let n=t.value.find(t=>t.id===e);n&&(n.done=!n.done)}function c(e){t.value=t.value.filter(t=>t.id!==e)}return{count:e,todos:t,doubledCount:n,completedCount:r,increment:i,addTodo:a,toggleTodo:o,removeTodo:c}}),w=e=>(c(`data-v-fb304cbe`),e=e(),i(),e),T={class:`content-card playground-card`},E={class:`playground-title`},D=w(()=>u(`div`,null,[u(`h2`,null,`Store 计数器`),u(`p`,null,`修改共享 state，观察 computed getter 同步变化。`)],-1)),O={class:`playground-content`},k={class:`demo-row`},A=w(()=>u(`span`,{class:`demo-label`},`state · count`,-1)),j={class:`demo-value`},M=w(()=>u(`div`,{class:`demo-divider vertical-divider`},null,-1)),N=w(()=>u(`span`,{class:`demo-label`},`getter · doubledCount`,-1)),P={class:`demo-value`},F={class:`content-card playground-card`},I={class:`playground-title`},L=w(()=>u(`div`,null,[u(`h2`,null,`Store 待办列表`),u(`p`,null,`输入任务，尝试新增、完成和删除操作。`)],-1)),R={class:`playground-content`},z={class:`todo-text`},B=x({__name:`PiniaView`,setup(i){let c=C(),d=s(``),v=[{label:`Pinia 核心概念`,url:`https://pinia.vuejs.org/core-concepts/`},{label:`State`,url:`https://pinia.vuejs.org/core-concepts/state.html`},{label:`Getters 与 Actions`,url:`https://pinia.vuejs.org/core-concepts/getters.html`}];function x(){c.addTodo(d.value),d.value=``}return(i,s)=>{let C=e(`el-tag`),w=e(`el-button`),B=e(`el-input`),V=e(`el-form`),H=e(`el-checkbox`),U=e(`el-empty`);return h(),_(S,{eyebrow:`STATE MANAGEMENT · PINIA`,title:`Pinia 状态管理`,description:`使用独立的 Pinia store 管理可复用状态；本示例只保存在当前内存中，不影响其他页面和 API 示例数据。`,concepts:[`state 保存共享状态，组件可直接读取和更新。`,`getter（此处为 computed）派生状态。`,`action 封装状态变化逻辑，示例切页保留，刷新后重置。`],code:`// stores/examples.js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamplesStore = defineStore('examples', () => {
  const count = ref(0)
  const todos = ref([])
  const doubledCount = computed(() => count.value * 2)
  const completedCount = computed(
    () => todos.value.filter((todo) => todo.done).length,
  )

  function increment() {
    count.value += 1
  }

  function addTodo(text) {
    const value = text.trim()
    if (value) todos.value.push({ id: Date.now(), text: value, done: false })
  }

  function toggleTodo(id) {
    const todo = todos.value.find((item) => item.id === id)
    if (todo) todo.done = !todo.done
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    count, todos, doubledCount, completedCount,
    increment, addTodo, toggleTodo, removeTodo,
  }
})

// PiniaView.vue
<script setup>
import { ref } from 'vue'
import { useExamplesStore } from '../../stores/examples'
const store = useExamplesStore()
const newTodo = ref('')

function addTodo() {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
<\/script>

<template>
  <p>{{ store.count }} × 2 = {{ store.doubledCount }}</p>
  <button @click="store.increment">增加</button>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button :disabled="!newTodo.trim()">添加待办</button>
  </form>
  <ul>
    <li v-for="todo in store.todos" :key="todo.id">
      <label><input
        type="checkbox"
        :checked="todo.done"
        @change="store.toggleTodo(todo.id)"
      />{{ todo.text }}</label>
      <button @click="store.removeTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>`,resources:v},{default:p(()=>[u(`section`,T,[u(`div`,E,[D,n(C,{type:`success`,effect:`plain`},{default:p(()=>[r(`state · getter · action`)]),_:1})]),u(`div`,O,[u(`div`,k,[u(`div`,null,[A,u(`strong`,j,g(m(c).count),1)]),M,u(`div`,null,[N,u(`strong`,P,g(m(c).doubledCount),1)]),n(w,{type:`primary`,class:`count-button`,onClick:m(c).increment},{default:p(()=>[r(`调用 increment action`)]),_:1},8,[`onClick`])])])]),u(`section`,F,[u(`div`,I,[L,n(C,{effect:`plain`},{default:p(()=>[r(g(m(c).completedCount)+` / `+g(m(c).todos.length)+` 已完成`,1)]),_:1})]),u(`div`,R,[n(V,{class:`demo-row`,onSubmit:b(x,[`prevent`])},{default:p(()=>[n(B,{modelValue:d.value,"onUpdate:modelValue":s[0]||=e=>d.value=e,"aria-label":`待办内容`,placeholder:`输入一项待办`,onKeyup:y(x,[`enter`])},null,8,[`modelValue`,`onKeyup`]),n(w,{type:`primary`,disabled:!d.value.trim(),onClick:x},{default:p(()=>[r(`添加`)]),_:1},8,[`disabled`])]),_:1},8,[`onSubmit`]),(h(!0),t(f,null,l(m(c).todos,e=>(h(),t(`div`,{key:e.id,class:a([`todo-row`,{"is-done":e.done}])},[n(H,{"model-value":e.done,"aria-label":`完成${e.text}`,onChange:t=>m(c).toggleTodo(e.id)},null,8,[`model-value`,`aria-label`,`onChange`]),u(`span`,z,g(e.text),1),n(w,{text:``,type:`danger`,"aria-label":`删除待办`,onClick:t=>m(c).removeTodo(e.id)},{default:p(()=>[r(`删除`)]),_:2},1032,[`onClick`])],2))),128)),m(c).todos.length?o(``,!0):(h(),_(U,{key:0,description:`添加一项待办开始体验`,"image-size":64}))])])]),_:1})}}},[[`__scopeId`,`data-v-fb304cbe`]]);export{B as default};