import{C as e,G as t,Gt as n,H as r,Jt as i,St as a,V as o,W as s,_ as c,at as l,g as u,h as d,ht as f,l as p,o as m,q as h,v as g,w as _,y as v}from"./vue-vendor-C4hU-6hB.js";import{c as y,s as b}from"./element-plus-DdNPs73K.js";import{n as x}from"./index-Bde975Y_.js";import{t as S}from"./ExamplePage-CKuGKbtx.js";var C=m(`examples`,()=>{let e=f(0),t=f([{id:1,text:`理解 Pinia state`,done:!0},{id:2,text:`调用 action 更新状态`,done:!1}]),n=d(()=>e.value*2),r=d(()=>t.value.filter(e=>e.done).length);function i(){e.value+=1}function a(e){let n=e.trim();n&&t.value.push({id:Date.now(),text:n,done:!1})}function o(e){let n=t.value.find(t=>t.id===e);n&&(n.done=!n.done)}function s(e){t.value=t.value.filter(t=>t.id!==e)}return{count:e,todos:t,doubledCount:n,completedCount:r,increment:i,addTodo:a,toggleTodo:o,removeTodo:s}}),w=e=>(s(`data-v-60be3916`),e=e(),r(),e),T={class:`content-card playground-card`},E={class:`playground-title`},D=w(()=>u(`div`,null,[u(`h2`,null,`Store 计数器`),u(`p`,null,`修改共享 state，观察 computed getter 同步变化。`)],-1)),O={class:`playground-content`},k={class:`demo-row`},A=w(()=>u(`span`,{class:`demo-label`},`state · count`,-1)),j={class:`demo-value`},M=w(()=>u(`div`,{class:`demo-divider vertical-divider`},null,-1)),N=w(()=>u(`span`,{class:`demo-label`},`getter · doubledCount`,-1)),P={class:`demo-value`},F={class:`content-card playground-card`},I={class:`playground-title`},L=w(()=>u(`div`,null,[u(`h2`,null,`Store 待办列表`),u(`p`,null,`输入任务，尝试新增、完成和删除操作。`)],-1)),R={class:`playground-content`},z={class:`todo-text`},B=x({__name:`PiniaView`,setup(r){let s=C(),d=f(``),m=[{label:`Pinia 核心概念`,url:`https://pinia.vuejs.org/core-concepts/`},{label:`State`,url:`https://pinia.vuejs.org/core-concepts/state.html`},{label:`Getters 与 Actions`,url:`https://pinia.vuejs.org/core-concepts/getters.html`}];function x(){s.addTodo(d.value),d.value=``}return(r,f)=>{let C=h(`el-tag`),w=h(`el-button`),B=h(`el-input`),V=h(`el-form`),H=h(`el-checkbox`),U=h(`el-empty`);return o(),c(S,{eyebrow:`STATE MANAGEMENT · PINIA`,title:`Pinia 状态管理`,description:`使用独立的 Pinia store 管理可复用状态；本示例只保存在当前内存中，不影响登录和用户管理数据。`,concepts:[`state 保存共享状态，组件可直接读取和更新。`,`getter（此处为 computed）派生状态。`,`action 封装状态变化逻辑，示例切页或刷新后重置。`],code:`// stores/examples.js
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
</template>`,resources:m},{default:l(()=>[u(`section`,T,[u(`div`,E,[D,_(C,{type:`success`,effect:`plain`},{default:l(()=>[e(`state · getter · action`)]),_:1})]),u(`div`,O,[u(`div`,k,[u(`div`,null,[A,u(`strong`,j,i(a(s).count),1)]),M,u(`div`,null,[N,u(`strong`,P,i(a(s).doubledCount),1)]),_(w,{type:`primary`,class:`count-button`,onClick:a(s).increment},{default:l(()=>[e(`调用 increment action`)]),_:1},8,[`onClick`])])])]),u(`section`,F,[u(`div`,I,[L,_(C,{effect:`plain`},{default:l(()=>[e(i(a(s).completedCount)+` / `+i(a(s).todos.length)+` 已完成`,1)]),_:1})]),u(`div`,R,[_(V,{class:`demo-row`,onSubmit:y(x,[`prevent`])},{default:l(()=>[_(B,{modelValue:d.value,"onUpdate:modelValue":f[0]||=e=>d.value=e,"aria-label":`待办内容`,placeholder:`输入一项待办`,onKeyup:b(x,[`enter`])},null,8,[`modelValue`,`onKeyup`]),_(w,{type:`primary`,disabled:!d.value.trim(),onClick:x},{default:l(()=>[e(`添加`)]),_:1},8,[`disabled`])]),_:1},8,[`onSubmit`]),(o(!0),v(p,null,t(a(s).todos,t=>(o(),v(`div`,{key:t.id,class:n([`todo-row`,{"is-done":t.done}])},[_(H,{"model-value":t.done,"aria-label":`完成${t.text}`,onChange:e=>a(s).toggleTodo(t.id)},null,8,[`model-value`,`aria-label`,`onChange`]),u(`span`,z,i(t.text),1),_(w,{text:``,type:`danger`,"aria-label":`删除待办`,onClick:e=>a(s).removeTodo(t.id)},{default:l(()=>[e(`删除`)]),_:2},1032,[`onClick`])],2))),128)),a(s).todos.length?g(``,!0):(o(),c(U,{key:0,description:`添加一项待办开始体验`,"image-size":64}))])])]),_:1})}}},[[`__scopeId`,`data-v-60be3916`]]);export{B as default};