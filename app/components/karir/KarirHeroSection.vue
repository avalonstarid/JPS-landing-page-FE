<script setup lang="ts">
const heroImage = '/images/karir/karir-section.jpg'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface HeroData {
  background?: string
  title?: string
  subtitle?: string
}

const props = defineProps<{
  data?: HeroData
}>()

const heroTitle = computed(() => props.data?.title || t('karirPage.hero.title'))
const heroSubtitle = computed(() => props.data?.subtitle || '')
const heroBackground = computed(() => props.data?.background || heroImage)
</script>

<template>
  <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-center" aria-label="Karir hero section">
    <div class="absolute inset-0">
      <NuxtImg
        :src="heroBackground"
        :alt="t('karirPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
        @error="(event) => applyFallback(event, heroImage)"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>

    <div class="relative z-10 container-main py-20 lg:py-28 flex items-center justify-center">
      <div class="text-center space-y-5">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {{ heroTitle }}
        </h1>
        <!-- <p v-if="heroSubtitle" class="text-lg md:text-2xl font-semibold text-white/95 max-w-3xl mx-auto">
          {{ heroSubtitle }}
        </p> -->
      </div>
    </div>
  </section>
</template>

