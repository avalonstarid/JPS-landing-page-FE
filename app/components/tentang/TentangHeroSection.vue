<script setup lang="ts">
import heroImage from '~/assets/images/tentang/tentang-section.png'

const { t } = useI18n()

const stats = [
  { key: 'facilities', icon: 'building' },
  { key: 'businessLines', icon: 'business' },
  { key: 'products', icon: 'product' },
  { key: 'employees', icon: 'people' },
]

const statGradients = [
  { from: '#F6993C', to: '#F4B678' },
  { from: '#F6C43C', to: '#E4C56F' },
  { from: '#F6E63C', to: '#E5DC73' },
  { from: '#FDED94', to: '#EBE2AF' },
] as const

const statStyle = (index: number) => {
  const gradient = statGradients[index] ?? statGradients[0]
  return {
    backgroundImage: `linear-gradient(180deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
  }
}
</script>

<template>
  <section class="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
    <!-- Background Image -->
    <img
      :src="heroImage"
      :alt="t('tentangPage.hero.imageAlt')"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Gradient Overlay - matching design with brownish tint -->
    <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

    <!-- Content - Left Aligned -->
    <div class="relative z-10 container-main w-full">
      <!-- Title & Subtitle - Left Aligned -->
      <div class="text-left mb-8 md:mb-10 max-w-2xl">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {{ t('tentangPage.hero.title') }}
        </h1>
        <p class="text-base md:text-xl text-white/90">
          {{ t('tentangPage.hero.subtitle') }}
        </p>
      </div>

      <!-- Stats Cards - Left Aligned -->
      <div class="flex flex-wrap justify-start gap-3 md:gap-4">
        <div
          v-for="(stat, index) in stats"
          :key="stat.key"
          class="rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 min-w-[120px] md:min-w-[140px] duration-300 hover:-translate-y-2"
          :style="statStyle(index)"
        >
          <!-- Icon -->
          <div class="flex-shrink-0">
            <template v-if="stat.icon === 'building'">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </template>
            <template v-else-if="stat.icon === 'business'">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </template>
            <template v-else-if="stat.icon === 'product'">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </template>
            <template v-else-if="stat.icon === 'people'">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </template>
          </div>
          <!-- Value & Label -->
          <div class="">
            <p class="text-lg md:text-xl font-bold leading-tight">
              {{ t(`tentangPage.hero.stats.${stat.key}.value`) }}
            </p>
            <p class="text-xs md:text-sm opacity-90">
              {{ t(`tentangPage.hero.stats.${stat.key}.label`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
