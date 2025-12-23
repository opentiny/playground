<template>
  <div>
    <header class="custom-header">
      <div class="header-container">
        <!-- 第一行：Logo + 搜索栏 + 工具按钮 -->
        <div class="header-top">
          <!-- Logo 区域 -->
          <div class="logo-section">
            <a href="/" class="logo-link">
              <img
                :src="getImgUrl(
                  isDark
                    ? 'images/logo-dark.svg'
                    : 'images/logo.svg'
                )"
                :key="isDark"
                alt="OpenTiny NEXT"
                class="logo-icon"
              />
              <span v-if="false" class="logo-text">{{ site.title }}</span>
            </a>
          </div>

          <!-- 右侧工具栏 -->
          <div class="tools-section">
            <!-- OpenTiny 链接 -->
            <a
              href="https://opentiny.design"
              title="OpenTiny"
              class="home-link"
            >
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

            <!-- 主题切换 -->
            <button
              @click="toggleDark"
              class="tool-button"
              title="Toggle theme"
            >
              <svg
                v-if="!isDark"
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

            <!-- GitHub 链接 -->
            <a
              href="https://github.com/opentiny"
              target="_blank"
              rel="noopener noreferrer"
              class="tool-button"
              title="GitHub"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- 第二行：移动端 -->
        <div class="mb-container">
          <div class="mb-navbar">
            <div class="mb-logo">
              <a href="/" class="logo-link">
                <img
                 :src="getImgUrl(
                    isDark
                      ? 'images/logo-dark.svg'
                      : 'images/logo.svg'
                  )"
                  :key="isDark"
                  alt="OpenTiny NEXT"
                  class="logo-icon"
                />
                <span v-if="false" class="logo-text">{{ site.title }}</span>
              </a>
            </div>

            <div class="nav-buttons">
              <button class="nav-button" @click="showModal = true">
                <svg
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
        <!-- 弹框 -->
    <div class="modal-overlay-home" v-if="showModal" @click="showModal = false">
      <div class="modal-home" @click.stop>
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
              :src="getImgUrl('images/logo1.svg')"
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
import { computed, ref, onMounted, watch } from 'vue';
import { useData, useRoute, useRouter } from 'vitepress';

// 获取 VitePress 数据
const { site, theme, isDark } = useData();

const route = useRoute();
const router = useRouter();

// 获取主题配置
const themeConfig = computed(() => theme.value);

const getImgUrl = (imgPath) => {
  return site.value.base + imgPath;
};

// 切换暗色模式
const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem('vitepress-theme-appearance', isDark.value ? 'dark' : 'light')
};

const showModal = ref(false);


const prefix = site.value.base || '/';


watch(
  () => route.path,
  () => {

  },
  { deep: true, immediate: true }
);
</script>

<style lang="less" scoped>
.custom-header {
  --vp-c-divider: #f9f9f9;
  --search-border-color: #dfdfdf;

  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-image: url('images/bg-playground-home.png');
  background-size: cover;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.dark .custom-header {
  --vp-c-divider: #282c34;
  --search-border-color: rgba(255, 255, 255, 0.2);
  background-color: #000000;
}

.header-container {
  width: 100%;
}

/* 第一行样式 */
.header-top {
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
  margin-right: 3rem;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  margin-right: 48px;
}

.logo-icon {
  height: 32px;
}
.modal-header .logo-icon {
  height: 16px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
}

/* 工具栏样式 */
.tools-section {
  display: flex;
  align-items: center;
  gap: 8px;
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

.home-link svg{
  width: 8px;
} 

.home-link-mb {
  width: 182px;
  line-height: 38px;
  justify-content: center;
  padding: 0;
}

.dark .home-link {
  --home-link-bg-color: #1476ff;
  --home-link-text-color: #ffffff;
  --tool-button-color: #1a1a1a;
}

.tool-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: 32px;
  color: var(--tool-button-color);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.tool-button:hover {
  background-color: #e6e6e6;
  color: var(--vp-c-text-1);
}
.dark .tool-button:hover {
  background: rgba(255, 255, 255, 0.05);
}
.tool-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 8px;
  border: 1px solid #e6e6e6;
  background-color: #f0f0f0;
  transition: border-color 0.25s, background-color 0.25s;
}
.tool-switch .normal-svg {
  background: #ffffff;
  border-radius: 50%;
}
.dark .tool-switch {
  border: 1px solid #333333;
  background-color: #333333;
  display: flex;
  flex-direction: row-reverse;
}
.dark .tool-switch .dark-svg {
  background: #000000;
  border-radius: 50%;
}

.modal-overlay-home {
  position: fixed;
  overflow-y: auto;
  z-index: 99;
  inset: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.05) !important;
}
.dark .modal-overlay-home {
  background: rgba(0, 0, 0, 0.8);
}
.modal-overlay-home .modal-home {
  position: fixed;
  top: 64px;
  right: 0;
  width: 250px;

  border-radius: 12px;
  padding: 20px;
  background: #ffffff;
  overflow: hidden;
  z-index: 1000;
  animation: modal-appear 0.3s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.dark .modal-home {
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
/* 响应式设计 */
@media (min-width: 980px) {
  .header-top {
    display: flex;
  }
  .mb-container {
    display: none;
  }
}

@media (max-width: 979px) {
  .header-top {
    display: none;
  }
  .mb-container {
    display: block;
  }
  .mb-navbar {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: relative;
    border-bottom: 1px solid var(--search-border-color);
  }

  .mb-logo {
    display: flex;
    align-items: center;
  }

  .nav-buttons {
    display: flex;
    gap: 20px;
  }

  .nav-button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 32px;
  }

  .nav-button svg {
    width: 20px;
    height: 20px;
    margin-left: 6px;
  }

  .nav-button:hover {
    background-color: var(--vp-c-bg-soft);
  }
}
@media (max-width: 679px) {
  .header-top {
    display: none;
  }
}
/* 可访问性支持 */
@media (prefers-contrast: high) {
  .custom-header {
    border-bottom: 2px solid var(--vp-c-divider);
  }

  .nav-item-active::before {
    height: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-item-active::after,
  .nav-item,
  .tool-button,
  .search-input {
    animation: none;
    transition: none;
  }
}
</style>
