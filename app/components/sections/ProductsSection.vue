<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/product'
import bgCta from '~/assets/images/Background-2-card.png'
const { t } = useI18n()
const router = useRouter()

const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)

onMounted(async () => {
  await productStore.fetchProducts()
})

const goToProduk = () => {
  router.push('/produk')
}
</script>

<template>
  <section
    v-reveal
    id="produk"
    class="section-padding reveal"
    aria-labelledby="products-title"
    style="background: #fdeee0;"
  >
    <div class="container-main">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('products.title') }}
        </h2>
        <p class="text-lg md:text-xl text-[#5d5d5d] mt-3">
          {{ t('products.subtitle') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 place-items-center">
        <ProductsProductCard v-for="product in products" :key="product.id" :product="product" />

        <!-- View All CTA -->
        <div
          class="w-full max-w-[320px] rounded-[28px] text-white p-6 flex flex-col justify-between min-h-[260px] bg-cover bg-center mt-20"
          :style="{
            backgroundImage: `url(${bgCta})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '320px'
          }"
        >
          <div class="flex-1 flex items-center justify-center text-center px-4">
            <p class="text-2xl font-semibold leading-tight">
              {{ t('products.viewAllCardTitle') }}
            </p>
          </div>
          <div class="flex justify-center">
            <button
              class="w-14 h-14 rounded-full bg-[#f6993c] text-white flex items-center justify-center shadow-lg transition-transform hover:translate-x-1"
              :aria-label="t('products.cta')"
              @click="goToProduk"
            >
              <i class="mdi mdi-arrow-right text-xl" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
