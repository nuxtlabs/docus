<script setup lang="ts">
const { locale, locales, switchLocalePath } = useDocusI18n()

const value = ref(locale.value)

const localeItems = computed(() => {
  return locales.value.map(locale => ({
    label: locale.name,
    value: locale.code,
  }))
})
</script>

<template>
  <ClientOnly>
    <USelect
      v-model="value"
      class="w-32"
      :items="localeItems"
      @update:model-value="navigateTo(switchLocalePath(value))"
    />
    <template #fallback>
      <div class="h-2 w-5" />
    </template>
  </ClientOnly>
</template>
