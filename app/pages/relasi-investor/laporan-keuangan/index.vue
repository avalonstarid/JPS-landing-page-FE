<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
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

const chartOptions = [
  {
    label: 'Penjualan',
    values: [
      { year: 2025, value: 26500000 },
      { year: 2024, value: 29500000 },
      { year: 2023, value: 38500000 },
      { year: 2022, value: 12000000 },
      { year: 2021, value: 21000000 },
      { year: 2020, value: 8000000 },
    ],
  },
  {
    label: 'Laba Bersih',
    values: [
      { year: 2025, value: 8200000 },
      { year: 2024, value: 9300000 },
      { year: 2023, value: 15500000 },
      { year: 2022, value: 4200000 },
      { year: 2021, value: 7100000 },
      { year: 2020, value: 2900000 },
    ],
  },
  {
    label: 'Liabilitas',
    values: [
      { year: 2025, value: 17800000 },
      { year: 2024, value: 19200000 },
      { year: 2023, value: 24300000 },
      { year: 2022, value: 9800000 },
      { year: 2021, value: 13600000 },
      { year: 2020, value: 5200000 },
    ],
  },
  {
    label: 'Ekuitas',
    values: [
      { year: 2025, value: 12200000 },
      { year: 2024, value: 14100000 },
      { year: 2023, value: 17600000 },
      { year: 2022, value: 6400000 },
      { year: 2021, value: 9800000 },
      { year: 2020, value: 4300000 },
    ],
  },
  {
    label: 'Arus Kas Bersih',
    values: [
      { year: 2025, value: 6800000 },
      { year: 2024, value: 7600000 },
      { year: 2023, value: 13200000 },
      { year: 2022, value: 3900000 },
      { year: 2021, value: 5900000 },
      { year: 2020, value: 2500000 },
    ],
  },
]

const selectedMetric = ref(chartOptions[0])
const isDropdownOpen = ref(false)

const chartMax = computed(() => {
  const values = selectedMetric.value.values.map((item) => item.value)
  return Math.max(...values, 1)
})

const chartTicks = computed(() => {
  const steps = 8
  return Array.from({ length: steps }, (_, index) => Math.round(((index + 1) * chartMax.value) / steps))
})

const formatCurrency = (value: number) => {
  const compact = Math.round(value / 1000) * 1000
  return `Rp${compact.toLocaleString('id-ID')}`
}

const setMetric = (option: typeof chartOptions[number]) => {
  selectedMetric.value = option
  isDropdownOpen.value = false
}
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Laporan Keuangan" />

        <section class="rounded-[28px] max-w-5xl mx-auto bg-white px-5 py-6 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)] md:px-8">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div class="space-y-1">
              <p class="text-lg font-semibold text-[#1f2937]">Grafik Keuangan</p>
              <div class="flex items-center gap-2 text-xs text-gray-500">
                <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                <span>PT Janu Putra Sejahtera</span>
              </div>
            </div>
            <div class="relative w-full max-w-[220px]">
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:shadow"
                @click="isDropdownOpen = !isDropdownOpen"
              >
                <span class="font-medium text-gray-800">{{ selectedMetric.label }}</span>
                <i class="mdi" :class="isDropdownOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'" aria-hidden="true"></i>
              </button>
              <div
                v-if="isDropdownOpen"
                class="absolute right-0 top-12 z-10 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
              >
                <button
                  v-for="option in chartOptions"
                  :key="option.label"
                  type="button"
                  class="flex w-full items-center justify-between px-4 py-3 text-left text-sm transition"
                  :class="option.label === selectedMetric.label ? 'bg-[#f6993c] text-white' : 'hover:bg-gray-50 text-gray-800'"
                  @click="setMetric(option)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 grid gap-4">
            <div
              v-for="(item, index) in selectedMetric.values"
              :key="item.year"
              class="grid grid-cols-[48px_1fr] items-center gap-4"
            >
              <span class="text-sm text-gray-600">{{ item.year }}</span>
              <div class="relative h-10 rounded-lg bg-[#2c3e80]/15">
                <div
                  class="h-10 rounded-lg bg-[#2c3e80] chart-bar"
                  :style="{
                    width: `${(item.value / chartMax) * 100}%`,
                    animationDelay: `${index * 120}ms`,
                  }"
                />
              </div>
            </div>
          </div>

          <div class="mt-5 grid grid-cols-4 gap-2 text-[11px] text-gray-500 md:grid-cols-8">
            <span v-for="tick in chartTicks" :key="tick" class="text-center">{{ formatCurrency(tick) }}</span>
          </div>
        </section>

        <div class="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <!-- <NuxtLink
            v-for="tab in tabs"
            :key="tab.label"
            :to="tab.to"
            class="w-full md:w-auto rounded-full border px-6 py-3 text-center text-xs font-semibold transition"
            :class="tab.active ? 'bg-[#f6993c] border-[#f6993c] text-white shadow' : 'bg-white/0 border-gray-300 text-gray-600 hover:bg-white/40'"
          >
            {{ tab.label }}
          </NuxtLink> -->
        </div>

        <div class="space-y-5 max-w-5xl mx-auto">
          <div
            v-reveal
            v-for="item in annualReports"
            :key="item.year"
            class="reveal flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_12px_40px_-26px_rgba(0,0,0,0.35)]"
          >
            <p class="text-xl font-semibold text-[#1f2937]">{{ item.title }}</p>
            <InvestorDownloadPill :href="item.href" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes chartGrow {
  0% {
    transform: scaleX(0);
    opacity: 0.2;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
  }
}

.chart-bar {
  transform-origin: left center;
  animation: chartGrow 800ms ease-out both;
}
</style>
