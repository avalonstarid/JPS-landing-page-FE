<script setup lang="ts">
const props = defineProps<{
  prevLabel?: string
  nextLabel?: string
}>()

const emit = defineEmits<{
  prev: []
  next: []
}>()

const svgWidth = 1000
const svgHeight = 600

const cornerRadius = 30
const notchSize = 120
const notchRadius = 24

const framePath = computed(() => {
  const w = svgWidth
  const h = svgHeight
  const r = cornerRadius
  const ns = notchSize
  const nr = notchRadius

  return `
    M ${ns + nr} 0
    L ${w - r} 0
    Q ${w} 0 ${w} ${r}
    L ${w} ${h - ns - nr}
    Q ${w} ${h - ns} ${w - nr} ${h - ns}
    L ${w - ns + nr} ${h - ns}
    Q ${w - ns} ${h - ns} ${w - ns} ${h - ns + nr}
    L ${w - ns} ${h - nr}
    Q ${w - ns} ${h} ${w - ns - nr} ${h}
    L ${r} ${h}
    Q 0 ${h} 0 ${h - r}
    L 0 ${ns + nr}
    Q 0 ${ns} ${nr} ${ns}
    L ${ns - nr} ${ns}
    Q ${ns} ${ns} ${ns} ${ns - nr}
    L ${ns} ${nr}
    Q ${ns} 0 ${ns + nr} 0
    Z
  `
})
</script>

<template>
  <div class="testi-frame relative">
    <svg
      class="testi-bg absolute inset-0 h-full w-full"
      :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path :d="framePath" fill="#ffffff" />
    </svg>

    <div class="testi-notch testi-notch--tl">
      <button
        type="button"
        class="testi-notch-btn"
        :aria-label="props.prevLabel ?? 'Previous'"
        @click="emit('prev')"
      >
        <i class="mdi mdi-arrow-left text-2xl leading-none" aria-hidden="true" />
      </button>
    </div>
    <div class="testi-notch testi-notch--br">
      <button
        type="button"
        class="testi-notch-btn"
        :aria-label="props.nextLabel ?? 'Next'"
        @click="emit('next')"
      >
        <i class="mdi mdi-arrow-right text-2xl leading-none" aria-hidden="true" />
      </button>
    </div>

    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.testi-frame {
  filter: drop-shadow(0 22px 40px rgba(0, 0, 0, 0.14));
}

.testi-bg {
  pointer-events: none;
}

.testi-notch {
  position: absolute;
  width: 92px;
  height: 92px;
  color: #f6993c;
  display: grid;
  place-items: center;
  pointer-events: auto;
  z-index: 20;
}

.testi-notch-btn {
  width: 72px;
  height: 72px;
  border-radius: 9999px;
  background: #ffffff;
  display: grid;
  place-items: center;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

@media screen and (max-width: 768px){
  .testi-notch-btn {
    width: 40px;
    height: 40px;
  }
  .testi-notch--tl {
    top: -20px;
    left: -20px;
  }

  .testi-notch--br {
    right: -20px;
    bottom: -20px;
  }

  .testi-notch {
    width: 60px;
    height: 120px;
  }
}

.testi-notch-btn:hover {
  transform: translateY(-1px);
}

.testi-notch-btn:active {
  transform: translateY(0);
}

.testi-notch-btn:focus-visible {
  outline: 2px solid rgba(246, 153, 60, 0.7);
  outline-offset: 3px;
}

.testi-notch--tl {
  top: -16px;
  left: -16px;
}

.testi-notch--br {
  right: -16px;
  bottom: -16px;
}
</style>
