<script setup lang="ts">
import ZoomableImagePanel from '~/components/ui/ZoomableImagePanel.vue'
import strukturImage from '~/assets/images/tentang/struktur-oraganisasi-1.png'
import strategiImageOne from '~/assets/images/produk/produk-top-left.jpg'
import strategiImageTwo from '~/assets/images/produk/produk-top-right.jpg'
import inisiatifImage from '~/assets/images/pendekatan/inisiatif-dan-pencapaian.png'

type Variant = 'tataKelola' | 'strategiKebijakan' | 'inisiatif'

const { t, tm, rt } = useI18n()

const props = defineProps<{
  isOpen: boolean
  variant: Variant | null
}>()

const emit = defineEmits<{
  close: []
}>()

const handleClose = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

watch(() => props.isOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const modalTitleId = computed(() => (props.variant ? `keberlanjutan-modal-${props.variant}` : 'keberlanjutan-modal'))
const tataKelolaList = computed(() => tm('keberlanjutanPage.modal.tataKelola.list') as string[])
const strategiList = computed(() => tm('keberlanjutanPage.modal.strategi.list') as string[])
const kebijakanList = computed(() => tm('keberlanjutanPage.modal.kebijakan.list') as string[])
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="props.isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
      >
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="handleClose" aria-hidden="true" />

        <div class="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
          <div class="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
            <h2 :id="modalTitleId" class="text-2xl md:text-3xl font-bold text-[#1f2937]">
              {{ props.variant === 'tataKelola' ? t('keberlanjutanPage.modal.tataKelola.title') : t('keberlanjutanPage.modal.strategi.title') }}
            </h2>
            <button
              type="button"
              class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              :aria-label="t('common.close')"
              @click="handleClose"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="p-6 md:p-8 space-y-6">
            <div v-if="props.variant === 'tataKelola'" class="space-y-5 text-sm md:text-base text-[#4b5563] leading-relaxed">
              <p>{{ t('keberlanjutanPage.modal.tataKelola.intro1') }}</p>
              <p>{{ t('keberlanjutanPage.modal.tataKelola.intro2') }}</p>
              <p>{{ t('keberlanjutanPage.modal.tataKelola.intro3') }}</p>
              <ol class="list-decimal pl-5 space-y-1 text-[#4b5563]">
                <li v-for="(item, index) in tataKelolaList" :key="`tata-${index}`">{{ rt(item) }}</li>
              </ol>

              <ZoomableImagePanel
                :src="strukturImage"
                :alt="t('keberlanjutanPage.modal.tataKelola.imageAlt')"
                :zoom-in-label="t('tentangPage.struktur.zoomIn')"
                :zoom-out-label="t('tentangPage.struktur.zoomOut')"
                :reset-label="t('tentangPage.struktur.resetZoom')"
                :zoom-hint="t('tentangPage.struktur.zoomHint')"
                control-text-class="text-white"
                control-button-class="bg-white/20 hover:bg-white/30 text-white"
                hint-class="text-white/60"
                scrollbar-thumb-color="rgba(255, 255, 255, 0.35)"
                scrollbar-thumb-hover-color="rgba(255, 255, 255, 0.45)"
                max-height="60vh"
                container-class="bg-[#27376D]"
              />
            </div>

            <div v-else-if="props.variant === 'inisiatif'" class="space-y-5 text-sm md:text-base text-[#4b5563] leading-relaxed">
              <p>{{ t('keberlanjutanPage.modal.inisiatif.intro1') }}</p>
              <p>{{ t('keberlanjutanPage.modal.inisiatif.intro2') }}</p>
              <img
                :src="inisiatifImage"
                :alt="t('keberlanjutanPage.modal.inisiatif.imageAlt')"
                class="rounded-2xl w-full object-cover"
              >
            </div>

            <div v-else class="space-y-8">
              <div class="grid gap-8 md:grid-cols-2">
                <div class="space-y-4 text-sm md:text-base text-[#4b5563] leading-relaxed">
                  <h3 class="text-base md:text-lg font-semibold text-[#3d4f92]">
                    {{ t('keberlanjutanPage.modal.strategi.heading') }}
                  </h3>
                  <p>{{ t('keberlanjutanPage.modal.strategi.intro') }}</p>
                  <p class="font-semibold text-[#1f2937]">{{ t('keberlanjutanPage.modal.strategi.focusLabel') }}</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li v-for="(item, index) in strategiList" :key="`strategi-${index}`">{{ rt(item) }}</li>
                  </ul>
                  <img
                    :src="strategiImageTwo"
                    :alt="t('keberlanjutanPage.modal.strategi.imageAltTwo')"
                    class="rounded-2xl w-full object-cover"
                  >
                </div>

                <div class="space-y-4 text-sm md:text-base text-[#4b5563] leading-relaxed">
                  <img
                    :src="strategiImageOne"
                    :alt="t('keberlanjutanPage.modal.strategi.imageAltOne')"
                    class="rounded-2xl w-full object-cover"
                  >
                  <h3 class="text-base md:text-lg font-semibold text-[#3d4f92]">
                    {{ t('keberlanjutanPage.modal.kebijakan.heading') }}
                  </h3>
                  <p>{{ t('keberlanjutanPage.modal.kebijakan.intro') }}</p>
                  <p class="font-semibold text-[#1f2937]">{{ t('keberlanjutanPage.modal.kebijakan.focusLabel') }}</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li v-for="(item, index) in kebijakanList" :key="`kebijakan-${index}`">{{ rt(item) }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
