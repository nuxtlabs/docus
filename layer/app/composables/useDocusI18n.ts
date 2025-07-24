import en from '../../i18n/locales/en.json'
import type { LocaleObject } from '@nuxtjs/i18n'

export const useDocusI18n = () => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      locale: ref('en'),
      locales: ref<LocaleObject<string>[]>([]),
      localePath: (path: string) => path,
      switchLocalePath: () => {},
      t: (key: string): string => {
        const path = key.split('.')
        return path.reduce((acc: unknown, curr) => (acc as Record<string, unknown>)?.[curr], en) as string
      },
    }
  }

  const { locale, locales, t } = useI18n()

  return {
    isEnabled,
    locale,
    locales,
    t,
    localePath: useLocalePath(),
    switchLocalePath: useSwitchLocalePath(),
  }
}
