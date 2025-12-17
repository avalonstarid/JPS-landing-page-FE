<script setup lang="ts">
import ProdukItemCard from '~/components/produk/ProdukItemCard.vue'
import photoDocParent from '~/assets/images/produk/produk1.png'
import photoDocFinal from '~/assets/images/produk/produk2.png'
import imgLiveChicken from '~/assets/images/jsp-produk/ayam-hidup.png'
import imgCommercialEgg from '~/assets/images/jsp-produk/telur.png'
import imgCarcass from '~/assets/images/jsp-produk/karkas-ayam.png'
import behindRight from '~/assets/images/produk/produk-behind-right.png'
import behindLeft from '~/assets/images/produk/produk-behind-left.jpg'
import topRight from '~/assets/images/produk/produk-top-right.jpg'
import topLeft from '~/assets/images/produk/produk-top-left.jpg'

const { t } = useI18n()

const productItems = computed(() => [
  {
    key: 'docParent',
    title: t('produkPage.items.docParent.title'),
    description: t('produkPage.items.docParent.description'),
    image: photoDocParent,
    alt: t('produkPage.items.docParent.alt'),
    accent: '#3d4f92',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behindRight,
    stackTopImage: topRight,
  },
  {
    key: 'docFinal',
    title: t('produkPage.items.docFinal.title'),
    description: t('produkPage.items.docFinal.description'),
    image: photoDocFinal,
    alt: t('produkPage.items.docFinal.alt'),
    accent: '#f6993c',
    reverse: false,
    stackSide: 'left',
    stackBaseImage: behindLeft,
    stackTopImage: topLeft,
  },
  {
    key: 'liveChicken',
    title: t('produkPage.items.liveChicken.title'),
    description: t('produkPage.items.liveChicken.description'),
    image: photoDocParent,
    alt: t('produkPage.items.liveChicken.alt'),
    accent: '#2d70c0',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behindRight,
    stackTopImage: topRight,
  },
  {
    key: 'commercialEgg',
    title: t('produkPage.items.commercialEgg.title'),
    description: t('produkPage.items.commercialEgg.description'),
    image: photoDocFinal,
    alt: t('produkPage.items.commercialEgg.alt'),
    accent: '#c47c2e',
    reverse: false,
    stackSide: 'left',
    stackBaseImage: behindLeft,
    stackTopImage: topLeft,
  },
  {
    key: 'chickenCarcass',
    title: t('produkPage.items.chickenCarcass.title'),
    description: t('produkPage.items.chickenCarcass.description'),
    image: photoDocParent,
    alt: t('produkPage.items.chickenCarcass.alt'),
    accent: '#5b3f8c',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behindRight,
    stackTopImage: topRight,
  },
])
</script>

<template>
  <section id="produk" class="section-padding" style="background: #fdeee0;">
    <div class="container-main space-y-10">
      <div class="text-center space-y-3">
        <h2 class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('produkPage.list.title') }}
        </h2>
        <p class="text-lg text-[#4b4b4b] max-w-3xl mx-auto leading-relaxed">
          {{ t('produkPage.list.subtitle') }}
        </p>
      </div>

      <div class="space-y-10">
        <ProdukItemCard
          v-for="(item, index) in productItems"
          :key="item.key"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :image-alt="item.alt"
          :reverse="item.reverse"
          :accent="item.accent"
          :index="index"
          :stack-side="item.stackSide"
          :stack-base-image="item.stackBaseImage"
          :stack-top-image="item.stackTopImage"
        />
      </div>
    </div>
  </section>
</template>
