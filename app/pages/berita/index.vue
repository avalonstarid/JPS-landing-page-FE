<script setup lang="ts">
import BeritaHeroSection from '~/components/berita/BeritaHeroSection.vue'
import BeritaPopularSection from '~/components/berita/BeritaPopularSection.vue'
import BeritaLatestSection from '~/components/berita/BeritaLatestSection.vue'

const { t } = useI18n()

useHead(() => ({
  title: t('beritaPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('beritaPage.meta.description'),
    },
    {
      property: 'og:title',
      content: t('beritaPage.meta.title'),
    },
    {
      property: 'og:description',
      content: t('beritaPage.meta.description'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <BeritaHeroSection />
    <BeritaPopularSection />
    <BeritaLatestSection />
  </div>
</template>

