import{$ as e,C as t,D as n,E as r,J as i,St as a,X as o,b as s,ft as c,kt as l,q as u,tn as d,x as f}from"./vue-vendor-CsbriK0s.js";import{n as p}from"./index-B_hZ1C-r.js";import{t as m}from"./ExamplePage-k1ZS3Qm1.js";import{t as h}from"./ExampleSection-CZj6jErA.js";var g={class:`model-field`},_=p({__name:`ModelTextInput`,props:{modelValue:{type:String,default:``},label:{type:String,default:`子组件输入`}},emits:[`update:modelValue`],setup(r,{emit:i}){return(a,o)=>{let c=e(`el-input`);return u(),t(`label`,g,[s(`span`,null,d(r.label),1),n(c,{"model-value":r.modelValue,"onUpdate:modelValue":o[0]||=e=>i(`update:modelValue`,e)},null,8,[`model-value`])])}}},[[`__scopeId`,`data-v-dbb084ca`]]),v=e=>(o(`data-v-7316de8b`),e=e(),i(),e),y={class:`name-fields`},b=v(()=>s(`label`,{for:`model-first-name`},`名（首字母大写）`,-1)),x=[`value`],S=v(()=>s(`label`,{for:`model-last-name`},`姓（全部大写）`,-1)),C=[`value`],w=p({__name:`NamedModelInput`,props:{firstName:{type:String,default:``},lastName:{type:String,default:``},firstNameModifiers:{type:Object,default:()=>({})},lastNameModifiers:{type:Object,default:()=>({})}},emits:[`update:firstName`,`update:lastName`],setup(e,{emit:n}){let r=e;function i(e){let t=e.target.value;n(`update:firstName`,r.firstNameModifiers.capitalize?t.charAt(0).toUpperCase()+t.slice(1):t)}function a(e){let t=e.target.value;n(`update:lastName`,r.lastNameModifiers.uppercase?t.toUpperCase():t)}return(n,r)=>(u(),t(`div`,y,[b,s(`input`,{id:`model-first-name`,value:e.firstName,onInput:i},null,40,x),S,s(`input`,{id:`model-last-name`,value:e.lastName,onInput:a},null,40,C)]))}},[[`__scopeId`,`data-v-7316de8b`]]),T=`<script setup>
const props = defineProps({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  firstNameModifiers: { type: Object, default: () => ({}) },
  lastNameModifiers: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:firstName', 'update:lastName'])

function updateFirstName(event) {
  const value = event.target.value
  emit('update:firstName', props.firstNameModifiers.capitalize
    ? value.charAt(0).toUpperCase() + value.slice(1)
    : value)
}

function updateLastName(event) {
  const value = event.target.value
  emit('update:lastName', props.lastNameModifiers.uppercase ? value.toUpperCase() : value)
}
<\/script>

<template>
  <div class="name-fields">
    <label for="model-first-name">名（首字母大写）</label>
    <input id="model-first-name" :value="firstName" @input="updateFirstName" />
    <label for="model-last-name">姓（全部大写）</label>
    <input id="model-last-name" :value="lastName" @input="updateLastName" />
  </div>
</template>

<style scoped>
.name-fields{display:grid;grid-template-columns:max-content minmax(0,280px);align-items:center;gap:9px}
.name-fields label{color:#697587;font-size:14px}
.name-fields input{min-width:0;padding:8px 10px;border:1px solid #dcdfe6;border-radius:6px;font:inherit}
.name-fields input:focus-visible{outline:2px solid #5268e8;outline-offset:2px}
@media(max-width:520px){.name-fields{grid-template-columns:1fr}}
</style>
`,E={class:`content-card playground-card`},D={class:`playground-title`},O=s(`div`,null,[s(`h2`,null,`自定义输入组件`),s(`p`,null,`编辑子组件输入框，观察父组件的 message 同步更新。`)],-1),k={class:`playground-content`},A={class:`demo-output`},j=s(`strong`,null,`父组件状态：`,-1),M={class:`demo-output`},N={__name:`ComponentVModelView`,setup(t){let i=a(`父组件的初始值`),o=a(`Ada`),p=a(`Lovelace`),g=[{label:`组件 v-model`,url:`https://vuejs.org/guide/components/v-model.html`},{label:`组件事件`,url:`https://vuejs.org/guide/components/events.html`}];return(t,a)=>{let v=e(`el-tag`),y=e(`el-button`);return u(),f(m,{eyebrow:`COMPONENTS · CUSTOM V-MODEL`,title:`组件 v-model`,description:`用 modelValue prop 和 update:modelValue 事件实现父子组件双向同步，兼容当前 Vue 3.2。`,concepts:[`默认组件 v-model 对应 modelValue 属性和 update:modelValue 事件。`,`带参数的 v-model:first-name 对应 firstName 属性和 update:firstName 事件；同一组件可声明多个模型。`,`修饰符会通过 firstNameModifiers 等属性传入，子组件决定如何转换输入；此写法兼容 Vue 3.2。`,`子组件通过事件提出更新，父组件仍拥有状态；defineModel 是 Vue 3.4+ 提供的宏。`],code:`<!-- ModelTextInput.vue -->
<script setup>
defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue'])
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- ParentView.vue -->
<script setup>
import { ref } from 'vue'
import ModelTextInput from './ModelTextInput.vue'
const message = ref('初始内容')
<\/script>

<template>
  <ModelTextInput v-model="message" />
  <p>父组件状态：{{ message }}</p>
</template>`,resources:g},{default:c(()=>[s(`section`,E,[s(`div`,D,[O,n(v,{effect:`plain`},{default:c(()=>[r(`modelValue ↔ update:modelValue`)]),_:1})]),s(`div`,k,[n(_,{modelValue:i.value,"onUpdate:modelValue":a[0]||=e=>i.value=e,label:`子组件（v-model）`},null,8,[`modelValue`]),s(`div`,A,[j,r(d(i.value||`（空字符串）`),1)]),n(y,{onClick:a[1]||=e=>i.value=``},{default:c(()=>[r(`清空父组件状态`)]),_:1})])]),n(h,{title:`多个命名 v-model 与自定义修饰符`,description:`输入英文姓名：名的首字母转大写，姓全部转大写。两个值都由父组件持有。`,code:l(T)},{default:c(()=>[n(w,{"first-name":o.value,"onUpdate:firstName":a[2]||=e=>o.value=e,"first-nameModifiers":{capitalize:!0},"last-name":p.value,"onUpdate:lastName":a[3]||=e=>p.value=e,"last-nameModifiers":{uppercase:!0}},null,8,[`first-name`,`last-name`]),s(`div`,M,`父组件状态：`+d(o.value||`（空）`)+` `+d(p.value||`（空）`),1)]),_:1},8,[`code`])]),_:1},8,[`concepts`])}}};export{N as default};