<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'

const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapKarirData, mapKarirListData, mapKarirCategoryData, mapKarirDetailData } = useHomeMapper()

const categoryParentId = '019b78c3-06ba-70f4-827c-61e614af65fd'
const searchQuery = ref('')
const selectedCategoryId = ref('')
const selectedLocation = ref('')

const { data: karirResponse } = await useAsyncData('karir-page', async () => {
  try {
    return await fetcher('/karir', {})
  } catch (error) {
    return { error: true }
  }
})

const { data: karirCategoryResponse } = await useAsyncData('karir-category-list', async () => {
  try {
    return await fetcher('/v1/master/categories', {
      query: {
        'filter[parent_id]': categoryParentId,
      },
    })
  } catch (error) {
    return { error: true }
  }
})

const { data: karirListResponse, pending: karirListPending } = await useAsyncData('karir-list', async () => {
  try {
    const query: Record<string, string> = {}
    if (searchQuery.value.trim()) {
      query['filter[search]'] = searchQuery.value.trim()
    }
    if (selectedCategoryId.value) {
      query['filter[category]'] = selectedCategoryId.value
    }
    return await fetcher('/karir-list', { query })
  } catch (error) {
    return { error: true }
  }
}, {
  watch: [searchQuery, selectedCategoryId],
})

const karirData = computed(() => {
  return (karirResponse.value as { data?: unknown })?.data ?? null
})

const karirListData = computed(() => {
  return (karirListResponse.value as { data?: unknown })?.data ?? null
})

const karirCategoryData = computed(() => {
  return (karirCategoryResponse.value as { data?: unknown })?.data ?? null
})

const mappedKarir = computed(() => mapKarirData(karirData.value as any))
const mappedKarirList = computed(() => mapKarirListData(karirListData.value as any))
const mappedKarirCategories = computed(() => mapKarirCategoryData(karirCategoryData.value as any))

const categoryCountMap = computed(() => {
  return mappedKarir.value.categories.reduce<Record<string, number>>((acc, category) => {
    if (category.id) {
      acc[category.id] = category.jobsCount
    }
    return acc
  }, {})
})

const categoryOptions = computed(() => {
  if (mappedKarirCategories.value.items.length) {
    return mappedKarirCategories.value.items.map((item) => ({
      ...item,
      jobsCount: categoryCountMap.value[item.id],
    }))
  }
  return mappedKarir.value.categories
})

const categoryLabelMap = computed(() => {
  return categoryOptions.value.reduce<Record<string, string>>((acc, item) => {
    acc[item.id] = item.name
    return acc
  }, {})
})

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
  const baseJobs = mappedKarirList.value.items
  const filteredByLocation = selectedLocation.value
    ? baseJobs.filter((job) => job.locationType === selectedLocation.value)
    : baseJobs

  return filteredByLocation.map((job) => {
    const categoryLabel = job.categoryId ? categoryLabelMap.value[job.categoryId] : ''
    return {
      ...job,
      jobTypeLabel: job.jobTypeLabel || categoryLabel || job.jobType,
    }
  })
})

const selectedSlug = computed(() => selectedJob.value?.slug || '')

const { data: karirDetailResponse, pending: karirDetailPending } = await useAsyncData('karir-detail', async () => {
  if (!selectedSlug.value) return null
  try {
    return await fetcher(`/karir/${selectedSlug.value}`, {})
  } catch (error) {
    return { error: true }
  }
}, {
  watch: [selectedSlug],
})

const karirDetailData = computed(() => {
  return (karirDetailResponse.value as { data?: unknown })?.data ?? null
})

const mappedKarirDetail = computed(() => mapKarirDetailData(karirDetailData.value as any))

const detailJob = computed(() => {
  if (!selectedJob.value) return null
  const detail = mappedKarirDetail.value
  const hasDetail = Boolean(
    detail.slug ||
    detail.title ||
    detail.description ||
    detail.requirements.length ||
    detail.responsibilities.length ||
    detail.benefits.length
  )

  if (!hasDetail) return selectedJob.value

  return {
    ...selectedJob.value,
    ...detail,
    jobTypeLabel: selectedJob.value.jobTypeLabel || detail.categoryName || selectedJob.value.jobTypeLabel,
  }
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

const handleResetFilters = () => {
  searchQuery.value = ''
  selectedCategoryId.value = ''
  selectedLocation.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-[#fdeee0]">
    <!-- Hero Section -->
    <KarirHeroSection :data="mappedKarir.hero" />

    <!-- About Section -->
    <KarirAboutSection :data="mappedKarir.about" />

    <!-- Job List Section -->
    <KarirListSection
      :jobs="jobs"
      :categories="categoryOptions"
      :search-query="searchQuery"
      :selected-category-id="selectedCategoryId"
      :selected-location="selectedLocation"
      :is-loading="karirListPending"
      @update-search="searchQuery = $event"
      @update-category="selectedCategoryId = $event"
      @update-location="selectedLocation = $event"
      @reset-filters="handleResetFilters"
      @open-detail="handleOpenDetail"
    />

    <!-- Detail Modal -->
    <KarirDetailModal
      :is-open="isDetailModalOpen"
      :job="detailJob"
      :is-loading="karirDetailPending"
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
