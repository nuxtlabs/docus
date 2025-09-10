import { inject, pageview } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  const route = useRoute()

  onNuxtReady(() => {
    inject({
      disableAutoTrack: true,
      framework: 'nuxt',
    })
    nuxtApp.hooks.hook('page:finish', () => {
      pageview({
        route: route.matched[0]?.path || route.path,
        path: route.path,
      })
    })
  })
})