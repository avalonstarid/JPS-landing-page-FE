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

const stockItems = computed(() => [
  {
    value: t('produkPage.stockUpdate.items.docParent.value'),
    label: t('produkPage.stockUpdate.items.docParent.label'),
  },
  {
    value: t('produkPage.stockUpdate.items.docFinal.value'),
    label: t('produkPage.stockUpdate.items.docFinal.label'),
  },
  {
    value: t('produkPage.stockUpdate.items.commercialEgg.value'),
    label: t('produkPage.stockUpdate.items.commercialEgg.label'),
  },
  {
    value: t('produkPage.stockUpdate.items.rpa.value'),
    label: t('produkPage.stockUpdate.items.rpa.label'),
  },
  {
    value: t('produkPage.stockUpdate.items.livebird.value'),
    label: t('produkPage.stockUpdate.items.livebird.label'),
  },
])

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
        <!-- <p class="text-lg text-[#4b4b4b] max-w-3xl mx-auto leading-relaxed">
          {{ t('produkPage.list.subtitle') }}
        </p> -->
      </div>

      <div class="relative overflow-hidden rounded-2xl bg-[#3A52A3] text-white px-6 py-6 md:px-10 md:py-8">
        <div
          class="absolute -top-12 -right-12 h-32 w-32 rounded-full"
          style="background: radial-gradient(circle, #F6993C80 0%, transparent 70%);"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-16 -left-10 h-36 w-36 rounded-full"
          style="background: radial-gradient(circle, #F6993C80 0%, transparent 70%);"
          aria-hidden="true"
        />

        <div class="relative text-center space-y-1">
          <h3 class="text-lg md:text-2xl font-semibold">
            {{ t('produkPage.stockUpdate.title') }}
          </h3>
          <p class="text-xs md:text-sm text-white/90">
            {{ t('produkPage.stockUpdate.updatedAt') }}
          </p>
        </div>

        <div class="relative mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div v-for="item in stockItems" :key="item.label" class="text-center min-w-[120px]">
            <div class="text-2xl md:text-4xl font-semibold tracking-tight">
              {{ item.value }}
            </div>
            <div class="mt-1 text-xs md:text-sm text-white/90">
              {{ item.label }}
            </div>
          </div>
        </div>
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
