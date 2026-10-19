import{C as e,G as t,H as n,Jt as r,K as i,V as a,W as o,_ as s,at as c,g as l,ht as u,l as d,q as f,w as p,y as m}from"./vue-vendor-C4hU-6hB.js";import{n as h}from"./index-Bde975Y_.js";import{t as g}from"./ExamplePage-CKuGKbtx.js";import{t as _}from"./MessageCard-C1DD_UV0.js";var v={class:`slot-list`},y=h({__name:`SlotList`,props:{items:{type:Array,required:!0}},setup(e){return(n,o)=>(a(),m(`ul`,v,[(a(!0),m(d,null,t(e.items,(e,t)=>(a(),m(`li`,{key:e.id},[i(n.$slots,`default`,{item:e,index:t},()=>[l(`span`,null,r(e.label),1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-97364206`]]),b=e=>(o(`data-v-aed0daad`),e=e(),n(),e),x={class:`content-card playground-card`},S={class:`playground-title`},C=b(()=>l(`div`,null,[l(`h2`,null,`默认与具名插槽`),l(`p`,null,`父组件传入标题、正文和页脚，子组件负责布局；按钮事件仍由子组件向上通知。`)],-1)),w={class:`playground-content`},T={class:`demo-row`},E=b(()=>l(`span`,{class:`demo-label`},`父组件状态`,-1)),D={class:`demo-value`},O=b(()=>l(`span`,{class:`demo-muted`},`子组件通过事件通知更新`,-1)),k=b(()=>l(`span`,{class:`slot-caption`},`具名插槽：footer`,-1)),A={class:`content-card playground-card`},j={class:`playground-title`},M=b(()=>l(`div`,null,[l(`h2`,null,`作用域插槽`),l(`p`,null,`列表子组件提供任务数据和索引，父组件接收后自定义每一项的展示。`)],-1)),N={class:`playground-content`},P={class:`task-row`},F={class:`task-index`},I=b(()=>l(`p`,{class:`demo-muted`},`子组件维护 items 并将 item、index 暴露给插槽；插槽内容在父组件作用域中定义。`,-1)),L=h({__name:`SlotsView`,setup(t){let n=u(0),i=u([{id:1,label:`理解默认插槽`},{id:2,label:`给内容命名`},{id:3,label:`使用作用域插槽`}]),o=[{label:`插槽`,url:`https://vuejs.org/guide/components/slots.html`}];return(t,u)=>{let d=f(`el-tag`);return a(),s(g,{eyebrow:`COMPONENTS · SLOTS`,title:`组件插槽：默认、具名与作用域`,description:`插槽让子组件提供结构、父组件提供内容；作用域插槽还可以将子组件数据交给父组件自定义渲染。`,concepts:[`默认插槽承载组件标签中的普通内容，也可以设置回退内容。`,`具名插槽用 name 和 #slotName 将内容放入子组件指定位置。`,`作用域插槽通过 slot 属性向父组件暴露数据，由父组件决定呈现方式。`],code:`<!-- 子组件 MessageCard.vue -->
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
</SlotList>`,resources:o},{default:c(()=>[l(`section`,x,[l(`div`,S,[C,p(d,{effect:`plain`},{default:c(()=>[e(`default · named`)]),_:1})]),l(`div`,w,[l(`div`,T,[E,l(`strong`,D,r(n.value),1),O]),p(_,{count:n.value,onIncrement:u[0]||=e=>n.value+=1},{title:c(()=>[e(`由父组件定制的标题`)]),default:c(()=>[e(`这段正文通过默认插槽传入。`)]),footer:c(()=>[k]),_:1},8,[`count`])])]),l(`section`,A,[l(`div`,j,[M,p(d,{effect:`plain`},{default:c(()=>[e(`scoped slot`)]),_:1})]),l(`div`,N,[p(y,{items:i.value},{default:c(({item:t,index:n})=>[l(`div`,P,[l(`span`,F,r(n+1),1),l(`strong`,null,r(t.label),1),p(d,{size:`small`,effect:`plain`},{default:c(()=>[e(`item.id: `+r(t.id),1)]),_:2},1024)])]),_:1},8,[`items`]),I])])]),_:1})}}},[[`__scopeId`,`data-v-aed0daad`]]);export{L as default};