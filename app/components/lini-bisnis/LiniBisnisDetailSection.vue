<script setup lang="ts">
import { findLiniBisnisBySlug } from '~/utils/liniBisnisData'
const pembibitanTop = '/images/bisnis/peternakan-pembibitan-1.jpg'
const pembibitanBackTop = '/images/bisnis/peternakan-pembibitan-2.jpg'
const pembibitanBackBottom = '/images/bisnis/peternakan-pembibitan-3.jpg'
const broilerTop = '/images/bisnis/peternakan-broiler-1.jpg'
const broilerBackTop = '/images/bisnis/peternakan-broiler-2.jpg'
const broilerBackBottom = '/images/bisnis/peternakan-broiler-3.jpg'
const petelurTop = '/images/bisnis/peternakan-telur-1.jpg'
const petelurBackTop = '/images/bisnis/peternakan-telur-2.jpg'
const petelurBackBottom = '/images/bisnis/peternakan-telur-3.jpg'
const penetasanTop = '/images/bisnis/penetasan-telur-1.jpg'
const penetasanBackTop = '/images/bisnis/penetasan-telur-2.jpg'
const penetasanBackBottom = '/images/bisnis/penetasan-telur-3.jpg'
const rpaTop = '/images/bisnis/rumah-potong-ayam-1.jpg'
const rpaBackTop = '/images/bisnis/rumah-potong-ayam-2.jpg'
const rpaBackBottom = '/images/bisnis/rumah-potong-ayam-3.jpg'
const { t } = useI18n()

type BusinessDetail = {
  slug: string
  title: string
  description: string
  ctaText: string
  images: string[]
}

interface Props {
  business: BusinessDetail
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openModal: []
}>()

const handleOpenModal = () => {
  emit('openModal')
}

const fallbackBusiness = computed(() => findLiniBisnisBySlug(props.business.slug))

const fallbackImageSet = computed(() => {
  const key = props.business.slug
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

const imageSet = computed(() => {
  const images = props.business.images.filter(Boolean)
  if (images.length >= 3) {
    return { top: images[0], backTop: images[1], backBottom: images[2] }
  }
  if (images.length === 2) {
    return { top: images[0], backTop: images[1], backBottom: images[1] }
  }
  if (images.length === 1) {
    return { top: images[0], backTop: images[0], backBottom: images[0] }
  }
  return fallbackImageSet.value
})

const fallbackDescriptions = computed(() => {
  const business = fallbackBusiness.value
  if (!business) return []
  return [t(business.description1Key), t(business.description2Key)]
})

const descriptionParts = computed(() => {
  const raw = (props.business.description || '').trim()
  const parts = raw ? raw.split(/\n+/).map((part) => part.trim()).filter(Boolean) : []
  if (parts.length) return parts
  if (fallbackDescriptions.value.length) return fallbackDescriptions.value
  return ['-']
})

const displayTitle = computed(() => {
  const business = fallbackBusiness.value
  return props.business.title || (business ? t(business.titleKey) : '-') || '-'
})

const displayCta = computed(() => {
  const business = fallbackBusiness.value
  return props.business.ctaText || (business ? t(business.buttonKey) : '') || 'Selengkapnya'
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
            {{ displayTitle }}
          </h3>

          <!-- Description Paragraphs -->
          <div class="space-y-4">
            <p
              v-for="(paragraph, index) in descriptionParts"
              :key="`${props.business.slug}-desc-${index}`"
              class="text-sm md:text-base text-[#4b5563] leading-relaxed text-justify"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- CTA Button -->
          <button
            type="button"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[#f6993c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#e88a2d]"
            @click="handleOpenModal"
          >
            <span>{{ displayCta }}</span>
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
