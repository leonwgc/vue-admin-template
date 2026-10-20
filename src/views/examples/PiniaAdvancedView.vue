<script setup>
import { storeToRefs } from 'pinia'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import { useLearningCartStore } from '../../stores/learningCart'
import source from '../../stores/learningCart.js?raw'
const store = useLearningCartStore()
const { items, total, loading, error } = storeToRefs(store)
</script>
<template>
  <ExamplePage eyebrow="STATE · PINIA ADVANCED" title="Pinia 进阶与状态边界" description="用学习清单演示 storeToRefs、异步 action、getter 和状态重置；清单仅保留在当前内存。"
    :concepts="['直接解构 store 的基本值会丢失响应性，使用 storeToRefs；action 可直接从 store 调用。', '异步 action 管理共享流程并处理重复提交和异常；页面临时输入仍由页面持有。', 'Options Store 自带 $reset；Setup Store 需要自己实现 reset。', '跨 store 协作可在 action 中调用另一 store，避免初始化时循环读取；只持久化明确需要的数据。']"
    :code="source" :resources="[{ label: 'Pinia Actions', url: 'https://pinia.vuejs.org/core-concepts/actions.html' }, { label: 'storeToRefs', url: 'https://pinia.vuejs.org/core-concepts/' }]">
    <ExampleSection title="共享学习清单" description="切换页面后清单仍在；刷新或手动重置后清空。异步 action 通过学习接口读取推荐主题。">
      <div class="demo-row"><el-button @click="store.add('组件设计')">添加组件设计</el-button><el-button :loading="loading" @click="store.loadSuggestions">异步加载推荐</el-button><el-button :disabled="loading" @click="store.$reset()">重置 Store</el-button></div>
      <div class="demo-output">storeToRefs → total：{{ total }}</div><el-alert v-if="error" :title="error" type="error" />
      <ul><li v-for="item in items" :key="item.title">{{ item.title }} × {{ item.quantity }}</li></ul>
      <el-empty v-if="!items.length" description="清单为空" :image-size="50" />
    </ExampleSection>
  </ExamplePage>
</template>
