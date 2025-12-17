<script setup lang="ts">
import type { CompanyValue } from '~/stores/value'
const { t } = useI18n()

interface Props {
  value: CompanyValue
}

defineProps<Props>()
</script>

<template>
  <article
    class="duration-300 hover:-translate-y-2 bg-white rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-4"
  >
    <!-- Icon -->
    <div class="mb-4">
      <img :src="value.icon" :alt="t(value.titleKey)" class="h-12 w-12 object-contain" />
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-900 mb-2">
      {{ t(value.titleKey) }}
    </h3>

    <!-- Description -->
    <p class="text-xs text-gray-700 leading-relaxed">
      {{ t(value.descriptionKey) }}
    </p>
  </article>
</template>

