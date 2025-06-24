<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { kebabCase } from 'scule'
import { addPrerenderPath } from '../utils/prerender'
import { findPageHeadline } from '@nuxt/content/utils'

definePageMeta({
  layout: 'docs',
})

const route = useRoute()
const appConfig = useAppConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const [{ data: page }, { data: surround }] = await Promise.all([
  useAsyncData(kebabCase(route.path), () => queryCollection('docs').path(route.path).first()),
  useAsyncData(`${kebabCase(route.path)}-surround`, () => {
    return queryCollectionItemSurroundings('docs', route.path, {
      fields: ['description'],
    })
  }),
])

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Add the page path to the prerender list
addPrerenderPath(`/raw${route.path}.md`)

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path))
defineOgImageComponent('Docs', {
  headline: headline.value,
})

const editLink = computed(() => {
  return appConfig.github && `${appConfig.github.url}/edit/${appConfig.github.branch}/content/${page.value?.stem}.${page.value?.extension}`
})
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :headline="headline"
      :ui="{
        wrapper: 'flex-row items-center flex-wrap justify-between',
      }"
    >
      <template #links>
        <DocsPageHeaderLinks />
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator>
        <div
          v-if="editLink"
          class="flex items-center gap-2 text-sm text-muted"
        >
          <UButton
            variant="link"
            color="neutral"
            :to="editLink"
            target="_blank"
            icon="i-lucide-pen"
            :ui="{ leadingIcon: 'size-4' }"
          >
            Edit this page
          </UButton>
          or
          <UButton
            variant="link"
            color="neutral"
            :to="`${appConfig.github.url}/issues/new/choose`"
            target="_blank"
            icon="i-lucide-alert-circle"
            :ui="{ leadingIcon: 'size-4' }"
          >
            Report an issue
          </UButton>
        </div>
      </USeparator>
      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        :title="appConfig.toc?.title || 'Table of Contents'"
        :links="page.body?.toc?.links"
      >
        <template #bottom>
          <DocsAsideRightBottom />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
