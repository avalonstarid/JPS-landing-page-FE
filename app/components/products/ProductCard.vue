<script setup lang="ts">
import type { Product } from '~/stores/product'
const { t } = useI18n()

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <article
    class="bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
  >
    <!-- Image Container -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="product.imageUrl"
        :alt="t(product.nameKey)"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- Content -->
    <div class="p-5 relative">
      <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {{ t(product.nameKey) }}
      </h3>
      <p class="text-sm text-gray-600 line-clamp-3 mb-4">
        {{ t(product.descriptionKey) }}
      </p>

      <!-- Action Button -->
      <button
        class="absolute bottom-4 right-4 w-10 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        :aria-label="t('products.ariaViewProduct', { name: t(product.nameKey) })"
      >
        <UiIconArrowRight size="sm" />
      </button>
    </div>
  </article>
</template>

