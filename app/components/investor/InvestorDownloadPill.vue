<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    href?: string
    newTab?: boolean
    download?: boolean
  }>(),
  {
    label: 'Unduh Laporan',
    href: '#',
    newTab: false,
    download: false,
  }
)
</script>

<template>
  <a
    :href="href"
    :target="newTab ? '_blank' : undefined"
    :rel="newTab ? 'noopener' : undefined"
    :download="download ? '' : undefined"
    class="inline-flex items-center gap-2 rounded-full bg-[#3A52A3] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow"
  >
    <span>{{ label }}</span>
    <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-[#f6993c]">
      <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v10m0 0l4-4m-4 4l-4-4" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 20h14" />
      </svg>
    </span>
  </a>
</template>
