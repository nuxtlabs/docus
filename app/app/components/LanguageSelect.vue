<script setup lang="ts">
const { locale, locales, switchLocalePath } = useDocusI18n()
</script>

<template>
  <ULocaleSelect
    v-model="locale"
    :locales="locales"
    @update:model-value="navigateTo(switchLocalePath($event))"
  />
</template>
