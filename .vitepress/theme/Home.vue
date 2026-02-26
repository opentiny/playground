<template>
  <div class="home-page">
    <div class="home-title">欢迎来到 OpenTiny Playground 演练场</div>
    <div class="home-desc">
      代码演练场是一个在线或本地的交互式环境，能让开发者直接编写、运行和调试代码，无需复杂的本地环境配置
    </div>
    <div class="home-content">
      <div class="big-box">
        <div class="big-box-container big-box-container-top">
          <a
            :href="item.link"
            class="small-box"
            v-for="(item, idx) in homeListTop"
            :key="idx"
          >
            <!-- 第一行：左图右上下结构 -->
            <div class="row1">
              <img class="avatar" :src="getImgUrl(item.icon)" />
              <div class="row1-right">
                <div class="row1-title">{{ item.title }}</div>
                <div class="row1-content">{{ item.titleTip }}</div>
              </div>
            </div>
            <!-- 第二行：大图片 -->
            <div class="row2-top">
              <img
                :src="
                  getImgUrl(
                    isDark
                      ? `images/${item.imgUrl}-dark.svg`
                      : `images/${item.imgUrl}.svg`,
                  )
                "
                :key="isDark"
                alt="OpenTiny NEXT"
                class="logo-icon"
              />
            </div>
            <!-- 第三行：描述文本 -->
            <div class="row3 row3-top">{{ item.desc }}</div>
            <!-- 第四行：跳转链接 -->
            <div class="row4">
              <span
                :class="['link', { disabled: item.link === '' }]"
                >进入 Playground</span
              >
            </div>
            <div v-if="item.link === ''" class="row5">敬请期待</div>
          </a>
        </div>
        <div class="big-box-container">
          <a
            :href="item.link"
            class="small-box"
            v-for="(item, idx) in homeListButton"
            :key="idx"
          >
            <!-- 第一行：左图右上下结构 -->
            <div class="row1">
              <img class="avatar" :src="getImgUrl(item.icon)" />
              <div class="row1-right">
                <div class="row1-title">{{ item.title }}</div>
                <div class="row1-content">{{ item.titleTip }}</div>
              </div>
            </div>
            <!-- 第二行：大图片 -->
            <div class="row2">
              <img
                :src="
                  getImgUrl(
                    isDark
                      ? `images/${item.imgUrl}-dark.svg`
                      : `images/${item.imgUrl}.svg`,
                  )
                "
                :key="isDark"
                alt="OpenTiny NEXT"
                class="logo-icon"
              />
            </div>
            <!-- 第三行：描述文本 -->
            <div class="row3">{{ item.desc }}</div>
            <!-- 第四行：跳转链接 -->
            <div class="row4">
              <span
                :class="['link', { disabled: item.link === '' }]"
                >进入 Playground</span
              >
            </div>
            <div v-if="item.link === ''" class="row5">敬请期待</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useData } from 'vitepress';

const { site, isDark } = useData();

const getImgUrl = (imgPath) => {
  return site.value.base + imgPath;
};

const homeListTop = [
  {
    icon: 'images/tiny-vue-logo-active.svg',
    title: 'TinyVue',
    titleTip: 'vue组件库',
    imgUrl: 'tiny-vue-banner',
    link: 'tiny-vue',
    desc: '基于 OpenTiny Design 设计体系的 Vue UI 组件库，一套跨端、跨框架的企业级 UI 组件库，支持 Vue 2 和 Vue 3，支持 PC 端和移动端。',
  },
  {
    icon: 'images/tiny-engine-logo-active.svg',
    title: 'TinyEngine',
    titleTip: '低代码引擎',
    imgUrl: 'tiny-engine-banner',
    link: 'tiny-engine',
    desc: '低代码引擎它内置了一个功能强大的低代码设计器，用户可以基于低代码引擎定制（开发）出各种低代码平台，如：流程编排平台、页面编排平台、图元编排平台、移动端页面开发平台、大屏开发平台等。',
  },
];
const homeListButton = [
  {
    icon: 'images/tiny-robot-logo-active.svg',
    title: 'TinyRobot',
    titleTip: 'AI智能助手',
    imgUrl: 'tiny-robot-banner',
    link: 'tiny-robot',
    desc: 'TinyRobot是符合OpenTiny Design 设计体系的 AI 组件库，提供了丰富的AI交互组件，助力开发者快速构建AI应用。',
  },
  {
    icon: 'images/next-sdk-logo-active.svg',
    title: 'NEXT-SDKs',
    titleTip: '智能应用开发工具包',
    imgUrl: 'next-sdk-banner',
    link: 'next-sdk',
    desc: 'OpenTiny NEXT-SDKs 是一套前端智能应用开发工具包，旨在简化 WebAgent 的集成与使用，支持多种编程语言和前端框架，帮助开发者快速实现智能化功能。',
  },
  {
    icon: 'images/genui-sdk-logo-active.svg',
    title: 'GenUI-SDK',
    titleTip: '生成式 UI',
    imgUrl: 'genui-sdk-banner',
    link: 'genui-sdk',
    desc: 'GenUI-SDK是一套增量流式生成界面的解决方案，旨在增强大模型对话的展示效果和交互能力，打造极致顺滑的智能体验。',
  },
];
</script>
<style scoped>
.home-title {
  font-size: 32px;
  line-height: 45px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  padding-top: 60px;
}
.home-desc {
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
  line-height: 27px;
  color: #595959;
}
/* 大盒子布局 */
.big-box {
  max-width: 1366px;
  background: rgba(0, 0, 0, 0.05);
  padding: 40px 40px 1px;
  margin: 100px auto;
  border-radius: 20px;
}
.big-box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  margin-bottom: 40px;
}
.small-box {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0 0 calc((100% - 2 * 30px) / 3);
  max-width: calc((100% - 2 * 30px) / 3);
  position: relative;
  text-decoration: none;
  cursor: pointer;
}

/* top 容器：左右两个盒子按 0.75 : 1 比例分配宽度（总间距为 30px） */
.big-box-container-top .small-box {
  flex: 0 0 calc((100% - 30px) * 3 / 7);
  max-width: calc((100% - 30px) * 3 / 7);
}
.big-box-container-top .small-box:last-child {
  flex: 0 0 calc((100% - 30px) * 4 / 7);
  max-width: calc((100% - 30px) * 4 / 7);
}

.dark .big-box {
  background: rgba(34, 34, 34, 0.4);
  backdrop-filter: blur(123px);
}
.dark .small-box {
  background: rgba(38, 38, 38, 1);
}
.row1 {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}
.avatar {
  width: 32px;
  height: 32px;
}
.row1-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row1-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: -2px;
  color: #191919;
}
.row1-content {
  line-height: 18px;
  font-size: 16px;
  color: #595959;
}
.row2 {
  display: flex;
  justify-content: center;
}
.row2-top {
  display: flex;
  justify-content: center;
}
.row2-top img {
  width: 100%;
  max-height: 222px;
  object-fit: cover;
  border-radius: 16px;
}
.main-img {
  width: 318px;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}
.row3 {
  font-size: 14px;
  line-height: 21px;
  color: #808080;
  min-height: 85px;
}
.row3-top {
  min-height: 50px;
}
.row4 {
  display: flex;
  justify-content: flex-start;
}
.link {
  font-size: 16px;
  color: #1476ff;
  line-height: 35px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
}
.link.disabled {
  color: #ccc;
  pointer-events: none;
  cursor: not-allowed;
}
.dark .link {
  color: #5291ff;
}
.dark .link.disabled {
  color: #808080;
}
.dark .row3 {
  color: #b3b3b3;
}
.dark .row1-title {
  color: #e6e6e6;
}
.dark .row1-content {
  color: #b3b3b3;
}
.dark .home-title {
  color: #e6e6e6;
}
.dark .home-desc {
  color: #b3b3b3;
}

/* 响应式断点：3列 / 2列 / 1列，同时在 <980px 时调整标题与描述 */
@media (max-width: 1600px) {
  .small-box {
    flex: 0 0 calc((100% - 2 * 30px) / 3);
    max-width: calc((100% - 2 * 30px) / 3);
  }
  .big-box {
    margin: 100px 20px;
  }
}

@media (max-width: 1200px) {
  .small-box {
    flex: 0 0 calc((100% - 30px) / 2);
    max-width: calc((100% - 30px) / 2);
  }
}

@media (max-width: 980px) {
  .small-box {
    flex: 0 0 calc((100% - 30px) / 2);
    max-width: calc((100% - 30px) / 2);
  }
  .home-title {
    margin-top: 32px;
    font-size: 28px;
  }
  .big-box {
    margin: 60px 0px;
    gap: 20px;
  }
}

@media (max-width: 680px) {
  .home-title {
    font-size: 20px;
    line-height: 28px;
  }
  .home-desc {
    font-size: 16px;
    line-height: 27px;
  }
  .small-box {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 16px;
    border-radius: 12px;
  }
  .big-box-container-top .small-box {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 16px;
    border-radius: 12px;
  }
  .big-box-container-top .small-box:last-child {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 16px;
    border-radius: 12px;
  }
  .big-box {
    margin: 40px 0px;
    gap: 16px;
    padding: 0;
    background: transparent
  }
  .main-img {
    width: 100%;
    height: auto;
    aspect-ratio: 318 / 180;
  }
  .vp-doc.avatar {
    padding: 20px;
  }
}
.row5 {
  position: absolute;
  top: 0;
  right: 0;
  height: 24px;
  padding: 0 12px;
  border-radius: 0 8px 0 8px;
  background: #fce3e3;
  color: #f23030;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
}
.dark .row5 {
  background: rgba(217, 72, 56, 0.2);
  color: #d94838;
}
.logo-icon {
  background: rgba(255, 255, 255, 1) !important;
}
.dark .logo-icon {
  background: rgba(38, 38, 38, 1) !important;
}



</style>
