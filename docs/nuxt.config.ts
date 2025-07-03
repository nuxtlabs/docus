export default defineNuxtConfig({
  modules: ['@nuxtjs/plausible', '@nuxtjs/i18n'],
  css: ['../app/assets/css/main.css'],
  site: {
    name: 'Docus',
  },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'fr',
      name: 'Français',
    }],
  },
  llms: {
    domain: 'https://docus.dev',
    title: 'Docus',
    description: 'Write beautiful docs with Markdown.',
    full: {
      title: 'Docus',
      description: 'Write beautiful docs with Markdown.',
    },
  },

})
