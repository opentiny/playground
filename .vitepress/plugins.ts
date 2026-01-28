import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { existsSync } from 'node:fs'
// @ts-expect-error: vite types may not be present at build time
import type { Plugin } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

export function resolveStaticAssets(): Plugin {

  const publicPathsMapper = {
    [path.resolve(root, 'genui-sdk/sites/playground/web')]:path.resolve(root, 'genui-sdk/sites/playground/web/public') 
  }

  return {
    name: 'resolve-static-assets',
    resolveId(id, importer) {

      if (id.startsWith('/') && !id.startsWith('//') && !id.startsWith('/@')) {
        const publicPath = Object.entries(publicPathsMapper).find(([key, value]) => importer?.startsWith(key))?.[1]
        if (publicPath) {
          const filePath = path.resolve(publicPath, id.slice(1))
          if (existsSync(filePath)) {
            return filePath
          }
        }
      }
      
      return null
    },
  }
}
