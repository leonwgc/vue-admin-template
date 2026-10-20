import{$ as e,At as t,C as n,Ct as r,D as i,J as a,O as o,Q as s,S as c,T as l,Y as u,Z as d,b as f,et as p,f as m,nn as h,pt as g,x as _}from"./vue-vendor-2WV6Jefd.js";import{r as v}from"./index-KdiVrdr8.js";import{t as y}from"./ExamplePage-BNsrRItr.js";import{t as b}from"./ExampleSection-CqWGuRKb.js";import{t as x}from"./MessageCard-CDLYIaZy.js";var S={class:`slot-list`},C=v({__name:`SlotList`,props:{items:{type:Array,required:!0}},setup(t){return(r,i)=>(a(),n(`ul`,S,[(a(!0),n(m,null,s(t.items,(t,i)=>(a(),n(`li`,{key:t.id},[e(r.$slots,`default`,{item:t,index:i},()=>[f(`span`,null,h(t.label),1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-97364206`]]),w={class:`slot-panel`},T={key:0},E={key:1},D=v({__name:`SlotPanel`,setup(t){let o=r(0);function s(){o.value++}function l(){o.value=0}return(t,r)=>(a(),n(`article`,w,[t.$slots.header?(a(),n(`header`,T,[e(t.$slots,`header`,{count:o.value},void 0,!0)])):c(``,!0),f(`div`,null,[e(t.$slots,`default`,{count:o.value,increment:s,reset:l},()=>[i(` 子组件回退内容：未提供默认插槽。 `)],!0)]),t.$slots.footer?(a(),n(`footer`,E,[e(t.$slots,`footer`,{count:o.value},void 0,!0)])):c(``,!0)]))}},[[`__scopeId`,`data-v-a24b4317`]]),O=`<script setup>
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
`,k=e=>(d(`data-v-ec7d3180`),e=e(),u(),e),A={class:`content-card playground-card`},j={class:`playground-title`},M=k(()=>f(`div`,null,[f(`h2`,null,`默认与具名插槽`),f(`p`,null,`父组件传入标题、正文和页脚，子组件负责布局；按钮事件仍由子组件向上通知。`)],-1)),N={class:`playground-content`},P={class:`demo-row`},F=k(()=>f(`span`,{class:`demo-label`},`父组件状态`,-1)),I={class:`demo-value`},L=k(()=>f(`span`,{class:`demo-muted`},`子组件通过事件通知更新`,-1)),R=k(()=>f(`span`,{class:`slot-caption`},`具名插槽：footer`,-1)),z={class:`content-card playground-card`},B={class:`playground-title`},V=k(()=>f(`div`,null,[f(`h2`,null,`作用域插槽`),f(`p`,null,`列表子组件提供任务数据和索引，父组件接收后自定义每一项的展示。`)],-1)),H={class:`playground-content`},U={class:`task-row`},W={class:`task-index`},G=k(()=>f(`p`,{class:`demo-muted`},`父组件维护 tasks，通过 props 传给子组件；子组件将 item、index 暴露给插槽，插槽内容在父组件作用域中定义。`,-1)),K=k(()=>f(`label`,{for:`dynamic-slot-name`},`插槽位置`,-1)),q=k(()=>f(`label`,{for:`slot-parent-label`},`父组件变量`,-1)),J={class:`demo-row`},Y=v({__name:`SlotsView`,setup(e){let n=r(0),s=r(!1),c=r(!0),u=r(`header`),d=r(`父组件主题`),m=r([{id:1,label:`理解默认插槽`},{id:2,label:`给内容命名`},{id:3,label:`使用作用域插槽`}]),v=[{label:`插槽`,url:`https://vuejs.org/guide/components/slots.html`}];return(e,r)=>{let S=p(`el-tag`),w=p(`el-checkbox`),T=p(`el-option`),E=p(`el-select`),k=p(`el-input`),Y=p(`el-button`),X=p(`el-table-column`),Z=p(`el-table`);return a(),_(y,{eyebrow:`COMPONENTS · SLOTS`,title:`组件插槽：默认、具名与作用域`,description:`插槽让子组件提供结构、父组件提供内容；作用域插槽还可以将子组件数据交给父组件自定义渲染。`,concepts:[`默认插槽承载组件标签中的普通内容，也可以设置回退内容。`,`具名插槽用 name 和 #slotName 将内容放入子组件指定位置。`,`作用域插槽通过 slot 属性向父组件暴露数据，由父组件决定呈现方式。`],code:`<!-- 子组件 MessageCard.vue -->
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
</SlotList>`,resources:v},{default:g(()=>[f(`section`,A,[f(`div`,j,[M,o(S,{effect:`plain`},{default:g(()=>[i(`default · named`)]),_:1})]),f(`div`,N,[f(`div`,P,[F,f(`strong`,I,h(n.value),1),L]),o(x,{count:n.value,onIncrement:r[0]||=e=>n.value+=1},{title:g(()=>[i(`由父组件定制的标题`)]),default:g(()=>[i(`这段正文通过默认插槽传入。`)]),footer:g(()=>[R]),_:1},8,[`count`])])]),f(`section`,z,[f(`div`,B,[V,o(S,{effect:`plain`},{default:g(()=>[i(`scoped slot`)]),_:1})]),f(`div`,H,[o(C,{items:m.value},{default:g(({item:e,index:t})=>[f(`div`,U,[f(`span`,W,h(t+1),1),f(`strong`,null,h(e.label),1),o(S,{size:`small`,effect:`plain`},{default:g(()=>[i(`item.id: `+h(e.id),1)]),_:2},1024)])]),_:1},8,[`items`]),G])]),o(b,{title:`回退内容与条件插槽`,description:`默认插槽未提供时显示回退文案；具名插槽未提供时，子组件用 $slots 判断并省略整个容器。`,code:t(O)},{default:g(()=>[o(w,{modelValue:s.value,"onUpdate:modelValue":r[1]||=e=>s.value=e},{default:g(()=>[i(`提供默认插槽`)]),_:1},8,[`modelValue`]),o(w,{modelValue:c.value,"onUpdate:modelValue":r[2]||=e=>c.value=e},{default:g(()=>[i(`提供 header 插槽`)]),_:1},8,[`modelValue`]),o(D,null,l({_:2},[c.value?{name:`header`,fn:g(()=>[i(`可选标题区域`)]),key:`0`}:void 0,s.value?{name:`default`,fn:g(()=>[i(`父组件提供的正文，替换回退内容。`)]),key:`1`}:void 0]),1024)]),_:1},8,[`code`]),o(b,{title:`动态具名作用域插槽`,description:`同一段内容可切换到 header 或 footer；具名插槽也可以接收子组件数据。`,code:`<SlotPanel>
  <template #[slotName]="{ count }">子组件计数：{{ count }}</template>
</SlotPanel>`},{default:g(()=>[K,o(E,{id:`dynamic-slot-name`,modelValue:u.value,"onUpdate:modelValue":r[3]||=e=>u.value=e},{default:g(()=>[o(T,{label:`header`,value:`header`}),o(T,{label:`footer`,value:`footer`})]),_:1},8,[`modelValue`]),o(D,null,{[u.value]:g(({count:e})=>[i(`动态插槽 `+h(u.value)+` · 子组件计数 `+h(e),1)]),_:2},1024)]),_:1}),o(b,{title:`作用域、解构与方法暴露`,description:`文字读取父组件变量，计数和方法来自子组件的插槽参数；父组件决定按钮外观，子组件持有计数逻辑。`,code:`<SlotPanel #default="{ count: childCount = 0, increment, reset }">
  {{ parentLabel }}：{{ childCount }}
  <button @click="increment">增加</button>
  <button @click="reset">重置</button>
</SlotPanel>
// 解构默认值只在属性为 undefined 时生效。
// 无渲染组件可只输出 slot，把所有 DOM 结构交给父组件。
// 包装组件透传：
// <template v-for="(_, name) in $slots" #[name]="slotProps">
//   <slot :name="name" v-bind="slotProps || {}" />
// </template>`},{default:g(()=>[q,o(k,{id:`slot-parent-label`,modelValue:d.value,"onUpdate:modelValue":r[4]||=e=>d.value=e},null,8,[`modelValue`]),o(D,null,{default:g(({count:e=0,increment:t,reset:n})=>[f(`div`,J,[f(`span`,null,h(d.value)+`：`+h(e),1),o(Y,{onClick:t},{default:g(()=>[i(`增加子组件计数`)]),_:2},1032,[`onClick`]),o(Y,{onClick:n},{default:g(()=>[i(`重置`)]),_:2},1032,[`onClick`])])]),_:1})]),_:1},8,[`code`]),o(b,{title:`业务中的表格插槽`,description:`Element Plus 表格通过作用域插槽暴露 row，由父组件定制标签与操作按钮。`,code:`<el-table-column label="操作">
  <template #default="{ row }">
    <el-button @click="row.done = !row.done">切换完成状态</el-button>
  </template>
</el-table-column>`},{default:g(()=>[o(Z,{data:m.value,"row-key":`id`},{default:g(()=>[o(X,{prop:`label`,label:`任务`,"min-width":`140`}),o(X,{label:`状态`,width:`90`},{default:g(({row:e})=>[o(S,{type:e.done?`success`:`info`},{default:g(()=>[i(h(e.done?`已完成`:`待学习`),1)]),_:2},1032,[`type`])]),_:1}),o(X,{label:`操作`,width:`110`},{default:g(({row:e})=>[o(Y,{size:`small`,onClick:t=>e.done=!e.done},{default:g(()=>[i(`切换状态`)]),_:2},1032,[`onClick`])]),_:1})]),_:1},8,[`data`])]),_:1},8,[`code`])]),_:1})}}},[[`__scopeId`,`data-v-ec7d3180`]]);export{Y as default};