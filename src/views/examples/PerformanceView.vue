<script setup>
import { computed, defineComponent, h, nextTick, ref, shallowRef } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
const rows = shallowRef(Array.from({ length: 10000 }, (_, id) => ({ id, label: `学习条目 ${id + 1}` })))
const scrollTop = ref(0)
const rowHeight = 36
const start = computed(() => Math.max(0, Math.floor(scrollTop.value / rowHeight) - 2))
const visible = computed(() => rows.value.slice(start.value, start.value + 10))
const count = ref(0)
const doubled = computed(() => count.value * 2)
const output = ref(null)
const log = ref([])
const RenderBadge = defineComponent({ props: { value: Number }, setup: (props) => () => h('strong', { class: 'render-badge' }, `h() 渲染结果：${props.value}`) })
async function batch() {
  const oldDom = output.value.textContent
  count.value++; count.value++; count.value++
  const syncDom = output.value.textContent
  await nextTick()
  log.value = [`修改前 DOM：${oldDom}`, `同步执行 3 次 +1，state = ${count.value}，同步 DOM：${syncDom}`, `nextTick 后 DOM：${output.value.textContent}`]
}
const code = `const rows = shallowRef(largeImmutableArray)
const start = computed(() => Math.max(0, Math.floor(scrollTop.value / 36) - 2))
const visible = computed(() => rows.value.slice(start.value, start.value + 10))
// 保持完整滚动高度，只渲染可见窗口和少量缓冲行。
// 浅层数组使用不可变更新：rows.value = [...rows.value, newItem]

const RenderBadge = defineComponent({
  props: { value: Number },
  setup: (props) => () => h('strong', {}, props.value),
})
// h() 返回虚拟节点；JSX 是另一种表达方式，需要额外编译配置。`
</script>
<template>
  <ExamplePage eyebrow="RENDERING · PERFORMANCE" title="渲染原理与性能" description="通过真实批量更新和固定行高的虚拟窗口，理解响应式、渲染函数与 DOM 成本。"
    :concepts="['读取响应式数据时收集依赖，写入时触发订阅者；组件更新会被调度并批处理。', '模板编译成渲染函数，生成虚拟节点，再与上次结果对比更新 DOM；编译器会标记可优化部分。', '先测量再优化：路由懒加载降低首屏成本，稳定 props 减少无关更新，虚拟列表控制 DOM 数量。', '大数据可使用 shallowRef 与不可变更新；v-once 适合静态内容，v-memo 需完整声明影响输出的依赖。']"
    :code="code" :resources="[{ label: '渲染机制', url: 'https://vuejs.org/guide/extras/rendering-mechanism.html' }, { label: '性能指南', url: 'https://vuejs.org/guide/best-practices/performance.html' }, { label: '渲染函数', url: 'https://vuejs.org/guide/extras/render-function.html' }]">
    <ExampleSection title="状态 → 派生值 → 虚拟节点 → DOM" description="一次点击同步修改三次状态，DOM 在调度刷新后反映最终结果。日志显示实际读到的值，不是性能基准。">
      <el-button @click="batch">同步执行三次 +1</el-button><span ref="output">{{ count }}</span><RenderBadge :value="doubled" /><ol><li v-for="line in log" :key="line">{{ line }}</li></ol>
    </ExampleSection>
    <ExampleSection title="10,000 条数据的虚拟窗口" description="滚动列表时始终只创建约 10 行。本例要求固定行高；真实业务还需考虑动态高度、键盘导航和读屏体验。">
      <div class="demo-output">数据：{{ rows.length }} 条 · DOM 行：{{ visible.length }} · 起始索引：{{ start }}</div>
      <div class="virtual-viewport" tabindex="0" role="region" aria-label="固定行高虚拟列表，可使用方向键滚动" @scroll="scrollTop = $event.target.scrollTop">
        <div :style="{ height: `${rows.length * rowHeight}px`, position: 'relative' }"><div :style="{ transform: `translateY(${start * rowHeight}px)` }"><div v-for="row in visible" :key="row.id" class="virtual-row">{{ row.label }}</div></div></div>
      </div>
    </ExampleSection>
  </ExamplePage>
</template>
<style scoped>
.virtual-viewport{height:216px;overflow:auto;border:1px solid #edf0f5;border-radius:8px}.virtual-viewport:focus-visible{outline:2px solid #5268e8}.virtual-row{height:36px;padding:8px 12px;border-bottom:1px solid #edf0f5;color:#687386;font-size:14px}.render-badge{color:#5268e8}li{line-height:1.7;color:#687386}
</style>
