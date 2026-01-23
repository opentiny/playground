import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import type { UserConfig } from 'vitepress'
import { resolveOpentinyThemeCSS, resolveStaticAssets } from './plugins'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenTiny Playground",
  ignoreDeadLinks: true,
  description: "OpenTiny 项目演练场",
  base: process.env.VITEPRESS_BASE || '/',
  outDir: 'dist',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    // 配置环境变量目录，指向子项目的 env 目录，确保能读取 .env 文件
    envDir: path.resolve(root, 'genui-sdk/sites/playground/web/env'),
    plugins: [
      // 添加自定义插件处理 @opentiny/vue-theme 的 CSS 导入
      resolveOpentinyThemeCSS(),
      // 添加插件来处理静态资源路径解析
      resolveStaticAssets(),
    ],
    resolve: {
      // 确保能够正确解析 @opentiny 相关包的路径
      dedupe: ['vue'],
    },
    ssr: {
      noExternal: [/^@opentiny/],
    },
  },
} as UserConfig)
