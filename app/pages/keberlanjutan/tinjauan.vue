<script setup lang="ts">
const sdgImage = '/images/tinjauan/SDG.png'
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapKeberlanjutanTinjauanData } = useHomeMapper()

const { data: tinjauanResponse } = await useAsyncData('keberlanjutan-tinjauan', async () => {
  try {
    return await fetcher('/keberlanjutan/tinjauan', {})
  } catch (error) {
    return { error: true }
  }
})

const tinjauanData = computed(() => {
  return (tinjauanResponse.value as { data?: unknown })?.data ?? null
})

const mappedTinjauan = computed(() => mapKeberlanjutanTinjauanData(tinjauanData.value as any))

const heroImage = computed(() => mappedTinjauan.value.hero.background || '/images/tinjauan/tinjauan-section.png')
const fallbackContentHtml = computed(() => {
  const paragraph1 = t('keberlanjutanPage.tinjauan.paragraph1')
  const heading = t('keberlanjutanPage.tinjauan.heading')
  const paragraph2Prefix = t('keberlanjutanPage.tinjauan.paragraph2Prefix')
  const sdgPhrase = t('keberlanjutanPage.tinjauan.sdgPhrase')
  const paragraph2Suffix = t('keberlanjutanPage.tinjauan.paragraph2Suffix')

  return `
    <p>${paragraph1}</p>
    <p><strong>${heading}</strong></p>
    <p>${paragraph2Prefix}<em>${sdgPhrase}</em>${paragraph2Suffix}</p>
  `.trim()
})

useHead(() => ({
  title: mappedTinjauan.value.seo.title || 'Keberlanjutan - Tinjauan',
  meta: [
    {
      name: 'description',
      content: mappedTinjauan.value.seo.description || '',
    },
    {
      property: 'og:title',
      content: mappedTinjauan.value.seo.title || 'Keberlanjutan - Tinjauan',
    },
    {
      property: 'og:description',
      content: mappedTinjauan.value.seo.description || '',
    },
    {
      property: 'og:type',
      content: mappedTinjauan.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedTinjauan.value.seo.url || `${config.public.siteUrl}/keberlanjutan/tinjauan`,
    },
    {
      property: 'og:site_name',
      content: mappedTinjauan.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedTinjauan.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedTinjauan.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedTinjauan.value.seo.canonicalUrl || `${config.public.siteUrl}/keberlanjutan/tinjauan`,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#FDEEE0]">
    <section class="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
      <div class="absolute inset-0">
        <NuxtImg :src="heroImage" alt="Keberlanjutan" class="h-full w-full object-cover" loading="eager" />
        <div class="absolute inset-0 bg-black/40" />
      </div>
      <div class="relative z-10 container-main py-16 text-center">
        <p v-if="mappedTinjauan.hero.subtitle" class="text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-white/80">
          {{ mappedTinjauan.hero.subtitle }}
        </p>
        <h1 class="mt-3 text-4xl md:text-5xl font-bold text-white">
          {{ mappedTinjauan.hero.title || t('nav.sustainability') }}
        </h1>
      </div>
    </section>

    <section class="container-main py-12 md:py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[#3d4f92] text-center">
        {{ mappedTinjauan.detail.title || mappedTinjauan.tinjauan.title || t('keberlanjutanPage.tinjauan.title') }}
      </h2>

      <div class="mt-10 relative flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <div class="relative w-full flex justify-center">
          <NuxtImg :src="sdgImage" :alt="t('keberlanjutanPage.tinjauan.sdgAlt')" class="w-full max-w-[520px] md:max-w-[620px]" />

          <span class="absolute left-0 top-[18%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEconomy') }}
          </span>
          <span class="absolute right-0 top-[30%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillSocial') }}
          </span>
          <span class="absolute left-[8%] bottom-[8%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEnvironment') }}
          </span>
        </div>
        <div class="flex flex-wrap justify-center gap-3 md:hidden">
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEconomy') }}
          </span>
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillSocial') }}
          </span>
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEnvironment') }}
          </span>
        </div>
      </div>

      <div class="mt-10 text-sm md:text-base text-[#111827] max-w-4xl mx-auto leading-relaxed">
        <div
          class="space-y-4"
          v-html="mappedTinjauan.tinjauan.contentHtml || fallbackContentHtml"
        />
      </div>
    </section>
  </div>
</template>
