<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  isOpen: boolean
  title?: string
  contentHtml?: string
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

const modalTitleId = computed(() => (props.title ? 'keberlanjutan-modal-content' : 'keberlanjutan-modal'))
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
              {{ props.title || t('keberlanjutanPage.modal.tataKelola.title') }}
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
            <div
              v-if="props.contentHtml"
              class="space-y-4 text-sm md:text-base text-[#4b5563] leading-relaxed"
              v-html="props.contentHtml"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
