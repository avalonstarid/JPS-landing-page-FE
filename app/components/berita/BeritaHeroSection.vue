<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
import { popularLayout } from '~/utils/beritaData'

const { t } = useI18n()

const popularItems = [
  popularLayout.primary,
  popularLayout.highlight,
  ...popularLayout.stacked,
]

const activeIndex = ref(0)

const activeItem = computed(() => popularItems[activeIndex.value] ?? popularItems[0])

const goPrev = () => {
  activeIndex.value = (activeIndex.value - 1 + popularItems.length) % popularItems.length
}

const goNext = () => {
  activeIndex.value = (activeIndex.value + 1) % popularItems.length
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-end" aria-label="Berita hero section">
    <div class="absolute inset-0">
      <img
        :src="activeItem.image"
        :alt="t('beritaPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
    </div>

    <div class="relative z-10 container-main pb-16 md:pb-20 lg:pb-24 w-full">
      <div class="flex items-end justify-between gap-6">
        <button
          type="button"
          class="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-lg hover:bg-white"
          aria-label="Sebelumnya"
          @click="goPrev"
        >
          <i class="mdi mdi-arrow-left text-2xl" aria-hidden="true" />
        </button>

        <div class="flex-1 max-w-5xl">
          <div class="space-y-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {{ activeItem.title }}
            </h1>
            <div class="h-px bg-white/60 w-full max-w-3xl" />
            <div class="flex flex-wrap items-center gap-3 text-white/90">
              <img :src="logoJps" alt="PT Janu Putra Sejahtera" class="w-9 h-9 rounded-full object-cover" />
              <span class="font-semibold text-white">{{ activeItem.company }}</span>
              <span class="text-white/70">•</span>
              <span class="text-white/80">{{ activeItem.timeAgo }}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-lg hover:bg-white"
          aria-label="Berikutnya"
          @click="goNext"
        >
          <i class="mdi mdi-arrow-right text-2xl" aria-hidden="true" />
        </button>
      </div>

      <div class="mt-8 flex justify-center gap-4 md:hidden">
        <button
          type="button"
          class="h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-lg hover:bg-white"
          aria-label="Sebelumnya"
          @click="goPrev"
        >
          <i class="mdi mdi-arrow-left text-2xl" aria-hidden="true" />
        </button>
        <button
          type="button"
          class="h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-lg hover:bg-white"
          aria-label="Berikutnya"
          @click="goNext"
        >
          <i class="mdi mdi-arrow-right text-2xl" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>
