import type { LocaleObject } from '@nuxtjs/i18n'
import en from '../../i18n/locales/en.json'

export const useDocusI18n = () => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      locale: ref('en'),
      locales: [],
      localePath: (path: string) => path,
      switchLocalePath: () => {},
      t: (key: string): string => {
        const path = key.split('.')
        return path.reduce((acc: unknown, curr) => (acc as Record<string, unknown>)?.[curr], en) as string
      },
    }
  }

  const { locale, t } = useI18n()
  const filteredLocales = (config.docus as { filteredLocales: LocaleObject<string>[] })?.filteredLocales || []

  return {
    isEnabled,
    locale,
    locales: filteredLocales,
    t,
    localePath: useLocalePath(),
    switchLocalePath: useSwitchLocalePath(),
  }
}
