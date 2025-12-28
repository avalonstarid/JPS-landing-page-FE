<script setup lang="ts">
type Props = {
  topSrc: string
  backTopSrc: string
  backBottomSrc: string
  topAlt?: string
  backTopAlt?: string
  backBottomAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  topAlt: '',
  backTopAlt: '',
  backBottomAlt: '',
})

const activeIndex = ref(0)
const images = computed(() => [props.topSrc, props.backTopSrc, props.backBottomSrc])
const alts = computed(() => [props.topAlt, props.backTopAlt, props.backBottomAlt])
const imageCount = computed(() => images.value.length)

const getRoleIndex = (index: number) => {
  const count = imageCount.value
  if (!count) return 0
  return (index - activeIndex.value + count) % count
}

const getPositionClass = (roleIndex: number) => {
  if (roleIndex === 0) return 'card-top'
  if (roleIndex === 1) return 'card-back-top'
  return 'card-back-bottom'
}

let rotateTimer: ReturnType<typeof setInterval> | null = null

const startRotation = () => {
  if (rotateTimer || images.value.length < 2) return
  rotateTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.value.length
  }, 4000)
}

const stopRotation = () => {
  if (rotateTimer) clearInterval(rotateTimer)
  rotateTimer = null
}

onMounted(startRotation)
onBeforeUnmount(stopRotation)

watch(
  images,
  () => {
    activeIndex.value = 0
    stopRotation()
    startRotation()
  },
  { deep: true }
)
</script>

<template>
  <div class="group relative w-full max-w-[260px] mx-auto aspect-[3/4] lg:my-0">
    <div
      v-for="(src, index) in images"
      :key="`${src}-${index}`"
      class="absolute rounded-3xl overflow-hidden shadow-xl stacked-card"
      :class="getPositionClass(getRoleIndex(index))"
    >
      <img
        :src="src"
        :alt="alts[index] || ''"
        class="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <div
      class="pointer-events-none absolute inset-0 rounded-[34px] opacity-0 transition-opacity duration-500 ease-out
        group-hover:opacity-100"
      aria-hidden="true"
      style="background: radial-gradient(closest-side, rgba(246,153,60,0.18), rgba(246,153,60,0) 65%);"
    />
  </div>
</template>

<style scoped>
.stacked-card {
  left: 50%;
  top: 50%;
  width: var(--w);
  height: var(--h);
  opacity: var(--opacity);
  transform: translate3d(calc(-50% + var(--x)), calc(-50% + var(--y)), 0)
    rotate(var(--rotate))
    scale(var(--scale));
  transition:
    transform 1400ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1400ms ease,
    box-shadow 1400ms ease,
    width 1400ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  transform-origin: center;
  backface-visibility: hidden;
}

.card-top {
  z-index: 3;
  --w: 100%;
  --h: 100%;
  --x: 0%;
  --y: 0%;
  --rotate: 0deg;
  --scale: 1;
  --opacity: 1;
  box-shadow: 0 18px 30px -12px rgba(0, 0, 0, 0.25);
  border-radius: 28px;
}

.card-back-top {
  z-index: 2;
  --w: 92%;
  --h: 92%;
  --x: 22%;
  --y: -18%;
  --rotate: 0deg;
  --scale: 0.985;
  --opacity: 0.55;
  outline: 0 solid transparent;
  border-radius: 26px;
}

.card-back-bottom {
  z-index: 1;
  --w: 92%;
  --h: 92%;
  --x: -22%;
  --y: 18%;
  --rotate: 0deg;
  --scale: 0.975;
  --opacity: 0.55;
  outline: 0 solid transparent;
  border-radius: 26px;
}

@media (max-width: 640px) {
  .card-top {
    --w: 100%;
    --h: 100%;
  }

  .card-back-top {
    --w: 90%;
    --h: 90%;
    --x: 18%;
    --y: -14%;
  }

  .card-back-bottom {
    --w: 90%;
    --h: 90%;
    --x: -18%;
    --y: 14%;
  }
}
</style>
