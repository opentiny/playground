<template>
  <div class="opentiny-playground-layout">
    <!-- 自定义顶部导航栏 -->
    <!-- <div>顶部导航</div> -->

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

// 获取 VitePress 默认布局组件
const DefaultLayout = DefaultTheme.Layout
</script>