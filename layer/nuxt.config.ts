import { extendViteConfig, createResolver } from '@nuxt/kit'

// Flag enabled when developing docs theme
const dev = !!process.env.NUXT_DOCS_DEV
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
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
    // (_config, nuxt) => {
    //   if (!nuxt.options.i18n || !nuxt.options.i18n.locales || nuxt.options.i18n.locales.length === 0) {
    //     return
    //   }

    //   const locales = nuxt.options.i18n.locales.map((locale) => {
    //     if (typeof locale === 'string') {
    //       return {
    //         code: locale,
    //         name: locale,
    //         file: `${locale}.json`,
    //       }
    //     }
    //     return {
    //       code: locale.code,
    //       name: locale.name,
    //       file: `${locale.code}.json`,
    //     }
    //   })
    //   console.log('locales', locales)

    //   const { resolve } = createResolver(import.meta.url)
    //   nuxt.hook('i18n:registerModule', (register) => {
    //     console.log('i18n:registerModule')
    //     register({
    //       langDir: resolve('./i18n/locales'),
    //       locales,
    //     })
    //   })
    // },
  ],
  devtools: {
    enabled: dev,
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
