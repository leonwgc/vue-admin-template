<script setup>
import { computed } from 'vue'

const props = defineProps({
  code: { type: String, required: true },
})

const tokenPattern = /<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|<\/?[A-Za-z][\w.-]*|[@:#]?[A-Za-z_$][\w$.-]*|\b\d+(?:\.\d+)?\b|>/g
const keywords = new Set('as async await break case catch class const continue default delete do else export extends false finally for from function if import in instanceof interface let new null of return static super switch this throw true try type typeof undefined var void while yield'.split(' '))
const functions = new Set('computed defineEmits defineExpose defineProps inject onMounted onUnmounted provide reactive ref shallowRef storeToRefs watch watchEffect withDefaults'.split(' '))

const tokens = computed(() => {
  const parts = []
  let position = 0
  let inTag = false

  for (const match of props.code.matchAll(tokenPattern)) {
    const value = match[0]
    const index = match.index
    if (index > position) parts.push({ text: props.code.slice(position, index), type: '' })

    let type = ''
    if (value.startsWith('<!--') || value.startsWith('/*') || value.startsWith('//')) type = 'comment'
    else if (/^["'`]/.test(value)) type = 'string'
    else if (value.startsWith('<')) { type = 'tag'; inTag = true }
    else if (value === '>') inTag = false
    else if (/^\d/.test(value)) type = 'number'
    else if (inTag) type = 'attribute'
    else if (keywords.has(value)) type = 'keyword'
    else if (functions.has(value)) type = 'function'

    parts.push({ text: value, type })
    position = index + value.length
  }

  if (position < props.code.length) parts.push({ text: props.code.slice(position), type: '' })
  return parts
})
</script>

<template>
  <code><span v-for="(token, index) in tokens" :key="index" :class="token.type && `syntax-${token.type}`">{{ token.text }}</span></code>
</template>

<style scoped>
.syntax-comment{color:#8792a5}
.syntax-string{color:#19855d}
.syntax-tag{color:#bd5c65}
.syntax-attribute{color:#9b5db6}
.syntax-number{color:#b46c32}
.syntax-keyword{color:#7357c4}
.syntax-function{color:#3368bd}
</style>
