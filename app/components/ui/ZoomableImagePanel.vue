<script setup lang="ts">
type Props = {
  src: string
  alt: string
  zoomInLabel: string
  zoomOutLabel: string
  resetLabel: string
  zoomHint?: string
  maxHeight?: string
  containerClass?: string
  controlTextClass?: string
  controlButtonClass?: string
  hintClass?: string
  scrollbarThumbColor?: string
  scrollbarThumbHoverColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  zoomHint: '',
  maxHeight: '70vh',
  containerClass: '',
  controlTextClass: 'text-[#1f2937]',
  controlButtonClass: 'bg-white/20 hover:bg-white/30 text-[#1f2937]',
  hintClass: 'text-[#4b5563]',
  scrollbarThumbColor: 'rgba(31, 41, 55, 0.25)',
  scrollbarThumbHoverColor: 'rgba(31, 41, 55, 0.35)',
})

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
  <div
    ref="imageContainerRef"
    class="relative overflow-auto rounded-2xl p-4 md:p-6 struktur-scroll"
    :class="props.containerClass"
    :style="{
      maxHeight: props.maxHeight,
      cursor: 'grab',
      '--scrollbar-thumb': props.scrollbarThumbColor,
      '--scrollbar-thumb-hover': props.scrollbarThumbHoverColor,
    }"
    @mousedown="handleMouseDown"
    @wheel="handleWheel"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      class="w-full h-auto transition-transform duration-200 origin-center"
      :style="{ transform: `scale(${zoomLevel})` }"
      draggable="false"
    />
  </div>

  <div class="flex items-center justify-center gap-3 mt-6">
    <button
      type="button"
      class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      :class="props.controlButtonClass"
      :disabled="zoomLevel <= minZoom"
      :aria-label="props.zoomOutLabel"
      @click="zoomOut"
    >
      <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
      </svg>
    </button>

    <div class="text-sm md:text-base font-medium min-w-[60px] text-center" :class="props.controlTextClass">
      {{ zoomPercentage }}%
    </div>

    <button
      type="button"
      class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      :class="props.controlButtonClass"
      :disabled="zoomLevel >= maxZoom"
      :aria-label="props.zoomInLabel"
      @click="zoomIn"
    >
      <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>

    <button
      type="button"
      class="ml-4 px-4 py-2 rounded-full text-sm font-medium transition-colors"
      :class="props.controlButtonClass"
      :aria-label="props.resetLabel"
      @click="resetZoom"
    >
      {{ props.resetLabel }}
    </button>
  </div>

  <p v-if="props.zoomHint" class="text-xs md:text-sm text-center mt-4" :class="props.hintClass">
    {{ props.zoomHint }}
  </p>
</template>

<style scoped>
.struktur-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb, transparent) transparent;
  scrollbar-gutter: stable;
}

.struktur-scroll:hover {
  scrollbar-color: var(--scrollbar-thumb-hover, rgba(31, 41, 55, 0.35)) transparent;
}

:deep(.struktur-scroll::-webkit-scrollbar) {
  width: 8px;
  height: 8px;
}

:deep(.struktur-scroll:hover::-webkit-scrollbar) {
  width: 8px;
  height: 8px;
}

:deep(.struktur-scroll:hover::-webkit-scrollbar-thumb) {
  background: var(--scrollbar-thumb-hover, rgba(31, 41, 55, 0.35));
  border-radius: 9999px;
}

:deep(.struktur-scroll:hover::-webkit-scrollbar-track) {
  background: transparent;
}

:deep(.struktur-scroll::-webkit-scrollbar-thumb) {
  background: var(--scrollbar-thumb, transparent);
}
</style>
