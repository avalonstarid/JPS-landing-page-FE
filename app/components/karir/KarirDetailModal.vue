<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'

const { t } = useI18n()

interface Props {
  isOpen: boolean
  job: KarirJob | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  apply: [job: KarirJob]
}>()

const handleClose = () => {
  emit('close')
}

const handleApply = () => {
  if (props.job) {
    emit('apply', props.job)
  }
}

// Close on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
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
        v-if="isOpen && job"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`modal-title-${job.id}`"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          @click="handleClose"
          aria-hidden="true"
        />

        <!-- Modal Content -->
        <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
          <!-- Header -->
          <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ t('karirPage.detail.modalTitle') }}</span>
            <button
              type="button"
              class="p-2 rounded-full hover:bg-gray-100 transition"
              :aria-label="'Close'"
              @click="handleClose"
            >
              <i class="mdi mdi-close text-xl text-gray-600" aria-hidden="true" />
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 lg:p-8 space-y-6">
            <!-- Title and Apply Button -->
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div class="space-y-3">
                <div class="flex flex-wrap items-center gap-3">
                  <h2 :id="`modal-title-${job.id}`" class="text-2xl md:text-3xl font-bold text-[#1f2937]">
                    {{ job.title }}
                  </h2>
                  <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {{ job.jobTypeLabel }}
                  </span>
                </div>
                <div class="flex items-center gap-2 text-sm text-[#f6993c]">
                  <i class="mdi mdi-map-marker" aria-hidden="true" />
                  <span>{{ job.location }}</span>
                </div>
              </div>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full bg-[#3d4f92] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2d3f82] hover:shadow-xl"
                @click="handleApply"
              >
                <span>{{ t('karirPage.detail.apply') }}</span>
                <i class="mdi mdi-open-in-new" aria-hidden="true" />
              </button>
            </div>

            <!-- Description -->
            <div class="space-y-4">
              <p class="font-semibold text-[#1f2937]">Lorem ipsum dolor</p>
              <p class="text-[#4b4b4b] leading-relaxed">
                {{ job.description }}
              </p>
            </div>

            <!-- Responsibilities Section -->
            <div class="space-y-3">
              <p class="text-[#4b4b4b] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            <!-- Requirements List -->
            <div class="space-y-3">
              <p class="text-[#1f2937]">Lorem ipsum dolor sit</p>
              <ul class="list-disc list-inside space-y-1 text-[#4b4b4b]">
                <li v-for="(req, idx) in job.requirements" :key="idx">{{ req }}</li>
              </ul>
            </div>

            <!-- Benefits Section -->
            <div class="space-y-3">
              <p class="text-[#4b4b4b] leading-relaxed">
                Tempus leo eu aenean sed tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

