<script setup lang="ts">
import { karirJobs, type KarirJob } from '~/utils/karirData'

const { t } = useI18n()

const emit = defineEmits<{
  openDetail: [job: KarirJob]
}>()

// Filter state
const searchQuery = ref('')
const selectedLocation = ref('')
const selectedJobType = ref('')

// Computed filtered jobs
const filteredJobs = computed(() => {
  return karirJobs.filter((job) => {
    const matchesSearch = searchQuery.value === '' || 
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesLocation = selectedLocation.value === '' || 
      job.locationType === selectedLocation.value
    const matchesJobType = selectedJobType.value === '' || 
      job.jobType === selectedJobType.value
    return matchesSearch && matchesLocation && matchesJobType
  })
})

// Count by job type
const marketingCount = computed(() => karirJobs.filter(j => j.jobType === 'marketing').length)
const salesCount = computed(() => karirJobs.filter(j => j.jobType === 'sales').length)
const legalCount = computed(() => karirJobs.filter(j => j.jobType === 'legal').length)

const resetFilters = () => {
  searchQuery.value = ''
  selectedLocation.value = ''
  selectedJobType.value = ''
}

const handleOpenDetail = (job: KarirJob) => {
  emit('openDetail', job)
}
</script>

<template>
  <section class="py-16 lg:py-24 bg-[#fdeee0]" aria-labelledby="karir-list">
    <div class="container-main">
      <div class="grid gap-8 lg:grid-cols-[280px_1fr]">
        <!-- Filter Sidebar -->
        <aside class="space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-[#1f2937]">{{ t('karirPage.filter.title') }}</h3>
            <button 
              type="button"
              class="text-sm text-[#f6993c] hover:underline font-medium"
              @click="resetFilters"
            >
              {{ t('karirPage.filter.reset') }}
            </button>
          </div>

          <!-- Search -->
          <div class="space-y-2">
            <label for="search-job" class="block text-sm font-medium text-[#1f2937]">
              {{ t('karirPage.filter.searchLabel') }}
            </label>
            <div class="relative">
              <i class="mdi mdi-magnify absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                id="search-job"
                v-model="searchQuery"
                type="text"
                :placeholder="t('karirPage.filter.searchPlaceholder')"
                class="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
              />
            </div>
          </div>

          <!-- Location Filter -->
          <div class="space-y-3">
            <p class="text-sm font-medium text-[#1f2937]">{{ t('karirPage.filter.locationLabel') }}</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedLocation" 
                  type="radio" 
                  name="location" 
                  value=""
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locationAll') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedLocation" 
                  type="radio" 
                  name="location" 
                  value="yogyakarta"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.yogyakarta') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedLocation" 
                  type="radio" 
                  name="location" 
                  value="purbalingga"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.purbalingga') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedLocation" 
                  type="radio" 
                  name="location" 
                  value="kebumen"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.kebumen') }}</span>
              </label>
            </div>
          </div>

          <!-- Job Type Filter -->
          <div class="space-y-3">
            <p class="text-sm font-medium text-[#1f2937]">{{ t('karirPage.filter.jobTypeLabel') }}</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedJobType" 
                  type="radio" 
                  name="jobType" 
                  value=""
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.jobTypeAll') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedJobType" 
                  type="radio" 
                  name="jobType" 
                  value="marketing"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.jobTypes.marketing') }} ({{ marketingCount }})</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedJobType" 
                  type="radio" 
                  name="jobType" 
                  value="sales"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.jobTypes.sales') }} ({{ salesCount }})</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  v-model="selectedJobType" 
                  type="radio" 
                  name="jobType" 
                  value="legal"
                  class="w-4 h-4 text-[#f6993c] border-gray-300 focus:ring-[#f6993c]"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.jobTypes.legal') }} ({{ legalCount }})</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Job List -->
        <div class="space-y-6">
          <template v-if="filteredJobs.length > 0">
            <article
              v-for="job in filteredJobs"
              :key="job.id"
              class="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 space-y-4 hover:shadow-xl transition-shadow"
            >
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2">
                  <div class="flex flex-wrap items-center gap-3">
                    <h3 class="text-xl font-bold text-[#1f2937]">{{ job.title }}</h3>
                    <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {{ job.jobTypeLabel }}
                    </span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-[#f6993c]">
                    <i class="mdi mdi-map-marker" aria-hidden="true" />
                    <span>{{ job.location }}</span>
                  </div>
                </div>
              </div>

              <p class="text-sm text-[#4b4b4b] leading-relaxed line-clamp-3">
                {{ job.description }}
              </p>

              <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span class="text-xs text-gray-500">{{ job.postedAt }}</span>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-full border-2 border-[#3d4f92] px-5 py-2 text-sm font-semibold text-[#3d4f92] transition hover:bg-[#3d4f92] hover:text-white"
                  @click="handleOpenDetail(job)"
                >
                  <span>{{ t('karirPage.list.apply') }}</span>
                  <i class="mdi mdi-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </article>
          </template>
          <div v-else class="bg-white rounded-2xl p-12 text-center shadow-lg">
            <i class="mdi mdi-briefcase-search text-6xl text-gray-300 mb-4" aria-hidden="true" />
            <p class="text-lg text-gray-500">{{ t('karirPage.list.noResults') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

