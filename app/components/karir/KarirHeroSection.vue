<script setup lang="ts">
import heroImage from '~/assets/images/karir/karir-section.jpg'

const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-center" aria-label="Karir hero section">
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        :alt="t('karirPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>

    <div class="relative z-10 container-main py-20 lg:py-28 flex items-center justify-center">
      <div class="text-center space-y-5">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {{ t('karirPage.hero.title') }}
        </h1>
      </div>
    </div>
  </section>
</template>

