import{$ as e,D as t,E as n,J as r,X as i,b as a,ft as o,pt as s,q as c,x as l}from"./vue-vendor-CsbriK0s.js";import{n as u}from"./index-B_hZ1C-r.js";import{t as d}from"./ExamplePage-k1ZS3Qm1.js";var f=e=>(i(`data-v-43b4242c`),e=e(),r(),e),p={class:`content-card playground-card`},m={class:`playground-title`},h=f(()=>a(`div`,null,[a(`h2`,null,`v-focus 自动聚焦`),a(`p`,null,`输入框在页面挂载时自动获得焦点；离开后再返回即可重新观察效果。`)],-1)),g={class:`playground-content`},_=f(()=>a(`p`,{class:`demo-muted`},`script setup 中的 vFocus 指令会自动映射为模板里的 v-focus。`,-1)),v=u({__name:`DirectivesView`,setup(r){let i={mounted(e){(e.matches(`input, textarea`)?e:e.querySelector(`input, textarea`))?.focus()}},u=[{label:`自定义指令`,url:`https://vuejs.org/guide/reusability/custom-directives.html`}];return(r,f)=>{let v=e(`el-tag`),y=e(`el-alert`),b=e(`el-input`);return c(),l(d,{eyebrow:`PRACTICE · DIRECTIVES`,title:`自定义指令`,description:`用 v-focus 封装 DOM 自动聚焦行为，观察自定义指令如何在元素挂载时执行。`,concepts:[`自定义指令适合封装直接操作 DOM 的可复用行为。`,`mounted 钩子在绑定元素插入 DOM 后调用。`,`在 script setup 中声明 vFocus，可在模板中写作 v-focus。`],code:`<!-- DirectivesView.vue -->
<script setup>
const vFocus = {
  mounted(element) {
    const input = element.matches('input, textarea')
      ? element
      : element.querySelector('input, textarea')
    input?.focus()
  },
}
<\/script>

<template>
  <el-input v-focus placeholder="自动获得焦点" />
</template>`,resources:u},{default:o(()=>[a(`section`,p,[a(`div`,m,[h,t(v,{effect:`plain`},{default:o(()=>[n(`directive · mounted`)]),_:1})]),a(`div`,g,[t(y,{title:`输入框在组件挂载时会自动获得焦点。`,type:`info`,closable:!1,"show-icon":``}),s(t(b,{placeholder:`我会自动获得焦点`,clearable:``},null,512),[[i]]),_])])]),_:1})}}},[[`__scopeId`,`data-v-43b4242c`]]);export{v as default};