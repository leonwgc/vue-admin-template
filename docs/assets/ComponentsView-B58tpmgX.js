import{C as e,H as t,Jt as n,K as r,V as i,W as a,_ as o,at as s,g as c,ht as l,q as u,w as d,y as f}from"./vue-vendor-C4hU-6hB.js";import{n as p}from"./index-BfcPDWmE.js";import{t as m}from"./ExamplePage-BSiVK_aH.js";var h=e=>(a(`data-v-37db72b2`),e=e(),t(),e),g={class:`message-card`},_={class:`message-heading`},v=h(()=>c(`span`,null,`Child`,-1)),y={class:`message-footer`},b=p({__name:`MessageCard`,props:{count:{type:Number,required:!0}},emits:[`increment`],setup(t,{emit:a}){return(o,l)=>{let p=u(`el-button`);return i(),f(`article`,g,[c(`div`,_,[c(`strong`,null,[r(o.$slots,`title`,{},()=>[e(`子组件`)],!0)]),v]),c(`p`,null,[r(o.$slots,`default`,{},()=>[e(`默认插槽内容来自父组件。`)],!0)]),c(`div`,y,[r(o.$slots,`footer`,{},()=>[e(`底部插槽`)],!0),d(p,{size:`small`,type:`primary`,onClick:l[0]||=e=>a(`increment`)},{default:s(()=>[e(`通知父组件 +1`)]),_:1})]),c(`small`,null,`通过 Props 接收的值：`+n(t.count),1)])}}},[[`__scopeId`,`data-v-37db72b2`]]),x=e=>(a(`data-v-efd6b25a`),e=e(),t(),e),S={class:`content-card playground-card`},C={class:`playground-title`},w=x(()=>c(`div`,null,[c(`h2`,null,`父子组件交互`),c(`p`,null,`点击子组件中的按钮，观察父组件状态改变后如何通过 Props 回传。`)],-1)),T={class:`playground-content`},E={class:`demo-row`},D=x(()=>c(`span`,{class:`demo-label`},`父组件状态`,-1)),O={class:`demo-value`},k=x(()=>c(`span`,{class:`demo-muted`},`子组件通过 Props 接收该值`,-1)),A=x(()=>c(`span`,{class:`slot-caption`},`具名插槽 footer`,-1)),j=p({__name:`ComponentsView`,setup(t){let r=l(0),a=[{label:`Props`,url:`https://vuejs.org/guide/components/props.html`},{label:`组件事件`,url:`https://vuejs.org/guide/components/events.html`},{label:`插槽`,url:`https://vuejs.org/guide/components/slots.html`}];return(t,l)=>{let f=u(`el-tag`);return i(),o(m,{eyebrow:`COMPONENTS · COMMUNICATION`,title:`组件通信：Props、事件与插槽`,description:`父组件通过 Props 向下传值，子组件通过事件向上通知，并用插槽接收可定制内容。`,concepts:[`Props 是只读的，数据由父组件持有。`,`子组件用 defineEmits 声明事件，再由父组件响应。`,`默认插槽和具名插槽让父组件传入自定义内容。`],code:`<!-- MessageCard.vue -->
<script setup>
defineProps({ count: { type: Number, required: true } })
const emit = defineEmits(['increment'])
<\/script>

<template>
  <article>
    <strong><slot name="title">子组件</slot></strong>
    <p><slot>默认插槽内容</slot></p>
    <button @click="emit('increment')">通知父组件 +1</button>
    <small>Props count: {{ count }}</small>
    <footer><slot name="footer">底部插槽</slot></footer>
  </article>
</template>

<!-- ComponentsView.vue -->
<script setup>
import { ref } from 'vue'
import MessageCard from './MessageCard.vue'
const count = ref(0)
<\/script>

<template>
  <MessageCard :count="count" @increment="count += 1">
    <template #title>父组件传入标题</template>
    <template #default>通过插槽传入的内容</template>
    <template #footer>具名插槽 footer</template>
  </MessageCard>
</template>`,resources:a},{default:s(()=>[c(`section`,S,[c(`div`,C,[w,d(f,{effect:`plain`},{default:s(()=>[e(`Parent ↔ Child`)]),_:1})]),c(`div`,T,[c(`div`,E,[D,c(`strong`,O,n(r.value),1),k]),d(b,{count:r.value,onIncrement:l[0]||=e=>r.value+=1},{title:s(()=>[e(`父组件传入标题`)]),default:s(()=>[e(`这段文字通过默认插槽传入子组件。`)]),footer:s(()=>[A]),_:1},8,[`count`])])])]),_:1})}}},[[`__scopeId`,`data-v-efd6b25a`]]);export{j as default};