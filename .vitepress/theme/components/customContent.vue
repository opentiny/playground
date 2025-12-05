<template>
  <div class="custom-content">
    <div class="sidebar">
      <div class="home-logo">
        <a href="/" rel="noopener noreferrer">
          <img src="/images/mini-logo.svg" class="home-logo-icon" />
        </a>
      </div>
      <div
        v-for="(iconList, idx) in iconLists"
        :key="idx"
        class="icon-wrapper"
        @mouseenter="showTip(idx)"
        @mouseleave="hideTip"
        style="position: relative"
      >
        <a :href="iconList.link" rel="noopener noreferrer">
          <img :src="iconList.isActive ? iconList.srcActive : iconList.src" class="icon" />
        </a>
        <div v-if="tipIdx === idx" class="icon-tip">
          <div class="icon-title">{{ iconList.title }}</div>
          <div class="icon-content">{{ iconList.titleTip }}</div>
        </div>
      </div>
    </div>
    <div class="sidebar-mb">
    </div>
    <div class="main-content">
      <label class="iframe-loader">
        <input type="checkbox" class="loader-checkbox" checked />
        <div class="loader-content">
          <div class="spinner"></div>
          <div class="loader-text">正在加载...</div>
        </div>
        <iframe
          :src="linkUrl"
          width="100%"
          height="100%"
          allowfullscreen
          title="Example Website"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts"
          onload="this.previousElementSibling.previousElementSibling.checked = false"
        ></iframe>
      </label>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vitepress";
const route = useRoute();
const iconLists = [
  {
    src: "/images/n1.svg",
    srcActive: "/images/n2.svg",
    isActive: true,
    title: "TinyVue",
    titleTip: "vue组件库",
    link: "/playground/vue-playground",
  },
  {
    src: "/images/e1.svg",
    srcActive: "/images/e2.svg",
    isActive: false,
    titleTip: "低代码引擎",
    link: "/playground/tiny-engine#/tiny-engine-editor",
  },
  {
    src: "/images/n1.svg",
    srcActive: "/images/n2.svg",
    isActive: false,
    title: "NEXT-SDKs",
    link: "",
    titleTip: "智能应用开发工具包",
  },
  {
    src: "/images/r1.svg",
    srcActive: "/images/r2.svg",
    isActive: false,
    title: "TinyRobot",
    link: "",
    titleTip: "AI智能助手",
  },
];

const tipIdx = ref(null);
const linkUrl = ref("https://opentiny.design/vue-playground");
function showTip(idx) {
  tipIdx.value = idx;
}
const hideTip = () => {
  tipIdx.value = null;
};

watch(
  () => route.path,
  () => {
    
    if (route.path.includes("/vue-playground")) {
      linkUrl.value = "https://opentiny.design/vue-playground";
    } else if (route.path.includes("/tiny-engine")) {
      linkUrl.value = "https://opentiny.design/tiny-engine#/tiny-engine-editor";
    } else {
      linkUrl.value = "https://opentiny.design/vue-playground";
    }
  },
  { deep: true, immediate: true }
);
</script>

<style>
.custom-content {
  display: flex;
  width: 100%;
  height: 100%;
}
.home-logo {
  height: 60px;
  width: 100%;
}
.home-logo::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 60px;
  width: 48px;
  height: 2px;
  background-color: #dbdbdb;
}
.home-logo-icon {
  height: 32px;
  width: 32px;
  margin: 14px 12px;
}
.sidebar {
  width: 56px;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar-mb{
  display: none;
}
.icon-wrapper {
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  position: relative;
}
.icon-wrapper:hover {
  background-color: #fff;
  border-radius: 8px;
}
.icon {
  width: 24px;
  height: 24px;
  display: block;
}
.icon-tip {
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  color: #191919;
  font-size: 14px;
  padding: 16px 24px;
  border-radius: 8px;
  white-space: nowrap;
  z-index: 10;
}
.icon-title {
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}
.icon-content {
  line-height: 18px;
  font-size: 12px;
  color: #595959;
}
.main-content {
  flex: 1;
  min-width: 0;
  height: 100vh;
}
.iframe-loader {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}

.loader-checkbox {
    display: none;
}

.loader-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: opacity 0.3s ease, visibility 0.3s;
}

.loader-checkbox:not(:checked) ~ .loader-content {
    opacity: 0;
    visibility: hidden;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    to { transform: rotate(360deg); }
}

.loader-text {
    margin-top: 15px;
    color: #666;
}
.main-content iframe {
  border-width: 0;
  border-left: 1px solid #e8e8e8;
}

@media (max-width: 680px) {
  .sidebar{
    display: none;
  }
  .sidebar-mb{
    display: block; 
  }
  .main-content iframe .header{
    margin-left: 30px;
  }
}
</style>
