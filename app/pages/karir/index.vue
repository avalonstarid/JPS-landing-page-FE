<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'

const { t } = useI18n()

// SEO Meta
useHead({
  title: () => t('karirPage.meta.title'),
  meta: [
    { name: 'description', content: () => t('karirPage.meta.description') }
  ]
})

// Modal state
const isDetailModalOpen = ref(false)
const isApplyModalOpen = ref(false)
const selectedJob = ref<KarirJob | null>(null)

const handleOpenDetail = (job: KarirJob) => {
  selectedJob.value = job
  isDetailModalOpen.value = true
}

const handleCloseDetail = () => {
  isDetailModalOpen.value = false
}

const handleApply = (job: KarirJob) => {
  isDetailModalOpen.value = false
  selectedJob.value = job
  isApplyModalOpen.value = true
}

const handleCloseApply = () => {
  isApplyModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-[#fdeee0]">
    <!-- Hero Section -->
    <KarirHeroSection />

    <!-- About Section -->
    <KarirAboutSection />

    <!-- Job List Section -->
    <KarirListSection @open-detail="handleOpenDetail" />

    <!-- Detail Modal -->
    <KarirDetailModal
      :is-open="isDetailModalOpen"
      :job="selectedJob"
      @close="handleCloseDetail"
      @apply="handleApply"
    />

    <!-- Apply Modal -->
    <KarirApplyModal
      :is-open="isApplyModalOpen"
      :job="selectedJob"
      @close="handleCloseApply"
    />
  </div>
</template>

