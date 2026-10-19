import{C as e,Jt as t,V as n,_ as r,at as i,g as a,ht as o,q as s,w as c,y as l}from"./vue-vendor-C4hU-6hB.js";import{n as u}from"./index-Bde975Y_.js";import{t as d}from"./ExamplePage-CKuGKbtx.js";var f={class:`model-field`},p=u({__name:`ModelTextInput`,props:{modelValue:{type:String,default:``},label:{type:String,default:`子组件输入`}},emits:[`update:modelValue`],setup(e,{emit:r}){return(i,o)=>{let u=s(`el-input`);return n(),l(`label`,f,[a(`span`,null,t(e.label),1),c(u,{"model-value":e.modelValue,"onUpdate:modelValue":o[0]||=e=>r(`update:modelValue`,e)},null,8,[`model-value`])])}}},[[`__scopeId`,`data-v-dbb084ca`]]),m={class:`content-card playground-card`},h={class:`playground-title`},g=a(`div`,null,[a(`h2`,null,`自定义输入组件`),a(`p`,null,`编辑子组件输入框，观察父组件的 message 同步更新。`)],-1),_={class:`playground-content`},v={class:`demo-output`},y=a(`strong`,null,`父组件状态：`,-1),b={__name:`ComponentVModelView`,setup(l){let u=o(`父组件的初始值`),f=[{label:`组件 v-model`,url:`https://vuejs.org/guide/components/v-model.html`},{label:`组件事件`,url:`https://vuejs.org/guide/components/events.html`}];return(o,l)=>{let b=s(`el-tag`),x=s(`el-button`);return n(),r(d,{eyebrow:`COMPONENTS · CUSTOM V-MODEL`,title:`组件 v-model`,description:`用 modelValue prop 和 update:modelValue 事件实现父子组件双向同步，兼容当前 Vue 3.2。`,concepts:[`组件上的 v-model 是 modelValue 属性和 update:modelValue 事件的语法糖。`,`子组件通过事件提出更新，父组件仍拥有状态。`,`该写法兼容 Vue 3.2；defineModel 是 Vue 3.4+ 提供的宏。`],code:`<!-- ModelTextInput.vue -->
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
</template>`,resources:f},{default:i(()=>[a(`section`,m,[a(`div`,h,[g,c(b,{effect:`plain`},{default:i(()=>[e(`modelValue ↔ update:modelValue`)]),_:1})]),a(`div`,_,[c(p,{modelValue:u.value,"onUpdate:modelValue":l[0]||=e=>u.value=e,label:`子组件（v-model）`},null,8,[`modelValue`]),a(`div`,v,[y,e(t(u.value||`（空字符串）`),1)]),c(x,{onClick:l[1]||=e=>u.value=``},{default:i(()=>[e(`清空父组件状态`)]),_:1})])])]),_:1},8,[`concepts`])}}};export{b as default};