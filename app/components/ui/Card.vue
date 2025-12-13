<template>
  <div
    class="card-wrapper relative cursor-pointer"
    :style="containerStyle"
    ref="cardRef"
    role="button"
    tabindex="0"
    @click="$emit('click')"
    @keyup.enter="$emit('click')"
    @keyup.space.prevent="$emit('click')"
  >
    <template v-if="variant === 'simple'">
      <!-- Notched white card background -->
      <svg
        class="absolute inset-0 w-full h-full drop-shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path :d="cardPath" fill="#ffffff" />
      </svg>

      <div class="relative z-10 flex h-full flex-col justify-between p-5">
        <div class="flex items-center gap-3">
          <div
            v-if="iconClass"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-gray-100"
            :class="iconBgClass ?? 'bg-[#fdeee0]'"
            aria-hidden="true"
          >
            <i class="text-2xl leading-none" :class="[iconClass, iconColorClass ?? 'text-[#1f2937]']" />
          </div>
          <div class="text-base font-semibold text-[#1f2937]">{{ companyText }}</div>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-[#1f2937] leading-snug">
            <span class="notch-spacer" aria-hidden="true"></span>
            {{ descriptionText }}
          </p>
        </div>
      </div>
    </template>

    <template v-else>
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
        <defs v-if="!isWhite">
          <linearGradient :id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,0,0,0)" />
            <stop offset="40%" stop-color="rgba(0,0,0,0.3)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0.7)" />
          </linearGradient>
        </defs>
        <path v-if="!isWhite" :d="cardPath" :fill="`url(#${gradientId})`" />
      </svg>

      <!-- Text content positioned over the SVG -->
      <div class="relative z-10 flex h-full flex-col justify-end p-5 pb-6 text-white">
        <div v-if="showMeta" class="flex items-center gap-2 text-[11px] opacity-90 mb-2">
          <i v-if="iconClass" class="text-xl leading-none" :class="iconClass" aria-hidden="true" />
          <img
            v-else-if="avatarUrl"
            :src="avatarUrl"
            :alt="companyText"
            class="w-6 h-6 rounded-full object-cover"
          />
          <span v-if="hasCompany" class="font-medium">{{ companyText }}</span>
          <span v-if="hasCompany && hasTime">•</span>
          <span v-if="hasTime">{{ timeText }}</span>
        </div>

        <h2 v-if="hasTitle" class="text-[18px] font-semibold leading-snug mb-2" :class="{'text-black': isWhite}">
          {{ titleText }}
        </h2>

        <p v-if="hasDescription" class="description-text text-[12px] opacity-90 text-justify" :class="{'text-black': isWhite}">
          <!-- Float element that creates the wrap-around effect for the notch - must be BEFORE text -->
          <span class="notch-spacer" aria-hidden="true"></span>
          {{ descriptionText }}
        </p>
      </div>
    </template>

    <!-- Orange button positioned outside the card (in the notch area) -->
    <button
      type="button"
      class="absolute z-20 bottom-0 flex mr-[-10px] items-center justify-center rounded-full bg-[#f6993c] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6993c]"
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
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  imageUrl: string
  company?: string
  timeAgo?: string
  title?: string
  description?: string
  avatarUrl?: string
  iconClass?: string
  iconBgClass?: string
  iconColorClass?: string
  width?: number
  height?: number
  ariaLabel?: string
  isWhite?: boolean
  fillParent?: boolean
  variant?: 'notch' | 'simple'
}

const props = withDefaults(defineProps<Props>(), {
  width: 340,
  height: 420,
  ariaLabel: 'View details',
  fillParent: false,
  variant: 'notch',
})

defineEmits<{
  click: []
}>()

// Generate unique IDs for SVG elements to avoid conflicts when multiple cards are rendered
const instance = getCurrentInstance()
const stableId = computed(() => instance?.uid ?? 0)
const clipPathId = computed(() => `card-clip-${stableId.value}`)
const gradientId = computed(() => `card-gradient-${stableId.value}`)

// Card dimensions
const cardRef = ref<HTMLElement | null>(null)
const measuredWidth = ref<number | null>(null)
const aspectRatio = computed(() => props.width / props.height)

const effectiveWidth = computed(() => {
  if (props.fillParent && measuredWidth.value) return measuredWidth.value
  return props.width
})

const effectiveHeight = computed(() => {
  if (props.fillParent && measuredWidth.value) return measuredWidth.value / aspectRatio.value
  return props.height
})

const svgWidth = computed(() => effectiveWidth.value)
const svgHeight = computed(() => effectiveHeight.value)

const containerStyle = computed(() => {
  if (props.fillParent) {
    return {
      width: '100%',
      aspectRatio: `${props.width} / ${props.height}`,
      height: 'auto',
    }
  }

  return {
    width: `${props.width}px`,
    maxWidth: `${props.width}px`,
    aspectRatio: `${props.width} / ${props.height}`,
    height: 'auto',
  }
})

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

const hasCompany = computed(() => companyText.value.trim().length > 0)
const hasTime = computed(() => timeText.value.trim().length > 0)
const hasTitle = computed(() => titleText.value.trim().length > 0)
const hasDescription = computed(() => descriptionText.value.trim().length > 0)
const showMeta = computed(() => hasCompany.value || hasTime.value || !!props.avatarUrl || !!props.iconClass)

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

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (!props.fillParent) return
  if (cardRef.value) {
    resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry?.contentRect?.width) {
        measuredWidth.value = entry.contentRect.width
      }
    })
    resizeObserver.observe(cardRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver && cardRef.value) {
    resizeObserver.unobserve(cardRef.value)
  }
  resizeObserver = null
})
</script>

<style scoped>
.card-wrapper {
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
  transition: transform 220ms ease, filter 220ms ease, box-shadow 220ms ease;
}

.card-wrapper:hover {
  transform: translateY(-6px) scale(1.01);
  filter: drop-shadow(0 18px 35px rgba(0, 0, 0, 0.2));
}

.card-wrapper:active {
  transform: translateY(-2px) scale(0.995);
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.18));
}

.card-wrapper.no-image {
  filter: none;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.card-wrapper.no-image:hover {
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
  filter: none;
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
