import{$ as e,At as t,C as n,Ct as r,D as i,J as a,O as o,R as s,W as c,Y as l,Z as u,b as d,et as f,h as p,nn as m,pt as h,x as g}from"./vue-vendor-2WV6Jefd.js";import{r as _}from"./index-KdiVrdr8.js";import{t as v}from"./ExamplePage-BNsrRItr.js";import{t as y}from"./ExampleSection-CqWGuRKb.js";var b={key:0,role:`alert`},x={__name:`LessonBoundary`,setup(t){let s=r(``),l=r(0);c(e=>(s.value=e.message,!1));function u(){s.value=``,l.value++}return(t,r)=>{let c=f(`el-button`);return s.value?(a(),n(`div`,b,[d(`p`,null,`局部错误：`+m(s.value),1),o(c,{onClick:u},{default:h(()=>[i(`重新挂载子组件`)]),_:1})])):e(t.$slots,`default`,{key:l.value})}}},S={__name:`FragileLesson`,setup(e){function t(){throw Error(`学习演示：子组件事件处理失败`)}return(e,n)=>{let r=f(`el-button`);return a(),g(r,{onClick:t},{default:h(()=>[i(`触发子组件错误`)]),_:1})}}},C=`<script setup>
import { onErrorCaptured, ref } from 'vue'

const error = ref('')
const revision = ref(0)

onErrorCaptured((cause) => {
  error.value = cause.message
  return false
})

function retry() {
  error.value = ''
  revision.value++
}
<\/script>

<template>
  <div v-if="error" role="alert">
    <p>局部错误：{{ error }}</p>
    <el-button @click="retry">重新挂载子组件</el-button>
  </div>

  <slot v-else :key="revision" />
</template>
`,w=e=>(u(`data-v-1c8409d0`),e=e(),l(),e),T=w(()=>d(`label`,{for:`safe-text`},`模拟用户内容`,-1)),E={class:`demo-output`},D=w(()=>d(`h2`,{id:`lesson-dialog-title`},`Teleport 学习弹窗`,-1)),O=w(()=>d(`p`,null,`组件仍属于当前页面，DOM 位于 body。原生模态 dialog 管理焦点范围。`,-1)),k=w(()=>d(`label`,null,[i(`练习输入`),d(`input`,{"aria-label":`弹窗练习输入`})],-1)),A=_({__name:`SafetyView`,setup(e){let n=r(`<strong>用户输入按文本显示</strong>`),i=r(null),c=r(null);async function l(){await s(),i.value.showModal()}function u(){i.value.close()}function _(){c.value?.focus()}return(e,r)=>{let s=f(`el-input`);return a(),g(v,{eyebrow:`PRACTICE · SAFETY`,title:`错误处理、安全与可访问性`,description:`演示局部错误恢复、安全文本输出与 Teleport 弹窗的键盘交互。`,concepts:[`onErrorCaptured 处理后代组件错误，返回 false 可阻止继续上报；边界自身的错误不能由自己捕获。`,`异步任务仍需 try/catch；全局 errorHandler 用于最终兜底和经过脱敏的上报。`,`不把用户输入编译为模板；HTML 插值使用文本转义，v-html 仅接收可信且经过清洗的内容。`,`Teleport 改变 DOM 位置，不改变组件关系；模态弹窗需焦点管理、可访问名称和 Escape 行为。`],code:`<Teleport to="body">
  <dialog ref="dialog" aria-labelledby="dialog-title" @close="restoreFocus">
    <h2 id="dialog-title">示例弹窗</h2>
    <button autofocus @click="dialog.close()">关闭</button>
  </dialog>
</Teleport>
// dialog.showModal() 提供模态交互和 Escape 关闭。
// Vue 插值会转义文本；不要将未经可信清洗的输入交给 v-html。
// 全局兜底可使用 app.config.errorHandler；不要记录敏感数据。`,resources:[{label:`安全`,url:`https://vuejs.org/guide/best-practices/security.html`},{label:`Teleport`,url:`https://vuejs.org/guide/built-ins/teleport.html`},{label:`可访问性`,url:`https://vuejs.org/guide/best-practices/accessibility.html`}]},{default:h(()=>[o(y,{title:`局部错误边界`,description:`子组件报错时，页面其他内容继续工作；重新挂载后可以再次操作。`,code:t(C)},{default:h(()=>[o(x,null,{default:h(()=>[o(S)]),_:1})]),_:1},8,[`code`]),o(y,{title:`用户输入按文本渲染`},{default:h(()=>[T,o(s,{id:`safe-text`,modelValue:n.value,"onUpdate:modelValue":r[0]||=e=>n.value=e},null,8,[`modelValue`]),d(`div`,E,m(n.value),1)]),_:1}),o(y,{title:`Teleport 与模态焦点`,description:`打开后按 Tab 切换焦点，按 Escape 关闭；关闭后焦点回到触发按钮。`},{default:h(()=>[d(`button`,{ref_key:`trigger`,ref:c,class:`dialog-button`,onClick:l},`打开传送到 body 的弹窗`,512),(a(),g(p,{to:`body`},[d(`dialog`,{ref_key:`dialog`,ref:i,class:`lesson-dialog`,"aria-labelledby":`lesson-dialog-title`,onClose:_},[D,O,k,d(`button`,{autofocus:``,class:`dialog-button`,onClick:u},`关闭弹窗`)],544)]))]),_:1})]),_:1},8,[`resources`])}}},[[`__scopeId`,`data-v-1c8409d0`]]);export{A as default};