<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'

const price = ref(20)
const quantity = ref(1)
const total = computed(() => price.value * quantity.value)
const history = ref([])
const effectMessage = ref('')
const keyword = ref('Vue')
const preview = ref('等待防抖更新…')
const cancellations = ref(0)
watch(quantity, (value, oldValue) => {
  history.value = [`数量 ${oldValue} → ${value}`, ...history.value].slice(0, 5)
})
watchEffect(() => {
  effectMessage.value = `自动追踪：单价 ${price.value}，数量 ${quantity.value}`
})
watch(keyword, (value, oldValue, onCleanup) => {
  const timer = setTimeout(() => { preview.value = value.trim() || '（空关键词）' }, 600)
  onCleanup(() => { clearTimeout(timer); cancellations.value++ })
}, { immediate: true })
const code = `const total = computed(() => price.value * quantity.value)
watch(quantity, (value, oldValue) => record(value, oldValue))
watchEffect(() => console.log(price.value, quantity.value))

watch(keyword, (value, oldValue, onCleanup) => {
  const timer = setTimeout(() => updatePreview(value), 600)
  onCleanup(() => clearTimeout(timer))
}, { immediate: true })`
</script>

<template>
  <ExamplePage eyebrow="REACTIVITY · WATCHERS" title="计算属性与侦听器" description="计算派生值、明确侦听源、自动追踪依赖，并在下一次执行前清理副作用。"
    :concepts="['computed 用于纯派生状态，有缓存；不要在 getter 中发送请求或修改其他状态。', 'watch 明确指定源，可读取新旧值；watchEffect 立即执行，只自动追踪同步阶段读取的依赖。', 'Vue 3.2 使用回调的 onCleanup；flush: post 在所属组件 DOM 更新后运行，sync 则同步执行且不批处理。', 'deep 会遍历嵌套属性；嵌套修改时新旧值可能是同一个对象。']"
    :code="code" :resources="[{ label: '侦听器', url: 'https://vuejs.org/guide/essentials/watchers.html' }]">
    <ExampleSection title="computed / watch / watchEffect 对比" description="修改单价只影响计算属性和 effect；修改数量还会触发显式 watch。">
      <label for="watch-price">单价</label><el-input-number id="watch-price" v-model="price" :min="0" :max="100" />
      <label for="watch-quantity">数量</label><el-input-number id="watch-quantity" v-model="quantity" :min="1" :max="10" />
      <div class="demo-output">合计：{{ total }} · {{ effectMessage }}</div>
      <ul><li v-for="(entry, index) in history" :key="index">{{ entry }}</li></ul>
    </ExampleSection>
    <ExampleSection title="副作用清理与防抖" description="连续输入时取消旧定时器。停止输入 600ms 后才更新预览；离开页面时也会清理。">
      <label for="watch-keyword">关键词</label><el-input id="watch-keyword" v-model="keyword" />
      <div class="demo-output" aria-live="polite">预览：{{ preview }} · 已清理 {{ cancellations }} 次</div>
      <p class="demo-muted">真实异步请求还需要取消请求并防止旧响应覆盖新响应，见“请求竞态与 Composables”。</p>
    </ExampleSection>
  </ExamplePage>
</template>
