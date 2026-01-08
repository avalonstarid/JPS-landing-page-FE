<script setup lang="ts">
const isNavigating = ref(false)
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const localeHead = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true })

const siteUrl = computed(() => runtimeConfig.public.siteUrl || 'https://example.com')
const siteName = computed(() => runtimeConfig.public.siteName || 'PT Janu Putra Sejahtera')
const gtagId = computed(() => runtimeConfig.public.gtagId || '')
const canonicalUrl = computed(() => new URL(route.fullPath, siteUrl.value).toString())
const localeLinks = computed(
  () => (localeHead.value.link || []).filter((link) => link.rel !== 'canonical'),
)
const localeMeta = computed(() => localeHead.value.meta || [])
const localeHtmlAttrs = computed(() => localeHead.value.htmlAttrs || {})

useHead(() => ({
  htmlAttrs: localeHtmlAttrs.value,
  link: [
    ...localeLinks.value,
    { rel: 'canonical', href: canonicalUrl.value },
  ],
  meta: [
    ...localeMeta.value,
    { name: 'robots', content: 'index, follow' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:site_name', content: siteName.value },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: gtagId.value
    ? [
        {
          key: 'gtag-lib',
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId.value}`,
        },
        {
          key: 'gtag-init',
          children:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" +
            gtagId.value +
            "');",
        },
      ]
    : [],
}))

if (import.meta.client) {
  const nuxtApp = useNuxtApp()
  let hideTimer: ReturnType<typeof setTimeout> | undefined

  const show = () => {
    if (hideTimer) clearTimeout(hideTimer)
    isNavigating.value = true
  }

  const hide = () => {
    if (hideTimer) clearTimeout(hideTimer)
    hideTimer = undefined
    isNavigating.value = false
  }

  nuxtApp.hook('page:start', () => {
    show()
  })
  nuxtApp.hook('page:finish', () => {
    // Keep loader visible until the page transition finishes to avoid a "blank" gap.
    if (hideTimer) clearTimeout(hideTimer)
    hideTimer = setTimeout(hide, 650)
  })
  nuxtApp.hook('page:transition:finish', hide)
  nuxtApp.hook('app:error', () => {
    hide()
  })
}
</script>

<template>
  <NuxtLoadingIndicator color="#f6993c" :height="3" :throttle="120" />
  <UiRouteLoader :show="isNavigating" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
