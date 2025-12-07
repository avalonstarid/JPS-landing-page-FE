<script setup lang="ts">
import type { Product } from '~/stores/product'
import bgCard from '~/assets/images/Background-card.png'
const { t } = useI18n()

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <article
    class="relative overflow-visible p-5 md:p-6 pt-12 flex flex-col gap-4 duration-200 hover:-translate-y-1 mt-20 rounded-[24px]"
    :style="{
      backgroundImage: `url(${bgCard})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '300px',
      height: '300px'
    }"
  >
    <!-- Image Container -->
    <div class="flex justify-center">
      <img
        :src="product.imageUrl"
        :alt="t(product.nameKey)"
        class="h-32 md:h-36 object-contain drop-shadow-xl -mt-20"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="space-y-3  max-w-[220px] absolute bottom-4 left-6">
      <h3 class="text-xl font-semibold text-[#3d4f92] leading-snug">
        {{ t(product.nameKey) }}
      </h3>
      <p class="text-xs text-gray-700 leading-relaxed  max-w-[190px]">
        {{ t(product.descriptionKey) }}
      </p>
    </div>

    <!-- Action Button -->
    <button
      class="absolute right-4 bottom-2 w-12 h-12 bg-[#f6993c] hover:bg-[#f28a26] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/60 focus:ring-offset-2"
      :aria-label="t('products.ariaViewProduct', { name: t(product.nameKey) })"
    >
      <span
        aria-hidden="true"
      >
        <i class="mdi mdi-arrow-top-right text-lg"></i>
      </span>
    </button>
  </article>
</template>
