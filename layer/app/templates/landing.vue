<script setup lang="ts">
import type { PageMeta } from '#app'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, isEnabled } = useDocusI18n()

definePageMeta({
  layout: false,
})

// Dynamic collection name based on i18n status
const collectionName = computed(() => isEnabled.value ? `landing_${locale.value}` : 'landing')

const { data: page } = await useAsyncData(collectionName.value, () => queryCollection(collectionName.value as keyof Collections).path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

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

const layoutProps = computed(
  () => !(page.value as { layout?: PageMeta['layout'] })?.layout
    ? { name: 'docus' as PageMeta['layout'], isLanding: true }
    : { name: (page.value as { layout?: PageMeta['layout'] })?.layout },
)
</script>

<template>
  <NuxtLayout v-bind="layoutProps">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </NuxtLayout>
</template>
