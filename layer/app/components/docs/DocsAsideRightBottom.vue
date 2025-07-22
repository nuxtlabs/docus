<script setup lang="ts">
const appConfig = useAppConfig()
const { t } = useDocusI18n()
</script>

<template>
  <div
    v-if="appConfig.toc?.bottom?.links?.length"
    class="hidden lg:block space-y-6"
  >
    <USeparator type="dashed" />

    <UPageLinks
      :title="appConfig.toc?.bottom?.title || t('docs.links')"
      :links="appConfig.toc?.bottom?.links"
    />
  </div>
</template>
