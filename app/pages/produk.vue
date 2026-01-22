<script setup lang="ts">
import ProdukHeroSection from '~/components/produk/ProdukHeroSection.vue'
import ProdukListSection from '~/components/produk/ProdukListSection.vue'

const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapProdukData } = useHomeMapper()

const { data: produkResponse } = await useAsyncData('produk-page', async () => {
  try {
    return await fetcher('/produk', {})
  } catch (error) {
    return { error: true }
  }
})

const produkData = computed(() => {
  return (produkResponse.value as { data?: unknown })?.data ?? null
})

const mappedProduk = computed(() => mapProdukData(produkData.value as any))

useHead(() => ({
  title: mappedProduk.value.seo.title || t('produkPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedProduk.value.seo.description || t('produkPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedProduk.value.seo.title || t('produkPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedProduk.value.seo.description || t('produkPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedProduk.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedProduk.value.seo.url || `${config.public.siteUrl}/produk`,
    },
    {
      property: 'og:site_name',
      content: mappedProduk.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedProduk.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedProduk.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedProduk.value.seo.canonicalUrl || `${config.public.siteUrl}/produk`,
    },
  ],
}))
</script>

<template>
  <div class="bg-white">
    <ProdukHeroSection :data="mappedProduk.hero" />
    <ProdukListSection :data="{ title: mappedProduk.list.title, stock: mappedProduk.stock, items: mappedProduk.products.items }" />
  </div>
</template>
