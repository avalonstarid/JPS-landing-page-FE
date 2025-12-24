<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'
import logoJps from '~/assets/images/logo-jps.png'

const { t } = useI18n()

interface Props {
  isOpen: boolean
  job: KarirJob | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// Form state
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  gender: '',
  age: '',
  maritalStatus: '',
  educationLevel: '',
  institution: '',
  major: '',
  resume: null as File | null,
  reason: ''
})

const resumeFileName = ref('')

const handleClose = () => {
  emit('close')
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    form.resume = target.files[0]
    resumeFileName.value = target.files[0].name
  }
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
        v-if="isOpen && job"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`apply-modal-title-${job.id}`"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          @click="handleClose"
          aria-hidden="true"
        />

        <!-- Modal Content -->
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <!-- Header -->
          <div class="z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">{{ t('karirPage.form.modalTitle') }}</span>
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
          <div class="flex-1 overflow-y-auto p-6 lg:p-8">
            <form id="apply-form" @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Title with Logo -->
              <div class="flex items-start justify-between gap-4">
                <div class="space-y-2">
                  <h2 :id="`apply-modal-title-${job.id}`" class="text-2xl font-bold text-[#1f2937]">
                    {{ job.title }}
                  </h2>
                  <p class="text-sm text-[#4b4b4b]">{{ t('karirPage.form.subtitle') }}</p>
                </div>
              </div>

              <!-- Form Grid -->
              <div class="grid gap-5 md:grid-cols-2">
                <!-- Full Name -->
                <div class="space-y-2">
                  <label for="fullName" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.fullNameLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    v-model="form.fullName"
                    type="text"
                    required
                    :placeholder="t('karirPage.form.fullNamePlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Email -->
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.emailLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    :placeholder="t('karirPage.form.emailPlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Phone -->
                <div class="space-y-2">
                  <label for="phone" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.phoneLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    :placeholder="t('karirPage.form.phonePlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Gender -->
                <div class="space-y-2">
                  <label for="gender" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.genderLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    v-model="form.gender"
                    required
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20 appearance-none"
                  >
                    <option value="" disabled>{{ t('karirPage.form.genderPlaceholder') }}</option>
                    <option value="male">{{ t('karirPage.form.genderOptions.male') }}</option>
                    <option value="female">{{ t('karirPage.form.genderOptions.female') }}</option>
                  </select>
                </div>

                <!-- Age -->
                <div class="space-y-2">
                  <label for="age" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.ageLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="age"
                    v-model="form.age"
                    type="number"
                    min="17"
                    max="65"
                    required
                    :placeholder="t('karirPage.form.agePlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Marital Status -->
                <div class="space-y-2">
                  <label for="maritalStatus" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.maritalStatusLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <select
                    id="maritalStatus"
                    v-model="form.maritalStatus"
                    required
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20 appearance-none"
                  >
                    <option value="" disabled>{{ t('karirPage.form.maritalStatusPlaceholder') }}</option>
                    <option value="single">{{ t('karirPage.form.maritalStatusOptions.single') }}</option>
                    <option value="married">{{ t('karirPage.form.maritalStatusOptions.married') }}</option>
                    <option value="divorced">{{ t('karirPage.form.maritalStatusOptions.divorced') }}</option>
                  </select>
                </div>

                <!-- Education Level -->
                <div class="space-y-2">
                  <label for="educationLevel" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.educationLevelLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <select
                    id="educationLevel"
                    v-model="form.educationLevel"
                    required
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20 appearance-none"
                  >
                    <option value="" disabled>{{ t('karirPage.form.educationLevelPlaceholder') }}</option>
                    <option value="sma">{{ t('karirPage.form.educationLevelOptions.sma') }}</option>
                    <option value="d3">{{ t('karirPage.form.educationLevelOptions.d3') }}</option>
                    <option value="s1">{{ t('karirPage.form.educationLevelOptions.s1') }}</option>
                    <option value="s2">{{ t('karirPage.form.educationLevelOptions.s2') }}</option>
                    <option value="s3">{{ t('karirPage.form.educationLevelOptions.s3') }}</option>
                  </select>
                </div>

                <!-- Institution -->
                <div class="space-y-2">
                  <label for="institution" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.institutionLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="institution"
                    v-model="form.institution"
                    type="text"
                    required
                    :placeholder="t('karirPage.form.institutionPlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Major -->
                <div class="space-y-2">
                  <label for="major" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.majorLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <input
                    id="major"
                    v-model="form.major"
                    type="text"
                    required
                    :placeholder="t('karirPage.form.majorPlaceholder')"
                    class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                  />
                </div>

                <!-- Resume Upload -->
                <div class="space-y-2">
                  <label for="resume" class="block text-sm font-medium text-[#1f2937]">
                    {{ t('karirPage.form.resumeLabel') }}<span class="text-red-500">*</span>
                  </label>
                  <div class="flex items-center gap-3">
                    <label
                      for="resume"
                      class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition"
                    >
                      {{ t('karirPage.form.resumePlaceholder') }}
                    </label>
                    <span v-if="resumeFileName" class="text-sm text-gray-600 truncate max-w-[200px]">{{ resumeFileName }}</span>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      class="sr-only"
                      @change="handleFileChange"
                    />
                  </div>
                  <p class="text-xs text-gray-500">{{ t('karirPage.form.resumeHint') }}</p>
                </div>
              </div>

              <!-- Reason -->
              <div class="space-y-2">
                <label for="reason" class="block text-sm font-medium text-[#1f2937]">
                  {{ t('karirPage.form.reasonLabel') }}<span class="text-red-500">*</span>
                </label>
                <textarea
                  id="reason"
                  v-model="form.reason"
                  rows="4"
                  required
                  :placeholder="t('karirPage.form.reasonPlaceholder')"
                  class="w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20 resize-none"
                />
              </div>

            </form>
          </div>

          <!-- Submit Button -->
          <div class="border-t border-gray-100 bg-white px-6 py-4">
            <button
              type="submit"
              form="apply-form"
              class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#e68a2e] hover:shadow-xl"
            >
              <span>{{ t('karirPage.form.submit') }}</span>
              <i class="mdi mdi-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
