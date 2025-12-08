<script setup lang="ts">
import ProdukHeroSection from '~/components/produk/ProdukHeroSection.vue'
import ProdukListSection from '~/components/produk/ProdukListSection.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('produkPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('produkPage.meta.description'),
    },
    {
      property: 'og:title',
      content: t('produkPage.meta.title'),
    },
    {
      property: 'og:description',
      content: t('produkPage.meta.description'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
}))
</script>

<template>
  <div class="bg-white">
    <ProdukHeroSection />
    <ProdukListSection />
  </div>
</template>
