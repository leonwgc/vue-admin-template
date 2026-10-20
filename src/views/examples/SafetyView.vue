<script setup>
import { nextTick, ref } from 'vue'
import ExamplePage from '../../components/ExamplePage.vue'
import ExampleSection from '../../components/ExampleSection.vue'
import LessonBoundary from '../../components/examples/LessonBoundary.vue'
import FragileLesson from '../../components/examples/FragileLesson.vue'
import boundarySource from '../../components/examples/LessonBoundary.vue?raw'
const text = ref('<strong>用户输入按文本显示</strong>')
const dialog = ref(null)
const trigger = ref(null)
async function openDialog() { await nextTick(); dialog.value.showModal() }
function closeDialog() { dialog.value.close() }
function restoreFocus() { trigger.value?.focus() }
const code = `<Teleport to="body">
  <dialog ref="dialog" aria-labelledby="dialog-title" @close="restoreFocus">
    <h2 id="dialog-title">示例弹窗</h2>
    <button autofocus @click="dialog.close()">关闭</button>
  </dialog>
</Teleport>
// dialog.showModal() 提供模态交互和 Escape 关闭。
// Vue 插值会转义文本；不要将未经可信清洗的输入交给 v-html。
// 全局兜底可使用 app.config.errorHandler；不要记录敏感数据。`
</script>
<template>
  <ExamplePage eyebrow="PRACTICE · SAFETY" title="错误处理、安全与可访问性" description="演示局部错误恢复、安全文本输出与 Teleport 弹窗的键盘交互。"
    :concepts="['onErrorCaptured 处理后代组件错误，返回 false 可阻止继续上报；边界自身的错误不能由自己捕获。', '异步任务仍需 try/catch；全局 errorHandler 用于最终兜底和经过脱敏的上报。', '不把用户输入编译为模板；HTML 插值使用文本转义，v-html 仅接收可信且经过清洗的内容。', 'Teleport 改变 DOM 位置，不改变组件关系；模态弹窗需焦点管理、可访问名称和 Escape 行为。']"
    :code="code" :resources="[{ label: '安全', url: 'https://vuejs.org/guide/best-practices/security.html' }, { label: 'Teleport', url: 'https://vuejs.org/guide/built-ins/teleport.html' }, { label: '可访问性', url: 'https://vuejs.org/guide/best-practices/accessibility.html' }]">
    <ExampleSection title="局部错误边界" description="子组件报错时，页面其他内容继续工作；重新挂载后可以再次操作。" :code="boundarySource"><LessonBoundary><FragileLesson /></LessonBoundary></ExampleSection>
    <ExampleSection title="用户输入按文本渲染"><label for="safe-text">模拟用户内容</label><el-input id="safe-text" v-model="text" /><div class="demo-output">{{ text }}</div></ExampleSection>
    <ExampleSection title="Teleport 与模态焦点" description="打开后按 Tab 切换焦点，按 Escape 关闭；关闭后焦点回到触发按钮。">
      <button ref="trigger" class="dialog-button" @click="openDialog">打开传送到 body 的弹窗</button>
      <Teleport to="body"><dialog ref="dialog" class="lesson-dialog" aria-labelledby="lesson-dialog-title" @close="restoreFocus"><h2 id="lesson-dialog-title">Teleport 学习弹窗</h2><p>组件仍属于当前页面，DOM 位于 body。原生模态 dialog 管理焦点范围。</p><label>练习输入<input aria-label="弹窗练习输入" /></label><button autofocus class="dialog-button" @click="closeDialog">关闭弹窗</button></dialog></Teleport>
    </ExampleSection>
  </ExamplePage>
</template>
<style scoped>
.dialog-button{padding:9px 12px;border:1px solid #6879e8;border-radius:7px;color:#5268e8;background:#fff;cursor:pointer}.dialog-button:focus-visible{outline:2px solid #5268e8;outline-offset:3px}.lesson-dialog{max-width:min(440px,90vw);padding:24px;border:1px solid #edf0f5;border-radius:12px;color:#556071}.lesson-dialog::backdrop{background:#20273588}.lesson-dialog h2{font-size:18px}.lesson-dialog p{line-height:1.7}.lesson-dialog label{display:grid;gap:8px;margin-bottom:18px}
</style>
