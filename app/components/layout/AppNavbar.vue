<script setup lang="ts">
const logoJps = '/images/logo/main-logo.png'
const flagId = '/images/flag/emojione_flag-for-indonesia.png'
const flagEn = '/images/flag/circle-flags_uk.png'
const fallbackFlag = flagId
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const navRootRef = ref<HTMLElement | null>(null)
const fallbackLiniChildren: NavChildItem[] = [
  { key: 'business-pembibitan', labelKey: 'liniBisnisPage.tabs.pembibitan', route: '/lini-bisnis/pembibitan' },
  { key: 'business-broiler', labelKey: 'liniBisnisPage.tabs.broiler', route: '/lini-bisnis/broiler' },
  { key: 'business-petelur', labelKey: 'liniBisnisPage.tabs.petelur', route: '/lini-bisnis/petelur' },
  { key: 'business-penetasan', labelKey: 'liniBisnisPage.tabs.penetasan', route: '/lini-bisnis/penetasan' },
  { key: 'business-rpa', labelKey: 'liniBisnisPage.tabs.rpa', route: '/lini-bisnis/rpa' },
]
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const { applyFallback } = useImageFallback()
const { fetcher } = useApiFetch()
const { mapLiniBisnisListData } = useHomeMapper()

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

const { data: liniListResponse } = await useAsyncData('lini-bisnis-list', async () => {
  try {
    return await fetcher('/lini-bisnis-list', {})
  } catch (error) {
    return { error: true }
  }
})

const liniListData = computed(() => (liniListResponse.value as { data?: unknown })?.data ?? null)
const mappedLiniList = computed(() => mapLiniBisnisListData(liniListData.value as any))

type NavChildItem = {
  key: string
  label?: string
  labelKey?: string
  route: string
  children?: NavChildItem[]
}

type NavItem = {
  key: string
  href?: string
  route?: string
  labelKey: string
  hasDropdown: boolean
  children?: NavChildItem[]
}

const sanitizeSlug = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
}

const navItems = computed<NavItem[]>(() => {
  const usedBusinessRoutes = new Set<string>()
  const liniChildren: NavChildItem[] = mappedLiniList.value.items
    .map((item) => {
      const slug = sanitizeSlug(String(item.slug || ''))
      const route = slug ? `/lini-bisnis/${slug}` : ''
      return {
        key: `business-${slug}`,
        label: item.title,
        route,
      }
    })
    .filter((item) => {
      if (!item.route || usedBusinessRoutes.has(item.route)) return false
      usedBusinessRoutes.add(item.route)
      return true
    })
  const resolvedLiniChildren = liniChildren.length > 0 ? liniChildren : fallbackLiniChildren
  const liniRoute = resolvedLiniChildren[0].route

  return [
  { key: 'home', href: '/', labelKey: 'nav.home', hasDropdown: false },
  {
    key: 'about',
    route: '/tentang-perusahaan',
    labelKey: 'nav.about',
    hasDropdown: false,
  },
  {
    key: 'business',
    route: liniRoute,
    labelKey: 'nav.business',
    hasDropdown: true,
    children: resolvedLiniChildren,
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
})

const currentLanguage = computed(() => (locale.value === 'en' ? 'EN' : 'ID'))
const ctaLabel = computed(() => t('common.contact'))
const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/'
const currentPath = computed(() => normalizePath(String(route.path || '/')))
const isPathActive = (targetPath: string) => {
  const current = currentPath.value
  const target = normalizePath(targetPath)
  return current === target || current.startsWith(`${target}/`)
}
const isTopLevelActive = (item: NavItem) => {
  if (item.key === 'home') return currentPath.value === '/'
  if (item.key === 'about') return isPathActive('/tentang-perusahaan')
  if (item.key === 'business') return isPathActive('/lini-bisnis')
  if (item.key === 'news') return isPathActive('/berita') || isPathActive('/blog') || isPathActive('/pengumuman')
  if (item.key === 'career') return isPathActive('/karir')
  if (item.key === 'investor') return isPathActive('/relasi-investor')
  if (item.key === 'sustainability') return isPathActive('/keberlanjutan')
  return item.route ? isPathActive(item.route) : false
}
const openMobileDropdown = ref<string | null>(null)
const openMobileSubDropdown = ref<string | null>(null)
const desktopMenuLocked = ref(false)
let desktopMediaQuery: MediaQueryList | null = null
let desktopMenuUnlockTimer: ReturnType<typeof setTimeout> | null = null

const handleViewportChange = (event: MediaQueryListEvent) => {
  if (event.matches) {
    closeAllMenus()
  }
}

const resolveNavTo = (item: NavItem) => {
  if ('route' in item && item.route) {
    return item.route
  }
  if ('href' in item && item.href) {
    return item.href.startsWith('#') ? `/${item.href}` : item.href
  }
  return '/'
}

const resolveChildLabel = (item: NavChildItem) => {
  if (item.label) return item.label
  if (item.labelKey) return t(item.labelKey)
  return ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openMobileDropdown.value = null
  openMobileSubDropdown.value = null
}

const setLanguage = async (lang: 'id' | 'en') => {
  await setLocale(lang)
}

const closeAllMenus = () => {
  closeMobileMenu()
}

const unlockDesktopMenu = () => {
  desktopMenuLocked.value = false
  if (desktopMenuUnlockTimer) {
    clearTimeout(desktopMenuUnlockTimer)
    desktopMenuUnlockTimer = null
  }
}

const handleDesktopChildClick = () => {
  if (!import.meta.client || !window.matchMedia('(min-width: 1316px)').matches) return
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }

  desktopMenuLocked.value = true
  if (desktopMenuUnlockTimer) {
    clearTimeout(desktopMenuUnlockTimer)
  }
  desktopMenuUnlockTimer = window.setTimeout(() => {
    desktopMenuLocked.value = false
    desktopMenuUnlockTimer = null
  }, 900)
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target
  if (!(target instanceof Node)) return
  if (navRootRef.value?.contains(target)) return
  closeAllMenus()
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeAllMenus()
  }
}

watch(() => route.fullPath, () => {
  closeAllMenus()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleEscape)
  handleScroll()
  desktopMediaQuery = window.matchMedia('(min-width: 1316px)')
  desktopMediaQuery.addEventListener('change', handleViewportChange)
})

onUnmounted(() => {
  unlockDesktopMenu()
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleEscape)
  desktopMediaQuery?.removeEventListener('change', handleViewportChange)
})
</script>

<template>
  <header ref="navRootRef" class="fixed top-0 left-0 right-0 z-[1100]">
    <div class="px-6 lg:px-10">
      <div class="flex items-center justify-between min-[1316px]:justify-center gap-5 pt-4 pb-2">
        <!-- Logo -->
        <div class="relative sm:static">
          <div
            class="sm:hidden absolute inset-y-0 left-0 right-0 rounded-full backdrop-blur-md pointer-events-none -z-10"
            :class="isScrolled ? 'bg-black/30' : 'bg-white/10'"
          />
          <NuxtLink
            aria-label="PT Janu Putra Sejahtera - Halaman Utama"
            to="/"
            class="pointer-events-auto cursor-pointer px-3 py-1.5 inline-flex"
            @click="closeAllMenus()"
          >
            <NuxtImg
              :src="logoJps"
              alt="Logo JPS"
              class="h-7 w-auto max-w-[98px] object-contain sm:h-10 sm:max-w-[140px]"
              @error="(event) => applyFallback(event, logoJps)"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden min-[1316px]:flex items-center pointer-events-auto">
          <div
            class="desktop-nav-root"
            :class="[
              'flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 backdrop-blur-2xl border shadow-2xl',
              desktopMenuLocked ? 'desktop-menu-locked' : '',
              isScrolled
                ? 'bg-gradient-to-r from-black/35 via-black/25 to-black/35 border-white/20'
                : 'bg-gradient-to-r from-white/15 via-white/10 to-white/15 border-white/20',
              isScrolled ? 'shadow-[0_20px_70px_-25px_rgba(0,0,0,0.6)]' : 'shadow-[0_20px_80px_-35px_rgba(0,0,0,0.55)]',
            ]"
          >
            <div
              v-for="item in navItems"
              :key="item.key"
              class="relative desktop-nav-item"
            >
              <div
                v-if="item.hasDropdown"
                class="relative flex items-center gap-1 rounded-full transition-colors"
                :class="[
                  isTopLevelActive(item)
                    ? 'bg-[#f6993c] text-white shadow-[0_10px_25px_-12px_rgba(0,0,0,0.45)]'
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]',
                ]"
              >
                <NuxtLink
                  :to="resolveNavTo(item)"
                  active-class="__nav-active-disabled"
                  exact-active-class="__nav-exact-active-disabled"
                  class="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
                  :aria-current="isTopLevelActive(item) ? 'page' : undefined"
                >
                  <span class="whitespace-nowrap">{{ t(item.labelKey) }}</span>
                  <i
                    class="mdi mdi-chevron-down text-base opacity-80 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
                  />
                </NuxtLink>
                <div
                  v-if="item.children && item.children.length"
                  class="absolute left-1/2 top-full z-20 -translate-x-1/2 pt-2 desktop-submenu-root"
                >
                  <div
                    class="min-w-[200px] rounded-2xl bg-white backdrop-blur shadow-2xl text-[#1f2937] py-2"
                  >
                    <div v-for="child in item.children" :key="child.key" class="relative desktop-submenu-child">
                      <NuxtLink
                        v-if="!child.children"
                        :to="child.route"
                        active-class="__nav-active-disabled"
                        exact-active-class="__nav-exact-active-disabled"
                        class="flex items-center justify-between px-4 py-2 text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                        :class="isPathActive(child.route) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                        @click="handleDesktopChildClick"
                      >
                        <span>{{ resolveChildLabel(child) }}</span>
                        <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                      </NuxtLink>
                      <button
                        v-else
                        type="button"
                        class="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                      >
                        <span>{{ resolveChildLabel(child) }}</span>
                        <i class="mdi mdi-chevron-right text-base text-[#f6993c]" aria-hidden="true" />
                      </button>

                      <div
                        v-if="child.children"
                        class="absolute left-full top-0 z-20 translate-x-2 pt-0 desktop-submenu-nested-root"
                      >
                        <div
                          class="min-w-[240px] rounded-2xl bg-white backdrop-blur shadow-2xl text-[#1f2937] py-2"
                        >
                          <NuxtLink
                            v-for="grandchild in child.children"
                            :key="grandchild.key"
                            :to="grandchild.route"
                            active-class="__nav-active-disabled"
                            exact-active-class="__nav-exact-active-disabled"
                            class="flex items-center justify-between px-4 py-2 text-sm font-semibold hover:bg-[#f6993c]/10 rounded-xl"
                            :class="isPathActive(grandchild.route) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                            @click="handleDesktopChildClick"
                          >
                            <span>{{ resolveChildLabel(grandchild) }}</span>
                            <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NuxtLink
                v-else
                :to="resolveNavTo(item)"
                active-class="__nav-active-disabled"
                exact-active-class="__nav-exact-active-disabled"
                class="group relative flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-colors"
                :class="[
                  isTopLevelActive(item)
                    ? 'bg-[#f6993c] text-white shadow-[0_10px_25px_-12px_rgba(0,0,0,0.45)]'
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]',
                ]"
                :aria-current="isTopLevelActive(item) ? 'page' : undefined"
              >
                <span class="whitespace-nowrap">{{ t(item.labelKey) }}</span>
              </NuxtLink>
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
                <NuxtImg
                  :src="lang.icon"
                  :alt="lang.alt"
                  class="h-5 w-5 rounded-full object-cover"
                  :class="currentLanguage === lang.label ? '' : 'opacity-60 grayscale'"
                  @error="(event) => applyFallback(event, fallbackFlag)"
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

          <NuxtLink
            to="/hubungi-kami"
            class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_40px_-18px_rgba(0,0,0,0.7)] transition hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.75)] whitespace-nowrap"
            :aria-label="ctaLabel"
          >
            <span>{{ ctaLabel }}</span>
            <i class="mdi mdi-arrow-right text-lg" aria-hidden="true" />
          </NuxtLink>
        </div>

        <!-- Mobile actions -->
        <div class="flex min-[1316px]:hidden items-center gap-1.5 pointer-events-auto">
          <div
            class="flex items-center gap-1 rounded-full px-1.5 py-0.5 backdrop-blur-lg border shadow-lg transition"
            :class="isScrolled ? 'bg-black/30 text-white/90 border-white/20' : 'bg-white/10 text-white/85 border-white/20'"
          >
            <button
              v-for="lang in availableLanguages"
              :key="lang.code"
              type="button"
              class="flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[12px] font-semibold transition"
              :class="currentLanguage === lang.label ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white'"
              @click="setLanguage(lang.code)"
              :aria-pressed="currentLanguage === lang.label"
              :aria-label="lang.label"
            >
              <NuxtImg
                :src="lang.icon"
                :alt="lang.alt"
                class="h-3.5 w-3.5 rounded-full object-cover"
                @error="(event) => applyFallback(event, fallbackFlag)"
              />
              <span>{{ lang.label }}</span>
            </button>
          </div>

          <NuxtLink
            to="/hubungi-kami"
            class="rounded-full bg-[#f6993c] px-3 py-2 text-[12px] font-semibold text-white shadow-lg transition hover:shadow-xl whitespace-nowrap leading-none"
            :aria-label="ctaLabel"
          >
            {{ ctaLabel }}
          </NuxtLink>

          <button
            class="inline-flex items-center justify-center rounded-full p-1 backdrop-blur-lg border shadow-lg transition"
            :class="isScrolled ? 'bg-black/30 text-white border-white/20 hover:bg-black/35' : 'bg-white/10 text-white border-white/20 hover:bg-white/15'"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            :aria-label="t('nav.menuToggle')"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-[17px] h-[17px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  v-if="item.hasDropdown"
                  type="button"
                  class="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-[#1f2937] hover:bg-[#f6993c]/10 transition rounded-xl"
                  :class="isTopLevelActive(item) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                  :aria-current="isTopLevelActive(item) ? 'page' : undefined"
                  @click="openMobileDropdown = openMobileDropdown === item.key ? null : item.key, openMobileSubDropdown = null"
                >
                  <span>{{ t(item.labelKey) }}</span>
                  <i v-if="item.hasDropdown" class="mdi" :class="openMobileDropdown === item.key ? 'mdi-chevron-up' : 'mdi-chevron-down'" aria-hidden="true" />
                </button>
                <NuxtLink
                  v-else
                  :to="resolveNavTo(item)"
                  active-class="__nav-active-disabled"
                  exact-active-class="__nav-exact-active-disabled"
                  class="flex w-full items-center justify-between px-3 py-3 text-base font-semibold text-[#1f2937] hover:bg-[#f6993c]/10 transition rounded-xl"
                  :class="isTopLevelActive(item) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                  :aria-current="isTopLevelActive(item) ? 'page' : undefined"
                  @click="closeMobileMenu"
                >
                  <span>{{ t(item.labelKey) }}</span>
                </NuxtLink>
                <div
                  v-if="item.children && openMobileDropdown === item.key"
                  class="ml-3 mt-1 space-y-1"
                >
                  <div v-for="child in item.children" :key="child.key">
                    <NuxtLink
                      v-if="!child.children"
                      :to="child.route"
                      active-class="__nav-active-disabled"
                      exact-active-class="__nav-exact-active-disabled"
                      class="flex items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                      :class="isPathActive(child.route) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                      @click="closeMobileMenu"
                    >
                      <span>{{ resolveChildLabel(child) }}</span>
                      <i class="mdi mdi-arrow-right text-base text-[#f6993c]" aria-hidden="true" />
                    </NuxtLink>
                    <button
                      v-else
                      type="button"
                      class="flex w-full items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                      @click="openMobileSubDropdown = openMobileSubDropdown === child.key ? null : child.key"
                    >
                      <span>{{ resolveChildLabel(child) }}</span>
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
                        active-class="__nav-active-disabled"
                        exact-active-class="__nav-exact-active-disabled"
                        class="flex items-center justify-between px-4 py-2 text-sm font-semibold text-[#374151] rounded-lg hover:bg-[#f6993c]/10 transition"
                        :class="isPathActive(grandchild.route) ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                        @click="closeMobileMenu"
                      >
                        <span>{{ resolveChildLabel(grandchild) }}</span>
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
                    <NuxtImg
                      :src="lang.icon"
                      :alt="lang.alt"
                      class="h-4 w-4 rounded-full object-cover"
                      @error="(event) => applyFallback(event, fallbackFlag)"
                    />
                    <span>{{ lang.label }}</span>
                  </button>
                </div>
              </div>
              <NuxtLink
                to="/hubungi-kami"
                class="flex w-full items-center justify-between text-sm font-semibold text-[#1f2937] hover:bg-[#f6993c]/10 transition rounded-xl"
                :class="route.path === '/hubungi-kami' ? 'bg-[#f6993c]/15 text-[#111827]' : ''"
                :aria-label="ctaLabel"
                @click="closeMobileMenu"
              >
                <span>{{ ctaLabel }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.desktop-submenu-root {
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 6px);
  pointer-events: none;
  transition: opacity 160ms ease, transform 160ms ease, visibility 0s linear 160ms;
}

.desktop-submenu-root::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  height: 10px;
}

.desktop-nav-item:hover .desktop-submenu-root,
.desktop-nav-item:focus-within .desktop-submenu-root {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
  pointer-events: auto;
  transition-delay: 0s;
}

.desktop-menu-locked .desktop-submenu-root,
.desktop-menu-locked .desktop-submenu-nested-root {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

.desktop-submenu-nested-root {
  opacity: 0;
  visibility: hidden;
  transform: translate(8px, 6px);
  pointer-events: none;
  transition: opacity 160ms ease, transform 160ms ease, visibility 0s linear 160ms;
}

.desktop-submenu-nested-root::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  width: 12px;
}

.desktop-submenu-child:hover > .desktop-submenu-nested-root,
.desktop-submenu-child:focus-within > .desktop-submenu-nested-root {
  opacity: 1;
  visibility: visible;
  transform: translate(8px, 0);
  pointer-events: auto;
  transition-delay: 0s;
}
</style>
