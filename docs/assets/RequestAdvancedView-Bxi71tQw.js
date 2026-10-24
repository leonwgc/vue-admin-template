import{$ as e,C as t,D as n,E as r,S as i,St as a,Z as o,b as s,f as c,ft as l,kt as u,lt as d,q as f,tn as p,x as m}from"./vue-vendor-CsbriK0s.js";import{t as h}from"./ExamplePage-k1ZS3Qm1.js";import{t as g}from"./ExampleSection-CZj6jErA.js";import{t as _}from"./useTopicSearch-wB81sJLI.js";var v=`import { onScopeDispose, ref, unref, watch } from 'vue'
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
`,y=s(`label`,{for:`topic-keyword`},`主题关键词`,-1),b={class:`demo-row`},x={class:`demo-output`,role:`status`},S={key:1},C={key:3},w={key:4},T={class:`demo-row`},E={__name:`RequestAdvancedView`,setup(E){let D=a(``),O=a(500),k=a(!1),A=a(1);d(D,()=>{A.value=1},{flush:`sync`});let{result:j,status:M,error:N,cancel:P,reload:F}=_(()=>({keyword:D.value,delay:O.value,fail:k.value,page:A.value}));function I(){k.value=!1,D.value=`Vue`,O.value=1600,A.value=1}function L(){k.value=!1,D.value=`Pinia`,O.value=200,A.value=1}return(a,d)=>{let _=e(`el-input`),E=e(`el-checkbox`),R=e(`el-button`),z=e(`el-alert`),B=e(`el-empty`),V=e(`el-pagination`);return f(),m(h,{eyebrow:`PRACTICE · ASYNC COMPOSABLES`,title:`请求竞态与 Composables`,description:`使用独立的本地只读接口，练习异步状态、取消、分页和可复用组合式函数。`,concepts:[`输入是 ref 或 getter，返回普通对象中的 refs，解构后仍保持响应式；每次调用拥有独立状态。`,`侦听输入变化发起请求，onCleanup 取消旧请求，onScopeDispose 清理离开页面后的资源。`,`AbortController 节省资源，递增请求编号进一步防止过期响应覆盖最新结果。`,`分别呈现 loading、success、empty、error、cancelled；派生状态不必放入全局 store。`],code:u(v),resources:[{label:`Composables 设计`,url:`https://vuejs.org/guide/reusability/composables.html`},{label:`Axios 取消`,url:`https://axios-http.com/docs/cancellation`}]},{default:l(()=>[n(g,{title:`可取消的搜索与分页`,description:`搜索 Vue、Pinia，或输入不存在的词观察空状态。勾选失败后可取消勾选并重试。`},{default:l(()=>[y,n(_,{id:`topic-keyword`,modelValue:D.value,"onUpdate:modelValue":d[0]||=e=>D.value=e,clearable:``},null,8,[`modelValue`]),n(E,{modelValue:k.value,"onUpdate:modelValue":d[1]||=e=>k.value=e},{default:l(()=>[r(`模拟服务失败`)]),_:1},8,[`modelValue`]),s(`div`,b,[n(R,{onClick:u(F)},{default:l(()=>[r(`重新请求`)]),_:1},8,[`onClick`]),n(R,{disabled:u(M)!==`loading`,onClick:u(P)},{default:l(()=>[r(`取消请求`)]),_:1},8,[`disabled`,`onClick`])]),s(`div`,x,`当前状态：`+p(u(M))+` · 延迟 `+p(O.value)+`ms`,1),u(M)===`error`?(f(),m(z,{key:0,title:u(N),type:`error`,closable:!1},null,8,[`title`])):u(M)===`loading`?(f(),t(`p`,S,`正在加载…`)):u(M)===`empty`?(f(),m(B,{key:2,description:`没有匹配主题，请更换关键词`,"image-size":50})):u(M)===`cancelled`?(f(),t(`p`,C,`请求已取消，可重新请求。`)):(f(),t(`ul`,w,[(f(!0),t(c,null,o(u(j).items,e=>(f(),t(`li`,{key:e},p(e),1))),128))])),u(M)===`success`?(f(),m(V,{key:5,"current-page":A.value,"onUpdate:currentPage":d[2]||=e=>A.value=e,"page-size":3,total:u(j).total,layout:`prev, pager, next`},null,8,[`current-page`,`total`])):i(``,!0)]),_:1}),n(g,{title:`复现快慢响应竞争`,description:`先发起慢请求，在 1.6 秒内再发起快请求。最终应只显示 Pinia，不会被旧 Vue 请求覆盖。`},{default:l(()=>[s(`div`,T,[n(R,{onClick:I},{default:l(()=>[r(`① 慢请求：Vue`)]),_:1}),n(R,{onClick:L},{default:l(()=>[r(`② 快请求：Pinia`)]),_:1})])]),_:1})]),_:1},8,[`code`,`resources`])}}};export{E as default};