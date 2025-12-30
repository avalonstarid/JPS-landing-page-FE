<script setup lang="ts">
import logoJps from '~/components/logo/main-logo.png'
import flagId from '~/assets/images/flag/emojione_flag-for-indonesia.png'
import flagEn from '~/assets/images/flag/circle-flags_uk.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const router = useRouter()

const availableLanguages: Array<{ code: 'id' | 'en'; label: string; icon: string; alt: string }> = [
  { code: 'id', label: 'ID', icon: flagId, alt: 'Indonesia Flag' },
  { code: 'en', label: 'EN', icon: flagEn, alt: 'United Kingdom Flag' },
]

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css',
    },
  ],
})

const navItems = [
  { key: 'home', href: '#beranda', labelKey: 'nav.home', hasDropdown: false },
  {
    key: 'about',
    route: '/tentang-perusahaan',
    labelKey: 'nav.about',
    hasDropdown: false,
  },
  {
    key: 'business',
    route: '/lini-bisnis/pembibitan',
    labelKey: 'nav.business',
    hasDropdown: true,
    children: [
      { key: 'business-pembibitan', labelKey: 'liniBisnisPage.nav.pembibitan', route: '/lini-bisnis/pembibitan' },
      { key: 'business-broiler', labelKey: 'liniBisnisPage.nav.broiler', route: '/lini-bisnis/broiler' },
      { key: 'business-petelur', labelKey: 'liniBisnisPage.nav.petelur', route: '/lini-bisnis/petelur' },
      { key: 'business-penetasan', labelKey: 'liniBisnisPage.nav.penetasan', route: '/lini-bisnis/penetasan' },
      { key: 'business-rpa', labelKey: 'liniBisnisPage.nav.rpa', route: '/lini-bisnis/rpa' },
    ],
  },
  { key: 'products', route: '/produk', labelKey: 'nav.products', hasDropdown: false },
  {
    key: 'news',
    route: '/berita',
    labelKey: 'nav.news',
    hasDropdown: true,
    children: [
      { key: 'news-berita', labelKey: 'nav.newsItems.berita', route: '/berita' },
      { key: 'news-blog', labelKey: 'nav.newsItems.blog', route: '/blog' },
      { key: 'news-pengumuman', labelKey: 'nav.newsItems.pengumuman', route: '/pengumuman' },
    ],
  },
  { key: 'career', route: '/karir', labelKey: 'nav.career', hasDropdown: false },
  {
    key: 'investor',
    route: '/relasi-investor/prospektus',
    labelKey: 'nav.investor',
    hasDropdown: true,
    children: [
      { key: 'investor-prospektus', labelKey: 'nav.investorItems.prospektus', route: '/relasi-investor/prospektus' },
      { key: 'investor-laporan-keuangan', labelKey: 'nav.investorItems.laporanKeuangan', route: '/relasi-investor/laporan-keuangan' },
      { key: 'investor-rups', labelKey: 'nav.investorItems.rups', route: '/relasi-investor/rups' },
      { key: 'investor-laporan-tahunan', labelKey: 'nav.investorItems.laporanTahunan', route: '/relasi-investor/laporan-tahunan' },
      { key: 'investor-keterbukaan-informasi', labelKey: 'nav.investorItems.keterbukaanInformasi', route: '/relasi-investor/keterbukaan-informasi' },
    ],
  },
  {
    key: 'sustainability',
    route: '/keberlanjutan/tinjauan',
    labelKey: 'nav.sustainability',
    hasDropdown: true,
    children: [
      { key: 'sustainability-overview', labelKey: 'nav.sustainabilityItems.tinjauan', route: '/keberlanjutan/tinjauan' },
      {
        key: 'sustainability-management',
        labelKey: 'nav.sustainabilityItems.pendekatanKinerja',
        route: '/keberlanjutan/pendekatan-dan-kinerja-manajemen',
      },
      { key: 'sustainability-report', labelKey: 'nav.sustainabilityItems.laporanKeberlanjutan', route: '/keberlanjutan/laporan-keberlanjutan' },
    ],
  },
]

const currentLanguage = computed(() => (locale.value === 'en' ? 'EN' : 'ID'))
const ctaLabel = computed(() => t('common.contact'))
const activeNavKey = computed(() => {
  if (route.path === '/produk') {
    return 'products'
  }
  if (route.path.startsWith('/tentang-perusahaan')) {
    return 'about'
  }
  if (route.path.startsWith('/lini-bisnis')) {
    return 'business'
  }
  if (route.path.startsWith('/berita') || route.path.startsWith('/blog') || route.path.startsWith('/pengumuman')) {
    return 'news'
  }
  if (route.path.startsWith('/karir')) {
    return 'career'
  }
  if (route.path.startsWith('/relasi-investor')) {
    return 'investor'
  }
  if (route.path.startsWith('/keberlanjutan')) {
    return 'sustainability'
  }
  return 'home'
})
const openDropdown = ref<string | null>(null)
const openMobileDropdown = ref<string | null>(null)
const openMobileSubDropdown = ref<string | null>(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navigateToContact = async () => {
  closeMobileMenu()
  openDropdown.value = null
  await router.push('/hubungi-kami')
}

const navigateToHome = async () => {
  openDropdown.value = null
  if (route.path !== '/') {
    await router.push('/')
    return
  }
  scrollToSection('#beranda')
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openMobileDropdown.value = null
  openMobileSubDropdown.value = null
}

const setLanguage = async (lang: 'id' | 'en') => {
  await setLocale(lang)
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const navigateToNavItem = async (item: typeof navItems[number]) => {
  closeMobileMenu()

  if ('route' in item && item.route) {
    await router.push(item.route)
    return
  }

  if (route.path !== '/') {
    await router.push({ path: '/', hash: item.href })
    return
  }

  scrollToSection(item.href)
}

const handleDesktopNav = async (item: typeof navItems[number]) => {
  if (item.children) {
    openDropdown.value = openDropdown.value === item.key ? null : item.key
    return
  }
  openDropdown.value = null
  await navigateToNavItem(item)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 pointer-events-none">
    <div class="px-6 lg:px-10">
      <div class="flex items-center justify-between min-[1316px]:justify-center gap-5 pt-4 pb-2">
        <!-- Logo -->
        <a
          aria-label="PT Janu Putra Sejahtera - Halaman Utama"
          @click.prevent="navigateToHome"
          class="pointer-events-auto cursor-pointer"
        >
          <img :src="logoJps" alt="Logo JPS" class="h-10 w-auto max-w-[140px] object-contain" />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden min-[1316px]:flex items-center pointer-events-auto">
          <div
            :class="[
              'flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 backdrop-blur-2xl border shadow-2xl',
              isScrolled
                ? 'bg-gradient-to-r from-black/35 via-black/25 to-black/35 border-white/20'
                : 'bg-gradient-to-r from-white/15 via-white/10 to-white/15 border-white/20',
              isScrolled ? 'shadow-[0_20px_70px_-25px_rgba(0,0,0,0.6)]' : 'shadow-[0_20px_80px_-35px_rgba(0,0,0,0.55)]',
            ]"
          >
            <div
              v-for="item in navItems"
              :key="item.key"
              class="relative"
            >
              <button
                :href="item.href"
                class="group relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors"
                :class="[
                  activeNavKey === item.key
                    ? 'bg-[#f6993c] text-white shadow-[0_10px_25px_-12px_rgba(0,0,0,0.45)]'
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]',
                ]"
                :aria-current="activeNavKey === item.key ? 'page' : undefined"
                @click.prevent="handleDesktopNav(item)"
              >
                <span class="whitespace-nowrap">{{ t(item.labelKey) }}</span>
                <i
                  v-if="item.hasDropdown"
                  class="mdi mdi-chevron-down text-base opacity-80 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                />
              </button>

              <div
                v-if="item.children && openDropdown === item.key"
                class="absolute left-1/2 top-full mt-2 -translate-x-1/2 min-w-[200px] rounded-2xl bg-white backdrop-blur shadow-2xl text-[#1f2937] py-2"
              >
                <div v-for="child in item.children" :key="child.key" class="group relative">
                  <NuxtLink
                    v-if="!child.children"
                    :to="child.route"
                    class="flex items-center justify-between px-4 py-2 text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                    @click="openDropdown = null"
                  >
                    <span>{{ t(child.labelKey) }}</span>
                    <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                  </NuxtLink>
                  <button
                    v-else
                    type="button"
                    class="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                  >
                    <span>{{ t(child.labelKey) }}</span>
                    <i class="mdi mdi-chevron-right text-base text-[#f6993c]" aria-hidden="true" />
                  </button>

                  <div
                    v-if="child.children"
                    class="absolute left-full top-0 hidden min-w-[240px] rounded-2xl bg-white backdrop-blur shadow-2xl text-[#1f2937] py-2 group-hover:block group-focus-within:block translate-x-2"
                  >
                    <NuxtLink
                      v-for="grandchild in child.children"
                      :key="grandchild.key"
                      :to="grandchild.route"
                      class="flex items-center justify-between px-4 py-2 text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                      @click="openDropdown = null"
                    >
                      <span>{{ t(grandchild.labelKey) }}</span>
                      <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="mx-3 h-6 w-px" :class="isScrolled ? 'bg-white/15' : 'bg-white/0'" aria-hidden="true" /> -->
          </div>
        </div>

        <!-- Actions outside glass -->
        <div class="hidden min-[1316px]:flex items-center gap-3 pointer-events-auto">
          <div class="flex items-center text-sm font-semibold" :class="isScrolled ? 'text-white/90' : 'text-white/85'">
            <template v-for="(lang, idx) in availableLanguages" :key="lang.code">
              <button
                type="button"
                class="flex items-center gap-2 px-2 transition"
                :class="
                  currentLanguage === lang.label
                    ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'
                    : (isScrolled ? 'text-white/70 hover:text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]' : 'text-white/70 hover:text-white/85')
                "
                @click="setLanguage(lang.code)"
                :aria-pressed="currentLanguage === lang.label"
              >
                <span>{{ lang.label }}</span>
                <img
                  :src="lang.icon"
                  :alt="lang.alt"
                  class="h-5 w-5 rounded-full object-cover"
                  :class="currentLanguage === lang.label ? '' : 'opacity-60 grayscale'"
                />
              </button>
              <div
                v-if="idx === 0"
                class="h-5 w-px mx-2 self-center"
                :class="isScrolled ? 'bg-white/25' : 'bg-white/40'"
                aria-hidden="true"
              />
            </template>
          </div>

          <button
            class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_40px_-18px_rgba(0,0,0,0.7)] transition hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.75)] whitespace-nowrap"
            :aria-label="ctaLabel"
            @click="navigateToContact"
          >
            <span>{{ ctaLabel }}</span>
            <i class="mdi mdi-arrow-right text-lg" aria-hidden="true" />
          </button>
        </div>

        <!-- Mobile actions -->
        <div class="flex min-[1316px]:hidden items-center gap-2 pointer-events-auto">
          <div
            class="flex items-center gap-1 rounded-full px-2 py-1 backdrop-blur-lg border shadow-lg transition"
            :class="isScrolled ? 'bg-black/30 text-white/90 border-white/20' : 'bg-white/10 text-white/85 border-white/20'"
          >
            <button
              v-for="lang in availableLanguages"
              :key="lang.code"
              type="button"
              class="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold transition"
              :class="currentLanguage === lang.label ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'"
              @click="setLanguage(lang.code)"
              :aria-pressed="currentLanguage === lang.label"
              :aria-label="lang.label"
            >
              <img :src="lang.icon" :alt="lang.alt" class="h-4 w-4 rounded-full object-cover" />
              <span>{{ lang.label }}</span>
            </button>
          </div>

          <button
            class="rounded-full bg-[#f6993c] px-2 py-2 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            :aria-label="ctaLabel"
            @click="navigateToContact"
          >
            {{ ctaLabel }}
          </button>

          <button
            class="inline-flex items-center justify-center rounded-full p-2 backdrop-blur-lg border shadow-lg transition"
            :class="isScrolled ? 'bg-black/30 text-white border-white/20 hover:bg-black/35' : 'bg-white/10 text-white border-white/20 hover:bg-white/15'"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            :aria-label="t('nav.menuToggle')"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          id="mobile-menu"
          class="min-[1316px]:hidden mt-1 rounded-3xl bg-white/65 border border-white/60 backdrop-blur-2xl shadow-2xl overflow-hidden pointer-events-auto"
        >
          <div class="divide-y divide-white/10">
            <div class="py-3 space-y-1">
              <div v-for="item in navItems" :key="item.key" class="px-2">
                <button
                  :href="item.href"
                  class="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-[#1f2937] hover:bg-[#f6993c]/10 transition rounded-xl"
                  :class="activeNavKey === item.key ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                  :aria-current="activeNavKey === item.key ? 'page' : undefined"
                  @click.prevent="item.children ? (openMobileDropdown = openMobileDropdown === item.key ? null : item.key, openMobileSubDropdown = null) : navigateToNavItem(item)"
                >
                  <span>{{ t(item.labelKey) }}</span>
                  <i v-if="item.hasDropdown" class="mdi" :class="openMobileDropdown === item.key ? 'mdi-chevron-up' : 'mdi-chevron-down'" aria-hidden="true" />
                </button>
                <div
                  v-if="item.children && openMobileDropdown === item.key"
                  class="ml-3 mt-1 space-y-1"
                >
                  <div v-for="child in item.children" :key="child.key">
                    <NuxtLink
                      v-if="!child.children"
                      :to="child.route"
                      class="flex items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                      @click="closeMobileMenu"
                    >
                      <span>{{ t(child.labelKey) }}</span>
                      <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                    </NuxtLink>
                    <button
                      v-else
                      type="button"
                      class="flex w-full items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                      @click="openMobileSubDropdown = openMobileSubDropdown === child.key ? null : child.key"
                    >
                      <span>{{ t(child.labelKey) }}</span>
                      <i class="mdi" :class="openMobileSubDropdown === child.key ? 'mdi-chevron-up' : 'mdi-chevron-down'" aria-hidden="true" />
                    </button>
                    <div
                      v-if="child.children && openMobileSubDropdown === child.key"
                      class="ml-3 mt-1 space-y-1"
                    >
                      <NuxtLink
                        v-for="grandchild in child.children"
                        :key="grandchild.key"
                        :to="grandchild.route"
                        class="flex items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                        @click="closeMobileMenu"
                      >
                        <span>{{ t(grandchild.labelKey) }}</span>
                        <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-[#1f2937]">{{ t('language.label') }}</span>
                <div class="flex items-center gap-2">
                  <button
                    v-for="lang in availableLanguages"
                    :key="lang.code"
                    type="button"
                    class="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold transition"
                    :class="currentLanguage === lang.label ? 'bg-[#f6993c] text-white' : 'bg-gray-100 text-[#1f2937]'"
                    @click="setLanguage(lang.code)"
                  >
                    <img :src="lang.icon" :alt="lang.alt" class="h-4 w-4 rounded-full object-cover" />
                    <span>{{ lang.label }}</span>
                  </button>
                </div>
              </div>
              <button
                class="w-full rounded-full bg-[#f6993c] px-5 py-3 text-center text-base font-semibold text-white shadow-lg transition hover:shadow-xl"
                :aria-label="ctaLabel"
                @click="navigateToContact"
              >
                {{ ctaLabel }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
