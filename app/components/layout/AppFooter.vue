<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

// Footer column structure with routes
const footerColumns = [
  {
    titleKey: 'footer.columns.beranda.title',
    links: [
      { labelKey: 'footer.columns.beranda.links.produk', route: '/#produk' },
      { labelKey: 'footer.columns.beranda.links.standar', route: '/#standar' },
      { labelKey: 'footer.columns.beranda.links.kataMitra', route: '/#kata-mitra' },
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
      { labelKey: 'footer.columns.berita.links.blog', route: '/berita#blog' },
      { labelKey: 'footer.columns.berita.links.pengumuman', route: '/berita#pengumuman' },
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
      { labelKey: 'footer.columns.relasiInvestor.links.prospektus', route: '/relasi-investor#prospektus' },
      { labelKey: 'footer.columns.relasiInvestor.links.laporanKeuangan', route: '/relasi-investor#laporan-keuangan' },
      { labelKey: 'footer.columns.relasiInvestor.links.rups', route: '/relasi-investor#rups' },
      { labelKey: 'footer.columns.relasiInvestor.links.laporanTahunan', route: '/relasi-investor#laporan-tahunan' },
      { labelKey: 'footer.columns.relasiInvestor.links.keterbukaanInformasi', route: '/relasi-investor#keterbukaan-informasi' },
    ],
  },
  {
    titleKey: 'footer.columns.keberlanjutan.title',
    links: [
      { labelKey: 'footer.columns.keberlanjutan.links.tinjauan', route: '/keberlanjutan#tinjauan' },
      { labelKey: 'footer.columns.keberlanjutan.links.pendekatanKinerja', route: '/keberlanjutan#pendekatan-kinerja' },
      { labelKey: 'footer.columns.keberlanjutan.links.laporanKeberlanjutan', route: '/keberlanjutan#laporan' },
    ],
  },
]
</script>

<template>
  <footer class="bg-[#3A52A3] text-white" role="contentinfo">
    <div class="container-main py-10 md:py-16">
      <!-- Top Section: Logo, Description and Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <!-- Logo and Description -->
        <div class="lg:col-span-3 space-y-4">
          <div class="flex items-center gap-3">
            <img :src="logoJps" :alt="t('footer.companyName')" class="h-10 w-10 bg-white p-1 rounded" />
            <span class="font-semibold text-base">{{ t('footer.companyName') }}</span>
          </div>
          <p class="text-sm text-white/80 leading-relaxed">
            {{ t('footer.description') }}
          </p>
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
          <div class="space-y-2 text-sm text-white/80">
            <div class="flex justify-between">
              <span>{{ t('footer.statistics.totalVisitors') }}</span>
              <span>: {{ t('footer.statistics.totalVisitorsValue') }}</span>
            </div>
            <div class="flex justify-between">
              <span>{{ t('footer.statistics.dailyVisitors') }}</span>
              <span>: {{ t('footer.statistics.dailyVisitorsValue') }}</span>
            </div>
            <div class="flex justify-between">
              <span>{{ t('footer.statistics.monthlyVisitors') }}</span>
              <span>: {{ t('footer.statistics.monthlyVisitorsValue') }}</span>
            </div>
            <div class="flex justify-between">
              <span>{{ t('footer.statistics.yearlyVisitors') }}</span>
              <span>: {{ t('footer.statistics.yearlyVisitorsValue') }}</span>
            </div>
          </div>
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
          <!-- Email -->
          <a href="mailto:info@januputra.com" aria-label="Email" class="text-white hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-white hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="text-white hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/januputrasejahtera" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-white hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

