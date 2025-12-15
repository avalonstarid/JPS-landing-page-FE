<script setup lang="ts">
import TentangHeroSection from '~/components/tentang/TentangHeroSection.vue'
import TentangVideoSection from '~/components/tentang/TentangVideoSection.vue'
import TentangVisiMisiSection from '~/components/tentang/TentangVisiMisiSection.vue'
import TentangLinimasaSection from '~/components/tentang/TentangLinimasaSection.vue'
import TentangLokasiSection from '~/components/tentang/TentangLokasiSection.vue'
import TentangStrukturSection from '~/components/tentang/TentangStrukturSection.vue'
import TentangDewanSection from '~/components/tentang/TentangDewanSection.vue'

const { t } = useI18n()

// SEO Meta
useSeoMeta({
  title: () => t('tentangPage.meta.title'),
  description: () => t('tentangPage.meta.description'),
  ogTitle: () => t('tentangPage.meta.title'),
  ogDescription: () => t('tentangPage.meta.description'),
})
</script>

<template>
  <div>
    <!-- Section 1: Hero Section -->
    <TentangHeroSection />

    <!-- Section 2: Video Section -->
    <TentangVideoSection />

    <!-- Section 3: Visi Misi Section -->
    <TentangVisiMisiSection />

    <!-- Section 4: Linimasa Sejarah -->
    <TentangLinimasaSection />

    <!-- Section 5: Lokasi Usaha -->
    <TentangLokasiSection />

    <!-- Section 6: Struktur Organisasi -->
    <TentangStrukturSection />

    <!-- Section 7: Dewan Komisaris -->
    <TentangDewanSection />
  </div>
</template>

