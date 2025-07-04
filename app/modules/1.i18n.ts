import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'i18n',
  },
  async setup(_options, nuxt) {
    if (!nuxt.options.i18n) {
      return
    }

    const { locales } = nuxt.options.i18n

    if (locales && Array.isArray(locales) && locales.length) {
      // @ts-expect-error __LOCALES__ is a docus specific variable
      globalThis.__LOCALES__ = locales
    }
  },
})
