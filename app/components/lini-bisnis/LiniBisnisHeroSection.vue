<script setup lang="ts">
const heroImage = '/images/bisnis/bisnis-section.png'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

type HeroData = {
  background: string
  title: string
  subtitle: string
}

const props = withDefaults(defineProps<{ data: HeroData }>(), {
  data: () => ({
    background: '',
    title: '',
    subtitle: '',
  }),
})
</script>

<template>
  <section 
    class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-center" 
    aria-label="Lini Bisnis hero section"
  >
    <div class="absolute inset-0">
      <NuxtImg
        :src="props.data.background || heroImage"
        :alt="props.data.title || t('liniBisnisPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
        @error="(event) => applyFallback(event, heroImage)"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>

    <div class="relative z-10 container-main py-20 lg:py-28 flex items-center justify-center">
      <div class="text-center space-y-5">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {{ props.data.title || t('liniBisnisPage.hero.title') }}
        </h1>
        <!-- <p v-if="props.data.subtitle" class="text-base md:text-lg text-white/90">
          {{ props.data.subtitle }}
        </p> -->
      </div>
    </div>
  </section>
</template>

