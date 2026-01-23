import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { existsSync, readdirSync } from 'node:fs'
// @ts-expect-error: vite types may not be present at build time
import type { Plugin } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

// 自定义插件：处理 @opentiny/vue-theme 的子路径 CSS 导入
export function resolveOpentinyThemeCSS(): Plugin {
  return {
    name: 'resolve-opentiny-theme-css',
    resolveId(id) {
      // 处理 @opentiny/vue-theme/xxx/index.css 格式的导入
      if (id.startsWith('@opentiny/vue-theme/') && id.endsWith('.css')) {
        // 解析到实际的 CSS 文件路径
        const themePath = id.replace('@opentiny/vue-theme/', '')
        
        const directPath = path.resolve(root, 'node_modules/@opentiny/vue-theme', themePath)
        if (existsSync(directPath)) {
          return directPath
        }
  
      }
      return null
    },
  }
}

// 处理静态资源路径解析，优先从子项目加载
export function resolveStaticAssets(): Plugin {
  const publicDirs = [
    path.resolve(root, 'genui-sdk/sites/playground/web/public'), 
    path.resolve(root, 'public'), 
  ]

  return {
    name: 'resolve-static-assets',
    resolveId(id) {
      // 处理以 / 开头的绝对路径（静态资源）
      // 例如：/logo.svg, /images/xxx.png 等
      if (id.startsWith('/') && !id.startsWith('//') && !id.startsWith('/@')) {
        // 移除开头的 /，获取相对路径
        const relativePath = id.slice(1)
        
        // 在所有可能的 public 目录中查找（优先子项目）
        for (const publicDir of publicDirs) {
          if (existsSync(publicDir)) {
            const filePath = path.resolve(publicDir, relativePath)
            if (existsSync(filePath)) {
              // 返回实际文件路径，Vite 会处理它
              return filePath
            }
          }
        }
      }
      
      return null
    },
  }
}
