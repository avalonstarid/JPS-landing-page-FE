<script setup lang="ts">
import type { CompanyValue } from '~/stores/value'

interface Props {
  value: CompanyValue
}

defineProps<Props>()
</script>

<template>
  <article
    class="bg-white rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow duration-300 group"
  >
    <!-- Icon Circle -->
    <div
      class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300"
    >
      <span class="text-2xl" role="img" :aria-label="value.title">{{ value.icon }}</span>
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-900 mb-2">
      {{ value.title }}
    </h3>

    <!-- Description -->
    <p class="text-sm text-gray-600 leading-relaxed">
      {{ value.description }}
    </p>
  </article>
</template>

