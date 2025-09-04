<script setup lang="ts">
import type { NuxtError } from '#app'
import type { PageCollections } from '@nuxt/content'
import * as locales from '@nuxt/ui-pro/locale'

const props = defineProps<{
  error: NuxtError
}>()

const localizedError = computed(() => {
  return {
    ...props.error,
    statusMessage: t('common.error.title'),
  }
})

const lang = computed(() => locales[locale.value as keyof typeof locales]?.code || 'en')
const dir = computed(() => locales[locale.value as keyof typeof locales]?.dir || 'ltr')

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
})

useSeoMeta({
  title: () => t('common.error.title'),
  description: () => t('common.error.description'),
})

const { locale, isEnabled, t } = useDocusI18n()

const collectionName = computed(() => isEnabled.value ? `docs_${locale.value}` : 'docs')

const { data: navigation } = await useAsyncData(`navigation_${collectionName.value}`, () => queryCollectionNavigation(collectionName.value as keyof PageCollections), {
  transform: (data) => {
    const rootResult = data.find(item => item.path === '/docs')?.children || data || []

    return rootResult.find(item => item.path === `/${locale.value}`)?.children || rootResult
  },
  watch: [locale],
})
const { data: files } = useLazyAsyncData(`search_${collectionName.value}`, () => queryCollectionSearchSections(collectionName.value as keyof PageCollections), {
  server: false,
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="localizedError" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
