<script setup lang="ts">
import KeberlanjutanHeroSection from '~/components/keberlanjutan/KeberlanjutanHeroSection.vue'
import KeberlanjutanDetailSection from '~/components/keberlanjutan/KeberlanjutanDetailSection.vue'
import imageOne from '~/assets/images/karir/karir-section.png'
import imageTwo from '~/assets/images/karir/karir.png'
import imageThree from '~/assets/images/tentang/tentang-section.png'

const items = [
  {
    title: 'Pelatihan dan Sertifikasi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    image: imageOne,
  },
  {
    title: 'Pengembangan Karir',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Tempus leo eu aenean sed diam urna tempor.',
    image: imageTwo,
  },
  {
    title: 'Kesejahteraan Karyawan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    image: imageThree,
  },
]

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Keberlanjutan', to: '/keberlanjutan/tinjauan' },
  { label: 'Pengembangan SDM' },
]

useHead(() => ({
  title: 'Pengembangan SDM | Keberlanjutan',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <KeberlanjutanHeroSection />
    <KeberlanjutanDetailSection title="Pengembangan SDM" :breadcrumbs="breadcrumbs" :items="items" />
  </div>
</template>
