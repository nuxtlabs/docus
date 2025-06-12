import { extendViteConfig } from '@nuxt/kit'

// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-og-image',
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
    enabled: dev,
  },
  css: ['../app/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  icon: {
    provider: 'iconify',
  },
})
