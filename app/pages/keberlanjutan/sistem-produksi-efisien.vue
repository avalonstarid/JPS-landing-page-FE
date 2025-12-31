<script setup lang="ts">
import KeberlanjutanHeroSection from '~/components/keberlanjutan/KeberlanjutanHeroSection.vue'
import KeberlanjutanDetailSection from '~/components/keberlanjutan/KeberlanjutanDetailSection.vue'
import imageOne from '~/assets/images/produk/produk-top-left.jpg'
import imageTwo from '~/assets/images/produk/produk-top-right.jpg'
import imageThree from '~/assets/images/produk/produk1.png'

const items = [
  {
    title: 'Optimalisasi Produksi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    image: imageOne,
  },
  {
    title: 'Efisiensi Energi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Tempus leo eu aenean sed diam urna tempor.',
    image: imageTwo,
  },
  {
    title: 'Pengelolaan Limbah',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    image: imageThree,
  },
]

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Keberlanjutan', to: '/keberlanjutan/tinjauan' },
  { label: 'Sistem Produksi Efisien' },
]

useHead(() => ({
  title: 'Sistem Produksi Efisien | Keberlanjutan',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <KeberlanjutanHeroSection />
    <KeberlanjutanDetailSection title="Sistem Produksi Efisien" :breadcrumbs="breadcrumbs" :items="items" />
  </div>
</template>
