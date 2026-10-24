import{$ as e,C as t,D as n,E as r,J as i,Q as a,S as o,St as s,T as c,X as l,Z as u,b as d,f,ft as p,kt as m,q as h,tn as g,x as _}from"./vue-vendor-CsbriK0s.js";import{n as v}from"./index-B_hZ1C-r.js";import{t as y}from"./ExamplePage-k1ZS3Qm1.js";import{t as b}from"./ExampleSection-CZj6jErA.js";import{t as x}from"./MessageCard-BGciakBQ.js";var S={class:`slot-list`},C=v({__name:`SlotList`,props:{items:{type:Array,required:!0}},setup(e){return(n,r)=>(h(),t(`ul`,S,[(h(!0),t(f,null,u(e.items,(e,r)=>(h(),t(`li`,{key:e.id},[a(n.$slots,`default`,{item:e,index:r},()=>[d(`span`,null,g(e.label),1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-97364206`]]),w={class:`slot-panel`},T={key:0},E={key:1},D=v({__name:`SlotPanel`,setup(e){let n=s(0);function i(){n.value++}function c(){n.value=0}return(e,s)=>(h(),t(`article`,w,[e.$slots.header?(h(),t(`header`,T,[a(e.$slots,`header`,{count:n.value},void 0,!0)])):o(``,!0),d(`div`,null,[a(e.$slots,`default`,{count:n.value,increment:i,reset:c},()=>[r(` 子组件回退内容：未提供默认插槽。 `)],!0)]),e.$slots.footer?(h(),t(`footer`,E,[a(e.$slots,`footer`,{count:n.value},void 0,!0)])):o(``,!0)]))}},[[`__scopeId`,`data-v-a24b4317`]]),O=`<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function reset() {
  count.value = 0
}
<\/script>

<template>
  <article class="slot-panel">
    <header v-if="$slots.header">
      <slot name="header" :count="count" />
    </header>

    <div>
      <slot
        :count="count"
        :increment="increment"
        :reset="reset"
      >
        子组件回退内容：未提供默认插槽。
      </slot>
    </div>

    <footer v-if="$slots.footer">
      <slot name="footer" :count="count" />
    </footer>
  </article>
</template>

<style scoped>
.slot-panel {
  padding: 15px;
  border: 1px solid #e8ebfc;
  border-radius: 9px;
  color: #556071;
  background: #fafaff;
}

.slot-panel header {
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8ebfc;
}

.slot-panel footer {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid #e8ebfc;
}
</style>
`,k=e=>(l(`data-v-ec7d3180`),e=e(),i(),e),A={class:`content-card playground-card`},j={class:`playground-title`},M=k(()=>d(`div`,null,[d(`h2`,null,`默认与具名插槽`),d(`p`,null,`父组件传入标题、正文和页脚，子组件负责布局；按钮事件仍由子组件向上通知。`)],-1)),N={class:`playground-content`},P={class:`demo-row`},F=k(()=>d(`span`,{class:`demo-label`},`父组件状态`,-1)),I={class:`demo-value`},L=k(()=>d(`span`,{class:`demo-muted`},`子组件通过事件通知更新`,-1)),R=k(()=>d(`span`,{class:`slot-caption`},`具名插槽：footer`,-1)),z={class:`content-card playground-card`},B={class:`playground-title`},V=k(()=>d(`div`,null,[d(`h2`,null,`作用域插槽`),d(`p`,null,`列表子组件提供任务数据和索引，父组件接收后自定义每一项的展示。`)],-1)),H={class:`playground-content`},U={class:`task-row`},W={class:`task-index`},G=k(()=>d(`p`,{class:`demo-muted`},`父组件维护 tasks，通过 props 传给子组件；子组件将 item、index 暴露给插槽，插槽内容在父组件作用域中定义。`,-1)),K=k(()=>d(`label`,{for:`dynamic-slot-name`},`插槽位置`,-1)),q=k(()=>d(`label`,{for:`slot-parent-label`},`父组件变量`,-1)),J={class:`demo-row`},Y=v({__name:`SlotsView`,setup(t){let i=s(0),a=s(!1),o=s(!0),l=s(`header`),u=s(`父组件主题`),f=s([{id:1,label:`理解默认插槽`},{id:2,label:`给内容命名`},{id:3,label:`使用作用域插槽`}]),v=[{label:`插槽`,url:`https://vuejs.org/guide/components/slots.html`}];return(t,s)=>{let S=e(`el-tag`),w=e(`el-checkbox`),T=e(`el-option`),E=e(`el-select`),k=e(`el-input`),Y=e(`el-button`),X=e(`el-table-column`),Z=e(`el-table`);return h(),_(y,{eyebrow:`COMPONENTS · SLOTS`,title:`组件插槽：默认、具名与作用域`,description:`插槽让子组件提供结构、父组件提供内容；作用域插槽还可以将子组件数据交给父组件自定义渲染。`,concepts:[`默认插槽承载组件标签中的普通内容，也可以设置回退内容。`,`具名插槽用 name 和 #slotName 将内容放入子组件指定位置。`,`作用域插槽通过 slot 属性向父组件暴露数据，由父组件决定呈现方式。`],code:`<!-- 子组件 MessageCard.vue -->
<template>
  <article>
    <header><slot name="title">默认标题</slot></header>
    <main><slot>默认插槽回退内容</slot></main>
    <footer><slot name="footer">默认页脚</slot></footer>
  </article>
</template>

<!-- 父组件：具名插槽与默认插槽 -->
<MessageCard>
  <template #title>父组件标题</template>
  通过默认插槽传入的正文
  <template #footer>父组件页脚</template>
</MessageCard>

<!-- 子组件 SlotList.vue：把数据作为插槽属性暴露 -->
<li v-for="(item, index) in items" :key="item.id">
  <slot :item="item" :index="index" />
</li>

<!-- 父组件：接收作用域插槽属性并自定义渲染 -->
<SlotList :items="tasks">
  <template #default="{ item, index }">
    <strong>{{ index + 1 }}. {{ item.label }}</strong>
  </template>
</SlotList>`,resources:v},{default:p(()=>[d(`section`,A,[d(`div`,j,[M,n(S,{effect:`plain`},{default:p(()=>[r(`default · named`)]),_:1})]),d(`div`,N,[d(`div`,P,[F,d(`strong`,I,g(i.value),1),L]),n(x,{count:i.value,onIncrement:s[0]||=e=>i.value+=1},{title:p(()=>[r(`由父组件定制的标题`)]),default:p(()=>[r(`这段正文通过默认插槽传入。`)]),footer:p(()=>[R]),_:1},8,[`count`])])]),d(`section`,z,[d(`div`,B,[V,n(S,{effect:`plain`},{default:p(()=>[r(`scoped slot`)]),_:1})]),d(`div`,H,[n(C,{items:f.value},{default:p(({item:e,index:t})=>[d(`div`,U,[d(`span`,W,g(t+1),1),d(`strong`,null,g(e.label),1),n(S,{size:`small`,effect:`plain`},{default:p(()=>[r(`item.id: `+g(e.id),1)]),_:2},1024)])]),_:1},8,[`items`]),G])]),n(b,{title:`回退内容与条件插槽`,description:`默认插槽未提供时显示回退文案；具名插槽未提供时，子组件用 $slots 判断并省略整个容器。`,code:m(O)},{default:p(()=>[n(w,{modelValue:a.value,"onUpdate:modelValue":s[1]||=e=>a.value=e},{default:p(()=>[r(`提供默认插槽`)]),_:1},8,[`modelValue`]),n(w,{modelValue:o.value,"onUpdate:modelValue":s[2]||=e=>o.value=e},{default:p(()=>[r(`提供 header 插槽`)]),_:1},8,[`modelValue`]),n(D,null,c({_:2},[o.value?{name:`header`,fn:p(()=>[r(`可选标题区域`)]),key:`0`}:void 0,a.value?{name:`default`,fn:p(()=>[r(`父组件提供的正文，替换回退内容。`)]),key:`1`}:void 0]),1024)]),_:1},8,[`code`]),n(b,{title:`动态具名作用域插槽`,description:`同一段内容可切换到 header 或 footer；具名插槽也可以接收子组件数据。`,code:`<SlotPanel>
  <template #[slotName]="{ count }">子组件计数：{{ count }}</template>
</SlotPanel>`},{default:p(()=>[K,n(E,{id:`dynamic-slot-name`,modelValue:l.value,"onUpdate:modelValue":s[3]||=e=>l.value=e},{default:p(()=>[n(T,{label:`header`,value:`header`}),n(T,{label:`footer`,value:`footer`})]),_:1},8,[`modelValue`]),n(D,null,{[l.value]:p(({count:e})=>[r(`动态插槽 `+g(l.value)+` · 子组件计数 `+g(e),1)]),_:2},1024)]),_:1}),n(b,{title:`作用域、解构与方法暴露`,description:`文字读取父组件变量，计数和方法来自子组件的插槽参数；父组件决定按钮外观，子组件持有计数逻辑。`,code:`<SlotPanel #default="{ count: childCount = 0, increment, reset }">
  {{ parentLabel }}：{{ childCount }}
  <button @click="increment">增加</button>
  <button @click="reset">重置</button>
</SlotPanel>
// 解构默认值只在属性为 undefined 时生效。
// 无渲染组件可只输出 slot，把所有 DOM 结构交给父组件。
// 包装组件透传：
// <template v-for="(_, name) in $slots" #[name]="slotProps">
//   <slot :name="name" v-bind="slotProps || {}" />
// </template>`},{default:p(()=>[q,n(k,{id:`slot-parent-label`,modelValue:u.value,"onUpdate:modelValue":s[4]||=e=>u.value=e},null,8,[`modelValue`]),n(D,null,{default:p(({count:e=0,increment:t,reset:i})=>[d(`div`,J,[d(`span`,null,g(u.value)+`：`+g(e),1),n(Y,{onClick:t},{default:p(()=>[r(`增加子组件计数`)]),_:2},1032,[`onClick`]),n(Y,{onClick:i},{default:p(()=>[r(`重置`)]),_:2},1032,[`onClick`])])]),_:1})]),_:1},8,[`code`]),n(b,{title:`业务中的表格插槽`,description:`Element Plus 表格通过作用域插槽暴露 row，由父组件定制标签与操作按钮。`,code:`<el-table-column label="操作">
  <template #default="{ row }">
    <el-button @click="row.done = !row.done">切换完成状态</el-button>
  </template>
</el-table-column>`},{default:p(()=>[n(Z,{data:f.value,"row-key":`id`},{default:p(()=>[n(X,{prop:`label`,label:`任务`,"min-width":`140`}),n(X,{label:`状态`,width:`90`},{default:p(({row:e})=>[n(S,{type:e.done?`success`:`info`},{default:p(()=>[r(g(e.done?`已完成`:`待学习`),1)]),_:2},1032,[`type`])]),_:1}),n(X,{label:`操作`,width:`110`},{default:p(({row:e})=>[n(Y,{size:`small`,onClick:t=>e.done=!e.done},{default:p(()=>[r(`切换状态`)]),_:2},1032,[`onClick`])]),_:1})]),_:1},8,[`data`])]),_:1},8,[`code`])]),_:1})}}},[[`__scopeId`,`data-v-ec7d3180`]]);export{Y as default};