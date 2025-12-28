<script setup lang="ts">
import ProdukItemCard from '~/components/produk/ProdukItemCard.vue'
import front1 from '~/assets/images/produk/front-1.jpg'
import front2 from '~/assets/images/produk/front-2.jpg'
import front3 from '~/assets/images/produk/front-3.jpg'
import front4 from '~/assets/images/produk/front-4.jpg'
import front5 from '~/assets/images/produk/front-5.jpg'
import behind1 from '~/assets/images/produk/behind-1.jpg'
import behind2 from '~/assets/images/produk/behind-2.jpg'
import behind3 from '~/assets/images/produk/behind-3.jpg'
import behind4 from '~/assets/images/produk/behind-4.jpg'
import behind5 from '~/assets/images/produk/behind-5.jpg'

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
    image: front1,
    alt: t('produkPage.items.docParent.alt'),
    accent: '#3d4f92',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behind1,
    stackTopImage: front1,
  },
  {
    key: 'docFinal',
    title: t('produkPage.items.docFinal.title'),
    description: t('produkPage.items.docFinal.description'),
    image: front2,
    alt: t('produkPage.items.docFinal.alt'),
    accent: '#f6993c',
    reverse: false,
    stackSide: 'left',
    stackBaseImage: behind2,
    stackTopImage: front2,
  },
  {
    key: 'liveChicken',
    title: t('produkPage.items.liveChicken.title'),
    description: t('produkPage.items.liveChicken.description'),
    image: front3,
    alt: t('produkPage.items.liveChicken.alt'),
    accent: '#2d70c0',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behind3,
    stackTopImage: front3,
  },
  {
    key: 'commercialEgg',
    title: t('produkPage.items.commercialEgg.title'),
    description: t('produkPage.items.commercialEgg.description'),
    image: front4,
    alt: t('produkPage.items.commercialEgg.alt'),
    accent: '#c47c2e',
    reverse: false,
    stackSide: 'left',
    stackBaseImage: behind4,
    stackTopImage: front4,
  },
  {
    key: 'chickenCarcass',
    title: t('produkPage.items.chickenCarcass.title'),
    description: t('produkPage.items.chickenCarcass.description'),
    image: front5,
    alt: t('produkPage.items.chickenCarcass.alt'),
    accent: '#5b3f8c',
    reverse: true,
    stackSide: 'right',
    stackBaseImage: behind5,
    stackTopImage: front5,
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

      <div v-reveal  class="reveal relative overflow-hidden rounded-2xl bg-[#3A52A3] text-white px-6 py-6 md:px-10 md:py-8">
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
