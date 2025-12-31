<script setup lang="ts">
import KeberlanjutanHeroSection from '~/components/keberlanjutan/KeberlanjutanHeroSection.vue'
import KeberlanjutanDetailSection from '~/components/keberlanjutan/KeberlanjutanDetailSection.vue'
import imageOne from '~/assets/images/bisnis/bisnis-1.png'
import imageTwo from '~/assets/images/bisnis/bisnis-2.jpg'
import imageThree from '~/assets/images/bisnis/bisnis-3.jpg'

const items = [
  {
    title: 'Kebijakan Lingkungan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
    image: imageOne,
  },
  {
    title: 'Kebijakan Energi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Tempus leo eu aenean sed diam urna tempor.',
    image: imageTwo,
  },
  {
    title: 'Kebijakan Kesejahteraan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
    image: imageThree,
  },
]

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Keberlanjutan', to: '/keberlanjutan/tinjauan' },
  { label: 'Kebijakan' },
]

useHead(() => ({
  title: 'Kebijakan | Keberlanjutan',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <KeberlanjutanHeroSection />
    <KeberlanjutanDetailSection title="Kebijakan" :breadcrumbs="breadcrumbs" :items="items" />
  </div>
</template>
