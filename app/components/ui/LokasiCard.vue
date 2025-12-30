<script setup lang="ts">
type Props = {
  title: string
  locations: Array<{
    label: string
    href: string
  }>
  to?: string
  imageSrc: string
  imageAlt?: string
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: '',
  buttonText: 'Selengkapnya',
})

const emit = defineEmits<{
  more: []
}>()

const svgWidth = 520
const svgHeight = 620

const imageCornerRadius = 100
const notchSize = 150
const notchRadius = 30

const imagePath = computed(() => {
  const w = svgWidth
  const h = svgHeight
  const r = imageCornerRadius
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

const stableId = useId()
const clipPathId = computed(() => `lokasi-img-clip-${stableId}`)
</script>

<template>
  <div class="lokasi-row flex flex-col sm:flex-row gap-4 md:gap-6 duration-300 hover:-translate-y-2">
    <div class="lokasi-image relative w-full sm:w-[42%]">
      <svg
        class="absolute inset-0 h-full w-full"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath :id="clipPathId">
            <path :d="imagePath" />
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
    </div>

    <div class="lokasi-content flex-1 min-w-0 flex flex-col">
      <h3 class="text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
        {{ props.title }}
      </h3>
      <ul class="text-sm md:text-base text-gray-700 space-y-1.5">
        <li v-for="(loc, idx) in props.locations" :key="idx" class="flex items-start gap-2">
          <span class="w-5 shrink-0 text-left">{{ idx + 1 }}.</span>
          <a
            class="min-w-0 text-gray-700 hover:underline"
            :href="loc.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ loc.label }}
          </a>
        </li>
      </ul>

      <div class="lokasi-cta">
        <button type="button" class="lokasi-btn" @click="emit('more')">
          <span>{{ props.buttonText }}</span>
          <span class="lokasi-btn-icon" aria-hidden="true">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lokasi-row {
  border-radius: 28px;
  padding: 20px;
  align-items: stretch;
}

.lokasi-content {
  min-height: 220px;
}

.lokasi-image {
  border-radius: 26px;
  overflow: hidden;
  height: 220px;
  filter: drop-shadow(0 18px 35px rgba(0, 0, 0, 0.14));
}

.lokasi-image > svg {
  border-radius: 26px;
  display: block;
}

.lokasi-cta {
  margin-top: auto;
  padding-top: 14px;
  margin-left: -66px;
}

.lokasi-btn {
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

@media (max-width: 639px) {
  .lokasi-row {
    padding: 16px;
    gap: 14px;
  }

  .lokasi-image {
    height: 180px;
  }

  .lokasi-content {
    min-height: auto;
  }

  .lokasi-cta {
    padding-top: 10px;
  }

  .lokasi-cta {
    margin-left: 0;
  }
}

@media (min-width: 640px) {
  .lokasi-row {
    padding: 24px;
  }

  .lokasi-image {
    height: 240px;
  }

  .lokasi-content {
    min-height: 240px;
  }
}

@media (min-width: 768px) {
  .lokasi-image {
    height: 260px;
  }

  .lokasi-content {
    min-height: 260px;
  }
}
</style>
