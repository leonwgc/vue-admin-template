<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const visible = ref(true)
const code = `<script setup>
import { ref } from 'vue'
const visible = ref(true)
<\/script>

<template>
  <button @click="visible = !visible">切换卡片</button>
  <Transition name="fade">
    <article v-if="visible">带有过渡效果的内容</article>
  </Transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>`

const resources = [
  { label: 'Transition', url: 'https://vuejs.org/guide/built-ins/transition.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="BUILT-IN · TRANSITION"
    title="Transition 过渡效果"
    description="用内置 Transition 包装条件渲染节点，通过约定的 CSS 类名完成进入和离开动画。"
    :concepts="['Transition 为单个元素或组件的插入、移除提供过渡钩子。', 'Vue 在进入/离开阶段自动添加 -enter/-leave CSS 类。', '动画使用原生 CSS，不需要额外依赖。']"
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
</style>
