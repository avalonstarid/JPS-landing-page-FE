<script setup lang="ts">
useHead(() => ({
  title: 'Detail Laporan Keuangan | Relasi Investor',
}))

const tabs = [
  { label: 'Laporan Keuangan Tahunan', to: '/relasi-investor/laporan-keuangan', active: false },
  { label: 'Laporan Keuangan Triwulan', to: '/relasi-investor/laporan-keuangan/detail', active: true },
  { label: 'Laporan Keuangan Bulanan', to: '/relasi-investor/laporan-keuangan/bulanan', active: false },
]

const grouped = [
  { year: 2024, quarters: ['Q1', 'Q2', 'Q3'] },
  { year: 2023, quarters: ['Q1', 'Q2', 'Q3'] },
  { year: 2022, quarters: ['Q1', 'Q2', 'Q3'] },
  { year: 2021, quarters: ['Q1', 'Q2', 'Q3'] },
  { year: 2020, quarters: ['Q1', 'Q2'] },
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

        <div class="max-w-6xl mx-auto space-y-10">
          <div v-for="group in grouped" :key="group.year" class="space-y-6">
            <h3 class="text-center text-2xl font-bold text-[#1f2937]">{{ group.year }}</h3>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="q in group.quarters"
                :key="`${group.year}-${q}`"
                class="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_12px_40px_-26px_rgba(0,0,0,0.35)]"
              >
                <span class="text-lg font-semibold text-[#1f2937]">{{ q }}</span>
                <InvestorDownloadPill href="#" label="Unduh" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
