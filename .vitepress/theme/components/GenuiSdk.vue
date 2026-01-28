<template>
  <ClientOnly>
    <component v-if="GenuiChat" :is="GenuiChat" class="genui-playground" />
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const GenuiChat = ref(null)

onMounted(async () => {
  const module = await import('../../../genui-sdk/sites/playground/web/src/App.vue')
  GenuiChat.value = module.default

})
</script>

<style scoped>
.genui-playground {
  height: 100vh !important;
  background: #fff;
}
</style>
