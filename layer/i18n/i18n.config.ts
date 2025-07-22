export default defineI18nConfig(async () => {
  const config = useRuntimeConfig().public

  const messages: Record<string, Record<string, never>> = {}
  await Promise.all(
    config.i18n.locales.map(async (locale) => {
      const localeFile = await import(`./locales/${locale.code}.json`)
      messages[locale.code] = localeFile.default
    }),
  )

  return {
    messages,
  }
})
