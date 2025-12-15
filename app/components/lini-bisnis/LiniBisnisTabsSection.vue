<script setup lang="ts">
import { tabConfig } from '~/utils/liniBisnisData'

const { t } = useI18n()
const router = useRouter()

interface Props {
  activeSlug: string
}

const props = defineProps<Props>()

const handleTabClick = (slug: string) => {
  router.push(`/lini-bisnis/${slug}`)
}
</script>

<template>
  <section class="bg-[#fdeee0] py-12 md:py-16" aria-label="Business lines navigation">
    <div class="container-main">
      <!-- Section Title -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d4f92] text-center mb-8 md:mb-10">
        {{ t('liniBisnisPage.section.title') }}
      </h2>

      <!-- Tab Chips -->
      <div class="flex flex-wrap justify-center gap-3 md:gap-4">
        <button
          v-for="tab in tabConfig"
          :key="tab.slug"
          type="button"
          class="px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border-2"
          :class="[
            props.activeSlug === tab.slug
              ? 'bg-[#3d4f92] text-white border-[#3d4f92] shadow-lg'
              : 'bg-white text-[#1f2937] border-gray-300 hover:border-[#3d4f92] hover:text-[#3d4f92]'
          ]"
          :aria-current="props.activeSlug === tab.slug ? 'true' : undefined"
          @click="handleTabClick(tab.slug)"
        >
          {{ t(tab.labelKey) }}
        </button>
      </div>
    </div>
  </section>
</template>

