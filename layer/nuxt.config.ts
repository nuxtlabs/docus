import { extendViteConfig, createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    resolve('./modules/default-configs'),
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-og-image',
    'nuxt-llms',
    () => {
      // Update @nuxt/content optimizeDeps options
      extendViteConfig((config) => {
        config.optimizeDeps ||= {}
        config.optimizeDeps.include ||= []
        config.optimizeDeps.include.push('@nuxt/content > slugify')
        config.optimizeDeps.include = config.optimizeDeps.include
          .map(id => id.replace(/^@nuxt\/content > /, 'docus > @nuxt/content > '))
      })
    },
  ],
  devtools: {
    enabled: true,
  },
  css: [resolve('./app/assets/css/main.css')],
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml'],
        },
      },
    },
  },
  compatibilityDate: '2025-07-22',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: false,
    },
  },
  icon: {
    provider: 'iconify',
  },
})
