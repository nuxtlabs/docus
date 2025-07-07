import { createSharedComposable } from '@vueuse/core'

export const useDocusI18n = createSharedComposable(() => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      localePath: (path: string) => path,
      switchLocalePath: () => {},
      locale: '',
      locales: [],
    }
  }

  const { locale, locales } = useI18n()

  return {
    isEnabled,
    localePath: useLocalePath(),
    locale,
    locales,
    switchLocalePath: useSwitchLocalePath(),
  }
})
