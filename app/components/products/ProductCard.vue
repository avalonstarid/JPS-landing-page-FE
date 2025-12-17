<script setup lang="ts">
import type { Product } from '~/stores/product'
import bgCard from '~/assets/images/Background-card.png'
const { t } = useI18n()
const router = useRouter()

interface Props {
  product: Product
}

defineProps<Props>()

const goToProduk = () => {
  router.push('/produk')
}
</script>

<template>
  <article
    class="relative overflow-visible p-5 md:p-6 pt-12 flex flex-col gap-4 duration-300 hover:-translate-y-2 mt-20 rounded-[24px] w-full max-w-[320px] bg-white h-[250px]"

  >
    <!-- Image Container -->
    <div class="flex justify-center">
      <img
        :src="product.imageUrl"
        :alt="t(product.nameKey)"
        class="h-32 md:h-40 object-contain drop-shadow-xl -mt-24"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="space-y-3 absolute bottom-4 left-6">
      <h3 class="text-xl font-semibold text-[#3d4f92] leading-snug">
        {{ t(product.nameKey) }}
      </h3>
      <p class="text-xs text-gray-700 leading-relaxed ">
        {{ t(product.descriptionKey) }}
      </p>
    </div>

    <!-- Action Button -->
  </article>
</template>
