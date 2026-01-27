<script setup lang="ts">
const logoJps = '/images/logo/logo-putih.png'
const { t } = useI18n()
const currentYear = new Date().getFullYear()
const { fetcher } = useApiFetch()
const { mapFooterData } = useHomeMapper()

const { data: footerResponse } = await useAsyncData('footer', async () => {
  try {
    return await fetcher('/footer', {})
  } catch (error) {
    return { error: true }
  }
})

const footerData = computed(() => (footerResponse.value as { data?: unknown })?.data ?? null)
const mappedFooter = computed(() => mapFooterData(footerData.value as any))

const isIconImage = (icon?: string) => {
  if (!icon) return false
  return icon.startsWith('http') || icon.startsWith('/') || icon.includes('.')
}

const getSocialIconClass = (icon: string): string => {
  if (icon.startsWith('mdi-')) return icon
  return `mdi-${icon}`
}

// Footer column structure with routes
const footerColumns = [
  {
    titleKey: 'footer.columns.beranda.title',
    links: [
      { labelKey: 'footer.columns.beranda.links.produk', route: '/#produk' },
      { labelKey: 'footer.columns.beranda.links.standar', route: '/#nilai-kami' },
      { labelKey: 'footer.columns.beranda.links.kataMitra', route: '/#testimoni' },
      { labelKey: 'footer.columns.beranda.links.faq', route: '/#faq' },
    ],
  },
  {
    titleKey: 'footer.columns.tentang.title',
    links: [
      { labelKey: 'footer.columns.tentang.links.videoProfil', route: '/tentang-perusahaan#video-profil' },
      { labelKey: 'footer.columns.tentang.links.visiMisi', route: '/tentang-perusahaan#visi-misi' },
      { labelKey: 'footer.columns.tentang.links.linimasaSejarah', route: '/tentang-perusahaan#linimasa-sejarah' },
      { labelKey: 'footer.columns.tentang.links.lokasiUsaha', route: '/tentang-perusahaan#lokasi-usaha' },
      { labelKey: 'footer.columns.tentang.links.strukturOrganisasi', route: '/tentang-perusahaan#struktur-organisasi' },
    ],
  },
  {
    titleKey: 'footer.columns.liniBisnis.title',
    links: [
      { labelKey: 'footer.columns.liniBisnis.links.peternakanPembibitan', route: '/lini-bisnis/pembibitan' },
      { labelKey: 'footer.columns.liniBisnis.links.peternakanBroiler', route: '/lini-bisnis/broiler' },
      { labelKey: 'footer.columns.liniBisnis.links.peternakanPetelur', route: '/lini-bisnis/petelur' },
      { labelKey: 'footer.columns.liniBisnis.links.penetasanTelur', route: '/lini-bisnis/penetasan' },
      { labelKey: 'footer.columns.liniBisnis.links.rumahPotongAyam', route: '/lini-bisnis/rpa' },
    ],
  },
  {
    titleKey: 'footer.columns.produk.title',
    links: [
      { labelKey: 'footer.columns.produk.links.docParentStock', route: '/produk#doc-parent-stock' },
      { labelKey: 'footer.columns.produk.links.docFinalStock', route: '/produk#doc-final-stock' },
      { labelKey: 'footer.columns.produk.links.ayamHidup', route: '/produk#ayam-hidup' },
      { labelKey: 'footer.columns.produk.links.telurKomersial', route: '/produk#telur-komersial' },
      { labelKey: 'footer.columns.produk.links.karkasAyam', route: '/produk#karkas-ayam' },
    ],
  },
]

const footerColumnsSecond = [
  {
    titleKey: 'footer.columns.berita.title',
    links: [
      { labelKey: 'footer.columns.berita.links.berita', route: '/berita' },
      { labelKey: 'footer.columns.berita.links.blog', route: '/blog' },
      { labelKey: 'footer.columns.berita.links.pengumuman', route: '/pengumuman' },
    ],
  },
  {
    titleKey: 'footer.columns.karir.title',
    links: [
      { labelKey: 'footer.columns.karir.links.pekerjaan', route: '/karir' },
    ],
  },
  {
    titleKey: 'footer.columns.relasiInvestor.title',
    links: [
      { labelKey: 'footer.columns.relasiInvestor.links.prospektus', route: '/relasi-investor/prospektus' },
      { labelKey: 'footer.columns.relasiInvestor.links.laporanKeuangan', route: '/relasi-investor/laporan-keuangan' },
      { labelKey: 'footer.columns.relasiInvestor.links.rups', route: '/relasi-investor/rups' },
      { labelKey: 'footer.columns.relasiInvestor.links.laporanTahunan', route: '/relasi-investor/laporan-tahunan' },
      { labelKey: 'footer.columns.relasiInvestor.links.keterbukaanInformasi', route: '/relasi-investor/keterbukaan-informasi' },
    ],
  },
  {
    titleKey: 'footer.columns.keberlanjutan.title',
    links: [
      { labelKey: 'footer.columns.keberlanjutan.links.tinjauan', route: '/keberlanjutan/tinjauan' },
      { labelKey: 'footer.columns.keberlanjutan.links.pendekatanKinerja', route: '/keberlanjutan/pendekatan-dan-kinerja-manajemen' },
      { labelKey: 'footer.columns.keberlanjutan.links.laporanKeberlanjutan', route: '/keberlanjutan/laporan-keberlanjutan' },
    ],
  },
]
</script>

<template>
  <footer class="bg-[#3A52A3] text-white overflow-hidden" role="contentinfo">
    <div class="container-main py-10 md:py-16">
      <!-- Top Section: Logo, Description and Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <!-- Logo and Description -->
        <div class="lg:col-span-3 space-y-5">
          <div class="flex items-center gap-3">
            <NuxtImg :src="logoJps" :alt="t('footer.companyName')" class="h-10 w-auto" />
            <span class="font-semibold text-base">{{ mappedFooter.company.name || t('footer.companyName') }}</span>
          </div>
          <p class="text-sm text-white/85 leading-relaxed">
            {{ mappedFooter.company.description || t('footer.description') }}
          </p>
          <p v-if="mappedFooter.company.address" class="text-sm text-white/75">
            {{ mappedFooter.company.address }}
          </p>
          <div class="space-y-2 text-sm">
            <a
              v-for="email in mappedFooter.company.footerEmails"
              :key="email.id"
              :href="email.link"
              class="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <i class="mdi mdi-email-outline text-lg" aria-hidden="true" />
              <span class="underline underline-offset-4">{{ email.value }}</span>
            </a>
          </div>
        </div>

        <!-- First Row Columns -->
        <div class="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div v-for="column in footerColumns" :key="column.titleKey" class="space-y-3">
            <h3 class="font-semibold text-sm">{{ t(column.titleKey) }}</h3>
            <ul class="space-y-2 text-sm text-white/80">
              <li v-for="link in column.links" :key="link.labelKey">
                <NuxtLink :to="link.route" class="hover:text-white transition-colors">
                  {{ t(link.labelKey) }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Second Section: Statistics and More Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mt-10">
        <!-- Statistics -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="font-semibold text-sm">{{ t('footer.statistics.title') }}</h3>
          <table class="text-sm text-white/85 border-separate border-spacing-y-2">
            <tbody>
              <tr>
                <td class="pr-4 whitespace-nowrap">{{ t('footer.statistics.totalVisitors') }}</td>
                <td class="px-2">:</td>
                <td class="pl-2 whitespace-nowrap">
                  {{ mappedFooter.visitor.total ?? t('footer.statistics.totalVisitorsValue') }}
                </td>
              </tr>
              <tr>
                <td class="pr-4 whitespace-nowrap">{{ t('footer.statistics.dailyVisitors') }}</td>
                <td class="px-2">:</td>
                <td class="pl-2 whitespace-nowrap">
                  {{ mappedFooter.visitor.today ?? t('footer.statistics.dailyVisitorsValue') }}
                </td>
              </tr>
              <tr>
                <td class="pr-4 whitespace-nowrap">{{ t('footer.statistics.monthlyVisitors') }}</td>
                <td class="px-2">:</td>
                <td class="pl-2 whitespace-nowrap">
                  {{ mappedFooter.visitor.month ?? t('footer.statistics.monthlyVisitorsValue') }}
                </td>
              </tr>
              <tr>
                <td class="pr-4 whitespace-nowrap">{{ t('footer.statistics.yearlyVisitors') }}</td>
                <td class="px-2">:</td>
                <td class="pl-2 whitespace-nowrap">
                  {{ mappedFooter.visitor.year ?? t('footer.statistics.yearlyVisitorsValue') }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Second Row Columns -->
        <div class="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div v-for="column in footerColumnsSecond" :key="column.titleKey" class="space-y-3">
            <h3 class="font-semibold text-sm">{{ t(column.titleKey) }}</h3>
            <ul class="space-y-2 text-sm text-white/80">
              <li v-for="link in column.links" :key="link.labelKey">
                <NuxtLink :to="link.route" class="hover:text-white transition-colors">
                  {{ t(link.labelKey) }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section: Copyright and Social -->
      <div class="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-white/80">{{ t('footer.rights', { year: currentYear }) }}</p>
        <div class="flex items-center gap-4">
          <a
            v-for="social in mappedFooter.company.socials"
            :key="social.id"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.value || social.key"
            class="text-white hover:text-white/80 transition-colors"
          >
            <NuxtImg
              v-if="social.iconCustom && isIconImage(social.icon)"
              :src="social.icon"
              alt=""
              class="h-5 w-5 object-contain"
            />
            <i v-else class="mdi text-xl" :class="getSocialIconClass(social.icon)" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
