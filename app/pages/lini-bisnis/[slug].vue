<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()
const { fetcher } = useApiFetch()
const { mapLiniBisnisData, mapLiniBisnisListData } = useHomeMapper()

// Get slug from route params
const slug = computed(() => route.params.slug as string)

const { data: liniResponse } = await useAsyncData(
  () => `lini-bisnis-${slug.value}`,
  async () => {
    try {
      return await fetcher(`/lini-bisnis/${slug.value}`, {})
    } catch (error) {
      return { error: true }
    }
  },
  {
    watch: [slug],
  }
)

const { data: liniListResponse, pending: liniListPending } = await useAsyncData('lini-bisnis-list', async () => {
  try {
    return await fetcher('/lini-bisnis-list', {})
  } catch (error) {
    return { error: true }
  }
})

const liniData = computed(() => {
  return (liniResponse.value as { data?: unknown })?.data ?? null
})

const mappedLini = computed(() => mapLiniBisnisData(liniData.value as any))

const liniListData = computed(() => (liniListResponse.value as { data?: unknown })?.data ?? null)
const mappedLiniList = computed(() => mapLiniBisnisListData(liniListData.value as any))

const detailData = computed(() => ({
  slug: slug.value,
  ...mappedLini.value.detail,
}))

const tabItems = computed(() =>
  mappedLiniList.value.items.map((item) => ({
    slug: item.slug,
    label: item.title,
  }))
)

const fallbackSlug = 'pembibitan'
const validSlugs = computed(() => {
  const slugs = mappedLiniList.value.items.map((item) => item.slug)
  return slugs.length > 0 ? slugs : [fallbackSlug]
})
const defaultSlug = computed(() => validSlugs.value[0] || fallbackSlug)
const shouldValidateSlug = computed(() => !liniListPending.value && mappedLiniList.value.items.length > 0)

const ensureValidSlug = (value: string) => {
  if (!shouldValidateSlug.value) return
  if (!validSlugs.value.includes(value)) {
    router.replace(`/lini-bisnis/${defaultSlug.value}`)
  }
}

// Redirect to first business if slug is invalid
onMounted(() => {
  ensureValidSlug(slug.value)
})

// Watch for slug changes and redirect if invalid
watch([slug, shouldValidateSlug], ([newSlug]) => {
  ensureValidSlug(newSlug)
})

// Modal state
const isModalOpen = ref(false)

const handleOpenModal = () => {
  isModalOpen.value = true
}

const handleCloseModal = () => {
  isModalOpen.value = false
}

// SEO
useHead(() => ({
  title: mappedLini.value.seo.title || t('liniBisnisPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedLini.value.seo.description || t('liniBisnisPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedLini.value.seo.title || t('liniBisnisPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedLini.value.seo.description || t('liniBisnisPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedLini.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedLini.value.seo.url || `${config.public.siteUrl}/lini-bisnis/${slug.value}`,
    },
    {
      property: 'og:site_name',
      content: mappedLini.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedLini.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedLini.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedLini.value.seo.canonicalUrl || `${config.public.siteUrl}/lini-bisnis/${slug.value}`,
    },
  ],
}))
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <LiniBisnisHeroSection :data="mappedLini.hero" />

    <!-- Tabs Section -->
    <LiniBisnisTabsSection :active-slug="slug" :tabs="tabItems" />

    <!-- Detail Section -->
    <LiniBisnisDetailSection 
      :business="detailData"
      @open-modal="handleOpenModal"
    />

    <!-- Info Modal -->
    <LiniBisnisInfoModal 
      :is-open="isModalOpen"
      @close="handleCloseModal"
    />
  </div>
</template>
