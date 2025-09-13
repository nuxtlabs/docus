<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <DocsAsideLeftTop />

          <DocsAsideLeftBody />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
