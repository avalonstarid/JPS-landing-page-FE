<script setup lang="ts">
const logoJps = '/images/logo-jps.png'
const fallbackImage = '/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
import UiCard from '~/components/ui/Card.vue'
import SharePanel from '~/components/ui/SharePanel.vue'

const route = useRoute()
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapBeritaDetailData, mapBeritaListData } = useHomeMapper()
const { applyFallback } = useImageFallback()

definePageMeta({
  key: (currentRoute) => currentRoute.fullPath,
  prerender: true,
})

const slug = computed(() => String(route.params.id || ''))

const { data: beritaDetailResponse } = await useAsyncData('berita-detail', async () => {
  if (!slug.value) return null
  try {
    return await fetcher(`/berita/detail/${slug.value}`, {})
  } catch (error) {
    return { error: true }
  }
}, {
  watch: [slug],
})

const { data: beritaListResponse } = await useAsyncData('berita-list', async () => {
  try {
    return await fetcher('/berita-list', {})
  } catch (error) {
    return { error: true }
  }
})

const beritaDetailData = computed(() => {
  return (beritaDetailResponse.value as { data?: unknown })?.data ?? null
})

const beritaListData = computed(() => {
  return (beritaListResponse.value as { data?: unknown })?.data ?? null
})

const mappedDetail = computed(() => mapBeritaDetailData(beritaDetailData.value as any))
const mappedList = computed(() => mapBeritaListData(beritaListData.value as any))

const latestArticles = computed(() => {
  return mappedList.value.items.filter((item) => item.id !== mappedDetail.value.id).slice(0, 4)
})

const shareTitle = computed(() => t('share.title', { label: t('nav.news') }))
const shareCopyLabel = computed(() => t('share.copy', { label: t('nav.news') }))

useHead(() => ({
  title: mappedDetail.value.seo.title || `${mappedDetail.value.title} | ${t('beritaPage.meta.shortTitle')}`,
  meta: [
    {
      name: 'description',
      content: mappedDetail.value.seo.description || mappedDetail.value.description,
    },
    {
      property: 'og:title',
      content: mappedDetail.value.seo.title || mappedDetail.value.title,
    },
    {
      property: 'og:description',
      content: mappedDetail.value.seo.description || mappedDetail.value.description,
    },
    {
      property: 'og:image',
      content: mappedDetail.value.seo.image || mappedDetail.value.image,
    },
    {
      property: 'og:type',
      content: mappedDetail.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedDetail.value.seo.url || `${config.public.siteUrl}/berita/detail/${slug.value}`,
    },
    {
      property: 'og:site_name',
      content: mappedDetail.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedDetail.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedDetail.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedDetail.value.seo.canonicalUrl || `${config.public.siteUrl}/berita/detail/${slug.value}`,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0] min-h-screen">
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-end">
      <div class="absolute inset-0">
        <NuxtImg
          :src="mappedDetail.image || fallbackImage"
          :alt="mappedDetail.title"
          class="w-full h-full object-cover"
          @error="(event) => applyFallback(event, fallbackImage)"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
      </div>
    </section>

    <div class="relative container-main py-12 lg:py-16 space-y-6">
      <!-- Breadcrumb & Back -->
      <div class="flex flex-wrap items-start justify-between gap-4">
        <NuxtLink
          to="/berita"
          class="inline-flex items-center gap-2 rounded-full bg-white px-3 text-[#3d4f92] shadow hover:shadow-md transition"
        >
          <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
          <span>{{ t('beritaPage.detail.back') }}</span>
        </NuxtLink>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700">
        <div class="flex items-center gap-2 text-xs sm:text-sm text-[#3d4f92]">
          <NuxtLink to="/" class="hover:underline">{{ t('nav.home') }}</NuxtLink>
          <span>/</span>
          <NuxtLink to="/berita" class="hover:underline">{{ t('nav.news') }}</NuxtLink>
          <span>/</span>
          <span class="text-gray-600 line-clamp-1">{{ mappedDetail.title }}</span>
        </div>
      </div>
      <div class="flex flex-wrap items-start justify-between gap-4">
        <h1 class="text-3xl md:text-4xl font-bold text-[#3d4f92] leading-tight max-w-3xl">
          {{ mappedDetail.title }}
        </h1>
      </div>
      <div class="grid gap-10 lg:grid-cols-[1fr_290px]">
        <!-- Main Article -->
        <article class="space-y-6">
          <div class="rounded-3xl">
            <div class="flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <NuxtImg :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
              <span class="font-semibold">{{ mappedDetail.author }}</span>
              <span v-if="mappedDetail.timeAgo" class="text-gray-400">&bull;</span>
              <span v-if="mappedDetail.timeAgo">{{ mappedDetail.timeAgo }}</span>
            </div>

            <div class="mt-6 berita-content text-[#333] leading-relaxed text-lg" v-html="mappedDetail.contentHtml" />
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="space-y-5 mt-11 relative">
          <div class="pt-6">
            <SharePanel :title="shareTitle" :copy-label="shareCopyLabel" />
          </div>
          <h3 class="text-lg font-semibold">Berita Baru</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="item in latestArticles"
              :key="item.id"
              :to="`/berita/detail/${item.id}`"
              class="flex flex-col gap-3"
            >
              <UiCard
                :image-url="item.image"
                company=""
                time-ago=""
                title=""
                description=""
                avatar-url=""
                :fill-parent="true"
                :height="260"
                :aria-label="item.title"
              />
              <div class="px-1 space-y-1">
                <p class="text-xs text-gray-600 flex items-center gap-2">
                  <NuxtImg :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                  <span class="font-medium text-[#3d4f92]">{{ item.company }}</span>
                  <span v-if="item.timeAgo" class="text-gray-400">&bull;</span>
                  <span v-if="item.timeAgo">{{ item.timeAgo }}</span>
                </p>
                <p class="text-sm font-semibold text-[#1f2937] leading-tight">{{ item.title }}</p>
                <p class="text-xs text-[#555] leading-snug line-clamp-2">{{ item.excerpt }}</p>
              </div>
            </NuxtLink>
            <div class="flex items-center gap-2 text-xs sm:text-sm text-[#3d4f92]">
              <NuxtLink to="/berita" class="hover:underline">Lihat lebih banyak...</NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
.berita-content :deep(p) {
  margin-bottom: 1rem;
}

.berita-content :deep(ul),
.berita-content :deep(ol) {
  margin: 0 0 1rem 1.5rem;
}

.berita-content :deep(img) {
  border-radius: 1rem;
  margin-bottom: 1rem;
}
</style>
