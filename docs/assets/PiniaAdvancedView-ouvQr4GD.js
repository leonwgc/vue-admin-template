import{$ as e,C as t,D as n,E as r,S as i,Z as a,b as o,f as s,ft as c,kt as l,l as u,q as d,tn as f,x as p}from"./vue-vendor-CsbriK0s.js";import{t as m}from"./ExamplePage-k1ZS3Qm1.js";import{t as h}from"./ExampleSection-CZj6jErA.js";import{t as g}from"./learningCart-O7Y-vnK6.js";var _=`import { defineStore } from 'pinia'
import { learningApi } from '../api/learning'

export const useLearningCartStore = defineStore('learning-cart', {
  state: () => ({
    items: [],
    loading: false,
    error: '',
  }),

  getters: {
    total: (state) => state.items.reduce(
      (sum, item) => sum + item.quantity,
      0,
    ),
  },

  actions: {
    add(title) {
      const item = this.items.find((entry) => entry.title === title)
      if (item) {
        item.quantity++
      } else {
        this.items.push({ title, quantity: 1 })
      }
    },

    async loadSuggestions() {
      if (this.loading) return
      this.loading = true
      this.error = ''
      try {
        const data = await learningApi.search({ keyword: 'Vue', delay: 400 })
        data.items.forEach((title) => this.add(title))
      } catch (cause) {
        this.error = cause.message || '加载失败'
      } finally {
        this.loading = false
      }
    },
  },
})
`,v={class:`demo-row`},y={class:`demo-output`},b={__name:`PiniaAdvancedView`,setup(b){let x=g(),{items:S,total:C,loading:w,error:T}=u(x);return(u,g)=>{let b=e(`el-button`),E=e(`el-alert`),D=e(`el-empty`);return d(),p(m,{eyebrow:`STATE · PINIA ADVANCED`,title:`Pinia 进阶与状态边界`,description:`用学习清单演示 storeToRefs、异步 action、getter 和状态重置；清单仅保留在当前内存。`,concepts:[`直接解构 store 的基本值会丢失响应性，使用 storeToRefs；action 可直接从 store 调用。`,`异步 action 管理共享流程并处理重复提交和异常；页面临时输入仍由页面持有。`,`Options Store 自带 $reset；Setup Store 需要自己实现 reset。`,`跨 store 协作可在 action 中调用另一 store，避免初始化时循环读取；只持久化明确需要的数据。`],code:l(_),resources:[{label:`Pinia Actions`,url:`https://pinia.vuejs.org/core-concepts/actions.html`},{label:`storeToRefs`,url:`https://pinia.vuejs.org/core-concepts/`}]},{default:c(()=>[n(h,{title:`共享学习清单`,description:`切换页面后清单仍在；刷新或手动重置后清空。异步 action 通过学习接口读取推荐主题。`},{default:c(()=>[o(`div`,v,[n(b,{onClick:g[0]||=e=>l(x).add(`组件设计`)},{default:c(()=>[r(`添加组件设计`)]),_:1}),n(b,{loading:l(w),onClick:l(x).loadSuggestions},{default:c(()=>[r(`异步加载推荐`)]),_:1},8,[`loading`,`onClick`]),n(b,{disabled:l(w),onClick:g[1]||=e=>l(x).$reset()},{default:c(()=>[r(`重置 Store`)]),_:1},8,[`disabled`])]),o(`div`,y,`storeToRefs → total：`+f(l(C)),1),l(T)?(d(),p(E,{key:0,title:l(T),type:`error`},null,8,[`title`])):i(``,!0),o(`ul`,null,[(d(!0),t(s,null,a(l(S),e=>(d(),t(`li`,{key:e.title},f(e.title)+` × `+f(e.quantity),1))),128))]),l(S).length?i(``,!0):(d(),p(D,{key:1,description:`清单为空`,"image-size":50}))]),_:1})]),_:1},8,[`code`,`resources`])}}};export{b as default};