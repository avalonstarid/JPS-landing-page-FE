<script setup lang="ts">
import heroImage from '~/assets/images/berita/headline-image.png'

const { t } = useI18n()
</script>

<template>
  <section class="relative overflow-hidden bg-[#0f1c3f] min-h-screen flex items-center" aria-label="Berita hero section">
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        :alt="t('beritaPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
    </div>

    <div class="relative z-10 container-main py-20 lg:py-28">
      <div class="max-w-3xl space-y-5 xl:ml-[-26rem]">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 backdrop-blur">
          <span class="text-sm font-semibold uppercase tracking-wide">{{ t('beritaPage.hero.badge') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          {{ t('beritaPage.hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
          {{ t('beritaPage.hero.subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>
