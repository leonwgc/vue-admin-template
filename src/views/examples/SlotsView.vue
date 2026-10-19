<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import MessageCard from '../../components/examples/MessageCard.vue'
import SlotList from '../../components/examples/SlotList.vue'

const count = ref(0)
const tasks = ref([
  { id: 1, label: '理解默认插槽' },
  { id: 2, label: '给内容命名' },
  { id: 3, label: '使用作用域插槽' },
])

const code = `<!-- 子组件 MessageCard.vue -->
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
</SlotList>`

const resources = [
  { label: '插槽', url: 'https://vuejs.org/guide/components/slots.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="COMPONENTS · SLOTS"
    title="组件插槽：默认、具名与作用域"
    description="插槽让子组件提供结构、父组件提供内容；作用域插槽还可以将子组件数据交给父组件自定义渲染。"
    :concepts="['默认插槽承载组件标签中的普通内容，也可以设置回退内容。', '具名插槽用 name 和 #slotName 将内容放入子组件指定位置。', '作用域插槽通过 slot 属性向父组件暴露数据，由父组件决定呈现方式。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>默认与具名插槽</h2><p>父组件传入标题、正文和页脚，子组件负责布局；按钮事件仍由子组件向上通知。</p></div><el-tag effect="plain">default · named</el-tag></div>
      <div class="playground-content">
        <div class="demo-row"><span class="demo-label">父组件状态</span><strong class="demo-value">{{ count }}</strong><span class="demo-muted">子组件通过事件通知更新</span></div>
        <MessageCard :count="count" @increment="count += 1">
          <template #title>由父组件定制的标题</template>
          <template #default>这段正文通过默认插槽传入。</template>
          <template #footer><span class="slot-caption">具名插槽：footer</span></template>
        </MessageCard>
      </div>
    </section>
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>作用域插槽</h2><p>列表子组件提供任务数据和索引，父组件接收后自定义每一项的展示。</p></div><el-tag effect="plain">scoped slot</el-tag></div>
      <div class="playground-content">
        <SlotList :items="tasks">
          <template #default="{ item, index }">
            <div class="task-row"><span class="task-index">{{ index + 1 }}</span><strong>{{ item.label }}</strong><el-tag size="small" effect="plain">item.id: {{ item.id }}</el-tag></div>
          </template>
        </SlotList>
        <p class="demo-muted">子组件维护 items 并将 item、index 暴露给插槽；插槽内容在父组件作用域中定义。</p>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.slot-caption{color:#8993a2;font-size:12px}
.task-row{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid #edf0f5;border-radius:8px;background:#fafbfe}
.task-row strong{flex:1;min-width:0;color:#556071;font-size:14px}
.task-index{display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#eff1ff;color:#6879e8;font-size:12px;font-weight:700}
</style>
