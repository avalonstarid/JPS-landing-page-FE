<script setup lang="ts">
const isNavigating = ref(false)

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
