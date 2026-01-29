<script setup lang="ts">
const coverImage = '/images/book-laporan.jpg'
const heroImage = '/images/tinjauan/tinjauan-section.png'
import InvestorDownloadPill from '~/components/investor/InvestorDownloadPill.vue'
const { t } = useI18n()
const { fetcher } = useApiFetch()
const { mapInvestorListData } = useHomeMapper()
const { applyFallback } = useImageFallback()

const { data: laporanResponse } = await useAsyncData('laporan-keberlanjutan-list', async () => {
  try {
    return await fetcher('/keberlanjutan-laporan-list', {})
  } catch (error) {
    return { error: true }
  }
})

const laporanData = computed(() => {
  return (laporanResponse.value as { data?: unknown })?.data ?? null
})

const mappedLaporan = computed(() => mapInvestorListData(laporanData.value as any))

const fallbackFeatured = {
  title: 'Laporan Keberlanjutan 2024 PT JPS Tbk',
  href: '',
  image: coverImage,
}

const featuredReport = computed(() => mappedLaporan.value.items[0] || fallbackFeatured)
const items = computed(() => mappedLaporan.value.items.slice(1))

useHead(() => ({
  title: `${t('nav.sustainabilityItems.laporanKeberlanjutan')} | ${t('nav.sustainability')}`,
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
      <div class="absolute inset-0">
        <NuxtImg
          :src="heroImage"
          alt="Keberlanjutan"
          class="h-full w-full object-cover"
          loading="eager"
          @error="(event) => applyFallback(event, heroImage)"
        />
        <div class="absolute inset-0 bg-black/45" />
      </div>
      <div class="relative z-10 container-main py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Keberlanjutan</h1>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle :title="t('nav.sustainabilityItems.laporanKeberlanjutan')" />

        <div v-reveal class="reveal relative overflow-hidden rounded-[26px] bg-[#3A52A3] text-white px-6 py-8 md:px-12 md:py-12 h-[467px] flex items-center justify-center">
          <div
            class="absolute -top-20 -right-16 h-52 w-52 rounded-full"
            style="background: radial-gradient(circle, #F6993C66 0%, transparent 68%);"
            aria-hidden="true"
          />
          <div
            class="absolute -bottom-24 -left-16 h-56 w-56 rounded-full"
            style="background: radial-gradient(circle, #F6993C66 0%, transparent 68%);"
            aria-hidden="true"
          />

          <div class="relative flex flex-col md:flex-row items-center justify-center gap-6 text-left lg:px-[8rem]">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="h-44 w-32 md:h-56 md:w-40 lg:min-h-[300px] lg:min-w-[300px] overflow-hidden rounded-2xl bg-white/12 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.55)]">
                <NuxtImg
                  :src="featuredReport.image || coverImage"
                  :alt="featuredReport.title"
                  class="h-full w-full object-cover"
                  @error="(event) => applyFallback(event, coverImage)"
                />
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                  {{ featuredReport.title }}
                </h3>
                <div class="featured-download flex justify-center md:justify-start">
                  <InvestorDownloadPill :href="featuredReport.href" new-tab download />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="items.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <InvestorDocCard
            v-for="item in items"
            :key="item.id"
            :image-url="item.image || coverImage"
            :title="item.title"
            :href="item.href"
            new-tab
            download
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.featured-download :deep(a) {
  background-color: #f6993c;
}

.featured-download :deep(a:hover) {
  background-color: #e8872e;
}
</style>
