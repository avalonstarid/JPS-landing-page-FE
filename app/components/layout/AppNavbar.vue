<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const currentLanguage = ref<'ID' | 'EN'>('ID')

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Lini Bisnis', href: '#nilai-kami' },
  { label: 'Produk', href: '#produk' },
  { label: 'Berita', href: '#berita' },
  { label: 'Karir', href: '#karir' },
  { label: 'Relasi Investor', href: '#investor' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'ID' ? 'EN' : 'ID'
}

const scrollToSection = (href: string) => {
  closeMobileMenu()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
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
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm',
    ]"
  >
    <nav class="container-main" aria-label="Navigasi utama">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <a href="#beranda" class="flex items-center gap-2 group" aria-label="PT Janu Putra Sejahtera - Halaman Utama">
            <div
              class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg"
            >
              JP
            </div>
            <span class="hidden sm:block font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
              Janu Putra
            </span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Right side actions -->
        <div class="flex items-center gap-4">
          <!-- Language Switcher -->
          <button
            class="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            @click="toggleLanguage"
            aria-label="Ganti bahasa"
          >
            <span :class="{ 'text-primary-500 font-semibold': currentLanguage === 'ID' }">ID</span>
            <span class="text-gray-400">|</span>
            <span :class="{ 'text-primary-500 font-semibold': currentLanguage === 'EN' }">EN</span>
          </button>

          <!-- CTA Button -->
          <UiBaseButton variant="primary" size="sm" class="hidden sm:inline-flex" aria-label="Hubungi kami">
            Hubungi Kami
          </UiBaseButton>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 text-gray-700 hover:text-primary-500 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu navigasi"
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
        <div v-if="isMobileMenuOpen" id="mobile-menu" class="lg:hidden pb-4 border-t border-gray-200 mt-2">
          <div class="pt-4 space-y-1">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ item.label }}
            </a>
          </div>
          <div class="pt-4 px-4 space-y-3 border-t border-gray-200 mt-4">
            <button
              class="flex items-center gap-2 text-sm font-medium text-gray-700"
              @click="toggleLanguage"
              aria-label="Ganti bahasa"
            >
              <span>Bahasa:</span>
              <span :class="{ 'text-primary-500 font-semibold': currentLanguage === 'ID' }">ID</span>
              <span class="text-gray-400">|</span>
              <span :class="{ 'text-primary-500 font-semibold': currentLanguage === 'EN' }">EN</span>
            </button>
            <UiBaseButton variant="primary" size="md" class="w-full" aria-label="Hubungi kami">
              Hubungi Kami
            </UiBaseButton>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

