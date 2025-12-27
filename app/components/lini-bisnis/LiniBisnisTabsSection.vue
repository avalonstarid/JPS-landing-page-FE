<script setup lang="ts">
import { tabConfig } from '~/utils/liniBisnisData'

const { t } = useI18n()
const router = useRouter()

interface Props {
  activeSlug: string
}

const props = defineProps<Props>()

const tabsRef = ref<HTMLElement | null>(null)

const handleTabClick = (slug: string) => {
  router.push(`/lini-bisnis/${slug}`)
}

const scrollTabs = (direction: 'left' | 'right') => {
  if (!tabsRef.value) return
  const offset = direction === 'left' ? -220 : 220
  tabsRef.value.scrollBy({ left: offset, behavior: 'smooth' })
}
</script>

<template>
  <section class="bg-[#fdeee0] py-12 md:py-16" aria-label="Business lines navigation">
    <div class="container-main">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8 md:mb-10">
        {{ t('liniBisnisPage.section.title') }}
      </h2>

      <!-- Tab Chips -->
      <div class="flex items-center justify-center gap-2 md:gap-4">
        <button
          type="button"
          class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary bg-white/80"
          aria-label="Scroll tabs left"
          @click="scrollTabs('left')"
        >
          <i class="mdi mdi-chevron-left text-lg" aria-hidden="true"></i>
        </button>
        <div
          ref="tabsRef"
          class="flex flex-nowrap gap-2 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap scroll-smooth no-scrollbar"
        >
        <button
          v-for="tab in tabConfig"
          :key="tab.slug"
          type="button"
          class="px-3.5 py-2 md:px-6 md:py-3 rounded-full text-[13px] md:text-base font-semibold transition-all duration-300 border-2 flex-shrink-0"
          :class="[
            props.activeSlug === tab.slug
              ? 'bg-primary text-white border-primary shadow-lg'
              : 'bg-white text-[#1f2937] border-gray-300 hover:border-primary hover:text-primary'
          ]"
          :aria-current="props.activeSlug === tab.slug ? 'true' : undefined"
          @click="handleTabClick(tab.slug)"
        >
          {{ t(tab.labelKey) }}
        </button>
        </div>
        <button
          type="button"
          class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary bg-white/80"
          aria-label="Scroll tabs right"
          @click="scrollTabs('right')"
        >
          <i class="mdi mdi-chevron-right text-lg" aria-hidden="true"></i>
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
