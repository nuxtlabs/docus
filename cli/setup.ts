import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import type { NuxtConfig } from 'nuxt/config'
import type { DocsOptions } from './types'

declare global {
  const __DOCS_DIR__: string
}

const layerDir = fileURLToPath(new URL('../layer', import.meta.url))

const pkgDir = fileURLToPath(new URL('..', import.meta.url))

export async function getNuxtConfig(dir: string, _opts: DocsOptions = {}) {
  const fixLayers = (_, nuxt) => {
    const hasDocsDir = nuxt.options._layers.some(layer => layer.cwd === dir)
    if (!hasDocsDir) {
      nuxt.options._layers.unshift({
        cwd: dir,
        config: {
          rootDir: dir,
          srcDir: dir,
        },
      })
    }
  }

  // Prepare loadNuxt overrides
  return {
    compatibilityDate: '2025-06-17',
    extends: [layerDir],
    modulesDir: [resolve(pkgDir, 'node_modules'), resolve(layerDir, 'node_modules')],
    modules: [fixLayers],
  } as NuxtConfig
}
