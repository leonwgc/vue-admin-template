<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref(null)
const shortcutLabel = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K'
const pages = router.options.routes
  .flatMap((route) => route.children || [])
  .filter((route) => route.name && route.meta?.menuPath)
  .map((route) => ({ name: route.name, title: route.meta.title, path: route.meta.menuPath }))

const results = computed(() => {
  const terms = query.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return pages
  return pages.filter((page) => {
    const searchable = `${page.title} ${page.name} ${page.path}`.toLocaleLowerCase()
    return terms.every((term) => searchable.includes(term))
  })
})

watch(query, () => { selectedIndex.value = 0 })

function openSearch() {
  query.value = ''
  selectedIndex.value = 0
  isOpen.value = true
}

function handleShortcut(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    if (isOpen.value) isOpen.value = false
    else openSearch()
  }
}

function focusInput() {
  inputRef.value?.focus()
}

function moveSelection(change) {
  if (!results.value.length) return
  selectedIndex.value = (selectedIndex.value + change + results.value.length) % results.value.length
  nextTick(() => {
    document.getElementById(`search-result-${selectedIndex.value}`)?.scrollIntoView({ block: 'nearest' })
  })
}

function handleInputKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    moveSelection(1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    moveSelection(-1)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    const page = results.value[selectedIndex.value]
    if (page) openPage(page)
  }
}

function openPage(page) {
  isOpen.value = false
  router.push({ name: page.name })
}

onMounted(() => window.addEventListener('keydown', handleShortcut))
onUnmounted(() => window.removeEventListener('keydown', handleShortcut))
</script>

<template>
  <button class="search-trigger" type="button" :aria-keyshortcuts="'Meta+K Control+K'" aria-label="搜索课程，快捷键 Command K 或 Control K" @click="openSearch">
    <el-icon><Search /></el-icon><span>搜索课程</span><kbd>{{ shortcutLabel }}</kbd>
  </button>
  <el-dialog v-model="isOpen" title="搜索课程" class="global-search-dialog" width="min(560px, calc(100vw - 32px))" :show-close="false" @opened="focusInput">
    <el-input ref="inputRef" v-model="query" aria-label="搜索课程名称" placeholder="输入课程名称或关键词" clearable @keydown="handleInputKeydown">
      <template #prefix><el-icon><Search /></el-icon></template>
    </el-input>
    <div class="search-results" aria-label="匹配的课程">
      <button v-for="(page, index) in results" :id="`search-result-${index}`" :key="page.name" class="search-result" :class="{ 'is-selected': index === selectedIndex }" type="button" @mouseenter="selectedIndex = index" @click="openPage(page)">
        <span>{{ page.title }}</span><el-icon><ArrowRight /></el-icon>
      </button>
      <p v-if="!results.length" class="search-empty">没有匹配的课程</p>
    </div>
    <p class="search-hint">↑ ↓ 选择 · Enter 打开 · Esc 关闭</p>
  </el-dialog>
</template>

<style scoped>
.search-trigger{display:flex;align-items:center;gap:8px;min-height:34px;padding:0 9px;border:1px solid #e7ebf2;border-radius:8px;background:#fff;color:#7b8595;font-size:12px;cursor:pointer;white-space:nowrap}
.search-trigger:hover,.search-trigger:focus-visible{border-color:#cbd3fa;background:#f7f8ff;color:var(--blue)}
.search-trigger kbd{padding:3px 5px;border:1px solid #e7ebf2;border-radius:4px;background:#f8f9fc;color:#8b94a3;font:11px 'SFMono-Regular',Consolas,monospace}
.search-results{display:grid;gap:3px;max-height:min(380px,50vh);overflow-y:auto;margin-top:12px}
.search-result{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:10px 12px;border:0;border-radius:7px;background:transparent;color:#4b5668;text-align:left;font-size:13px;cursor:pointer}
.search-result:hover,.search-result.is-selected{background:#f0f2ff;color:var(--blue)}
.search-result:focus-visible{outline:2px solid var(--blue);outline-offset:-2px}
.search-empty{padding:24px 10px;color:#8c95a3;text-align:center;font-size:13px}
.search-hint{margin:13px 0 0;color:#99a2b0;font-size:11px}
:global(.global-search-dialog .el-dialog__body){padding-top:8px}
@media(max-width:720px){.search-trigger{width:34px;justify-content:center;padding:0}.search-trigger span,.search-trigger kbd{display:none}}
</style>
