import{At as e,C as t,Ct as n,D as r,J as i,L as a,O as o,b as s,et as c,nn as l,pt as u,x as d}from"./vue-vendor-2WV6Jefd.js";import{u as f}from"./element-plus-D7Zy95m4.js";import{r as p}from"./index-KdiVrdr8.js";import{t as m}from"./ExamplePage-BNsrRItr.js";import{t as h}from"./ExampleSection-CqWGuRKb.js";var g={class:`boundary-input`},_=[`value`],v=p(Object.assign({inheritAttrs:!1},{__name:`BoundaryInput`,props:{modelValue:{type:String,default:``}},emits:[`update:modelValue`,`confirm`],setup(e,{expose:r,emit:o}){let c=n(null);function l(){c.value?.focus()}return r({focus:l}),(n,r)=>(i(),t(`div`,g,[s(`input`,a({ref_key:`input`,ref:c},n.$attrs,{value:e.modelValue,onInput:r[0]||=e=>o(`update:modelValue`,e.target.value),onKeydown:r[1]||=f(t=>o(`confirm`,e.modelValue),[`enter`])}),null,16,_)]))}}),[[`__scopeId`,`data-v-06cbc167`]]),y=`<script setup>
import { ref } from 'vue'

// Vue 3.2 使用普通 script 声明 inheritAttrs。
// defineOptions 需要 Vue 3.3+。
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'confirm'])
const input = ref(null)

function focus() {
  input.value?.focus()
}

defineExpose({ focus })
<\/script>

<script>
export default {
  inheritAttrs: false,
}
<\/script>

<template>
  <div class="boundary-input">
    <input
      ref="input"
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keydown.enter="emit('confirm', modelValue)"
    />
  </div>
</template>

<style scoped>
.boundary-input input {
  box-sizing: border-box;
  width: 100%;
  padding: 9px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  font: inherit;
}

.boundary-input input:focus-visible {
  outline: 2px solid #6879e8;
  outline-offset: 2px;
}
</style>
`,b={class:`demo-output`},x={__name:`ComponentAdvancedView`,setup(t){let a=n(`Vue 3`),f=n(`尚未确认`),p=n(null);return(t,n)=>{let g=c(`el-button`);return i(),d(m,{eyebrow:`COMPONENTS · BOUNDARIES`,title:`组件接口与属性透传`,description:`封装输入组件，明确 Props、Emits、透传属性和命令式公开方法的边界。`,concepts:[`Props 是只读输入，修改通过声明的事件交给父组件；对象 prop 的嵌套属性也应避免由子组件随意修改。`,`已声明的 prop 和事件不会留在 $attrs；其余属性和监听器可以显式绑定到内部输入框。`,`inheritAttrs: false 关闭根节点自动继承，避免把输入属性绑定到包装 div。`,`script setup 默认关闭组件实例；defineExpose 只公开必要方法，常规数据交互仍使用 Props / Emits。`],code:e(y),resources:[{label:`透传属性`,url:`https://vuejs.org/guide/components/attrs.html`},{label:`defineExpose`,url:`https://vuejs.org/api/sfc-script-setup.html#defineexpose`}]},{default:u(()=>[o(h,{title:`显式转发输入属性与事件`,description:`maxlength、placeholder 和 aria-label 通过 $attrs 到达 input；按 Enter 触发声明的 confirm 事件。`,code:`<BoundaryInput ref='field' v-model='text' maxlength='20' aria-label='主题' @confirm='confirmed = $event' />
<button @click='field?.focus()'>调用公开的 focus</button>`},{default:u(()=>[o(v,{ref_key:`field`,ref:p,modelValue:a.value,"onUpdate:modelValue":n[0]||=e=>a.value=e,maxlength:`20`,placeholder:`输入主题，按 Enter 确认`,"aria-label":`组件接口主题`,onConfirm:n[1]||=e=>f.value=e},null,8,[`modelValue`]),o(g,{onClick:n[2]||=e=>p.value?.focus()},{default:u(()=>[r(`调用子组件 focus()`)]),_:1}),s(`div`,b,`父组件：`+l(a.value)+` · 最后确认：`+l(f.value),1)]),_:1},8,[`code`])]),_:1},8,[`code`,`resources`])}}};export{x as default};