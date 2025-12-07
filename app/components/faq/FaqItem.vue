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
  <div class="border-b border-gray-200 last:border-b-0">
    <button
      :id="`faq-button-${faq.id}`"
      class="w-full py-5 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset rounded-lg"
      :aria-expanded="isOpen"
      :aria-controls="`faq-panel-${faq.id}`"
      @click="toggle"
    >
      <span class="text-base md:text-lg font-medium text-gray-900 group-hover:text-primary-500 transition-colors pr-4">
        {{ t(faq.questionKey) }}
      </span>
      <span
        :class="[
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200',
          isOpen ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-500',
        ]"
      >
        <UiIconChevron :direction="isOpen ? 'up' : 'down'" size="sm" />
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
        class="overflow-hidden"
      >
        <div class="pb-5 text-gray-600 leading-relaxed">
          {{ t(faq.answerKey) }}
        </div>
      </div>
    </Transition>
  </div>
</template>

