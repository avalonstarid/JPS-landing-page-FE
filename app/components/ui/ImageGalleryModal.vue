<script setup lang="ts">
type Props = {
  show: boolean
  title: string
  subtitle?: string
  subtitles?: string[]
  infoText?: string
  mapsHref?: string
  mapsHrefs?: string[]
  whatsappHref?: string
  images: string[]
  startIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  subtitles: () => [],
  infoText: '',
  mapsHref: '',
  mapsHrefs: () => [],
  whatsappHref: '',
  startIndex: 0,
})

const emit = defineEmits<{
  close: []
}>()

const activeIndex = ref(0)

watch(
  () => [props.show, props.startIndex, props.images] as const,
  () => {
    if (!props.show) return
    const safe = Math.min(Math.max(props.startIndex, 0), Math.max(props.images.length - 1, 0))
    activeIndex.value = safe
  },
  { immediate: true }
)

const hasMany = computed(() => props.images.length > 1)
const activeSrc = computed(() => props.images[activeIndex.value] ?? '')
const activeMapsHref = computed(() => props.mapsHrefs[activeIndex.value] ?? props.mapsHref ?? '')
const activeSubtitle = computed(() => props.subtitles[activeIndex.value] ?? props.subtitle ?? '')
const activeWhatsappHref = computed(() => {
  const raw = (props.whatsappHref ?? '').trim()
  if (!raw) return ''
  if (/^https?:\/\//i.test(raw)) return raw
  if (/^wa\.me\//i.test(raw)) return `https://${raw}`
  const digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  const normalized = digits.startsWith('0') ? `62${digits.slice(1)}` : digits
  return `https://wa.me/${normalized}`
})

const close = () => emit('close')

const prev = () => {
  if (!hasMany.value) return
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}

const next = () => {
  if (!hasMany.value) return
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

const onKeydown = (e: KeyboardEvent) => {
  if (!props.show) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

watch(
  () => props.show,
  (open) => {
    if (!import.meta.client) return
    document.body.style.overflow = open ? 'hidden' : ''
  }
)

onMounted(() => {
  if (!import.meta.client) return
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  if (!import.meta.client) return
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="route-loader">
      <div
        v-if="show"
        class="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <div class="h-full w-full p-4 md:p-8 overflow-y-auto">
          <div class="mx-auto max-w-5xl rounded-3xl bg-white p-6 md:p-10">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-2xl md:text-4xl font-extrabold text-gray-900">{{ title }}</h3>
                <p v-if="activeSubtitle" class="mt-3 flex items-start gap-3 text-gray-700">
                  <span class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fdeee0] text-[#f6993c]">
                    <i class="mdi mdi-map-marker text-lg leading-none" aria-hidden="true" />
                  </span>
                  <span class="text-base md:text-lg">{{ activeSubtitle }}</span>
                </p>
              </div>
              <button
                type="button"
                class="rounded-full p-2 text-gray-700 hover:bg-gray-100"
                aria-label="Close"
                @click="close"
              >
                <i class="mdi mdi-close text-2xl leading-none" aria-hidden="true" />
              </button>
            </div>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-[96px_1fr] gap-6 items-start">
              <div v-if="images.length" class="hidden md:flex flex-col gap-3">
                <button
                  v-for="(src, idx) in images"
                  :key="`${src}-${idx}`"
                  type="button"
                  class="h-20 w-24 overflow-hidden rounded-2xl ring-2 transition"
                  :class="idx === activeIndex ? 'ring-[#f6993c]' : 'ring-transparent hover:ring-gray-200'"
                  @click="activeIndex = idx"
                  :aria-label="`Preview ${idx + 1}`"
                >
                  <img :src="src" alt="" class="h-full w-full object-cover" loading="lazy" />
                </button>
              </div>

              <div>
                <div class="relative overflow-hidden rounded-[42px] bg-gray-100 aspect-[16/9]">
                  <img v-if="activeSrc" :src="activeSrc" alt="" class="h-full w-full object-cover" />
                  <div v-else class="h-full w-full" />

                  <button
                    v-if="hasMany"
                    type="button"
                    class="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg text-[#f6993c] grid place-items-center"
                    aria-label="Previous"
                    @click="prev"
                  >
                    <i class="mdi mdi-arrow-left text-2xl leading-none" aria-hidden="true" />
                  </button>
                  <button
                    v-if="hasMany"
                    type="button"
                    class="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg text-[#f6993c] grid place-items-center"
                    aria-label="Next"
                    @click="next"
                  >
                    <i class="mdi mdi-arrow-right text-2xl leading-none" aria-hidden="true" />
                  </button>
                </div>

                <p v-if="infoText" class="mt-8 text-center text-2xl md:text-3xl leading-snug text-gray-900">
                  {{ infoText }}
                </p>

                <div v-if="activeMapsHref || activeWhatsappHref" class="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    v-if="activeMapsHref"
                    class="inline-flex items-center gap-3 rounded-full bg-[#2f4aa3] px-7 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
                    :href="activeMapsHref"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="mdi mdi-google-maps text-2xl leading-none" aria-hidden="true" />
                    <span>Google Maps</span>
                  </a>
                  <a
                    v-if="activeWhatsappHref"
                    class="inline-flex items-center gap-3 rounded-full bg-[#2f4aa3] px-7 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition"
                    :href="activeWhatsappHref"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="mdi mdi-whatsapp text-2xl leading-none" aria-hidden="true" />
                    <span>Narahubung</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
