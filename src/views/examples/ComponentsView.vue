<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import MessageCard from '../../components/examples/MessageCard.vue'

const count = ref(0)
const code = `<MessageCard :count="count" @increment="count += 1">
  <template #title>父组件传入标题</template>
  <template #default>通过插槽传入的内容</template>
</MessageCard>`
</script>

<template>
  <ExamplePage
    eyebrow="COMPONENTS · COMMUNICATION"
    title="组件通信：Props、事件与插槽"
    description="父组件通过 Props 向下传值，子组件通过事件向上通知，并用插槽接收可定制内容。"
    :concepts="['Props 是只读的，数据由父组件持有。', '子组件用 defineEmits 声明事件，再由父组件响应。', '默认插槽和具名插槽让父组件传入自定义内容。']"
    :code="code"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>父子组件交互</h2><p>点击子组件中的按钮，观察父组件状态改变后如何通过 Props 回传。</p></div><el-tag effect="plain">Parent ↔ Child</el-tag></div>
      <div class="playground-content">
        <div class="demo-row"><span class="demo-label">父组件状态</span><strong class="demo-value">{{ count }}</strong><span class="demo-muted">子组件通过 Props 接收该值</span></div>
        <MessageCard :count="count" @increment="count += 1">
          <template #title>父组件传入标题</template>
          <template #default>这段文字通过默认插槽传入子组件。</template>
          <template #footer><span class="slot-caption">具名插槽 footer</span></template>
        </MessageCard>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.slot-caption{color:#8993a2;font-size:9px}
</style>
