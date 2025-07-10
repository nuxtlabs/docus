
export const useDocusI18n = async () => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      locale: ref('en'),
      locales: ref([]),
      localePath: (path: string) => path,
      switchLocalePath: () => {},
      t: () => '',
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
