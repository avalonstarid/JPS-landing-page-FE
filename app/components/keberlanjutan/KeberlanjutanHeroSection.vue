<script setup lang="ts">
const heroImage = '/images/tinjauan/tinjauan-section.png'
const { applyFallback } = useImageFallback()

interface HeroData {
  background?: string
  title?: string
  subtitle?: string
}

const props = defineProps<{
  data?: HeroData
}>()

const heroTitle = computed(() => props.data?.title || 'Keberlanjutan')
const heroSubtitle = computed(() => props.data?.subtitle || '')
const heroBackground = computed(() => props.data?.background || heroImage)
</script>

<template>
  <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
    <div class="absolute inset-0">
      <NuxtImg
        :src="heroBackground"
        alt="Keberlanjutan"
        class="h-full w-full object-cover"
        loading="eager"
        @error="(event) => applyFallback(event, heroImage)"
      />
      <div class="absolute inset-0 bg-black/45" />
    </div>
    <div class="relative z-10 container-main py-16 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-white">{{ heroTitle }}</h1>
      <p v-if="heroSubtitle" class="mt-3 text-lg md:text-2xl font-semibold text-white/95">
        {{ heroSubtitle }}
      </p>
    </div>
  </section>
</template>
