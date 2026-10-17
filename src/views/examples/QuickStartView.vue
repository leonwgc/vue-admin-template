<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const name = ref('Vue 3')
const count = ref(0)
const code = `<script setup>
import { ref } from 'vue'

const name = ref('Vue 3')
const count = ref(0)
<\/script>

<template>
  <h2>你好，{{ name }}</h2>
  <button @click="count++">点击次数：{{ count }}</button>
</template>

<style scoped>
button { color: #5268e8; }
</style>`

const resources = [
  { label: 'Vue Quick Start', url: 'https://vuejs.org/guide/quick-start.html' },
  { label: 'Single-File Components', url: 'https://vuejs.org/guide/scaling-up/sfc.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="GETTING STARTED · SINGLE-FILE COMPONENTS"
    title="快速开始与 SFC"
    description="从官方 create-vue 脚手架到单文件组件结构，认识一个 Vue 页面从哪里开始。"
    :concepts="['官方推荐使用 npm create vue@latest 创建 Vite 项目，再按向导选择 Router、Pinia 等功能。', '每个 .vue 单文件组件可以组合 template、script setup 和 scoped style。', '新项目的 npm run dev 命令由脚手架生成；本仓库沿用 package.json 中的 npm run start。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title">
        <div><h2>创建项目</h2><p>命令用于新项目说明；此演示不会在当前仓库运行脚手架或更改依赖。</p></div>
        <el-tag effect="plain">官方流程</el-tag>
      </div>
      <pre class="demo-code">npm create vue@latest
cd my-vue-app
npm install
npm run dev</pre>
      <div class="demo-divider"></div>
      <div class="playground-title"><div><h2>体验一个 SFC</h2><p>编辑名称或点击按钮，观察 template 与 script setup 的响应关系。</p></div></div>
      <div class="playground-content">
        <el-input v-model="name" aria-label="问候名称" />
        <div class="demo-output"><strong>Template：</strong>你好，{{ name }}</div>
        <el-button type="primary" @click="count += 1">点击次数：{{ count }}</el-button>
        <div class="sfc-parts">
          <span><b>template</b>描述界面</span>
          <span><b>script setup</b>声明响应式状态</span>
          <span><b>style scoped</b>编写组件样式</span>
        </div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.sfc-parts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.sfc-parts span{padding:10px;border:1px solid #edf0f5;border-radius:8px;color:#788394;font-size:12px}
.sfc-parts b{display:block;margin-bottom:4px;color:#5268e8;font-size:13px}
@media(max-width:600px){.sfc-parts{grid-template-columns:1fr}}
</style>
