<template>
  <div class="card-wrapper relative" :style="{ width: cardWidth, height: cardHeight }">
    <!-- SVG Card with notch cutout - creates true transparency -->
    <svg
      class="absolute inset-0 w-full h-full"
      :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <!-- Clip path for the image to match card shape -->
        <clipPath :id="clipPathId">
          <path :d="cardPath" />
        </clipPath>
      </defs>

      <!-- Background image clipped to card shape with notch -->
      <image
        :href="imageUrl"
        x="0"
        y="0"
        :width="svgWidth"
        :height="svgHeight"
        preserveAspectRatio="xMidYMid slice"
        :clip-path="`url(#${clipPathId})`"
      />

      <!-- Dark gradient overlay -->
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(0,0,0,0)" />
          <stop offset="40%" stop-color="rgba(0,0,0,0.3)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.7)" />
        </linearGradient>
      </defs>
      <path :d="cardPath" :fill="`url(#${gradientId})`" />
    </svg>

    <!-- Text content positioned over the SVG -->
    <div class="relative z-10 flex h-full flex-col justify-end p-5 pb-6 text-white">
      <div class="flex items-center gap-2 text-[11px] opacity-90 mb-2">
        <img
          v-if="avatarUrl"
          :src="avatarUrl"
          :alt="companyText"
          class="w-6 h-6 rounded-full object-cover"
        />
        <span class="font-medium">{{ companyText }}</span>
        <span>•</span>
        <span>{{ timeText }}</span>
      </div>

      <h2 class="text-[18px] font-semibold leading-snug mb-2">
        {{ titleText }}
      </h2>

      <p class="description-text text-[12px] opacity-90 text-justify">
        <!-- Float element that creates the wrap-around effect for the notch - must be BEFORE text -->
        <span class="notch-spacer" aria-hidden="true"></span>
        {{ descriptionText }}
      </p>
    </div>

    <!-- Orange button positioned outside the card (in the notch area) -->
    <button
      type="button"
      class="absolute z-20 flex items-center justify-center rounded-[20px] bg-[#f6993c] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6993c]"
      :style="{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        bottom: `${buttonOffset}px`,
        right: `${buttonOffset}px`
      }"
      :aria-label="ariaLabel"
      @click="$emit('click')"
    >
      <svg
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  imageUrl: string
  company?: string
  timeAgo?: string
  title?: string
  description?: string
  avatarUrl?: string
  width?: number
  height?: number
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 340,
  height: 420,
  ariaLabel: 'View details'
})

defineEmits<{
  click: []
}>()

// Generate unique IDs for SVG elements to avoid conflicts when multiple cards are rendered
const uniqueId = computed(() => Math.random().toString(36).substring(2, 9))
const clipPathId = computed(() => `card-clip-${uniqueId.value}`)
const gradientId = computed(() => `card-gradient-${uniqueId.value}`)

// Card dimensions
const svgWidth = computed(() => props.width)
const svgHeight = computed(() => props.height)
const cardWidth = computed(() => `${props.width}px`)
const cardHeight = computed(() => `${props.height}px`)

// Notch and button configuration
const cornerRadius = 24
const buttonSize = 64
const buttonOffset = 8
const notchSize = buttonSize + buttonOffset * 2 // Total notch size including padding
const notchRadius = 20 // Rounded corner radius for the notch

// Computed text values with defaults
const companyText = computed(() => props.company ?? 'PT Janu Putra Sejahtera')
const timeText = computed(() => props.timeAgo ?? '1 jam yang lalu')
const titleText = computed(() => props.title ?? 'Lorem Ipsum Dolor Sit Amet')
const descriptionText = computed(
  () =>
    props.description ??
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat jeopeprp slaesoz. deiaol skedioper akeiay rytoep.'
)

/**
 * Generate SVG path for card with rounded corners and a rounded square notch
 * The path creates the card shape with a cutout in the bottom-right corner
 */
const cardPath = computed(() => {
  const w = svgWidth.value
  const h = svgHeight.value
  const r = cornerRadius
  const ns = notchSize
  const nr = notchRadius

  // Key points for the notch
  const notchLeft = w - ns
  const notchTop = h - ns

  // Build the path clockwise starting from top-left
  return `
    M ${r} 0
    L ${w - r} 0
    Q ${w} 0 ${w} ${r}
    L ${w} ${notchTop - nr}
    Q ${w} ${notchTop} ${w - nr} ${notchTop}
    L ${notchLeft + nr} ${notchTop}
    Q ${notchLeft} ${notchTop} ${notchLeft} ${notchTop + nr}
    L ${notchLeft} ${h - nr}
    Q ${notchLeft} ${h} ${notchLeft - nr} ${h}
    L ${r} ${h}
    Q 0 ${h} 0 ${h - r}
    L 0 ${r}
    Q 0 0 ${r} 0
    Z
  `
})
</script>

<style scoped>
.card-wrapper {
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
}

.description-text {
  position: relative;
}

/* Float element that creates the wrap-around effect for the notch at bottom-right */
.notch-spacer {
  display: block;
  float: right;
  width: 90px; /* Width to accommodate the notch area */
  height: 120px; /* Full height of paragraph */
  margin-left: 8px;
  /* Text flows into the top area, only bottom 80px is blocked (where the button is) */
  shape-outside: inset(calc(100% - 54px) 0 0 0);
}
</style>