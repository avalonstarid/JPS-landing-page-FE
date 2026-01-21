<script setup lang="ts">
// Home page composing all section components
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapHomeData } = useHomeMapper()

const { data: homeResponse } = await useAsyncData('home-page', async () => {
  try {
    return await fetcher('/', {})
  } catch (error) {
    return { error: true }
  }
})

const homeData = computed(() => {
  return (homeResponse.value as { data?: unknown })?.data ?? null
})

const mappedHome = computed(() => mapHomeData(homeData.value as any))

useHead(() => ({
  title: mappedHome.value.seo.title || t('meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedHome.value.seo.description || t('meta.description'),
    },
    {
      property: 'og:title',
      content: mappedHome.value.seo.title || t('meta.ogTitle'),
    },
    {
      property: 'og:description',
      content: mappedHome.value.seo.description || t('meta.ogDescription'),
    },
    {
      property: 'og:type',
      content: mappedHome.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedHome.value.seo.url || config.public.siteUrl,
    },
    {
      property: 'og:site_name',
      content: mappedHome.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedHome.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedHome.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedHome.value.seo.canonicalUrl || config.public.siteUrl,
    },
  ],
}))
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SectionsHeroSection :data="mappedHome.hero" />

    <!-- Products Section -->
    <SectionsProductsSection :data="mappedHome.product" />

    <!-- Values Section -->
    <SectionsValuesSection :data="mappedHome.standard" />

    <!-- Testimonials Section -->
    <SectionsTestimonialsSection :data="mappedHome.testimonial" />

    <!-- FAQ Section -->
    <SectionsFaqSection :data="mappedHome.faq" />
  </div>
</template>
