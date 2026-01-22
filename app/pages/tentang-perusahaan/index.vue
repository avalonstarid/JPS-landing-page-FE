<script setup lang="ts">
import TentangHeroSection from '~/components/tentang/TentangHeroSection.vue'
import TentangVideoSection from '~/components/tentang/TentangVideoSection.vue'
import TentangVisiMisiSection from '~/components/tentang/TentangVisiMisiSection.vue'
import TentangLinimasaSection from '~/components/tentang/TentangLinimasaSection.vue'
import TentangLokasiSection from '~/components/tentang/TentangLokasiSection.vue'
import TentangStrukturSection from '~/components/tentang/TentangStrukturSection.vue'
import TentangDewanSection from '~/components/tentang/TentangDewanSection.vue'

const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapTentangData } = useHomeMapper()

const { data: tentangResponse } = await useAsyncData('tentang-perusahaan', async () => {
  try {
    return await fetcher('/tentang-perusahaan', {})
  } catch (error) {
    return { error: true }
  }
})

const tentangData = computed(() => {
  return (tentangResponse.value as { data?: unknown })?.data ?? null
})

const mappedTentang = computed(() => mapTentangData(tentangData.value as any))

useHead(() => ({
  title: mappedTentang.value.seo.title || t('tentangPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedTentang.value.seo.description || t('tentangPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedTentang.value.seo.title || t('tentangPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedTentang.value.seo.description || t('tentangPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedTentang.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedTentang.value.seo.url || `${config.public.siteUrl}/tentang-perusahaan`,
    },
    {
      property: 'og:site_name',
      content: mappedTentang.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedTentang.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedTentang.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedTentang.value.seo.canonicalUrl || `${config.public.siteUrl}/tentang-perusahaan`,
    },
  ],
}))
</script>

<template>
  <div>
    <!-- Section 1: Hero Section -->
    <TentangHeroSection :data="mappedTentang.hero" />

    <!-- Section 2: Video Section -->
    <TentangVideoSection :data="mappedTentang.video" />

    <!-- Section 3: Visi Misi Section -->
    <TentangVisiMisiSection :data="mappedTentang.visiMisi" />

    <!-- Section 4: Linimasa Sejarah -->
    <TentangLinimasaSection :data="mappedTentang.history" />

    <!-- Section 5: Lokasi Usaha -->
    <TentangLokasiSection :data="mappedTentang.location" />

    <!-- Section 6: Struktur Organisasi -->
    <TentangStrukturSection :data="mappedTentang.organization" />

    <!-- Section 7: Dewan Komisaris -->
    <TentangDewanSection :data="mappedTentang.dewan" />
  </div>
</template>
