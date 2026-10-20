<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import BoundaryInput from '../../components/examples/BoundaryInput.vue'
import source from '../../components/examples/BoundaryInput.vue?raw'
const text = ref('Vue 3')
const confirmed = ref('尚未确认')
const field = ref(null)
</script>
<template>
  <ExamplePage eyebrow="COMPONENTS · BOUNDARIES" title="组件接口与属性透传" description="封装输入组件，明确 Props、Emits、透传属性和命令式公开方法的边界。"
    :concepts="['Props 是只读输入，修改通过声明的事件交给父组件；对象 prop 的嵌套属性也应避免由子组件随意修改。', '已声明的 prop 和事件不会留在 $attrs；其余属性和监听器可以显式绑定到内部输入框。', 'inheritAttrs: false 关闭根节点自动继承，避免把输入属性绑定到包装 div。', 'script setup 默认关闭组件实例；defineExpose 只公开必要方法，常规数据交互仍使用 Props / Emits。']"
    :code="source" :resources="[{ label: '透传属性', url: 'https://vuejs.org/guide/components/attrs.html' }, { label: 'defineExpose', url: 'https://vuejs.org/api/sfc-script-setup.html#defineexpose' }]">
    <ExampleSection title="显式转发输入属性与事件" description="maxlength、placeholder 和 aria-label 通过 $attrs 到达 input；按 Enter 触发声明的 confirm 事件。"
      :code="`<BoundaryInput ref='field' v-model='text' maxlength='20' aria-label='主题' @confirm='confirmed = $event' />
<button @click='field?.focus()'>调用公开的 focus</button>`">
      <BoundaryInput ref="field" v-model="text" maxlength="20" placeholder="输入主题，按 Enter 确认" aria-label="组件接口主题" @confirm="confirmed = $event" />
      <el-button @click="field?.focus()">调用子组件 focus()</el-button>
      <div class="demo-output">父组件：{{ text }} · 最后确认：{{ confirmed }}</div>
    </ExampleSection>
  </ExamplePage>
</template>
