export const useDocusI18n = () => {
  const config = useRuntimeConfig().public
  const isEnabled = ref(!!config.i18n)

  if (!isEnabled.value) {
    return {
      isEnabled,
      locale: ref('en'),
      locales: ref([]),
      localePath: (path: string) => path,
      switchLocalePath: () => {},
    }
  }

  const { locale, locales } = useI18n()

  return {
    isEnabled,
    locale,
    locales,
    localePath: useLocalePath(),
    switchLocalePath: useSwitchLocalePath(),
  }
}
