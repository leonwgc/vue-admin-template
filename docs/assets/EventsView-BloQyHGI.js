import{$ as e,D as t,E as n,J as r,St as i,X as a,b as o,ft as s,q as c,tn as l,x as u}from"./vue-vendor-CsbriK0s.js";import{f as d,p as f}from"./element-plus-BrLZTTAh.js";import{n as p}from"./index-B_hZ1C-r.js";import{t as m}from"./ExamplePage-k1ZS3Qm1.js";var h=e=>(a(`data-v-ec69b998`),e=e(),r(),e),g={class:`content-card playground-card`},_={class:`playground-title`},v=h(()=>o(`div`,null,[o(`h2`,null,`事件修饰符实验`),o(`p`,null,`分别点击外层区域和内部按钮，试试表单提交及 Enter 键。`)],-1)),y={class:`playground-content`},b=h(()=>o(`label`,{class:`demo-label`,for:`event-message`},`输入内容后按 Enter 或点击提交`,-1)),x={class:`demo-row`},S={class:`demo-output`},C=h(()=>o(`br`,null,null,-1)),w=p({__name:`EventsView`,setup(r){let a=i(0),p=i(0),h=i(``),w=i(``),T=i(`尚未按下 Enter`);function E(){h.value=w.value.trim()||`（空内容）`}function D(e){T.value=`Enter：${e.target.value||`（空内容）`}`}let O=[{label:`事件处理`,url:`https://vuejs.org/guide/essentials/event-handling.html`},{label:`表单输入绑定`,url:`https://vuejs.org/guide/essentials/forms.html`}];return(r,i)=>{let k=e(`el-tag`),A=e(`el-button`),j=e(`el-input`),M=e(`el-form`);return c(),u(m,{eyebrow:`ESSENTIALS · EVENT HANDLING`,title:`事件处理与修饰符`,description:`体验事件参数、冒泡控制、表单默认行为和键盘修饰符。`,concepts:[`v-on（@）绑定事件处理器，可在表达式或方法中处理事件。`,`.stop 阻止事件继续冒泡，.prevent 阻止浏览器默认动作。`,`键盘修饰符（如 .enter）可将处理逻辑限制在特定按键。`],code:`<script setup>
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
</template>`,resources:O},{default:s(()=>[o(`section`,g,[o(`div`,_,[v,t(k,{effect:`plain`},{default:s(()=>[n(`@click · .stop · .prevent`)]),_:1})]),o(`div`,y,[o(`div`,{class:`click-parent`,onClick:i[1]||=e=>a.value+=1},[o(`span`,null,`父区域点击 `+l(a.value)+` 次`,1),t(A,{type:`primary`,onClick:i[0]||=f(e=>p.value+=1,[`stop`])},{default:s(()=>[n(`.stop 子按钮 `+l(p.value),1)]),_:1})]),t(M,{class:`event-form`,onSubmit:f(E,[`prevent`])},{default:s(()=>[b,o(`div`,x,[t(j,{id:`event-message`,modelValue:w.value,"onUpdate:modelValue":i[2]||=e=>w.value=e,"aria-label":`事件演示输入`,onKeyup:d(D,[`enter`])},null,8,[`modelValue`,`onKeyup`]),t(A,{"native-type":`submit`,type:`primary`},{default:s(()=>[n(`.prevent 提交`)]),_:1})])]),_:1},8,[`onSubmit`]),o(`div`,S,[n(`上次键盘事件：`+l(T.value),1),C,n(`表单结果：`+l(h.value||`尚未提交`),1)])])])]),_:1},8,[`concepts`])}}},[[`__scopeId`,`data-v-ec69b998`]]);export{w as default};