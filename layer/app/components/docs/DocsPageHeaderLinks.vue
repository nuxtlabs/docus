<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy, copied } = useClipboard()

const markdownLink = computed(() => `${window?.location?.origin}/raw${route.path}.md`)

const items = [
  {
    label: 'Copy Markdown link',
    icon: 'i-lucide-link',
    onSelect() {
      copy(markdownLink.value)

      toast.add({
        title: 'Markdown link copied to clipboard',
        icon: 'i-lucide-check-circle',
        color: 'success',
      })
    },
  },
  {
    label: 'View as Markdown',
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    to: markdownLink.value,
  },
  {
    label: 'Open in ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${markdownLink.value} so I can ask questions about it.`)}`,
  },
  {
    label: 'Open in Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${markdownLink.value} so I can ask questions about it.`)}`,
  },
]
</script>

<template>
  <UButtonGroup size="sm">
    <UButton
      label="Copy page"
      :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      color="neutral"
      variant="outline"
      :ui="{
        leadingIcon: [copied ? 'text-primary' : 'text-neutral', 'size-3.5'],
      }"
      @click="copy(markdownLink)"
    />

    <UDropdownMenu
      size="sm"
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        icon="i-lucide-chevron-down"
        color="neutral"
        variant="outline"
      />
    </UDropdownMenu>
  </UButtonGroup>
</template>
