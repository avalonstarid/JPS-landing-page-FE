<script setup lang="ts">
useHead(() => ({
  title: 'Laporan Keuangan | Relasi Investor',
}))

const tabs = [
  { label: 'Laporan Keuangan Tahunan', to: '/relasi-investor/laporan-keuangan', active: true },
  { label: 'Laporan Keuangan Triwulan', to: '/relasi-investor/laporan-keuangan/detail', active: false },
  { label: 'Laporan Keuangan Bulanan', to: '/relasi-investor/laporan-keuangan/bulanan', active: false },
]

const annualReports = [
  { year: 2025, title: 'Laporan Keuangan 2025', href: '#' },
  { year: 2024, title: 'Laporan Keuangan 2024', href: '#' },
  { year: 2023, title: 'Laporan Keuangan 2023', href: '#' },
  { year: 2022, title: 'Laporan Keuangan 2022', href: '#' },
  { year: 2021, title: 'Laporan Keuangan 2021', href: '#' },
  { year: 2020, title: 'Laporan Keuangan 2020', href: '#' },
]
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Laporan Keuangan" />

        <div class="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.label"
            :to="tab.to"
            class="w-full md:w-auto rounded-full border px-6 py-3 text-center text-xs font-semibold transition"
            :class="tab.active ? 'bg-[#f6993c] border-[#f6993c] text-white shadow' : 'bg-white/0 border-gray-300 text-gray-600 hover:bg-white/40'"
          >
            {{ tab.label }}
          </NuxtLink>
        </div>

        <div class="space-y-5 max-w-5xl mx-auto">
          <div
            v-for="item in annualReports"
            :key="item.year"
            class="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_12px_40px_-26px_rgba(0,0,0,0.35)]"
          >
            <p class="text-xl font-semibold text-[#1f2937]">{{ item.title }}</p>
            <InvestorDownloadPill :href="item.href" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
