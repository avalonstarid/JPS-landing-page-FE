<script setup lang="ts">
type Props = {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  to?: string
  buttonText?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  buttonText: 'Selengkapnya',
  to: '#',
  reverse: false,
})

const svgWidth = 520
const svgHeight = 360
const cornerRadius = 28
const notchRatio = 0.32
const notchSize = svgWidth * notchRatio
const notchRadius = 20

const imagePath = computed(() => {
  const w = svgWidth
  const h = svgHeight
  const r = cornerRadius
  const ns = notchSize
  const nr = notchRadius

  const notchLeft = w - ns
  const notchTop = h - ns

  return `
    M ${r} 0
    L ${w - r} 0
    A ${r} ${r} 0 0 1 ${w} ${r}
    L ${w} ${notchTop - nr}
    A ${nr} ${nr} 0 0 1 ${w - nr} ${notchTop}
    L ${notchLeft + nr} ${notchTop}
    A ${nr} ${nr} 0 0 1 ${notchLeft} ${notchTop + nr}
    L ${notchLeft} ${h - nr}
    A ${nr} ${nr} 0 0 1 ${notchLeft - nr} ${h}
    L ${r} ${h}
    A ${r} ${r} 0 0 1 0 ${h - r}
    L 0 ${r}
    A ${r} ${r} 0 0 1 ${r} 0
    Z
  `
})

const stableId = useId()
const clipPathId = computed(() => `keberlanjutan-clip-${stableId}`)
const pathTransform = computed(() => (props.reverse ? `translate(${svgWidth} 0) scale(-1 1)` : undefined))
</script>

<template>
  <div class="keberlanjutan-row flex flex-col lg:flex-row gap-6 lg:gap-10" :class="props.reverse ? 'lg:flex-row-reverse' : ''">
    <div class="relative w-full lg:w-[52%]">
      <svg
        class="absolute inset-0 h-full w-full"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath :id="clipPathId">
            <path :d="imagePath" :transform="pathTransform" />
          </clipPath>
        </defs>
        <image
          :href="props.imageSrc"
          x="0"
          y="0"
          :width="svgWidth"
          :height="svgHeight"
          preserveAspectRatio="xMidYMid slice"
          :clip-path="`url(#${clipPathId})`"
        />
      </svg>

      <NuxtLink
        :to="props.to"
        class="keberlanjutan-btn"
        :class="props.reverse ? 'left-6' : 'right-6'"
        :style="{ width: `${notchRatio * 100}%` }"
      >
        <span class="truncate">{{ props.buttonText }}</span>
        <span class="keberlanjutan-btn-icon" aria-hidden="true">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </span>
      </NuxtLink>
    </div>

    <div class="flex-1 min-w-0">
      <h3 class="text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
        {{ props.title }}
      </h3>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.keberlanjutan-row {
  border-radius: 28px;
  padding: 6px 0;
}

.keberlanjutan-row > div:first-child {
  height: 240px;
}

@media (min-width: 640px) {
  .keberlanjutan-row > div:first-child {
    height: 280px;
  }
}

@media (min-width: 1024px) {
  .keberlanjutan-row > div:first-child {
    height: 320px;
  }
}

.keberlanjutan-btn {
  position: absolute;
  bottom: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  background: #f6993c;
  color: #ffffff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.keberlanjutan-btn:hover {
  background: #e8872e;
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
}

.keberlanjutan-btn:active {
  transform: translateY(0);
}

.keberlanjutan-btn:focus-visible {
  outline: 2px solid rgba(246, 153, 60, 0.75);
  outline-offset: 3px;
}

.keberlanjutan-btn-icon {
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.22);
  flex: 0 0 auto;
}

@media (max-width: 639px) {
  .keberlanjutan-btn {
    padding: 10px 14px;
  }
}
</style>
