<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
import reportMar2024 from '~/assets/laporan/Laporan Keuangan/2. LK 31 Maret 2024 unaudited.c1b0ad5cf7e129a678e5.pdf'
import reportJun2024 from '~/assets/laporan/Laporan Keuangan/Laporan Keuangan AYAM 30 Juni 2024.62585cfe0536cedecb10.pdf'
import reportDec2024 from '~/assets/laporan/Laporan Keuangan/Laporan Keuangan AYAM 31 Desember 2024.8b6b72cfdbe5b4454896.pdf'
import reportMar2025 from '~/assets/laporan/Laporan Keuangan/Laporan Keuangan AYAM 31 Maret 2025.21e1d0a7e853313df147.pdf'
import reportJun2025 from '~/assets/laporan/Laporan Keuangan/Laporan Keuangan AYAM 30 Juni 2025pdf.25dd4b93c818e493e695.pdf'

useHead(() => ({
  title: 'Laporan Keuangan | Relasi Investor',
}))

const tabs = [
  { label: 'Laporan Keuangan Tahunan', to: '/relasi-investor/laporan-keuangan', active: true },
  { label: 'Laporan Keuangan Triwulan', to: '/relasi-investor/laporan-keuangan/detail', active: false },
  { label: 'Laporan Keuangan Bulanan', to: '/relasi-investor/laporan-keuangan/bulanan', active: false },
]

const monthlyReports = [
  { period: '31 Maret 2024', title: 'Laporan Keuangan AYAM 31 Maret 2024', href: reportMar2024 },
  { period: '30 Juni 2024', title: 'Laporan Keuangan AYAM 30 Juni 2024', href: reportJun2024 },
  { period: '31 Desember 2024', title: 'Laporan Keuangan AYAM 31 Desember 2024', href: reportDec2024 },
  { period: '31 Maret 2025', title: 'Laporan Keuangan AYAM 31 Maret 2025', href: reportMar2025 },
  { period: '30 Juni 2025', title: 'Laporan Keuangan AYAM 30 Juni 2025', href: reportJun2025 },
]

const chartOptions = [
  {
    label: 'Penjualan',
    values: [
      { period: '31 Mar 2024', value: 26500000 },
      { period: '30 Jun 2024', value: 29500000 },
      { period: '31 Des 2024', value: 38500000 },
      { period: '31 Mar 2025', value: 12000000 },
      { period: '30 Jun 2025', value: 21000000 },
    ],
  },
  {
    label: 'Laba Bersih',
    values: [
      { period: '31 Mar 2024', value: 8200000 },
      { period: '30 Jun 2024', value: 9300000 },
      { period: '31 Des 2024', value: 15500000 },
      { period: '31 Mar 2025', value: 4200000 },
      { period: '30 Jun 2025', value: 7100000 },
    ],
  },
  {
    label: 'Liabilitas',
    values: [
      { period: '31 Mar 2024', value: 17800000 },
      { period: '30 Jun 2024', value: 19200000 },
      { period: '31 Des 2024', value: 24300000 },
      { period: '31 Mar 2025', value: 9800000 },
      { period: '30 Jun 2025', value: 13600000 },
    ],
  },
  {
    label: 'Ekuitas',
    values: [
      { period: '31 Mar 2024', value: 12200000 },
      { period: '30 Jun 2024', value: 14100000 },
      { period: '31 Des 2024', value: 17600000 },
      { period: '31 Mar 2025', value: 6400000 },
      { period: '30 Jun 2025', value: 9800000 },
    ],
  },
  {
    label: 'Arus Kas Bersih',
    values: [
      { period: '31 Mar 2024', value: 6800000 },
      { period: '30 Jun 2024', value: 7600000 },
      { period: '31 Des 2024', value: 13200000 },
      { period: '31 Mar 2025', value: 3900000 },
      { period: '30 Jun 2025', value: 5900000 },
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

const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  value: '',
  period: '',
  maxX: 0,
})

const onBarMove = (event: MouseEvent, value: number, period: string) => {
  const target = event.currentTarget as HTMLElement | null
  if (!target) return
  const rect = target.getBoundingClientRect()
  const tooltipWidth = 110
  tooltip.value = {
    visible: true,
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    value: formatCurrency(value),
    period,
    maxX: Math.max(8, rect.width - tooltipWidth),
  }
}

const onBarLeave = () => {
  tooltip.value = { ...tooltip.value, visible: false, period: '' }
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
              :key="item.period"
              class="grid grid-cols-[90px_1fr] items-center gap-4"
            >
              <span class="text-sm text-gray-600">{{ item.period }}</span>
              <div
                class="relative h-10 rounded-lg bg-[#2c3e80]/15 group"
                @mousemove="onBarMove($event, item.value, item.period)"
                @mouseleave="onBarLeave"
              >
                <div
                  class="relative h-10 rounded-lg bg-[#2c3e80] chart-bar"
                  :style="{
                    width: `${(item.value / chartMax) * 100}%`,
                    animationDelay: `${index * 120}ms`,
                  }"
                >
                </div>
                <div
                  class="pointer-events-none absolute rounded-lg bg-[#f6993c] px-3 py-1.5 text-[14px] font-semibold text-white shadow-lg transition-opacity duration-150"
                  :class="tooltip.visible && tooltip.period === item.period ? 'opacity-100' : 'opacity-0'"
                  :style="{
                    left: `${Math.max(8, Math.min(tooltip.x + 10, tooltip.maxX))}px`,
                    top: `${Math.max(6, tooltip.y - 38)}px`,
                  }"
                >
                  {{ tooltip.value }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 overflow-x-auto">
            <div class="grid min-w-max grid-cols-[90px_1fr] items-center text-[11px] text-gray-500">
              <span></span>
              <div class="flex items-center justify-between gap-3">
                <span v-for="tick in chartTicks" :key="tick" class="text-center whitespace-nowrap">{{ formatCurrency(tick) }}</span>
              </div>
            </div>
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
            v-for="item in monthlyReports"
            :key="item.period"
            class="reveal flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-[0_12px_40px_-26px_rgba(0,0,0,0.35)]"
          >
            <p class="text-xl font-semibold text-[#1f2937]">{{ item.title }}</p>
            <InvestorDownloadPill :href="item.href" new-tab download />
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
