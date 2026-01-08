<script setup lang="ts">
import InvestorDownloadPill from '~/components/investor/InvestorDownloadPill.vue'

defineProps<{
  imageUrl: string
  title: string
  href?: string
  download?: boolean
}>()
</script>

<template>
  <div class="rounded-2xl bg-white shadow-[0_12px_40px_-25px_rgba(0,0,0,0.35)] overflow-hidden">
    <div class="h-52 bg-gray-100">
      <img :src="imageUrl" :alt="title" class="h-full w-full object-cover" loading="lazy" />
    </div>
    <div class="p-5 space-y-4">
      <p class="text-lg font-semibold text-[#1f2937] leading-snug">
        {{ title }}
      </p>
      <InvestorDownloadPill :href="href" :download="download" />
    </div>
  </div>
</template>
