<script setup lang="ts">
const { t } = useI18n()

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// Form state
const form = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  message: ''
})

const handleClose = () => {
  emit('close')
}

const handleSubmit = () => {
  // Form submission logic here (UI only for now)
  handleClose()
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
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          @click="handleClose"
          aria-hidden="true"
        />

        <!-- Modal Content -->
        <div 
          class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        >
          <!-- Header -->
          <div class="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
            <div class="flex-1" />
            <button
              type="button"
              class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              :aria-label="'Close modal'"
              @click="handleClose"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 md:p-8">
            <!-- Modal Title -->
            <h2 id="info-modal-title" class="text-2xl md:text-3xl font-bold text-[#1f2937] mb-2">
              {{ t('liniBisnisPage.modal.title') }}
            </h2>
            
            <!-- Subtitle -->
            <p class="text-gray-600 text-sm md:text-base mb-8">
              {{ t('liniBisnisPage.modal.subtitle') }}
            </p>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label for="info-name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('liniBisnisPage.modal.nameLabel') }}<span class="text-red-500">*</span>
                </label>
                <input
                  id="info-name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6993c] focus:border-transparent transition-all"
                  :placeholder="t('liniBisnisPage.modal.namePlaceholder')"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="info-email" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('liniBisnisPage.modal.emailLabel') }}<span class="text-red-500">*</span>
                </label>
                <input
                  id="info-email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6993c] focus:border-transparent transition-all"
                  :placeholder="t('liniBisnisPage.modal.emailPlaceholder')"
                />
              </div>

              <!-- Phone Field -->
              <div>
                <label for="info-phone" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('liniBisnisPage.modal.phoneLabel') }}<span class="text-red-500">*</span>
                </label>
                <input
                  id="info-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6993c] focus:border-transparent transition-all"
                  :placeholder="t('liniBisnisPage.modal.phonePlaceholder')"
                />
              </div>

              <!-- Location Field -->
              <div>
                <label for="info-location" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('liniBisnisPage.modal.locationLabel') }}<span class="text-red-500">*</span>
                </label>
                <input
                  id="info-location"
                  v-model="form.location"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6993c] focus:border-transparent transition-all"
                  :placeholder="t('liniBisnisPage.modal.locationPlaceholder')"
                />
              </div>

              <!-- Message Field -->
              <div>
                <label for="info-message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('liniBisnisPage.modal.messageLabel') }}<span class="text-red-500">*</span>
                </label>
                <textarea
                  id="info-message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6993c] focus:border-transparent transition-all resize-none"
                  :placeholder="t('liniBisnisPage.modal.messagePlaceholder')"
                />
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <button
                  type="submit"
                  class="inline-flex items-center gap-2 px-8 py-3 bg-[#f6993c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-[#e88a2d] transition-all duration-300"
                >
                  <span>{{ t('liniBisnisPage.modal.submit') }}</span>
                  <svg 
                    class="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

