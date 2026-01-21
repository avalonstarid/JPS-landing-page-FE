<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/product'
const bgCta = '/images/Background-2-card.png'
const fallbackProductImage = '/images/jsp-produk/ayam-hidup.png'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface ProductSectionData {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  items?: Array<{
    id: number
    title: string
    description: string
    image: string
  }>
}

const props = defineProps<{
  data?: ProductSectionData | null
}>()

const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)

onMounted(async () => {
  if (!props.data?.items?.length) {
    await productStore.fetchProducts()
  }
})

const isApiData = computed(() => Array.isArray(props.data?.items) && props.data?.items.length > 0)

const displayProducts = computed(() => {
  if (isApiData.value) {
    return props.data?.items || []
  }
  return products.value.map((product) => ({
    id: product.id,
    title: t(product.nameKey),
    description: t(product.descriptionKey),
    image: product.imageUrl,
  }))
})
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
          {{ props.data?.title || t('products.title') }}
        </h2>
        <p class="text-lg md:text-xl text-[#5d5d5d] mt-3">
          {{ props.data?.subtitle || t('products.subtitle') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="!isApiData && isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 place-items-center">
        <article
          v-for="product in displayProducts"
          :key="product.id"
          class="relative overflow-visible p-5 md:p-6 pt-12 flex flex-col gap-4 duration-300 hover:-translate-y-2 mt-20 rounded-[24px] w-full max-w-[320px] bg-white h-[250px]"
        >
          <div class="flex justify-center">
            <NuxtImg
              :src="product.image || fallbackProductImage"
              :alt="product.title"
              class="h-32 md:h-40 object-contain drop-shadow-xl -mt-24"
              loading="lazy"
              @error="(event) => applyFallback(event, fallbackProductImage)"
            />
          </div>
          <div class="space-y-3 absolute bottom-4 left-6">
            <h3 class="text-xl font-semibold text-[#3d4f92] leading-snug">
              {{ product.title }}
            </h3>
            <p class="text-xs text-gray-700 leading-relaxed">
              {{ product.description }}
            </p>
          </div>
        </article>

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
              {{ props.data?.ctaText || t('products.viewAllCardTitle') }}
            </p>
          </div>
          <div class="flex justify-center">
            <NuxtLink
              :to="props.data?.ctaLink || '/hubungi-kami'"
              class="w-14 h-14 rounded-full bg-[#f6993c] text-white flex items-center justify-center shadow-lg transition-transform hover:translate-x-1"
              :aria-label="props.data?.ctaText || t('products.cta')"
            >
              <i class="mdi mdi-arrow-right text-xl" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
