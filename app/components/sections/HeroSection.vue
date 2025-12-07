<script setup lang="ts">
const { t } = useI18n()
import heroImage from '~/assets/images/most-top.png'
</script>

<template>
  <section
    id="beranda"
    class="relative min-h-screen flex items-center justify-start overflow-hidden"
    aria-label="Hero section"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroImage"
        :alt="t('hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-main py-20 lg:py-32">
      <div class="max-w-3xl text-left xl:ml-[-34rem]">
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {{ t('hero.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6">
          {{ t('hero.subtitle') }}
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <!-- CTA Button -->
        <UiBaseButton
          variant="primary"
          size="lg"
          class="group bg-[#f6993c] hover:bg-[#f28a26] text-white border-none"
          :aria-label="t('hero.cta')"
        >
          <span>{{ t('hero.cta') }}</span>
          <span
            class="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#f6993c] transition-transform group-hover:translate-x-1 shadow-sm"
            aria-hidden="true"
          >
            <i class="mdi mdi-arrow-top-right text-lg"></i>
          </span>
        </UiBaseButton>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div class="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>
