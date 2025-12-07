<script setup lang="ts">
// Home page composing all section components
useHead({
  title: 'PT Janu Putra Sejahtera - Perusahaan Peternakan Terintegrasi',
  meta: [
    {
      name: 'description',
      content:
        'PT Janu Putra Sejahtera - Perusahaan peternakan ayam terintegrasi terkemuka di Indonesia yang menyediakan produk berkualitas dan terjangkau.',
    },
    {
      property: 'og:title',
      content: 'PT Janu Putra Sejahtera - Perusahaan Peternakan Terintegrasi',
    },
    {
      property: 'og:description',
      content:
        'Perusahaan peternakan ayam terintegrasi terkemuka di Indonesia yang menyediakan produk berkualitas dan terjangkau.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SectionsHeroSection />

    <!-- Products Section -->
    <SectionsProductsSection />

    <!-- Values Section -->
    <SectionsValuesSection />

    <!-- Testimonials Section -->
    <SectionsTestimonialsSection />

    <!-- FAQ Section -->
    <SectionsFaqSection />
  </div>
</template>

