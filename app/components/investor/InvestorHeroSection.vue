<script setup lang="ts">
const heroImage = '/images/laporan.png'
const { applyFallback } = useImageFallback()
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden" :aria-label="title">
    <div class="absolute inset-0">
      <NuxtImg
        :src="heroImage"
        :alt="title"
        class="w-full h-full object-cover"
        loading="eager"
        @error="(event) => applyFallback(event, heroImage)"
      />
      <div class="absolute inset-0 bg-black/45" />
    </div>

    <div class="relative z-10 container-main py-16 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-white">{{ title }}</h1>
    </div>
  </section>
</template>

