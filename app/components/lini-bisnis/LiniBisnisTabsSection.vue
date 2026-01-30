<script setup lang="ts">
const { t } = useI18n()

interface TabsItem {
  slug: string
  label: string
}

interface Props {
  activeSlug: string
  tabs: TabsItem[]
}

const props = defineProps<Props>()

const tabsRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const scrollTabs = (direction: 'left' | 'right') => {
  if (!tabsRef.value) return
  const offset = direction === 'left' ? -240 : 240
  tabsRef.value.scrollBy({ left: offset, behavior: 'smooth' })
}

const updateScrollState = () => {
  if (!tabsRef.value) {
    canScrollLeft.value = false
    canScrollRight.value = false
    return
  }
  const { scrollLeft, scrollWidth, clientWidth } = tabsRef.value
  canScrollLeft.value = scrollLeft > 4
  canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 4
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScrollState)
})

watch(
  () => props.tabs.length,
  () => {
    nextTick(() => updateScrollState())
  }
)
</script>

<template>
  <section class="bg-[#fdeee0] py-12 md:py-16" aria-label="Business lines navigation">
    <div class="container-main">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-10">
        {{ t('liniBisnisPage.section.title') }}
      </h2>

      <!-- Tab Chips -->
      <div class="relative">
        <button
          type="button"
          class="absolute left-0 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary bg-white/90 shadow-md transition"
          :class="canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          aria-label="Scroll tabs left"
          @click="scrollTabs('left')"
        >
          <i class="mdi mdi-chevron-left text-xl" aria-hidden="true"></i>
        </button>
        <div
          class="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#fdeee0] to-transparent"
          :class="canScrollLeft ? 'opacity-100' : 'opacity-0'"
        />
        <div
          ref="tabsRef"
          class="flex flex-nowrap gap-2 md:gap-4 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar px-12 md:px-14"
          @scroll="updateScrollState"
        >
        <NuxtLink
          v-for="tab in props.tabs"
          :key="tab.slug"
          :to="`/lini-bisnis/${tab.slug}`"
          class="px-3.5 py-2 md:px-6 md:py-3 rounded-full text-[13px] md:text-base font-semibold transition-all duration-300 border-2 flex-shrink-0 text-center"
          :class="[
            props.activeSlug === tab.slug
              ? 'bg-primary text-white border-primary shadow-lg'
              : 'bg-white text-[#1f2937] border-gray-300 hover:border-primary hover:text-primary'
          ]"
          :aria-current="props.activeSlug === tab.slug ? 'true' : undefined"
        >
          {{ tab.label }}
        </NuxtLink>
        </div>
        <div
          class="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#fdeee0] to-transparent"
          :class="canScrollRight ? 'opacity-100' : 'opacity-0'"
        />
        <button
          type="button"
          class="absolute right-0 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary bg-white/90 shadow-md transition"
          :class="canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          aria-label="Scroll tabs right"
          @click="scrollTabs('right')"
        >
          <i class="mdi mdi-chevron-right text-xl" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
