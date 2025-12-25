<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'
import heroImage from '~/components/tinjauan/tinjauan-section.png'
import InvestorDownloadPill from '~/components/investor/InvestorDownloadPill.vue'

const featuredReport = {
  title: 'Laporan Keberlanjutan 2025 PT JPS Tbk',
  href: '#',
}

const items = [
  { id: 's-2024', title: 'Laporan Keberlanjutan 2024 PT JPS Tbk', href: '#' },
  { id: 's-2023', title: 'Laporan Keberlanjutan 2023 PT JPS Tbk', href: '#' },
  { id: 's-2022', title: 'Laporan Keberlanjutan 2022 PT JPS Tbk', href: '#' },
  { id: 's-2021', title: 'Laporan Keberlanjutan 2021 PT JPS Tbk', href: '#' },
  { id: 's-2020', title: 'Laporan Keberlanjutan 2020 PT JPS Tbk', href: '#' },
  { id: 's-2019', title: 'Laporan Keberlanjutan 2019 PT JPS Tbk', href: '#' },
]

useHead(() => ({
  title: 'Laporan Keberlanjutan | Keberlanjutan',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Keberlanjutan" class="h-full w-full object-cover" loading="eager" />
        <div class="absolute inset-0 bg-black/45" />
      </div>
      <div class="relative z-10 container-main py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Keberlanjutan</h1>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Laporan Keberlanjutan" />

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
                <img :src="coverImage" :alt="featuredReport.title" class="h-full w-full object-cover" />
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                  {{ featuredReport.title }}
                </h3>
                <div class="featured-download flex justify-center md:justify-start">
                  <InvestorDownloadPill :href="featuredReport.href" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <InvestorDocCard
            v-for="item in items"
            :key="item.id"
            :image-url="coverImage"
            :title="item.title"
            :href="item.href"
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
