<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash, joinURL } from 'ufo'

const route = useRoute()
const config = useRuntimeConfig().public

const locale = ref('')
if (config.i18n) {
  const i18n = useI18n()
  locale.value = i18n.locale.value
}

console.log('locale', locale.value)

watch(locale, () => {
  console.log('locale in watch', locale.value)
})

const collectionName = computed(() => locale.value ? `landing_${locale.value}` : 'landing')
const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const { data: page } = await useAsyncData(collectionName.value, () => queryCollection(collectionName.value as keyof Collections).path(path.value).first())

console.log('page', page.value)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Reconsider it once this is implemented: https://github.com/nuxt/content/issues/3419
const prose = page.value.meta.prose
const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})

if (page.value?.seo?.ogImage) {
  useSeoMeta({
    ogImage: page.value.seo.ogImage,
    twitterImage: page.value.seo.ogImage,
  })
}
else {
  defineOgImageComponent('Landing', {
    title,
    description,
  })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="prose || false"
  />
</template>
