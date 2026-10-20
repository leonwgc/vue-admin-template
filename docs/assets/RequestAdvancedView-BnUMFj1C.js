import{At as e,C as t,Ct as n,D as r,J as i,O as a,Q as o,S as s,b as c,bt as l,et as u,f as d,nn as f,pt as p,ut as m,x as h}from"./vue-vendor-2WV6Jefd.js";import{t as g}from"./ExamplePage-BNsrRItr.js";import{t as _}from"./ExampleSection-CqWGuRKb.js";import{t as v}from"./learning-D16xwkKs.js";function y(t){let r=n({items:[],total:0}),i=n(`idle`),a=n(``),o=n(0),s,c=0,u=()=>typeof t==`function`?t():e(t);function d(){c++,s?.abort(),i.value=`cancelled`}return m([u,o],async([e],t,n)=>{let o=++c;s=new AbortController;let l=s;n(()=>l.abort()),i.value=`loading`,a.value=``,r.value={items:[],total:0};try{let t=await v.search(e,l.signal);if(o!==c)return;r.value=t,i.value=t.total?`success`:`empty`}catch(e){if(o!==c||l.signal.aborted)return;a.value=e.response?.data?.message||e.message||`请求失败`,i.value=`error`}},{immediate:!0}),l(()=>{c++,s?.abort()}),{result:r,status:i,error:a,cancel:d,reload:()=>o.value++}}var b=`import { onScopeDispose, ref, unref, watch } from 'vue'
import { learningApi } from '../api/learning'

// 每次调用创建独立状态；支持 ref 或 getter，兼容 Vue 3.2。
export function useTopicSearch(options) {
  const result = ref({ items: [], total: 0 })
  const status = ref('idle')
  const error = ref('')
  const revision = ref(0)
  let controller
  let requestId = 0
  const readOptions = () => (
    typeof options === 'function' ? options() : unref(options)
  )

  function cancel() {
    requestId++
    controller?.abort()
    status.value = 'cancelled'
  }

  watch(
    [readOptions, revision],
    async ([params], oldValue, onCleanup) => {
      const id = ++requestId
      controller = new AbortController()
      const current = controller
      onCleanup(() => current.abort())
      status.value = 'loading'
      error.value = ''
      result.value = { items: [], total: 0 }
      try {
        const data = await learningApi.search(params, current.signal)
        if (id !== requestId) return
        result.value = data
        status.value = data.total ? 'success' : 'empty'
      } catch (cause) {
        if (id !== requestId || current.signal.aborted) return
        error.value = cause.response?.data?.message || cause.message || '请求失败'
        status.value = 'error'
      }
    },
    { immediate: true },
  )

  onScopeDispose(() => {
    requestId++
    controller?.abort()
  })

  return {
    result,
    status,
    error,
    cancel,
    reload: () => revision.value++,
  }
}
`,x=c(`label`,{for:`topic-keyword`},`主题关键词`,-1),S={class:`demo-row`},C={class:`demo-output`,role:`status`},w={key:1},T={key:3},E={key:4},D={class:`demo-row`},O={__name:`RequestAdvancedView`,setup(l){let v=n(``),O=n(500),k=n(!1),A=n(1);m(v,()=>{A.value=1},{flush:`sync`});let{result:j,status:M,error:N,cancel:P,reload:F}=y(()=>({keyword:v.value,delay:O.value,fail:k.value,page:A.value}));function I(){k.value=!1,v.value=`Vue`,O.value=1600,A.value=1}function L(){k.value=!1,v.value=`Pinia`,O.value=200,A.value=1}return(n,l)=>{let m=u(`el-input`),y=u(`el-checkbox`),R=u(`el-button`),z=u(`el-alert`),B=u(`el-empty`),V=u(`el-pagination`);return i(),h(g,{eyebrow:`PRACTICE · ASYNC COMPOSABLES`,title:`请求竞态与 Composables`,description:`使用独立的本地只读接口，练习异步状态、取消、分页和可复用组合式函数。`,concepts:[`输入是 ref 或 getter，返回普通对象中的 refs，解构后仍保持响应式；每次调用拥有独立状态。`,`侦听输入变化发起请求，onCleanup 取消旧请求，onScopeDispose 清理离开页面后的资源。`,`AbortController 节省资源，递增请求编号进一步防止过期响应覆盖最新结果。`,`分别呈现 loading、success、empty、error、cancelled；派生状态不必放入全局 store。`],code:e(b),resources:[{label:`Composables 设计`,url:`https://vuejs.org/guide/reusability/composables.html`},{label:`Axios 取消`,url:`https://axios-http.com/docs/cancellation`}]},{default:p(()=>[a(_,{title:`可取消的搜索与分页`,description:`搜索 Vue、Pinia，或输入不存在的词观察空状态。勾选失败后可取消勾选并重试。`},{default:p(()=>[x,a(m,{id:`topic-keyword`,modelValue:v.value,"onUpdate:modelValue":l[0]||=e=>v.value=e,clearable:``},null,8,[`modelValue`]),a(y,{modelValue:k.value,"onUpdate:modelValue":l[1]||=e=>k.value=e},{default:p(()=>[r(`模拟服务失败`)]),_:1},8,[`modelValue`]),c(`div`,S,[a(R,{onClick:e(F)},{default:p(()=>[r(`重新请求`)]),_:1},8,[`onClick`]),a(R,{disabled:e(M)!==`loading`,onClick:e(P)},{default:p(()=>[r(`取消请求`)]),_:1},8,[`disabled`,`onClick`])]),c(`div`,C,`当前状态：`+f(e(M))+` · 延迟 `+f(O.value)+`ms`,1),e(M)===`error`?(i(),h(z,{key:0,title:e(N),type:`error`,closable:!1},null,8,[`title`])):e(M)===`loading`?(i(),t(`p`,w,`正在加载…`)):e(M)===`empty`?(i(),h(B,{key:2,description:`没有匹配主题，请更换关键词`,"image-size":50})):e(M)===`cancelled`?(i(),t(`p`,T,`请求已取消，可重新请求。`)):(i(),t(`ul`,E,[(i(!0),t(d,null,o(e(j).items,e=>(i(),t(`li`,{key:e},f(e),1))),128))])),e(M)===`success`?(i(),h(V,{key:5,"current-page":A.value,"onUpdate:currentPage":l[2]||=e=>A.value=e,"page-size":3,total:e(j).total,layout:`prev, pager, next`},null,8,[`current-page`,`total`])):s(``,!0)]),_:1}),a(_,{title:`复现快慢响应竞争`,description:`先发起慢请求，在 1.6 秒内再发起快请求。最终应只显示 Pinia，不会被旧 Vue 请求覆盖。`},{default:p(()=>[c(`div`,D,[a(R,{onClick:I},{default:p(()=>[r(`① 慢请求：Vue`)]),_:1}),a(R,{onClick:L},{default:p(()=>[r(`② 快请求：Pinia`)]),_:1})])]),_:1})]),_:1},8,[`code`,`resources`])}}};export{O as default};