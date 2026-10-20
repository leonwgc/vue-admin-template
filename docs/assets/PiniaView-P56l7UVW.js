import{$t as e,At as t,C as n,Ct as r,D as i,J as a,O as o,Q as s,S as c,Y as l,Z as u,b as d,c as f,et as p,f as m,nn as h,pt as g,x as _,y as v}from"./vue-vendor-2WV6Jefd.js";import{d as y,u as b}from"./element-plus-D7Zy95m4.js";import{r as x}from"./index-KdiVrdr8.js";import{t as S}from"./ExamplePage-BNsrRItr.js";var C=f(`examples`,()=>{let e=r(0),t=r([{id:1,text:`理解 Pinia state`,done:!0},{id:2,text:`调用 action 更新状态`,done:!1}]),n=v(()=>e.value*2),i=v(()=>t.value.filter(e=>e.done).length);function a(){e.value+=1}function o(e){let n=e.trim();n&&t.value.push({id:Date.now(),text:n,done:!1})}function s(e){let n=t.value.find(t=>t.id===e);n&&(n.done=!n.done)}function c(e){t.value=t.value.filter(t=>t.id!==e)}return{count:e,todos:t,doubledCount:n,completedCount:i,increment:a,addTodo:o,toggleTodo:s,removeTodo:c}}),w=e=>(u(`data-v-5c3c19f8`),e=e(),l(),e),T={class:`content-card playground-card`},E={class:`playground-title`},D=w(()=>d(`div`,null,[d(`h2`,null,`Store 计数器`),d(`p`,null,`修改共享 state，观察 computed getter 同步变化。`)],-1)),O={class:`playground-content`},k={class:`demo-row`},A=w(()=>d(`span`,{class:`demo-label`},`state · count`,-1)),j={class:`demo-value`},M=w(()=>d(`div`,{class:`demo-divider vertical-divider`},null,-1)),N=w(()=>d(`span`,{class:`demo-label`},`getter · doubledCount`,-1)),P={class:`demo-value`},F={class:`content-card playground-card`},I={class:`playground-title`},L=w(()=>d(`div`,null,[d(`h2`,null,`Store 待办列表`),d(`p`,null,`输入任务，尝试新增、完成和删除操作。`)],-1)),R={class:`playground-content`},z={class:`todo-text`},B=x({__name:`PiniaView`,setup(l){let u=C(),f=r(``),v=[{label:`Pinia 核心概念`,url:`https://pinia.vuejs.org/core-concepts/`},{label:`State`,url:`https://pinia.vuejs.org/core-concepts/state.html`},{label:`Getters 与 Actions`,url:`https://pinia.vuejs.org/core-concepts/getters.html`}];function x(){u.addTodo(f.value),f.value=``}return(r,l)=>{let C=p(`el-tag`),w=p(`el-button`),B=p(`el-input`),V=p(`el-form`),H=p(`el-checkbox`),U=p(`el-empty`);return a(),_(S,{eyebrow:`STATE MANAGEMENT · PINIA`,title:`Pinia 状态管理`,description:`使用独立的 Pinia store 管理可复用状态；本示例只保存在当前内存中，不影响登录和用户管理数据。`,concepts:[`state 保存共享状态，组件可直接读取和更新。`,`getter（此处为 computed）派生状态。`,`action 封装状态变化逻辑，示例切页保留，刷新后重置。`],code:`// stores/examples.js
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
</template>`,resources:v},{default:g(()=>[d(`section`,T,[d(`div`,E,[D,o(C,{type:`success`,effect:`plain`},{default:g(()=>[i(`state · getter · action`)]),_:1})]),d(`div`,O,[d(`div`,k,[d(`div`,null,[A,d(`strong`,j,h(t(u).count),1)]),M,d(`div`,null,[N,d(`strong`,P,h(t(u).doubledCount),1)]),o(w,{type:`primary`,class:`count-button`,onClick:t(u).increment},{default:g(()=>[i(`调用 increment action`)]),_:1},8,[`onClick`])])])]),d(`section`,F,[d(`div`,I,[L,o(C,{effect:`plain`},{default:g(()=>[i(h(t(u).completedCount)+` / `+h(t(u).todos.length)+` 已完成`,1)]),_:1})]),d(`div`,R,[o(V,{class:`demo-row`,onSubmit:y(x,[`prevent`])},{default:g(()=>[o(B,{modelValue:f.value,"onUpdate:modelValue":l[0]||=e=>f.value=e,"aria-label":`待办内容`,placeholder:`输入一项待办`,onKeyup:b(x,[`enter`])},null,8,[`modelValue`,`onKeyup`]),o(w,{type:`primary`,disabled:!f.value.trim(),onClick:x},{default:g(()=>[i(`添加`)]),_:1},8,[`disabled`])]),_:1},8,[`onSubmit`]),(a(!0),n(m,null,s(t(u).todos,r=>(a(),n(`div`,{key:r.id,class:e([`todo-row`,{"is-done":r.done}])},[o(H,{"model-value":r.done,"aria-label":`完成${r.text}`,onChange:e=>t(u).toggleTodo(r.id)},null,8,[`model-value`,`aria-label`,`onChange`]),d(`span`,z,h(r.text),1),o(w,{text:``,type:`danger`,"aria-label":`删除待办`,onClick:e=>t(u).removeTodo(r.id)},{default:g(()=>[i(`删除`)]),_:2},1032,[`onClick`])],2))),128)),t(u).todos.length?c(``,!0):(a(),_(U,{key:0,description:`添加一项待办开始体验`,"image-size":64}))])])]),_:1})}}},[[`__scopeId`,`data-v-5c3c19f8`]]);export{B as default};