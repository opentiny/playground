<template>
  <div class="custom-content">
    <div class="sidebar">
      <div class="home-logo">
        <a href="/" rel="noopener noreferrer">
          <img
            :src="isDark ? 'images/mini-logo.svg' : 'images/mini-logo.svg'"
            class="home-logo-icon"
          />
        </a>
      </div>
      <div
        v-for="(iconList, idx) in iconLists"
        :key="idx"
        class="icon-wrapper"
        @mouseenter="showTip(idx)"
        @mouseleave="hideTip"
        @click="changeIcon(idx)"
        style="position: relative"
      >
        <a :href="iconList.link" rel="noopener noreferrer">
          <img
            :src="iconList.isActive ? iconList.srcActive : iconList.src"
            class="icon"
          />
        </a>
        <div v-if="tipIdx === idx" class="icon-tip">
          <div class="icon-title">{{ iconList.title }}</div>
          <div class="icon-content">{{ iconList.titleTip }}</div>
        </div>
      </div>
    </div>
    <div class="sidebar-mb" @click="showModal = true">
      <img
        :src="isDark ? 'images/menu.svg' : 'images/menu.svg'"
        class="menu-mb"
      />
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
    <!-- 弹框 -->
    <div class="modal-overlay" v-if="showModal" @click="showModal = false">
      <div class="modal" @click.stop>
        <div class="home-logo-mb">
          <a href="/" class="logo-link">
            <img
              :src="isDark ? 'images/logo2.svg' : 'images/logo2.svg'"
              alt="OpenTiny NEXT"
              class="logo-icon"
            />
          </a>
        </div>
        <div class="modal-tabs">
          <div
            v-for="tab in iconLists"
            :key="tab.key"
            :class="getModalTabClasses(tab)"
            @click="showModal = false"
          >
            <a :href="tab.link" rel="noopener noreferrer">
              <img
                class="avatar"
                :src="tab.isActive ? tab.srcActive : tab.src"
              />
              <div class="modal-tab-right">
                <div class="modal-tab-title">{{ tab.title }}</div>
                <div class="modal-tab-content">{{ tab.titleTip }}</div>
              </div>
            </a>
          </div>
        </div>
        <div class="modal-theme-mb">
          <span>外观切换</span>
          <!-- 移动端主题切换 -->
          <button @click="toggleDark" class="tool-switch" title="Toggle theme">
            <svg
              v-if="!isDark"
              class="normal-svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="dark-svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
        <div class="modal-header">
          <a
            href="https://opentiny.design"
            title="OpenTiny"
            class="home-link home-link-mb"
          >
            <img
              :src="'images/logo.svg'"
              alt="OpenTiny NEXT"
              class="logo-icon"
            />
            <span>OpenTiny</span>
            <svg
              width="3"
              height="24"
              viewBox="0 -9 3 24"
              class="h-5 rotate-0 overflow-visible text-white/90"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useRoute } from "vitepress";
const route = useRoute();

const showModal = ref(false);

const iconLists = reactive([
  {
    src: "images/tiny-vue-logo.svg",
    srcActive: "images/tiny-vue-logo-active.svg",
    isActive: true,
    title: "TinyVue",
    titleTip: "vue组件库",
    link: "vue-playground",
  },
  {
    src: "images/tiny-engine-logo.svg",
    srcActive: "images/tiny-engine-logo-active.svg",
    isActive: false,
    title: "TinyEngine",
    titleTip: "低代码引擎",
    link: "tiny-engine#/tiny-engine-editor",
  },
  {
    src: "images/next-sdk-logo.svg",
    srcActive: "images/next-sdk-logo-active.svg",
    isActive: false,
    title: "NEXT-SDKs",
    link: "",
    titleTip: "智能应用工具包",
  },
  {
    src: "images/tiny-robot-logo.svg",
    srcActive: "images/tiny-robot-logo-active.svg",
    isActive: false,
    title: "TinyRobot",
    link: "",
    titleTip: "AI智能助手",
  },
]);

const tipIdx = ref(null);
const linkUrl = ref("https://opentiny.design/vue-playground");
function showTip(idx) {
  tipIdx.value = idx;
}
const hideTip = () => {
  tipIdx.value = null;
};
const changeIcon = (idx) => {
  iconLists.forEach((icon, index) => {
    icon.isActive = index === idx;
  });
};

interface TabItem {
  key: string;
  name: string;
  link: string;
  disabled?: boolean;
}

// 获取标签页类名
const getModalTabClasses = (tab: TabItem) => ({
  "modal-tab": true,
  "modal-tab-active": tab.key === "activeProductTab.value",
});

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
  height: 100vh;
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
.home-logo-mb {
  height: 60px;
  width: 100%;
}
.home-logo-mb ::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 60px;
  width: 212px;
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
.sidebar-mb {
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
  to {
    transform: rotate(360deg);
  }
}

.loader-text {
  margin-top: 15px;
  color: #666;
}
.main-content iframe {
  border-width: 0;
  border-left: 1px solid #e8e8e8;
}

.modal-overlay {
  position: fixed;
  overflow-y: auto;
  z-index: 99;
  inset: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.05) !important;
}
.dark .modal-overlay {
  background: rgba(0, 0, 0, 0.8);
}
.modal {
  position: fixed;
  top: 64px;
  left: 0;
  width: 254px;
  border-radius: 12px;
  padding: 20px;
  background: #ffffff;
  overflow: hidden;
  z-index: 1000;
  animation: modal-appear 0.3s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.dark .modal {
  background: rgba(0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  color: #ffffff;
  background: #191919;
  border-radius: 24px;
  font-weight: 600;
  font-size: 18px;
  margin-top: 16px;
  display: flex;
}

.home-link {
  --home-link-bg-color: #191919;
  --home-link-text-color: #ffffff;
  --tool-button-color: #f5f5f5;

  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--home-link-text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  padding: 4px 16px;
  border-radius: 25px;
  text-align: center;
  background-color: var(--home-link-bg-color);
}

.home-link-mb {
  width: 182px;
  line-height: 38px;
  justify-content: center;
  padding: 0;
}

.modal-theme-mb {
  display: flex;
  margin-top: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  line-height: 38px;
  font-size: 14px;
  color: #595959;
  padding: 0 12px;
}
.modal-theme-mb span {
  flex: 1;
}
.modal-theme-mb .tool-button {
  margin-top: 3px;
}
.dark .modal-theme-mb {
  background-color: #1a1a1a;
  color: #ffffff;
}
.modal-tabs {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
}
.dark .modal-tabs {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-tab a{
  display: flex;
  align-items: flex-start;
  gap: 16px;
  height: 66px;
  padding: 12px 16px;
}
.modal-tab-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-tab:hover {
  background-color: #fafafa;
  border-radius: 8px;
}

.modal-tab-title {
  font-size: 16px;
  font-weight: 700;
  color: #191919;
  margin-top: -4px;
}
.modal-tab-active .modal-tab-title {
  color: #191919;
}
.dark .modal-tab-active .modal-tab-title {
  color: #e6e6e6;
}
.modal-tab-title:hover {
  color: #191919;
}
.dark .modal-tab-title {
  color: #808080;
}
.dark .modal-tab-title:hover {
  color: #e6e6e6;
}

.mb-route-indicator {
  background: #e9ecef;
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 10px;
  font-weight: 500;
  color: #495057;
}

@media (max-width: 680px) {
  .sidebar {
    display: none;
  }
  .sidebar-mb {
    display: block;
  }
  .sidebar-mb .menu-mb {
    margin-top: 20px;
    z-index: 2;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 0;
    left: 4px;
  }
  .main-content iframe .header {
    margin-left: 30px;
  }
  .main-content iframe {
    border-width: 0;
  }
}
</style>
