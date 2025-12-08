<template>
  <div class="opentiny-playground-layout">
    <!-- 自定义顶部导航栏 -->
    <CustomHeader v-if="!showNavigation"  />

    <!-- 主内容区域 -->
    <div class="main-content">
      <DefaultLayout>
        默认布局
      </DefaultLayout>
    </div>
  </div>
</template>


<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import CustomHeader from './components/CustomHeader.vue'
import { computed, ref, onMounted, watch } from 'vue';
import { useData, useRoute } from 'vitepress';
import { normalizeLink, isActiveRoute, isHomePage } from "./utils/router";

const route = useRoute();
// 获取 VitePress 数据
const { site, theme } = useData();

// 获取 VitePress 默认布局组件
const DefaultLayout = DefaultTheme.Layout
// 是否显示导航栏: 如果当前路径是首页，则不显示导航栏
const showNavigation = computed(() => {
  return !isHomePage(route.path, site.value.base);
});


watch(
  () => route.path,
  () => {

  },
  { deep: true, immediate: true }
);
</script>