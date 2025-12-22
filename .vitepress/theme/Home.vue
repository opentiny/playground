<template>
  <div class="home-page">
    <div class="home-title">欢迎来到 OpenTiny Playground 演练场</div>
    <div class="home-desc">
      代码演练场是一个在线或本地的交互式环境，能让开发者直接编写、运行和调试代码，无需复杂的本地环境配置
    </div>
    <div class="home-content">
      <div class="big-box">
        <div class="small-box" v-for="(item, idx) in homeList" :key="idx">
          <!-- 第一行：左图右上下结构 -->
          <div class="row1">
            <img
              class="avatar"
              :src="getImgUrl(item.icon)"
            />
            <div class="row1-right">
              <div class="row1-title">{{ item.title }}</div>
              <div class="row1-content">{{ item.titleTip }}</div>
            </div>
          </div>
          <!-- 第二行：大图片 -->
          <div class="row2">
              <img
                :src="getImgUrl(
                  isDark
                    ? `images/${item.imgUrl}-dark.svg`
                    : `images/${item.imgUrl}.svg`
                )"
                alt="OpenTiny NEXT"
                class="logo-icon"
              />
          </div>
          <!-- 第三行：描述文本 -->
          <div class="row3">{{ item.desc }} </div>
          <!-- 第四行：跳转链接 -->
          <div class="row4">
            <a
              :href="item.link"
              :class="['link', { disabled: item.link === '' }]"
              >进入 Playground</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useData } from "vitepress";
import { ref, onMounted } from 'vue';

const { site } = useData();

// 暗色模式状态
const isDark = ref(false);

// 初始化暗色模式状态
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
});

const getImgUrl = (imgPath) => {
  return site.value.base + imgPath;
};

const homeList = [
      {
        icon: 'images/tiny-vue-logo-active.svg',
        title: 'TinyVue',
        titleTip: 'vue组件库',
        imgUrl: 'tiny-vue-banner',
        link: 'vue-playground',
        desc: 'OpenTiny NEXT-SDKs 是一套前端智能应用开发工具包，旨在简化 WebAgent 的集成与使用，支持多种编程语言和前端框架，帮助开发者快速实现智能化功能。'
      },
      {
        icon: 'images/tiny-engine-logo-active.svg',
        title: 'TinyEngine',
        titleTip: '低代码引擎',
        imgUrl: 'tiny-engine-banner',
        link: 'tiny-engine#/tiny-engine-editor',
        desc: 'OpenTiny NEXT-SDKs 是一套前端智能应用开发工具包，旨在简化 WebAgent 的集成与使用，支持多种编程语言和前端框架，帮助开发者快速实现智能化功能。'
      },
      {
        icon: 'images/next-sdk-logo-active.svg',
        title: 'NEXT-SDKs',
        titleTip: '智能应用开发工具包', 
        imgUrl: 'next-sdk-banner',
        link: '',
        desc: 'OpenTiny NEXT-SDKs 是一套前端智能应用开发工具包，旨在简化 WebAgent 的集成与使用，支持多种编程语言和前端框架，帮助开发者快速实现智能化功能。'
      },
      {
        icon: 'images/tiny-robot-logo-active.svg',
        title: 'TinyRobot',
        titleTip: 'AI智能助手', 
        imgUrl: 'tiny-robot-banner',
        link: '',
        desc: 'OpenTiny NEXT-SDKs 是一套前端智能应用开发工具包，旨在简化 WebAgent 的集成与使用，支持多种编程语言和前端框架，帮助开发者快速实现智能化功能。'
      },
    ]
</script>
<style scoped>
.home-title {
  font-size: 32px;
  line-height: 45px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-top: 60px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  margin: 100px 86px;
}
.small-box {
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0 0 calc((100% - 3 * 30px) / 4);
  max-width: calc((100% - 3 * 30px) / 4);
}
.dark .small-box {
  background: rgba(38,38,38,1);
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
  color: #5291FF;
}
.dark .link.disabled {
  color: #808080;
}
.dark .row3{
  color: #b3b3b3;
}
.dark .row1-title{
  color: #e6e6e6;
}
.dark .row1-content{
  color: #b3b3b3;
}
.dark .home-title{
  color: #e6e6e6;
}
.dark .home-desc{
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
    flex: 0 0 calc((100% -  30px) / 2);
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
  .big-box {
    margin: 40px 0px;
    gap: 16px;
  }
  .main-img {
    width: 100%;
    height: auto;
    aspect-ratio: 318 / 180;
  }
  .vp-doc.avatar{
    padding: 20px;
  }
}
.logo-icon{
  background: rgba(38,38,38,1);
}
</style>
