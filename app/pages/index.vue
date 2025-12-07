<script setup lang="ts">
// Home page composing all section components
const { t } = useI18n()

useHead(() => ({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description'),
    },
    {
      property: 'og:title',
      content: t('meta.ogTitle'),
    },
    {
      property: 'og:description',
      content: t('meta.ogDescription'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
}))
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

