<script setup lang="ts">
import type { FaqItem } from '~/stores/faq'
const { t } = useI18n()

interface Props {
  faq: FaqItem
  isOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
})

const emit = defineEmits<{
  toggle: [id: number]
}>()

const toggle = () => {
  emit('toggle', props.faq.id)
}
</script>

<template>
  <div v-reveal class="py-2 reveal">
    <button
      :id="`faq-button-${faq.id}`"
      class="w-full py-4 flex items-center justify-between text-left group rounded-lg bg-white duration-300 hover:-translate-y-1"
      :aria-expanded="isOpen"
      :aria-controls="`faq-panel-${faq.id}`"
      @click="toggle"
    >
      <span class="pl-4 text-base md:text-lg font-medium text-gray-900 group-hover:text-primary-500 transition-colors pr-4">
        {{ t(faq.questionKey) }}
      </span>
      <span 
        class="mr-4"
        :class="[
          'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
          'bg-[#f6993c] text-white',
          isOpen ? 'rotate-0' : 'rotate-0'
        ]"
      >
        <i :class="isOpen ? 'mdi mdi-arrow-bottom-right' : 'mdi mdi-arrow-top-right'" class="text-xl"></i>
      </span>
    </button>

    <!-- Answer Panel with Height Animation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-show="isOpen"
        :id="`faq-panel-${faq.id}`"
        :aria-labelledby="`faq-button-${faq.id}`"
        class="overflow-hidden bg-white px-4 mt-[-10px]"
      >
        <div class="pb-5 text-base text-gray-600 leading-relaxed mt-6">
          {{ t(faq.answerKey) }}
        </div>
      </div>
    </Transition>
  </div>
</template>
