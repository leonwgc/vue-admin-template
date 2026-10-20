import{At as e,C as t,D as n,J as r,O as i,Q as a,S as o,b as s,c,et as l,f as u,l as d,nn as f,pt as p,x as m}from"./vue-vendor-2WV6Jefd.js";import{t as h}from"./ExamplePage-BNsrRItr.js";import{t as g}from"./ExampleSection-CqWGuRKb.js";import{t as _}from"./learning-D16xwkKs.js";var v=c(`learning-cart`,{state:()=>({items:[],loading:!1,error:``}),getters:{total:e=>e.items.reduce((e,t)=>e+t.quantity,0)},actions:{add(e){let t=this.items.find(t=>t.title===e);t?t.quantity++:this.items.push({title:e,quantity:1})},async loadSuggestions(){if(!this.loading){this.loading=!0,this.error=``;try{(await _.search({keyword:`Vue`,delay:400})).items.forEach(e=>this.add(e))}catch(e){this.error=e.message||`加载失败`}finally{this.loading=!1}}}}}),y=`import { defineStore } from 'pinia'
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
`,b={class:`demo-row`},x={class:`demo-output`},S={__name:`PiniaAdvancedView`,setup(c){let _=v(),{items:S,total:C,loading:w,error:T}=d(_);return(c,d)=>{let v=l(`el-button`),E=l(`el-alert`),D=l(`el-empty`);return r(),m(h,{eyebrow:`STATE · PINIA ADVANCED`,title:`Pinia 进阶与状态边界`,description:`用学习清单演示 storeToRefs、异步 action、getter 和状态重置；清单仅保留在当前内存。`,concepts:[`直接解构 store 的基本值会丢失响应性，使用 storeToRefs；action 可直接从 store 调用。`,`异步 action 管理共享流程并处理重复提交和异常；页面临时输入仍由页面持有。`,`Options Store 自带 $reset；Setup Store 需要自己实现 reset。`,`跨 store 协作可在 action 中调用另一 store，避免初始化时循环读取；只持久化明确需要的数据。`],code:e(y),resources:[{label:`Pinia Actions`,url:`https://pinia.vuejs.org/core-concepts/actions.html`},{label:`storeToRefs`,url:`https://pinia.vuejs.org/core-concepts/`}]},{default:p(()=>[i(g,{title:`共享学习清单`,description:`切换页面后清单仍在；刷新或手动重置后清空。异步 action 通过学习接口读取推荐主题。`},{default:p(()=>[s(`div`,b,[i(v,{onClick:d[0]||=t=>e(_).add(`组件设计`)},{default:p(()=>[n(`添加组件设计`)]),_:1}),i(v,{loading:e(w),onClick:e(_).loadSuggestions},{default:p(()=>[n(`异步加载推荐`)]),_:1},8,[`loading`,`onClick`]),i(v,{disabled:e(w),onClick:d[1]||=t=>e(_).$reset()},{default:p(()=>[n(`重置 Store`)]),_:1},8,[`disabled`])]),s(`div`,x,`storeToRefs → total：`+f(e(C)),1),e(T)?(r(),m(E,{key:0,title:e(T),type:`error`},null,8,[`title`])):o(``,!0),s(`ul`,null,[(r(!0),t(u,null,a(e(S),e=>(r(),t(`li`,{key:e.title},f(e.title)+` × `+f(e.quantity),1))),128))]),e(S).length?o(``,!0):(r(),m(D,{key:1,description:`清单为空`,"image-size":50}))]),_:1})]),_:1},8,[`code`,`resources`])}}};export{S as default};