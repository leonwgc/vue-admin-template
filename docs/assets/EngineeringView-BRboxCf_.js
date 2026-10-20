import{$ as e,At as t,C as n,Ct as r,D as i,J as a,O as o,Q as s,Y as c,Z as l,b as u,et as d,f,mt as p,nn as m,pt as h,x as g,y as _}from"./vue-vendor-2WV6Jefd.js";import{c as v,s as y}from"./element-plus-D7Zy95m4.js";import{r as b}from"./index-KdiVrdr8.js";import{t as x}from"./ExamplePage-BNsrRItr.js";import{t as S}from"./ExampleSection-CqWGuRKb.js";var C=e=>(l(`data-v-652f663e`),e=e(),c(),e),w={class:`styled-slot`},T=C(()=>u(`span`,{class:`inner`},`子组件内部`,-1)),E=b({__name:`StyledSlot`,props:{accent:{type:String,default:`#5268e8`}},setup(t){return y(e=>({"7f9fd076":t.accent})),(t,r)=>(a(),n(`div`,w,[T,e(t.$slots,`default`)]))}},[[`__scopeId`,`data-v-652f663e`]]),D=`<script setup>
defineProps({
  accent: {
    type: String,
    default: '#5268e8',
  },
})
<\/script>

<template>
  <div class="styled-slot">
    <span class="inner">子组件内部</span>
    <slot />
  </div>
</template>

<style scoped>
.styled-slot {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 15px;
  border: 1px solid v-bind(accent);
  border-radius: 8px;
}

.inner {
  color: v-bind(accent);
}

:slotted(strong) {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
`,O=e=>(l(`data-v-0000839c`),e=e(),c(),e),k=[O(()=>u(`option`,{value:`#5268e8`},`蓝色`,-1)),O(()=>u(`option`,{value:`#24a879`},`绿色`,-1))],A=O(()=>u(`strong`,{class:`parent-slot`},`父组件插槽内容`,-1)),j=O(()=>u(`label`,{for:`engineering-topic`},`学习主题`,-1)),M={class:`demo-muted`},N=b({__name:`EngineeringView`,setup(e){let c=r(`#5268e8`),l=r(`typescript`),y=[{id:`typescript`,title:`TypeScript 边界`,description:`学习代码片段：当前项目保持 JavaScript，以下代码未在项目中编译。使用类型表达 Props、Emits、模板引用、注入和组合式函数返回值。`,notes:[`Vue 3.2 的类型式 defineProps 采用本地接口或类型字面量，不照搬新版本的复杂类型能力。`,`通过 prop getter 或 toRefs 保持响应性；Vue 3.2 中不要假设 Props 解构自动保持响应式。`],code:`// 独立 .vue 示例：<script setup lang="ts">
import { inject, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

// 1. 明确组件输入与默认值
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
})

// 2. 声明事件名称与参数类型
const emit = defineEmits<{
  (event: 'change', value: number): void
}>()

// 3. 模板引用在挂载前可能为空
const input = ref<HTMLInputElement | null>(null)

// 4. 提供方和消费方从共享模块导入同一个 key
const themeKey: InjectionKey<Ref<string>> =
  Symbol('theme')

const theme = inject(themeKey, ref('light'))

// 5. 组合式函数返回响应式引用
function useCount(): { count: Ref<number> } {
  const count = ref(0)

  return { count }
}`,url:`https://vuejs.org/guide/typescript/composition-api.html`},{id:`testing`,title:`测试策略`,description:`学习代码片段：展示 Vue Test Utils / Vitest 的交互测试思路，项目未安装或执行这些工具。`,notes:[`单元测试验证纯逻辑；组件测试通过 DOM 交互检查可观察行为；端到端测试覆盖真实用户流程。`,`异步 DOM 更新等待 nextTick，Promise 链等待 flushPromises；网络请求使用受控替身，避免依赖真实网络。`],code:`// BoundaryInput.spec.js
// 需要单独配置 Vue Test Utils 和 Vitest
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import BoundaryInput from './BoundaryInput.vue'

it('向父组件提交输入与确认事件', async () => {
  const wrapper = mount(BoundaryInput, {
    props: {
      modelValue: '',
    },
    attrs: {
      'aria-label': '主题',
    },
  })

  // 输入后，子组件向父组件发出更新事件
  await wrapper.get('input').setValue('Vue')

  const updates = wrapper.emitted('update:modelValue')
  expect(updates[0]).toEqual(['Vue'])

  // 模拟父组件将更新后的值传回子组件
  await wrapper.setProps({ modelValue: 'Vue' })

  await wrapper.get('input').trigger('keydown', {
    key: 'Enter',
  })

  const confirmations = wrapper.emitted('confirm')
  expect(confirmations[0]).toEqual(['Vue'])
})`,url:`https://vuejs.org/guide/scaling-up/testing.html`},{id:`plugins`,title:`插件与应用配置`,description:`学习代码片段：用 app.use 安装插件，通过 Symbol 注入配置，避免添加隐式的全局可变状态。`,notes:[`插件接收 app 和安装参数，可注册组件、指令或提供依赖。组件内使用 inject 消费。`,`app.config.errorHandler 统一兜底；app.config.globalProperties 应谨慎使用，避免命名冲突。`],code:`// learningPlugin.js
export const learningKey = Symbol('learning')

export const learningPlugin = {
  install(app, options) {
    const config = Object.freeze({
      title: options.title,
    })

    app.provide(learningKey, config)
  },
}

// main.js
app.use(learningPlugin, {
  title: 'Vue 学习',
})

// 组件 setup
const config = inject(learningKey, {
  title: '默认标题',
})`,url:`https://vuejs.org/guide/reusability/plugins.html`},{id:`ssr`,title:`SPA / SSR / SSG`,description:`架构学习：当前站点是 SPA。这里介绍渲染方式与边界，不将现有站点改造成 SSR。`,notes:[`SPA 在浏览器生成主要界面；SSR 按请求生成 HTML；SSG 在构建时生成 HTML，适合内容较稳定的页面。`,`水合把客户端组件与服务端 HTML 关联；随机数、时区和不同初始数据可能导致不匹配。`,`SSR 不运行 mounted；window、document 和 localStorage 等浏览器 API 应推迟到客户端。服务端 store 必须按请求创建，避免跨用户共享。`],code:`import { onMounted, ref } from 'vue'

const width = ref(null)

onMounted(() => {
  width.value = window.innerWidth
})

// 服务端与客户端首屏都先使用 null。
// 组件挂载后，再读取浏览器 API。

// 每个服务端请求独立创建 app 和 Pinia，
// 避免跨用户共享状态。

// Nuxt 可集成路由、数据获取和 SSR / SSG。`,url:`https://vuejs.org/guide/scaling-up/ssr.html`}],b=_(()=>y.find(e=>e.id===l.value));return(e,r)=>{let _=d(`el-option`),C=d(`el-select`);return a(),g(x,{eyebrow:`ENGINEERING · LEARNING GUIDE`,title:`SFC 样式与工程实践`,description:`通过实际样式实验和带版本说明的代码片段，连接类型、测试、插件和渲染架构。`,concepts:[`scoped 为组件样式增加作用范围；:deep() 用于深入后代组件，:slotted() 定位传入的插槽内容。`,`CSS v-bind 将响应式值绑定到样式；CSS Modules 可通过 <style module> 和 $style 使用局部类名。`,`工程学习片段与运行中的交互示例分别标明；不为演示切换项目语言或安装新工具。`,`Vue 3.3+ 的 defineOptions、3.4+ 的 defineModel、3.5+ 的 useTemplateRef / onWatcherCleanup 不直接用于本项目。`],code:t(b).code,resources:[{label:t(b).title,url:t(b).url},{label:`SFC CSS 功能`,url:`https://vuejs.org/api/sfc-css-features.html`}]},{default:h(()=>[o(S,{title:`scoped、插槽样式与 CSS v-bind`,description:`切换颜色改变子组件内部文字和边框；插槽内容由 :slotted 添加下划线，颜色由父组件控制。`,code:t(D)},{default:h(()=>[u(`label`,null,[i(`主题颜色`),p(u(`select`,{"onUpdate:modelValue":r[0]||=e=>c.value=e},k,512),[[v,c.value]])]),o(E,{accent:c.value},{default:h(()=>[A]),_:1},8,[`accent`])]),_:1},8,[`code`]),o(S,{title:`工程知识导航`,description:`选择主题查看用途与边界；完整代码在下方宽栏展示。`},{default:h(()=>[j,o(C,{id:`engineering-topic`,modelValue:l.value,"onUpdate:modelValue":r[1]||=e=>l.value=e},{default:h(()=>[(a(),n(f,null,s(y,e=>o(_,{key:e.id,label:e.title,value:e.id},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`]),u(`h3`,null,m(t(b).title),1),u(`p`,M,m(t(b).description),1),u(`ul`,null,[(a(!0),n(f,null,s(t(b).notes,e=>(a(),n(`li`,{key:e},m(e),1))),128))])]),_:1})]),_:1},8,[`concepts`,`code`,`resources`])}}},[[`__scopeId`,`data-v-0000839c`]]);export{N as default};