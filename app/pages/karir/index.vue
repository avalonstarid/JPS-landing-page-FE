<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'

const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapKarirData, mapKarirListData } = useHomeMapper()

const { data: karirResponse } = await useAsyncData('karir-page', async () => {
  try {
    return await fetcher('/karir', {})
  } catch (error) {
    return { error: true }
  }
})

const { data: karirListResponse } = await useAsyncData('karir-list', async () => {
  try {
    return await fetcher('/karir-list', {})
  } catch (error) {
    return { error: true }
  }
})

const karirData = computed(() => {
  return (karirResponse.value as { data?: unknown })?.data ?? null
})

const karirListData = computed(() => {
  return (karirListResponse.value as { data?: unknown })?.data ?? null
})

const mappedKarir = computed(() => mapKarirData(karirData.value as any))
const mappedKarirList = computed(() => mapKarirListData(karirListData.value as any))

const jobTypeLabelMap = computed(() => ({
  marketing: t('karirPage.filter.jobTypes.marketing'),
  sales: t('karirPage.filter.jobTypes.sales'),
  legal: t('karirPage.filter.jobTypes.legal'),
}))

// SEO Meta
useHead(() => ({
  title: mappedKarir.value.seo.title || t('karirPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedKarir.value.seo.description || t('karirPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedKarir.value.seo.title || t('karirPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedKarir.value.seo.description || t('karirPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedKarir.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedKarir.value.seo.url || `${config.public.siteUrl}/karir`,
    },
    {
      property: 'og:site_name',
      content: mappedKarir.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedKarir.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedKarir.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedKarir.value.seo.canonicalUrl || `${config.public.siteUrl}/karir`,
    },
  ],
}))

// Modal state
const isDetailModalOpen = ref(false)
const isApplyModalOpen = ref(false)
const selectedJob = ref<KarirJob | null>(null)

const jobs = computed(() => {
  return mappedKarirList.value.items.map((job) => {
    const fallbackLabel = jobTypeLabelMap.value[job.jobType as keyof typeof jobTypeLabelMap.value]
    return {
      ...job,
      jobTypeLabel: job.jobTypeLabel || fallbackLabel || job.jobType,
    }
  })
})

const handleOpenDetail = (job: KarirJob) => {
  selectedJob.value = job
  isDetailModalOpen.value = true
}

const handleCloseDetail = () => {
  isDetailModalOpen.value = false
}

const handleApply = (job: KarirJob) => {
  isDetailModalOpen.value = false
  selectedJob.value = job
  isApplyModalOpen.value = true
}

const handleCloseApply = () => {
  isApplyModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-[#fdeee0]">
    <!-- Hero Section -->
    <KarirHeroSection :data="mappedKarir.hero" />

    <!-- About Section -->
    <KarirAboutSection :data="mappedKarir.about" />

    <!-- Job List Section -->
    <KarirListSection :jobs="jobs" @open-detail="handleOpenDetail" />

    <!-- Detail Modal -->
    <KarirDetailModal
      :is-open="isDetailModalOpen"
      :job="selectedJob"
      @close="handleCloseDetail"
      @apply="handleApply"
    />

    <!-- Apply Modal -->
    <KarirApplyModal
      :is-open="isApplyModalOpen"
      :job="selectedJob"
      @close="handleCloseApply"
    />
  </div>
</template>
