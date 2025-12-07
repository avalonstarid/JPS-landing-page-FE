<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()

const footerColumns = [
  {
    titleKey: 'footer.columns.products.title',
    links: [
      { labelKey: 'footer.columns.products.links.docParent', href: '#' },
      { labelKey: 'footer.columns.products.links.docFinal', href: '#' },
      { labelKey: 'footer.columns.products.links.liveChicken', href: '#' },
      { labelKey: 'footer.columns.products.links.commercialEgg', href: '#' },
      { labelKey: 'footer.columns.products.links.chickenCarcass', href: '#' },
    ],
  },
  {
    titleKey: 'footer.columns.learning.title',
    links: [
      { labelKey: 'footer.columns.learning.links.chickenFarming', href: '#' },
      { labelKey: 'footer.columns.learning.links.animalHealth', href: '#' },
      { labelKey: 'footer.columns.learning.links.farmManagement', href: '#' },
      { labelKey: 'footer.columns.learning.links.tips', href: '#' },
    ],
  },
  {
    titleKey: 'footer.columns.resources.title',
    links: [
      { labelKey: 'footer.columns.resources.links.blog', href: '#' },
      { labelKey: 'footer.columns.resources.links.webinar', href: '#' },
      { labelKey: 'footer.columns.resources.links.ebook', href: '#' },
      { labelKey: 'footer.columns.resources.links.faq', href: '#faq' },
    ],
  },
  {
    titleKey: 'footer.columns.about.title',
    links: [
      { labelKey: 'footer.columns.about.links.aboutUs', href: '#tentang' },
      { labelKey: 'footer.columns.about.links.career', href: '#karir' },
      { labelKey: 'footer.columns.about.links.contact', href: '#kontak' },
      { labelKey: 'footer.columns.about.links.investor', href: '#investor' },
    ],
  },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: `<path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: `<path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: `<path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>`,
  },
]
</script>

<template>
  <footer class="bg-secondary-700 text-white" role="contentinfo">
    <div class="container-main py-12 lg:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
              JP
            </div>
            <span class="font-bold text-xl">PT Janu Putra Sejahtera</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            {{ t('footer.description') }}
          </p>
        </div>

        <!-- Footer Link Columns -->
        <div v-for="column in footerColumns" :key="column.titleKey" class="space-y-4">
          <h3 class="font-semibold text-lg">{{ t(column.titleKey) }}</h3>
          <ul class="space-y-2">
            <li v-for="link in column.links" :key="link.labelKey">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-700 rounded"
              >
                {{ t(link.labelKey) }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-secondary-600 mt-12 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              JP
            </div>
            <span class="text-gray-300 text-sm">PT Janu Putra Sejahtera</span>
          </div>

          <p class="text-gray-400 text-sm text-center">{{ t('footer.rights', { year: currentYear }) }}</p>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-secondary-700 rounded-full p-1"
              :aria-label="social.name"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" v-html="social.icon" aria-hidden="true"></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

