<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import MessageCard from '../../components/examples/MessageCard.vue'
import SlotList from '../../components/examples/SlotList.vue'
import SlotPanel from '../../components/examples/SlotPanel.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import panelSource from '../../components/examples/SlotPanel.vue?raw'

const count = ref(0)
const customContent = ref(false)
const showHeader = ref(true)
const slotName = ref('header')
const parentLabel = ref('父组件主题')
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
        <p class="demo-muted">父组件维护 tasks，通过 props 传给子组件；子组件将 item、index 暴露给插槽，插槽内容在父组件作用域中定义。</p>
      </div>
    </section>
    <ExampleSection title="回退内容与条件插槽" description="默认插槽未提供时显示回退文案；具名插槽未提供时，子组件用 $slots 判断并省略整个容器。" :code="panelSource">
      <el-checkbox v-model="customContent">提供默认插槽</el-checkbox><el-checkbox v-model="showHeader">提供 header 插槽</el-checkbox>
      <SlotPanel><template v-if="showHeader" #header>可选标题区域</template><template v-if="customContent" #default>父组件提供的正文，替换回退内容。</template></SlotPanel>
    </ExampleSection>
    <ExampleSection title="动态具名作用域插槽" description="同一段内容可切换到 header 或 footer；具名插槽也可以接收子组件数据。" :code='`<SlotPanel>
  <template #[slotName]="{ count }">子组件计数：{{ count }}</template>
</SlotPanel>`'>
      <label for="dynamic-slot-name">插槽位置</label><el-select id="dynamic-slot-name" v-model="slotName"><el-option label="header" value="header" /><el-option label="footer" value="footer" /></el-select>
      <SlotPanel><template #[slotName]="{ count: childCount }">动态插槽 {{ slotName }} · 子组件计数 {{ childCount }}</template></SlotPanel>
    </ExampleSection>
    <ExampleSection title="作用域、解构与方法暴露" description="文字读取父组件变量，计数和方法来自子组件的插槽参数；父组件决定按钮外观，子组件持有计数逻辑。" :code='`<SlotPanel #default="{ count: childCount = 0, increment, reset }">
  {{ parentLabel }}：{{ childCount }}
  <button @click="increment">增加</button>
  <button @click="reset">重置</button>
</SlotPanel>
// 解构默认值只在属性为 undefined 时生效。
// 无渲染组件可只输出 slot，把所有 DOM 结构交给父组件。
// 包装组件透传：
// <template v-for="(_, name) in $slots" #[name]="slotProps">
//   <slot :name="name" v-bind="slotProps || {}" />
// </template>`'>
      <label for="slot-parent-label">父组件变量</label><el-input id="slot-parent-label" v-model="parentLabel" />
      <SlotPanel #default="{ count: childCount = 0, increment, reset }"><div class="demo-row"><span>{{ parentLabel }}：{{ childCount }}</span><el-button @click="increment">增加子组件计数</el-button><el-button @click="reset">重置</el-button></div></SlotPanel>
    </ExampleSection>
    <ExampleSection title="业务中的表格插槽" description="Element Plus 表格通过作用域插槽暴露 row，由父组件定制标签与操作按钮。" :code='`<el-table-column label="操作">
  <template #default="{ row }">
    <el-button @click="row.done = !row.done">切换完成状态</el-button>
  </template>
</el-table-column>`'>
      <el-table :data="tasks" row-key="id"><el-table-column prop="label" label="任务" min-width="140" /><el-table-column label="状态" width="90"><template #default="{ row }"><el-tag :type="row.done ? 'success' : 'info'">{{ row.done ? '已完成' : '待学习' }}</el-tag></template></el-table-column><el-table-column label="操作" width="110"><template #default="{ row }"><el-button size="small" @click="row.done = !row.done">切换状态</el-button></template></el-table-column></el-table>
    </ExampleSection>
  </ExamplePage>
</template>

<style scoped>
.slot-caption{color:#8993a2;font-size:12px}
.task-row{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid #edf0f5;border-radius:8px;background:#fafbfe}
.task-row strong{flex:1;min-width:0;color:#556071;font-size:14px}
.task-index{display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#eff1ff;color:#6879e8;font-size:12px;font-weight:700}
</style>
