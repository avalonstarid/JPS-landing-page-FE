<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/product'

const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)

onMounted(async () => {
  await productStore.fetchProducts()
})
</script>

<template>
  <section id="produk" class="section-padding bg-cream-200" aria-labelledby="products-title">
    <div class="container-main">
      <!-- Section Header -->
      <UiSectionHeader
        title="Produk Kami"
        subtitle="Kami menyediakan produk yang berkualitas dan terjangkau"
        align="center"
      />

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Product Cards -->
        <ProductsProductCard v-for="product in products" :key="product.id" :product="product" />

        <!-- View All Products Card -->
        <div
          class="bg-secondary-700 rounded-xl shadow-card p-6 flex flex-col items-center justify-center text-center min-h-[320px] group hover:bg-secondary-800 transition-colors duration-300"
        >
          <div class="mb-6">
            <div
              class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-colors"
            >
              <UiIconArrowRight size="lg" class="text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Lihat Produk Selengkapnya</h3>
            <p class="text-gray-300 text-sm">Jelajahi semua produk berkualitas kami</p>
          </div>

          <UiBaseButton
            variant="outline"
            class="border-white text-white hover:bg-white hover:text-secondary-700"
            aria-label="Lihat semua produk"
          >
            Lihat Semua
            <UiIconArrowRight size="sm" class="ml-2" />
          </UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

