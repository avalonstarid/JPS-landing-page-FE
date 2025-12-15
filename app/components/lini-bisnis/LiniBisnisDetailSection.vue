<script setup lang="ts">
import type { LiniBisnis } from '~/utils/liniBisnisData'
import imageMostTop from '~/assets/images/bisnis/bisnis-most-top.png'
import imageBehindTop from '~/assets/images/bisnis/bisnis-behind-top.png'
import imageBehindBottom from '~/assets/images/bisnis/bisnis-behind-bottom.png'

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
</script>

<template>
  <section class="bg-[#fdeee0] pb-16 md:pb-24" aria-label="Business detail section">
    <div class="container-main">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <!-- Content Column -->
        <div class="space-y-6">
          <!-- Title -->
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2937]">
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
        <div class="relative w-full aspect-[4/3] lg:aspect-square">
          <!-- Behind Bottom Image (largest, most behind) -->
          <div 
            class="absolute right-0 bottom-0 w-[70%] md:w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              :src="imageBehindBottom"
              alt="Fasilitas peternakan"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Behind Top Image (middle layer) -->
          <div 
            class="absolute right-[15%] md:right-[20%] bottom-[25%] md:bottom-[30%] w-[55%] md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              :src="imageBehindTop"
              alt="Kandang ayam modern"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Most Top Image (smallest, front) -->
          <div 
            class="absolute left-0 top-0 w-[60%] md:w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              :src="imageMostTop"
              alt="Interior kandang ayam"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

