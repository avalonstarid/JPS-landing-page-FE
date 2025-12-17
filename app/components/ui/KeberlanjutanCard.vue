<script setup lang="ts">
type Props = {
  title: string
  locations: string[]
  to: string
  imageSrc: string
  imageAlt?: string
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  buttonText: 'Selengkapnya',
})

const svgWidth = 1000
const svgHeight = 420

const cornerRadius = 28
const notchSize = 150
const notchRadius = 22

const cardPath = computed(() => {
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

<template>
  <div class="lokasi-card relative">
    <svg
      class="absolute inset-0 h-full w-full"
      :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path :d="cardPath" fill="#FFF4EA" />
    </svg>

    <div class="relative z-10 flex flex-col sm:flex-row gap-4 p-5 md:p-6">
      <div class="w-full sm:w-[40%]">
        <img
          :src="props.imageSrc"
          :alt="props.imageAlt || props.title"
          class="h-[170px] sm:h-full w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      <div class="flex-1 min-w-0">
        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">
          {{ props.title }}
        </h3>
        <ul class="text-sm text-gray-600 space-y-1">
          <li v-for="(loc, idx) in props.locations" :key="idx" class="flex items-start">
            <span v-if="props.locations.length > 1" class="mr-2">{{ idx + 1 }}.</span>
            <span class="min-w-0">{{ loc }}</span>
          </li>
        </ul>
      </div>
    </div>

    <NuxtLink :to="props.to" class="lokasi-btn">
      <span>{{ props.buttonText }}</span>
      <span class="lokasi-btn-icon" aria-hidden="true">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.lokasi-card {
  border-radius: 28px;
  filter: drop-shadow(0 18px 35px rgba(0, 0, 0, 0.14));
  overflow: visible;
}

.lokasi-btn {
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
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.lokasi-btn:hover {
  background: #e8872e;
  transform: translateY(-1px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.18);
}

.lokasi-btn:active {
  transform: translateY(0);
}

.lokasi-btn:focus-visible {
  outline: 2px solid rgba(246, 153, 60, 0.75);
  outline-offset: 3px;
}

.lokasi-btn-icon {
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.22);
}
</style>
