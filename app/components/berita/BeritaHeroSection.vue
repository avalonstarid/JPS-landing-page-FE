<script setup lang="ts">
const logoJps = '/images/logo-jps.png'
const heroFallbackImage = '/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

type HeroItem = {
  id: string
  title: string
  image: string
  company?: string
  timeAgo?: string
}

const props = withDefaults(defineProps<{ items?: HeroItem[] }>(), {
  items: () => [],
})

const heroItems = computed(() => {
  if (props.items.length) return props.items
  return [
    {
      id: 'hero-fallback',
      title: t('beritaPage.hero.title'),
      image: heroFallbackImage,
      company: 'PT Janu Putra Sejahtera',
      timeAgo: '',
    },
  ]
})

const activeIndex = ref(0)

watch(heroItems, () => {
  activeIndex.value = 0
})

const activeItem = computed(() => heroItems.value[activeIndex.value] ?? heroItems.value[0])
const canNavigate = computed(() => heroItems.value.length > 1)
const activeImage = computed(() => activeItem.value.image || heroFallbackImage)

const goPrev = () => {
  if (!canNavigate.value) return
  activeIndex.value = (activeIndex.value - 1 + heroItems.value.length) % heroItems.value.length
}

const goNext = () => {
  if (!canNavigate.value) return
  activeIndex.value = (activeIndex.value + 1) % heroItems.value.length
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-end" aria-label="Berita hero section">
    <div class="absolute inset-0">
      <NuxtImg
        :src="activeImage"
        :alt="t('beritaPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
        @error="(event) => applyFallback(event, heroFallbackImage)"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
    </div>

    <div class="relative z-10 container-main pb-16 md:pb-20 lg:pb-24 w-full">
      <div class="flex items-end justify-between gap-6">
        <button
          v-if="canNavigate"
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
              <NuxtImg :src="logoJps" alt="PT Janu Putra Sejahtera" class="w-9 h-9 rounded-full object-cover" />
              <span v-if="activeItem.company" class="font-semibold text-white">{{ activeItem.company }}</span>
              <span v-if="activeItem.company && activeItem.timeAgo" class="text-white/70">&bull;</span>
              <span v-if="activeItem.timeAgo" class="text-white/80">{{ activeItem.timeAgo }}</span>
            </div>
          </div>
        </div>

        <button
          v-if="canNavigate"
          type="button"
          class="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary-500 shadow-lg hover:bg-white"
          aria-label="Berikutnya"
          @click="goNext"
        >
          <i class="mdi mdi-arrow-right text-2xl" aria-hidden="true" />
        </button>
      </div>

      <div v-if="canNavigate" class="mt-8 flex justify-center gap-4 md:hidden">
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
