<template>
  <ClientOnly>
    <component v-if="GenuiChat" :is="GenuiChat" class="genui-playground" />
  </ClientOnly>
</template>
<script setup>
import { shallowRef, onMounted } from 'vue'

const GenuiChat = shallowRef(null)

onMounted(async () => {
  const module = await import('../../../genui-sdk/sites/playground/web/src/App.vue')
  GenuiChat.value = module.default
})
</script>

<style scoped>
.genui-playground {
  all: initial;
  height: 100vh !important;
  background: #fff;

}

:deep(:is(h1, h2, h3, h4, h5, h6)) {
  font-weight: bold;
  line-height: 1.3;
}

:deep(h1) {
  margin: 0.67em 0;
  font-size: 2em;
}

:deep(h2) {
  margin: 0.75em 0;
  font-size: 1.5em;
}

:deep(h3) {
  margin: 0.83em 0;
  font-size: 1.17em;
}

:deep(h4) {
  margin: 1em 0;
  font-size: 1em;
}

:deep(h5) {
  margin: 1.17em 0;
  font-size: 0.83em;
}

:deep(h6) {
  margin: 1.33em 0;
  font-size: 0.75em;
}

:deep(li),
:deep(p) {
  overflow-wrap: normal;
}
</style>
