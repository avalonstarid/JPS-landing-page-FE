<script setup lang="ts">
import type { LiniBisnis } from '~/utils/liniBisnisData'
import pembibitanTop from '~/assets/images/bisnis/peternakan-pembibitan-1.jpg'
import pembibitanBackTop from '~/assets/images/bisnis/peternakan-pembibitan-2.jpg'
import pembibitanBackBottom from '~/assets/images/bisnis/peternakan-pembibitan-3.jpg'
import broilerTop from '~/assets/images/bisnis/peternakan-broiler-1.jpg'
import broilerBackTop from '~/assets/images/bisnis/peternakan-broiler-2.jpg'
import broilerBackBottom from '~/assets/images/bisnis/peternakan-broiler-3.jpg'
import petelurTop from '~/assets/images/bisnis/peternakan-telur-1.jpg'
import petelurBackTop from '~/assets/images/bisnis/peternakan-telur-2.jpg'
import petelurBackBottom from '~/assets/images/bisnis/peternakan-telur-3.jpg'
import penetasanTop from '~/assets/images/bisnis/penetasan-telur-1.jpg'
import penetasanBackTop from '~/assets/images/bisnis/penetasan-telur-2.jpg'
import penetasanBackBottom from '~/assets/images/bisnis/penetasan-telur-3.jpg'
import rpaTop from '~/assets/images/bisnis/rumah-potong-ayam-1.jpg'
import rpaBackTop from '~/assets/images/bisnis/rumah-potong-ayam-2.jpg'
import rpaBackBottom from '~/assets/images/bisnis/rumah-potong-ayam-3.jpg'

const { t } = useI18n()

interface Props {
  business: LiniBisnis
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openModal: []
}>()

const handleOpenModal = () => {
  emit('openModal')
}

const imageSet = computed(() => {
  const key = props.business.slug ?? props.business.id
  const map: Record<string, { top: string; backTop: string; backBottom: string }> = {
    pembibitan: {
      top: pembibitanTop,
      backTop: pembibitanBackTop,
      backBottom: pembibitanBackBottom,
    },
    broiler: {
      top: broilerTop,
      backTop: broilerBackTop,
      backBottom: broilerBackBottom,
    },
    petelur: {
      top: petelurTop,
      backTop: petelurBackTop,
      backBottom: petelurBackBottom,
    },
    penetasan: {
      top: penetasanTop,
      backTop: penetasanBackTop,
      backBottom: penetasanBackBottom,
    },
    rpa: {
      top: rpaTop,
      backTop: rpaBackTop,
      backBottom: rpaBackBottom,
    },
  }
  return map[key] ?? map.pembibitan
})
</script>

<template>
  <section class="bg-[#fdeee0] pb-16 md:pb-24" aria-label="Business detail section">
    <div class="container-main">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <!-- Content Column -->
        <div class="space-y-6">
          <!-- Title -->
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92]">
            {{ t(props.business.titleKey) }}
          </h3>

          <!-- Description Paragraphs -->
          <div class="space-y-4">
            <p class="text-sm md:text-base text-[#4b5563] leading-relaxed text-justify">
              {{ t(props.business.description1Key) }}
            </p>
            <p class="text-sm md:text-base text-[#4b5563] leading-relaxed text-justify">
              {{ t(props.business.description2Key) }}
            </p>
          </div>

          <!-- CTA Button -->
          <button
            type="button"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[#f6993c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#e88a2d]"
            @click="handleOpenModal"
          >
            <span>{{ t(props.business.buttonKey) }}</span>
            <svg 
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        <!-- Image Stack Column -->
        <UiStackedImagePreview
          :top-src="imageSet.top"
          :back-top-src="imageSet.backTop"
          :back-bottom-src="imageSet.backBottom"
          top-alt="Interior kandang ayam"
          back-top-alt="Kandang ayam modern"
          back-bottom-alt="Fasilitas peternakan"
        />
      </div>
    </div>
  </section>
</template>
