<script setup lang="ts">
import strukturImage from '~/assets/images/tentang/struktur-oraganisasi.png'

const { t } = useI18n()

const zoomLevel = ref(1)
const minZoom = 0.5
const maxZoom = 2
const zoomStep = 0.25

const imageContainerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const scrollStart = ref({ x: 0, y: 0 })

const zoomIn = () => {
  if (zoomLevel.value < maxZoom) {
    zoomLevel.value = Math.min(zoomLevel.value + zoomStep, maxZoom)
  }
}

const zoomOut = () => {
  if (zoomLevel.value > minZoom) {
    zoomLevel.value = Math.max(zoomLevel.value - zoomStep, minZoom)
  }
}

const resetZoom = () => {
  zoomLevel.value = 1
  if (imageContainerRef.value) {
    imageContainerRef.value.scrollLeft = 0
    imageContainerRef.value.scrollTop = 0
  }
}

const zoomPercentage = computed(() => Math.round(zoomLevel.value * 100))

const handleMouseDown = (event: MouseEvent) => {
  if (!imageContainerRef.value) return
  isDragging.value = true
  dragStart.value = { x: event.clientX, y: event.clientY }
  scrollStart.value = {
    x: imageContainerRef.value.scrollLeft,
    y: imageContainerRef.value.scrollTop,
  }
  imageContainerRef.value.style.cursor = 'grabbing'
}

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || !imageContainerRef.value) return
  const dx = event.clientX - dragStart.value.x
  const dy = event.clientY - dragStart.value.y
  imageContainerRef.value.scrollLeft = scrollStart.value.x - dx
  imageContainerRef.value.scrollTop = scrollStart.value.y - dy
}

const handleMouseUp = () => {
  isDragging.value = false
  if (imageContainerRef.value) {
    imageContainerRef.value.style.cursor = 'grab'
  }
}

const handleWheel = (event: WheelEvent) => {
  if (event.ctrlKey) {
    event.preventDefault()
    if (event.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }
}

onMounted(() => {
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <section id="struktur-organisasi" class="py-12 md:py-20 bg-[#27376D]">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-14">
        {{ t('tentangPage.struktur.sectionTitle') }}
      </h2>

      <!-- Image Container with Zoom -->
      <div
        ref="imageContainerRef"
        class="relative overflow-auto rounded-2xl bg-white/5 p-4 md:p-6"
        style="max-height: 70vh; cursor: grab;"
        @mousedown="handleMouseDown"
        @wheel="handleWheel"
      >
        <img
          :src="strukturImage"
          :alt="t('tentangPage.struktur.imageAlt')"
          class="w-full h-auto transition-transform duration-200 origin-center"
          :style="{ transform: `scale(${zoomLevel})` }"
          draggable="false"
        />
      </div>

      <!-- Zoom Controls -->
      <div class="flex items-center justify-center gap-3 mt-6">
        <button
          type="button"
          class="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="zoomLevel <= minZoom"
          :aria-label="t('tentangPage.struktur.zoomOut')"
          @click="zoomOut"
        >
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
          </svg>
        </button>

        <div class="text-white text-sm md:text-base font-medium min-w-[60px] text-center">
          {{ zoomPercentage }}%
        </div>

        <button
          type="button"
          class="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="zoomLevel >= maxZoom"
          :aria-label="t('tentangPage.struktur.zoomIn')"
          @click="zoomIn"
        >
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <button
          type="button"
          class="ml-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium transition-colors"
          :aria-label="t('tentangPage.struktur.resetZoom')"
          @click="resetZoom"
        >
          {{ t('tentangPage.struktur.resetZoom') }}
        </button>
      </div>

      <p class="text-white/60 text-xs md:text-sm text-center mt-4">
        {{ t('tentangPage.struktur.zoomHint') }}
      </p>
    </div>
  </section>
</template>

