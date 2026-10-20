import{Ct as e,D as t,J as n,O as r,Y as i,Z as a,b as o,et as s,nn as c,pt as l,x as u}from"./vue-vendor-2WV6Jefd.js";import{r as d}from"./index-KdiVrdr8.js";import{t as f}from"./ExamplePage-BNsrRItr.js";import{t as p}from"./MessageCard-CDLYIaZy.js";var m=e=>(a(`data-v-efd6b25a`),e=e(),i(),e),h={class:`content-card playground-card`},g={class:`playground-title`},_=m(()=>o(`div`,null,[o(`h2`,null,`父子组件交互`),o(`p`,null,`点击子组件中的按钮，观察父组件状态改变后如何通过 Props 回传。`)],-1)),v={class:`playground-content`},y={class:`demo-row`},b=m(()=>o(`span`,{class:`demo-label`},`父组件状态`,-1)),x={class:`demo-value`},S=m(()=>o(`span`,{class:`demo-muted`},`子组件通过 Props 接收该值`,-1)),C=m(()=>o(`span`,{class:`slot-caption`},`具名插槽 footer`,-1)),w=d({__name:`ComponentsView`,setup(i){let a=e(0),d=[{label:`Props`,url:`https://vuejs.org/guide/components/props.html`},{label:`组件事件`,url:`https://vuejs.org/guide/components/events.html`},{label:`插槽`,url:`https://vuejs.org/guide/components/slots.html`}];return(e,i)=>{let m=s(`el-tag`);return n(),u(f,{eyebrow:`COMPONENTS · COMMUNICATION`,title:`组件通信：Props、事件与插槽`,description:`父组件通过 Props 向下传值，子组件通过事件向上通知，并用插槽接收可定制内容。`,concepts:[`Props 是只读的，数据由父组件持有。`,`子组件用 defineEmits 声明事件，再由父组件响应。`,`默认插槽和具名插槽让父组件传入自定义内容。`],code:`<!-- MessageCard.vue -->
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
</template>`,resources:d},{default:l(()=>[o(`section`,h,[o(`div`,g,[_,r(m,{effect:`plain`},{default:l(()=>[t(`Parent ↔ Child`)]),_:1})]),o(`div`,v,[o(`div`,y,[b,o(`strong`,x,c(a.value),1),S]),r(p,{count:a.value,onIncrement:i[0]||=e=>a.value+=1},{title:l(()=>[t(`父组件传入标题`)]),default:l(()=>[t(`这段文字通过默认插槽传入子组件。`)]),footer:l(()=>[C]),_:1},8,[`count`])])])]),_:1})}}},[[`__scopeId`,`data-v-efd6b25a`]]);export{w as default};