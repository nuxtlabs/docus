import { createSharedComposable } from '@vueuse/core'

export const useDocusI18n = createSharedComposable(() => {
  const config = useRuntimeConfig().public
  const locale = ref('')
  const locales = ref([])
  const isEnabled = ref(!!config.i18n)

  if (isEnabled.value) {
    const i18n = useI18n()
    locale.value = i18n.locale.value
    locales.value = i18n.locales.value
  }

  function localePath(path: string) {
    if (isEnabled.value) {
      return useLocalePath()(path)
    }

    return path
  }

  function switchLocalePath(locale: string) {
    if (!isEnabled.value) {
      return
    }

    return useSwitchLocalePath()(locale)
  }

  watch(currentLocale, () => {
    console.log('locale in watch', currentLocale.value)
  })

  return {
    isEnabled,
    localePath,
    locale,
    locales,
    switchLocalePath,
  }
})
