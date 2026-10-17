<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  concepts: { type: Array, required: true },
  code: { type: String, required: true },
})
</script>

<template>
  <section class="example-page">
    <header class="page-heading">
      <div>
        <div class="eyebrow">{{ eyebrow }}</div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <span class="learning-badge"><el-icon><Reading /></el-icon>交互式示例</span>
    </header>
    <div class="lesson-grid">
      <div class="demo-column"><slot /></div>
      <aside class="lesson-aside">
        <section class="content-card concept-card">
          <div class="aside-title"><span class="aside-icon"><el-icon><Compass /></el-icon></span><h2>学习要点</h2></div>
          <ul><li v-for="concept in concepts" :key="concept">{{ concept }}</li></ul>
        </section>
        <section class="content-card code-card">
          <div class="aside-title"><span class="aside-icon code-icon"><el-icon><Tickets /></el-icon></span><h2>关键代码</h2></div>
          <pre><code>{{ code }}</code></pre>
        </section>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.learning-badge{display:flex;align-items:center;gap:7px;margin-bottom:3px;padding:8px 11px;border:1px solid #e8ebfc;border-radius:8px;background:#fff;color:#6678df;font-size:10px;font-weight:600;white-space:nowrap}
.lesson-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(250px,.8fr);align-items:start;gap:17px}
.demo-column,.lesson-aside{display:grid;gap:15px;min-width:0}
:deep(.content-card){border:1px solid #edf0f5;border-radius:11px;background:#fff}
:deep(.playground-card){padding:20px}
:deep(.playground-title){display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:17px}
:deep(.playground-title h2){margin:0;color:#303a49;font-size:13px;font-weight:700}
:deep(.playground-title p){margin:6px 0 0;color:#98a1af;font-size:10px;line-height:1.6}
:deep(.playground-content){display:grid;gap:13px}
:deep(.demo-label){display:block;margin-bottom:7px;color:#778292;font-size:10px;font-weight:600}
:deep(.demo-value){color:#29334a;font:750 25px Manrope,'Noto Sans SC',sans-serif}
:deep(.demo-muted){color:#929baa;font-size:10px;line-height:1.65}
:deep(.demo-row){display:flex;align-items:center;flex-wrap:wrap;gap:9px}
:deep(.demo-divider){height:1px;background:#f0f2f6}
:deep(.demo-output){padding:10px 12px;border-radius:8px;background:#f7f8fc;color:#687386;font-size:10px;line-height:1.6}
:deep(.demo-code){max-height:260px;overflow:auto;margin:0;padding:13px;border:1px solid #edf0f5;border-radius:8px;background:#f8f9fc;color:#536078;font:10px/1.7 'SFMono-Regular',Consolas,monospace;white-space:pre-wrap;word-break:break-word}
.aside-title{display:flex;align-items:center;gap:9px}
.aside-title h2{margin:0;color:#303a49;font-size:12px;font-weight:700}
.aside-icon{display:grid;place-items:center;width:27px;height:27px;border-radius:8px;background:#eff1ff;color:#6879e8}
.code-icon{background:#eff8f4;color:#2ca77b}
.concept-card,.code-card{padding:17px}
.concept-card ul{display:grid;gap:9px;margin:14px 0 0;padding:0;list-style:none}
.concept-card li{position:relative;padding-left:15px;color:#788394;font-size:10px;line-height:1.6}
.concept-card li:before{position:absolute;top:6px;left:1px;width:5px;height:5px;border-radius:50%;background:#7888ed;content:''}
.code-card pre{max-height:370px;overflow:auto;margin:13px 0 0;padding:12px;border-radius:8px;background:#f7f8fc;color:#526078;font:9px/1.7 'SFMono-Regular',Consolas,monospace;white-space:pre-wrap;word-break:break-word}
:deep(.todo-row){display:flex;align-items:center;gap:8px;padding:9px 10px;border:1px solid #edf0f5;border-radius:8px}
:deep(.todo-row .todo-text){flex:1;min-width:0;color:#556071;font-size:10px;overflow-wrap:anywhere}
:deep(.todo-row.is-done .todo-text){color:#a1a9b5;text-decoration:line-through}
.table-user{display:flex;align-items:center;gap:8px}
.table-user strong,.table-user small{display:block}
.table-user small{margin-top:3px;color:#9aa2af;font-size:9px}
@media(max-width:1050px){.lesson-grid{grid-template-columns:1fr}.lesson-aside{grid-template-columns:1fr 1fr}}
@media(max-width:700px){.lesson-aside{grid-template-columns:1fr}.learning-badge{display:none}.playground-card{padding:15px}}
</style>
