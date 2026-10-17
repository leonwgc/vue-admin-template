<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ModelTextInput from '../../components/examples/ModelTextInput.vue'

const message = ref('父组件的初始值')
const code = `<!-- ModelTextInput.vue -->
<script setup>
defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- ParentView.vue -->
<script setup>
import { ref } from 'vue'
import ModelTextInput from './ModelTextInput.vue'
const message = ref('初始内容')
<\/script>

<template>
  <ModelTextInput v-model="message" />
  <p>父组件状态：{{ message }}</p>
</template>`

const resources = [
  { label: '组件 v-model', url: 'https://vuejs.org/guide/components/v-model.html' },
  { label: '组件事件', url: 'https://vuejs.org/guide/components/events.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="COMPONENTS · CUSTOM V-MODEL"
    title="组件 v-model"
    description="用 modelValue prop 和 update:modelValue 事件实现父子组件双向同步，兼容当前 Vue 3.2。"
    :concepts="['组件上的 v-model 是 modelValue 属性和 update:modelValue 事件的语法糖。', '子组件通过事件提出更新，父组件仍拥有状态。', '该写法兼容 Vue 3.2；defineModel 是 Vue 3.4+ 提供的宏。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>自定义输入组件</h2><p>编辑子组件输入框，观察父组件的 message 同步更新。</p></div><el-tag effect="plain">modelValue ↔ update:modelValue</el-tag></div>
      <div class="playground-content">
        <ModelTextInput v-model="message" label="子组件（v-model）" />
        <div class="demo-output"><strong>父组件状态：</strong>{{ message || '（空字符串）' }}</div>
        <el-button @click="message = ''">清空父组件状态</el-button>
      </div>
    </section>
  </ExamplePage>
</template>
