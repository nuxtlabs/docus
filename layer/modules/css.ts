import { defineNuxtModule, addTemplate } from '@nuxt/kit'
import { joinURL } from 'ufo'
import { resolveModulePath } from 'exsolve'

export default defineNuxtModule({
  meta: {
    name: 'css',
  },
  async setup(_options, nuxt) {
    const dir = nuxt.options.rootDir

    const contentDir = joinURL(dir, 'content')
    const uiProPath = resolveModulePath('@nuxt/ui-pro', { from: import.meta.url, conditions: ['style'] })
    const tailwindPath = resolveModulePath('tailwindcss', { from: import.meta.url, conditions: ['style'] })

    const cssTemplate = addTemplate({
      filename: 'docus.css',
      getContents: () => {
        return `@import ${JSON.stringify(tailwindPath)};
@import ${JSON.stringify(uiProPath)};

@source "${contentDir.replace(/\\/g, '/')}/**/*";
@source "../../app.config.ts";`
      },
    })

    nuxt.options.css.push(cssTemplate.dst)
  },
})
