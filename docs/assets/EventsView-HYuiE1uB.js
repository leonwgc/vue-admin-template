import{C as e,H as t,Jt as n,V as r,W as i,_ as a,at as o,g as s,ht as c,q as l,w as u}from"./vue-vendor-C4hU-6hB.js";import{c as d,s as f}from"./element-plus-DdNPs73K.js";import{n as p}from"./index-CC0QjMSP.js";import{t as m}from"./ExamplePage-nW8YSaAW.js";var h=e=>(i(`data-v-ec69b998`),e=e(),t(),e),g={class:`content-card playground-card`},_={class:`playground-title`},v=h(()=>s(`div`,null,[s(`h2`,null,`事件修饰符实验`),s(`p`,null,`分别点击外层区域和内部按钮，试试表单提交及 Enter 键。`)],-1)),y={class:`playground-content`},b=h(()=>s(`label`,{class:`demo-label`,for:`event-message`},`输入内容后按 Enter 或点击提交`,-1)),x={class:`demo-row`},S={class:`demo-output`},C=h(()=>s(`br`,null,null,-1)),w=p({__name:`EventsView`,setup(t){let i=c(0),p=c(0),h=c(``),w=c(``),T=c(`尚未按下 Enter`);function E(){h.value=w.value.trim()||`（空内容）`}function D(e){T.value=`Enter：${e.target.value||`（空内容）`}`}let O=[{label:`事件处理`,url:`https://vuejs.org/guide/essentials/event-handling.html`},{label:`表单输入绑定`,url:`https://vuejs.org/guide/essentials/forms.html`}];return(t,c)=>{let k=l(`el-tag`),A=l(`el-button`),j=l(`el-input`),M=l(`el-form`);return r(),a(m,{eyebrow:`ESSENTIALS · EVENT HANDLING`,title:`事件处理与修饰符`,description:`体验事件参数、冒泡控制、表单默认行为和键盘修饰符。`,concepts:[`v-on（@）绑定事件处理器，可在表达式或方法中处理事件。`,`.stop 阻止事件继续冒泡，.prevent 阻止浏览器默认动作。`,`键盘修饰符（如 .enter）可将处理逻辑限制在特定按键。`],code:`<script setup>
import { ref } from 'vue'

const parentClicks = ref(0)
const childClicks = ref(0)
const submitted = ref('')

function submit(event) {
  submitted.value = new FormData(event.target).get('message') || ''
}
<\/script>

<template>
  <section @click="parentClicks++">
    <button @click.stop="childClicks++">只增加子级</button>
  </section>
  <form @submit.prevent="submit">
    <input name="message" @keyup.enter="submit" />
    <button type="submit">提交</button>
  </form>
  <p>父级 {{ parentClicks }} · 子级 {{ childClicks }}</p>
  <p>提交内容：{{ submitted }}</p>
</template>`,resources:O},{default:o(()=>[s(`section`,g,[s(`div`,_,[v,u(k,{effect:`plain`},{default:o(()=>[e(`@click · .stop · .prevent`)]),_:1})]),s(`div`,y,[s(`div`,{class:`click-parent`,onClick:c[1]||=e=>i.value+=1},[s(`span`,null,`父区域点击 `+n(i.value)+` 次`,1),u(A,{type:`primary`,onClick:c[0]||=d(e=>p.value+=1,[`stop`])},{default:o(()=>[e(`.stop 子按钮 `+n(p.value),1)]),_:1})]),u(M,{class:`event-form`,onSubmit:d(E,[`prevent`])},{default:o(()=>[b,s(`div`,x,[u(j,{id:`event-message`,modelValue:w.value,"onUpdate:modelValue":c[2]||=e=>w.value=e,"aria-label":`事件演示输入`,onKeyup:f(D,[`enter`])},null,8,[`modelValue`,`onKeyup`]),u(A,{"native-type":`submit`,type:`primary`},{default:o(()=>[e(`.prevent 提交`)]),_:1})])]),_:1},8,[`onSubmit`]),s(`div`,S,[e(`上次键盘事件：`+n(T.value),1),C,e(`表单结果：`+n(h.value||`尚未提交`),1)])])])]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-ec69b998`]]);export{w as default};