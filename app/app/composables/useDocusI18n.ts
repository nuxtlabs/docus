export const useDocusI18n = () => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      localePath: (path: string) => path,
      switchLocalePath: () => {},
      locale: ref('en'),
      locales: ref([]),
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
}
