<script setup>
import { ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'

const parentClicks = ref(0)
const childClicks = ref(0)
const submittedText = ref('')
const draft = ref('')
const lastKey = ref('尚未按下 Enter')

function submitForm() {
  submittedText.value = draft.value.trim() || '（空内容）'
}

function handleEnter(event) {
  lastKey.value = `Enter：${event.target.value || '（空内容）'}`
}

const code = `<script setup>
import { ref } from 'vue'

const parentClicks = ref(0)
const childClicks = ref(0)
const submitted = ref('')

function submit(event) {
  submitted.value = new FormData(event.target).get('message') || ''
}
<\/script>

<template>
  <section @click="parentClicks++">
    <button @click.stop="childClicks++">只增加子级</button>
  </section>
  <form @submit.prevent="submit">
    <input name="message" @keyup.enter="submit" />
    <button type="submit">提交</button>
  </form>
  <p>父级 {{ parentClicks }} · 子级 {{ childClicks }}</p>
  <p>提交内容：{{ submitted }}</p>
</template>`

const resources = [
  { label: '事件处理', url: 'https://vuejs.org/guide/essentials/event-handling.html' },
  { label: '表单输入绑定', url: 'https://vuejs.org/guide/essentials/forms.html' },
]
</script>

<template>
  <ExamplePage
    eyebrow="ESSENTIALS · EVENT HANDLING"
    title="事件处理与修饰符"
    description="体验事件参数、冒泡控制、表单默认行为和键盘修饰符。"
    :concepts="['v-on（@）绑定事件处理器，可在表达式或方法中处理事件。', '.stop 阻止事件继续冒泡，.prevent 阻止浏览器默认动作。', '键盘修饰符（如 .enter）可将处理逻辑限制在特定按键。']"
    :code="code"
    :resources="resources"
  >
    <section class="content-card playground-card">
      <div class="playground-title"><div><h2>事件修饰符实验</h2><p>分别点击外层区域和内部按钮，试试表单提交及 Enter 键。</p></div><el-tag effect="plain">@click · .stop · .prevent</el-tag></div>
      <div class="playground-content">
        <div class="click-parent" @click="parentClicks += 1">
          <span>父区域点击 {{ parentClicks }} 次</span>
          <el-button type="primary" @click.stop="childClicks += 1">.stop 子按钮 {{ childClicks }}</el-button>
        </div>
        <el-form class="event-form" @submit.prevent="submitForm">
          <label class="demo-label" for="event-message">输入内容后按 Enter 或点击提交</label>
          <div class="demo-row">
            <el-input id="event-message" v-model="draft" aria-label="事件演示输入" @keyup.enter="handleEnter" />
            <el-button native-type="submit" type="primary">.prevent 提交</el-button>
          </div>
        </el-form>
        <div class="demo-output">上次键盘事件：{{ lastKey }}<br />表单结果：{{ submittedText || '尚未提交' }}</div>
      </div>
    </section>
  </ExamplePage>
</template>

<style scoped>
.click-parent{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px;border:1px dashed #cfd6f7;border-radius:9px;background:#fafaff;color:#626f83;font-size:14px}
.event-form{display:grid;gap:5px}
.event-form :deep(.el-input){max-width:350px}
@media(max-width:560px){.click-parent{align-items:flex-start;flex-direction:column}}
</style>
