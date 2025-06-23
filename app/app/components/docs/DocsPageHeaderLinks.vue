<template>
  <UButtonGroup>
    <UButton
      label="Copy page"
      :icon="copyStatus === 'copied' ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      color="neutral"
      variant="outline"
      :loading="copyStatus === 'copying'"
      size="xs"
      :ui="{
        leadingIcon: [copyStatus === 'copied' ? 'text-primary' : 'text-neutral', 'size-3.5'],
      }"
      @click="copyPage"
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
        size="sm"
        color="neutral"
        variant="outline"
      />
    </UDropdownMenu>
  </UButtonGroup>
</template>

<script setup lang="ts">
const route = useRoute()
const toast = useToast()
const copyStatus = ref<'idle' | 'copying' | 'copied'>('idle')

const markdownLink = computed(() => `${window?.location?.origin}/raw${route.path}.md`)

const items = [
  {
    label: 'Copy Markdown link',
    icon: 'i-lucide-link',
    onSelect() {
      copyToClipboard(markdownLink.value)
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

async function copyPage() {
  copyStatus.value = 'copying'
  const markdown = await $fetch<string>(markdownLink.value)
  copyToClipboard(markdown)
  copyStatus.value = 'copied'
  setTimeout(() => {
    copyStatus.value = 'idle'
  }, 2000)
}

function copyToClipboard(text: string) {
  // Fix for iOS Safari: https://stackoverflow.com/questions/62327358/javascript-clipboard-api-safari-ios-notallowederror-message
  setTimeout(async () => {
    await navigator.clipboard.writeText(text)
  }, 0)
}
</script>
