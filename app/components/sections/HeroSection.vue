<script setup lang="ts">
import heroImage from '~/assets/images/most-top.png'

const { t, tm, rt } = useI18n()
const activeWordIndex = ref(0)

const rotatingWords = computed(() => {
  const words = tm('hero.rotatingWords')
  if (!Array.isArray(words)) return []
  return words.map((word) => rt(word))
})

let rotateTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (!rotatingWords.value.length) return
  rotateTimer = setInterval(() => {
    activeWordIndex.value = (activeWordIndex.value + 1) % rotatingWords.value.length
  }, 2000)
})

onBeforeUnmount(() => {
  if (rotateTimer) clearInterval(rotateTimer)
})
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
      <div class="text-left xl:ml-[-14rem]">
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {{ t('hero.title') }}
        </h1>

        <!-- Subtitle -->
        <div class="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6 flex flex-nowrap gap-2 whitespace-nowrap">
          <span>{{ t('hero.subtitlePrefix') }}</span>
          <span class="relative inline-flex h-[1.3em] overflow-hidden">
            <Transition name="hero-rotate" mode="out-in">
              <span
                :key="activeWordIndex"
                class="text-primary-500 inline-flex items-center"
              >
                {{ rotatingWords[activeWordIndex] }}
              </span>
            </Transition>
          </span>
        </div>

        <!-- Description -->
        <p
          v-if="t('hero.description')"
          class="text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed"
        >
          {{ t('hero.description') }}
        </p>

        <!-- CTA Button -->
        <UiBaseButton
          variant="primary"
          size="lg"
          class="group bg-[#f6993c] hover:bg-[#f28a26] text-white border-none"
          :aria-label="t('hero.cta')"
          href="/tentang-perusahaan"
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

<style scoped>
.hero-rotate-enter-active,
.hero-rotate-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.hero-rotate-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.hero-rotate-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.hero-rotate-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.hero-rotate-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
