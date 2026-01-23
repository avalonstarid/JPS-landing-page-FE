<script setup lang="ts">
const coverImage = '/images/book-laporan.jpg'
const { t } = useI18n()
const { fetcher } = useApiFetch()
const { mapInvestorListData } = useHomeMapper()

const { data: prospektusResponse } = await useAsyncData('prospektus-list', async () => {
  try {
    return await fetcher('/relasi-investor/prospektus/list', {})
  } catch (error) {
    return { error: true }
  }
})

const prospektusData = computed(() => {
  return (prospektusResponse.value as { data?: unknown })?.data ?? null
})

const mappedProspektus = computed(() => mapInvestorListData(prospektusData.value as any))

useHead(() => ({
  title: `${t('nav.investorItems.prospektus')} | ${t('nav.investor')}`,
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection :title="t('nav.investor')" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle :title="t('nav.investorItems.prospektus')" />

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <InvestorDocCard
            v-for="item in mappedProspektus.items"
            :key="item.id"
            :image-url="item.image || coverImage"
            :title="item.title"
            :href="item.href"
            new-tab
          />
        </div>
      </div>
    </section>
  </div>
</template>
