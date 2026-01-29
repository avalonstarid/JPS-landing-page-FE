<script setup lang="ts">
const fallbackHeroImage = '/images/most-top.png'
const fallbackItemImage = '/images/most-top.png'
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapPengumumanPageData, mapPengumumanListData } = useHomeMapper()
const { applyFallback } = useImageFallback()

const { data: pengumumanResponse } = await useAsyncData('pengumuman-page', async () => {
  try {
    return await fetcher('/pengumuman', {})
  } catch (error) {
    return { error: true }
  }
})

const { data: pengumumanListResponse, pending: pengumumanListPending } = await useAsyncData('pengumuman-list', async () => {
  try {
    return await fetcher('/pengumuman-list', {})
  } catch (error) {
    return { error: true }
  }
})

const pengumumanPageData = computed(() => {
  return (pengumumanResponse.value as { data?: unknown })?.data ?? null
})

const pengumumanListData = computed(() => {
  return (pengumumanListResponse.value as { data?: unknown })?.data ?? null
})

const mappedPengumuman = computed(() => mapPengumumanPageData(pengumumanPageData.value as any))
const mappedPengumumanList = computed(() => mapPengumumanListData(pengumumanListData.value as any))

useHead(() => ({
  title: mappedPengumuman.value.seo.title || `${t('nav.newsItems.pengumuman')} | ${config.public.siteName}`,
  meta: [
    {
      name: 'description',
      content: mappedPengumuman.value.seo.description || mappedPengumuman.value.hero.title || t('nav.newsItems.pengumuman'),
    },
    {
      property: 'og:title',
      content: mappedPengumuman.value.seo.title || mappedPengumuman.value.hero.title || t('nav.newsItems.pengumuman'),
    },
    {
      property: 'og:description',
      content: mappedPengumuman.value.seo.description || mappedPengumuman.value.hero.title || t('nav.newsItems.pengumuman'),
    },
    {
      property: 'og:type',
      content: mappedPengumuman.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedPengumuman.value.seo.url || `${config.public.siteUrl}/pengumuman`,
    },
    {
      property: 'og:site_name',
      content: mappedPengumuman.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedPengumuman.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedPengumuman.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedPengumuman.value.seo.canonicalUrl || `${config.public.siteUrl}/pengumuman`,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0] min-h-screen">
    <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-end">
      <div class="absolute inset-0">
        <NuxtImg
          :src="mappedPengumuman.hero.background || fallbackHeroImage"
          :alt="mappedPengumuman.hero.title || t('nav.newsItems.pengumuman')"
          class="w-full h-full object-cover"
          @error="(event) => applyFallback(event, fallbackHeroImage)"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
      </div>
      <div class="relative z-10 container-main pb-16 md:pb-20 lg:pb-24 space-y-3 w-full">
        <p class="text-sm uppercase tracking-[0.2em] text-white/80">
          {{ mappedPengumuman.hero.subtitle || t('nav.newsItems.pengumuman') }}
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
          {{ mappedPengumuman.hero.title || t('nav.newsItems.pengumuman') }}
        </h1>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="container-main space-y-4">
        <div v-if="pengumumanListPending" class="rounded-2xl bg-white py-8 text-center shadow-lg">
          <span class="text-sm text-gray-500">{{ t('common.loading') }}</span>
        </div>
        <template v-else>
          <NuxtLink
            v-for="item in mappedPengumumanList.items"
            :key="item.id"
            :to="`/pengumuman/detail/${item.id}`"
            class="flex flex-col sm:flex-row items-center gap-5 rounded-[28px] bg-white shadow-xl shadow-black/10 p-4 sm:p-6 hover:shadow-2xl transition"
          >
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              class="w-full sm:w-40 h-40 rounded-2xl object-cover shadow-md"
              @error="(event) => applyFallback(event, fallbackItemImage)"
            />

            <div class="flex-1 space-y-3">
              <h2 class="text-xl md:text-2xl font-semibold text-[#1f2937] leading-tight">
                {{ item.title }}
              </h2>
              <div class="flex items-center gap-2 text-sm text-[#3d4f92]">
                <NuxtImg
                  src="/images/logo-jps.png"
                  alt="Logo JPS"
                  class="w-8 h-8 rounded-full object-cover"
                  @error="(event) => applyFallback(event, '/images/logo-jps.png')"
                />
                <span class="font-semibold">{{ item.company }}</span>
              </div>
              <p v-if="item.timeAgo" class="text-sm text-gray-600">Diterbitkan pada {{ item.timeAgo }}</p>
              <div>
                <span
                  class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-4 py-2 text-white font-semibold shadow hover:shadow-lg transition"
                >
                  <span>{{ t('common.viewAll') }}</span>
                  <i class="mdi mdi-arrow-top-right" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>
    </section>
  </div>
</template>
