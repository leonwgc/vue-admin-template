<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'

const visible = ref(true)
const items = ref([
  { id: 1, label: '响应式' },
  { id: 2, label: '组件' },
  { id: 3, label: '路由' },
])
let nextId = 4
function addItem() {
  items.value.push({ id: nextId, label: `新主题 ${nextId}` })
  nextId++
}
const code = `<script setup>
import { ref } from 'vue'
const visible = ref(true)
const items = ref([{ id: 1, label: '响应式' }, { id: 2, label: '组件' }])
let nextId = 3
function addItem() {
  items.value.push({ id: nextId, label: '新主题 ' + nextId })
  nextId++
}
<\/script>

<template>
  <button @click="visible = !visible">切换卡片</button>
  <Transition name="fade">
    <article v-if="visible">带有过渡效果的内容</article>
  </Transition>
  <button @click="addItem">添加主题</button>
  <button @click="items = [...items].reverse()">反转顺序</button>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
      <button @click="items = items.filter((entry) => entry.id !== item.id)">移除</button>
    </li>
  </TransitionGroup>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.list-enter-active, .list-leave-active, .list-move {
  transition: opacity .25s ease, transform .25s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>`

const resources = [
  { label: 'Transition', url: 'https://vuejs.org/guide/built-ins/transition.html' },
  { label: 'TransitionGroup', url: 'https://vuejs.org/guide/built-ins/transition-group.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="BUILT-IN · TRANSITION"
    title="Transition 与 TransitionGroup"
    description="对比单个节点的进入离开和列表项目的增删、重排动画。"
    :concepts="['Transition 为单个元素或组件的插入、移除提供过渡钩子。', 'TransitionGroup 用于 v-for 列表，每项必须有稳定且唯一的 key；-move 类处理位置变化。', 'Vue 在进入/离开阶段自动添加 -enter/-leave CSS 类；动画使用原生 CSS。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>卡片进入与离开</h2><p>反复切换显示状态，观察淡入、淡出和位移。</p></div><el-tag effect="plain">Transition + CSS</el-tag></div>
      <div class="playground-content">
        <el-button type="primary" @click="visible = !visible">{{ visible ? '隐藏卡片' : '显示卡片' }}</el-button>
        <div class="transition-stage">
          <Transition name="fade">
            <article v-if="visible" class="transition-card">
              <el-icon><CircleCheck /></el-icon>
              <div><strong>过渡动画已启用</strong><p>Vue 自动切换 fade-enter / fade-leave 类名。</p></div>
            </article>
          </Transition>
        </div>
      </div>
    </section>
    <ExampleSection title="列表增删与重排" description="添加、移除或反转列表，观察每项的进入、离开和移动。">
      <div class="demo-row"><el-button @click="addItem">添加主题</el-button><el-button :disabled="items.length < 2" @click="items = [...items].reverse()">反转顺序</el-button></div>
      <TransitionGroup name="list" tag="ul" class="transition-list">
        <li v-for="item in items" :key="item.id">
          <span>{{ item.label }}</span><el-button size="small" :aria-label="`移除${item.label}`" @click="items = items.filter((entry) => entry.id !== item.id)">移除</el-button>
        </li>
      </TransitionGroup>
      <el-empty v-if="!items.length" description="列表为空，可以添加主题" :image-size="55" />
    </ExampleSection>
  </ExamplePage>
</template>

<style scoped>
.transition-stage{min-height:105px}
.transition-card{display:flex;align-items:center;gap:12px;padding:16px;border:1px solid #dff1e9;border-radius:9px;background:#f3fbf7;color:#2b9a72}
.transition-card>.el-icon{font-size:22px}
.transition-card strong{font-size:14px}
.transition-card p{margin:5px 0 0;color:#788394;font-size:14px}
.fade-enter-active,.fade-leave-active{transition:opacity .25s ease,transform .25s ease}
.fade-enter-from,.fade-leave-to{opacity:0;transform:translateY(8px)}
.transition-list{display:grid;gap:8px;min-height:46px;margin:0;padding:0;list-style:none}
.transition-list li{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid #e4e9f7;border-radius:8px;background:#f7f8ff;color:#556071;font-size:14px}
.list-enter-active,.list-leave-active,.list-move{transition:opacity .25s ease,transform .25s ease}
.list-enter-from,.list-leave-to{opacity:0;transform:translateY(8px)}
@media(prefers-reduced-motion:reduce){.fade-enter-active,.fade-leave-active,.list-enter-active,.list-leave-active,.list-move{transition:none}}
</style>
