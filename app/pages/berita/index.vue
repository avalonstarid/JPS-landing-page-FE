<script setup lang="ts">
import BeritaHeroSection from '~/components/berita/BeritaHeroSection.vue'
import BeritaPopularSection from '~/components/berita/BeritaPopularSection.vue'
import BeritaLatestSection from '~/components/berita/BeritaLatestSection.vue'

const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapBeritaPageData, mapBeritaListData } = useHomeMapper()

const { data: beritaResponse } = await useAsyncData('berita-page-index', async () => {
  try {
    return await fetcher('/berita', {})
  } catch (error) {
    return { error: true }
  }
})

const { data: beritaListResponse, pending: beritaListPending } = await useAsyncData('berita-list-index', async () => {
  try {
    return await fetcher('/berita-list', {})
  } catch (error) {
    return { error: true }
  }
})

const beritaPageData = computed(() => {
  return (beritaResponse.value as { data?: unknown })?.data ?? null
})

const beritaListData = computed(() => {
  return (beritaListResponse.value as { data?: unknown })?.data ?? null
})

const mappedBerita = computed(() => mapBeritaPageData(beritaPageData.value as any))
const mappedBeritaList = computed(() => mapBeritaListData(beritaListData.value as any))

const heroItems = computed(() => mappedBeritaList.value.items.slice(0, 4))

const popularLayout = computed(() => {
  const items = mappedBeritaList.value.items
  return {
    primary: items[0],
    highlight: items[1] || items[0],
    stacked: items.slice(2, 4),
  }
})

const latestItems = computed(() => mappedBeritaList.value.items.slice(0, 8))

onMounted(() => {
  refreshNuxtData(['berita-page-index', 'berita-list-index'])
})

useHead(() => ({
  title: mappedBerita.value.seo.title || t('beritaPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedBerita.value.seo.description || t('beritaPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedBerita.value.seo.title || t('beritaPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedBerita.value.seo.description || t('beritaPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedBerita.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedBerita.value.seo.url || `${config.public.siteUrl}/berita`,
    },
    {
      property: 'og:site_name',
      content: mappedBerita.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedBerita.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedBerita.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedBerita.value.seo.canonicalUrl || `${config.public.siteUrl}/berita`,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <BeritaHeroSection :items="heroItems" />
    <BeritaPopularSection
      :title="mappedBerita.popular.title"
      :subtitle="mappedBerita.popular.subtitle"
      :layout="popularLayout"
      :is-loading="beritaListPending"
    />
    <BeritaLatestSection
      :title="mappedBerita.latest.title"
      :subtitle="mappedBerita.latest.subtitle"
      :items="latestItems"
      :is-loading="beritaListPending"
    />
  </div>
</template>
