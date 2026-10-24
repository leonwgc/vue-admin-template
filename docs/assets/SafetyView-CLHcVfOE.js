import{$ as e,C as t,D as n,E as r,J as i,L as a,Q as o,St as s,U as c,X as l,b as u,ft as d,h as f,kt as p,q as m,tn as h,x as g}from"./vue-vendor-CsbriK0s.js";import{n as _}from"./index-B_hZ1C-r.js";import{t as v}from"./ExamplePage-k1ZS3Qm1.js";import{t as y}from"./ExampleSection-CZj6jErA.js";var b={key:0,role:`alert`},x={__name:`LessonBoundary`,setup(i){let a=s(``),l=s(0);c(e=>(a.value=e.message,!1));function f(){a.value=``,l.value++}return(i,s)=>{let c=e(`el-button`);return a.value?(m(),t(`div`,b,[u(`p`,null,`局部错误：`+h(a.value),1),n(c,{onClick:f},{default:d(()=>[r(`重新挂载子组件`)]),_:1})])):o(i.$slots,`default`,{key:l.value})}}},S={__name:`FragileLesson`,setup(t){function n(){throw Error(`学习演示：子组件事件处理失败`)}return(t,i)=>{let a=e(`el-button`);return m(),g(a,{onClick:n},{default:d(()=>[r(`触发子组件错误`)]),_:1})}}},C=`<script setup>
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
`,w=e=>(l(`data-v-1c8409d0`),e=e(),i(),e),T=w(()=>u(`label`,{for:`safe-text`},`模拟用户内容`,-1)),E={class:`demo-output`},D=w(()=>u(`h2`,{id:`lesson-dialog-title`},`Teleport 学习弹窗`,-1)),O=w(()=>u(`p`,null,`组件仍属于当前页面，DOM 位于 body。原生模态 dialog 管理焦点范围。`,-1)),k=w(()=>u(`label`,null,[r(`练习输入`),u(`input`,{"aria-label":`弹窗练习输入`})],-1)),A=_({__name:`SafetyView`,setup(t){let r=s(`<strong>用户输入按文本显示</strong>`),i=s(null),o=s(null);async function c(){await a(),i.value.showModal()}function l(){i.value.close()}function _(){o.value?.focus()}return(t,a)=>{let s=e(`el-input`);return m(),g(v,{eyebrow:`PRACTICE · SAFETY`,title:`错误处理、安全与可访问性`,description:`演示局部错误恢复、安全文本输出与 Teleport 弹窗的键盘交互。`,concepts:[`onErrorCaptured 处理后代组件错误，返回 false 可阻止继续上报；边界自身的错误不能由自己捕获。`,`异步任务仍需 try/catch；全局 errorHandler 用于最终兜底和经过脱敏的上报。`,`不把用户输入编译为模板；HTML 插值使用文本转义，v-html 仅接收可信且经过清洗的内容。`,`Teleport 改变 DOM 位置，不改变组件关系；模态弹窗需焦点管理、可访问名称和 Escape 行为。`],code:`<Teleport to="body">
  <dialog ref="dialog" aria-labelledby="dialog-title" @close="restoreFocus">
    <h2 id="dialog-title">示例弹窗</h2>
    <button autofocus @click="dialog.close()">关闭</button>
  </dialog>
</Teleport>
// dialog.showModal() 提供模态交互和 Escape 关闭。
// Vue 插值会转义文本；不要将未经可信清洗的输入交给 v-html。
// 全局兜底可使用 app.config.errorHandler；不要记录敏感数据。`,resources:[{label:`安全`,url:`https://vuejs.org/guide/best-practices/security.html`},{label:`Teleport`,url:`https://vuejs.org/guide/built-ins/teleport.html`},{label:`可访问性`,url:`https://vuejs.org/guide/best-practices/accessibility.html`}]},{default:d(()=>[n(y,{title:`局部错误边界`,description:`子组件报错时，页面其他内容继续工作；重新挂载后可以再次操作。`,code:p(C)},{default:d(()=>[n(x,null,{default:d(()=>[n(S)]),_:1})]),_:1},8,[`code`]),n(y,{title:`用户输入按文本渲染`},{default:d(()=>[T,n(s,{id:`safe-text`,modelValue:r.value,"onUpdate:modelValue":a[0]||=e=>r.value=e},null,8,[`modelValue`]),u(`div`,E,h(r.value),1)]),_:1}),n(y,{title:`Teleport 与模态焦点`,description:`打开后按 Tab 切换焦点，按 Escape 关闭；关闭后焦点回到触发按钮。`},{default:d(()=>[u(`button`,{ref_key:`trigger`,ref:o,class:`dialog-button`,onClick:c},`打开传送到 body 的弹窗`,512),(m(),g(f,{to:`body`},[u(`dialog`,{ref_key:`dialog`,ref:i,class:`lesson-dialog`,"aria-labelledby":`lesson-dialog-title`,onClose:_},[D,O,k,u(`button`,{autofocus:``,class:`dialog-button`,onClick:l},`关闭弹窗`)],544)]))]),_:1})]),_:1},8,[`resources`])}}},[[`__scopeId`,`data-v-1c8409d0`]]);export{A as default};