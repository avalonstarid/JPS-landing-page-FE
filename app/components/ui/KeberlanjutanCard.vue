<script setup lang="ts">
type Props = {
  title: string
  description: string
  to?: string
  imageSrc: string
  imageAlt?: string
  buttonText?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  buttonText: 'Selengkapnya',
  reverse: false,
})

const emit = defineEmits<{
  action: []
}>()

const svgWidth = 1200
const svgHeight = 520

const cornerRadius = 38
const notchWidth = 370
const notchHeight = 160
const notchRadius = 50

const cardPath = computed(() => {
  const w = svgWidth
  const h = svgHeight
  const r = cornerRadius
  const nr = notchRadius

  const notchLeft = w - notchWidth
  const notchTop = h - notchHeight

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

const clipPathId = computed(() => {
  const slug = props.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return `keberlanjutan-card-${slug || 'item'}`
})
</script>

<template>
  <div
    class="keberlanjutan-wrapper flex flex-col gap-8 lg:gap-10 items-center"
    :class="!props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
  >
    <div class="keberlanjutan-text w-full lg:w-1/2 text-left">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {{ props.title }}
      </h3>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        {{ props.description }}
      </p>
    </div>

    <div class="keberlanjutan-card relative w-full lg:w-1/2 aspect-[1000/420]">
      <svg
        class="absolute inset-0 h-full w-full"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="xMidYMid meet"
        shape-rendering="geometricPrecision"
        role="img"
        :aria-label="props.imageAlt || props.title"
      >
        <defs>
          <clipPath :id="clipPathId" clipPathUnits="userSpaceOnUse">
            <path :d="cardPath" />
          </clipPath>
        </defs>
        <path :d="cardPath" fill="#FFF4EA" />
        <image
          :href="props.imageSrc"
          :clip-path="`url(#${clipPathId})`"
          x="0"
          y="0"
          :width="svgWidth"
          :height="svgHeight"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <component
        :is="props.to ? 'NuxtLink' : 'button'"
        :to="props.to"
        class="lokasi-selengkapnya"
        type="button"
        @click="props.to ? null : emit('action')"
      >
        <span>{{ props.buttonText }}</span>
        <span class="lokasi-selengkapnya-icon" aria-hidden="true">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </component>
    </div>
  </div>
</template>

<style scoped>
.keberlanjutan-card {
  border-radius: 28px;
  filter: drop-shadow(0 18px 35px rgba(0, 0, 0, 0.14));
  overflow: visible;
}

.lokasi-selengkapnya {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px 10px 16px;
  background: #f6993c;
  color: #ffffff;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.lokasi-selengkapnya:hover {
  background: #e8872e;
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
}

.lokasi-selengkapnya:active {
  transform: translateY(0);
}

.lokasi-selengkapnya:focus-visible {
  outline: 2px solid rgba(246, 153, 60, 0.75);
  outline-offset: 3px;
}

.lokasi-selengkapnya-icon {
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.22);
}
</style>
