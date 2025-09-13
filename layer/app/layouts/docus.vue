<script setup lang="ts">
import type { PageMeta } from '#app'

const props = defineProps<{
  isLanding?: boolean
}>()

const name = computed(() => (
  props.isLanding
    ? 'landing'
    : 'docs'
) as PageMeta['layout'])
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtLayout :name>
      <slot />
    </NuxtLayout>
  </UMain>

  <AppFooter />
</template>
