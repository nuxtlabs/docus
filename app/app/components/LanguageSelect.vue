<script setup lang="ts">
const { locale, locales, switchLocalePath } = useDocusI18n()

const value = ref(locale.value)

const localeItems = computed(() => {
  return locales.value.map(locale => ({
    label: locale.name,
    value: locale.code,
  }))
})

// watch(current, (newLocale) => {
//   setLocaleCookie(newLocale)
// })
</script>

<template>
  <ClientOnly>
    <USelect
      v-model="value"
      class="w-32"
      :items="localeItems"
      @update:model-value="switchLocalePath"
    />
    <template #fallback>
      <div class="h-2 w-5" />
    </template>
  </ClientOnly>
</template>
