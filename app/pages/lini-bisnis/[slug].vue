<script setup lang="ts">
import { findLiniBisnisBySlug, getValidSlugs } from '~/utils/liniBisnisData'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Get slug from route params
const slug = computed(() => route.params.slug as string)

// Find the business data by slug
const business = computed(() => findLiniBisnisBySlug(slug.value))

// Redirect to first business if slug is invalid
onMounted(() => {
  const validSlugs = getValidSlugs()
  if (!validSlugs.includes(slug.value)) {
    router.replace('/lini-bisnis/pembibitan')
  }
})

// Watch for slug changes and redirect if invalid
watch(slug, (newSlug) => {
  const validSlugs = getValidSlugs()
  if (!validSlugs.includes(newSlug)) {
    router.replace('/lini-bisnis/pembibitan')
  }
})

// Modal state
const isModalOpen = ref(false)

const handleOpenModal = () => {
  isModalOpen.value = true
}

const handleCloseModal = () => {
  isModalOpen.value = false
}

// SEO
useSeoMeta({
  title: () => t('liniBisnisPage.meta.title'),
  description: () => t('liniBisnisPage.meta.description'),
  ogTitle: () => t('liniBisnisPage.meta.title'),
  ogDescription: () => t('liniBisnisPage.meta.description'),
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <LiniBisnisHeroSection />

    <!-- Tabs Section -->
    <LiniBisnisTabsSection :active-slug="slug" />

    <!-- Detail Section -->
    <LiniBisnisDetailSection 
      v-if="business" 
      :business="business"
      @open-modal="handleOpenModal"
    />

    <!-- Info Modal -->
    <LiniBisnisInfoModal 
      :is-open="isModalOpen"
      @close="handleCloseModal"
    />
  </div>
</template>

