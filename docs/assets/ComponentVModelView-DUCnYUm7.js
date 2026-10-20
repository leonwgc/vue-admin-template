import{C as e,Ct as t,D as n,J as r,O as i,b as a,et as o,nn as s,pt as c,x as l}from"./vue-vendor-2WV6Jefd.js";import{r as u}from"./index-KdiVrdr8.js";import{t as d}from"./ExamplePage-BNsrRItr.js";var f={class:`model-field`},p=u({__name:`ModelTextInput`,props:{modelValue:{type:String,default:``},label:{type:String,default:`子组件输入`}},emits:[`update:modelValue`],setup(t,{emit:n}){return(c,l)=>{let u=o(`el-input`);return r(),e(`label`,f,[a(`span`,null,s(t.label),1),i(u,{"model-value":t.modelValue,"onUpdate:modelValue":l[0]||=e=>n(`update:modelValue`,e)},null,8,[`model-value`])])}}},[[`__scopeId`,`data-v-dbb084ca`]]),m={class:`content-card playground-card`},h={class:`playground-title`},g=a(`div`,null,[a(`h2`,null,`自定义输入组件`),a(`p`,null,`编辑子组件输入框，观察父组件的 message 同步更新。`)],-1),_={class:`playground-content`},v={class:`demo-output`},y=a(`strong`,null,`父组件状态：`,-1),b={__name:`ComponentVModelView`,setup(e){let u=t(`父组件的初始值`),f=[{label:`组件 v-model`,url:`https://vuejs.org/guide/components/v-model.html`},{label:`组件事件`,url:`https://vuejs.org/guide/components/events.html`}];return(e,t)=>{let b=o(`el-tag`),x=o(`el-button`);return r(),l(d,{eyebrow:`COMPONENTS · CUSTOM V-MODEL`,title:`组件 v-model`,description:`用 modelValue prop 和 update:modelValue 事件实现父子组件双向同步，兼容当前 Vue 3.2。`,concepts:[`组件上的 v-model 是 modelValue 属性和 update:modelValue 事件的语法糖。`,`子组件通过事件提出更新，父组件仍拥有状态。`,`该写法兼容 Vue 3.2；defineModel 是 Vue 3.4+ 提供的宏。`],code:`<!-- ModelTextInput.vue -->
<script setup>
defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- ParentView.vue -->
<script setup>
import { ref } from 'vue'
import ModelTextInput from './ModelTextInput.vue'
const message = ref('初始内容')
<\/script>

<template>
  <ModelTextInput v-model="message" />
  <p>父组件状态：{{ message }}</p>
</template>`,resources:f},{default:c(()=>[a(`section`,m,[a(`div`,h,[g,i(b,{effect:`plain`},{default:c(()=>[n(`modelValue ↔ update:modelValue`)]),_:1})]),a(`div`,_,[i(p,{modelValue:u.value,"onUpdate:modelValue":t[0]||=e=>u.value=e,label:`子组件（v-model）`},null,8,[`modelValue`]),a(`div`,v,[y,n(s(u.value||`（空字符串）`),1)]),i(x,{onClick:t[1]||=e=>u.value=``},{default:c(()=>[n(`清空父组件状态`)]),_:1})])])]),_:1},8,[`concepts`])}}};export{b as default};