<script setup lang="ts">
import type { KarirJob } from '~/utils/karirData'
const emptyImage = '/images/karir/karir-tidak-tersedia.png'
const karirImage = '/images/karir/karir.jpg'
const { t } = useI18n()

type CategoryOption = {
  id: string
  name: string
  jobsCount?: number
}

const props = withDefaults(defineProps<{
  jobs?: KarirJob[]
  categories?: CategoryOption[]
  searchQuery?: string
  selectedCategoryId?: string
  selectedLocation?: string
  isLoading?: boolean
}>(), {
  jobs: () => [],
  categories: () => [],
  searchQuery: '',
  selectedCategoryId: '',
  selectedLocation: '',
  isLoading: false,
})

const emit = defineEmits<{
  openDetail: [job: KarirJob]
  updateSearch: [value: string]
  updateCategory: [value: string]
  updateLocation: [value: string]
  resetFilters: []
}>()

const handleOpenDetail = (job: KarirJob) => {
  emit('openDetail', job)
}

const jobs = computed(() => props.jobs)
const searchQuery = computed(() => props.searchQuery)
const selectedCategoryId = computed(() => props.selectedCategoryId)
const selectedLocation = computed(() => props.selectedLocation)
const isLoading = computed(() => props.isLoading)

const hasJobs = computed(() => props.jobs.length > 0)
const hasActiveFilters = computed(() => Boolean(searchQuery.value || selectedCategoryId.value || selectedLocation.value))

const hasCategories = computed(() => props.categories.length > 0)

const formatCategoryLabel = (item: CategoryOption) => {
  if (typeof item.jobsCount === 'number') {
    return `${item.name} (${item.jobsCount})`
  }
  return item.name
}
</script>

<template>
  <section class="bg-[#fdeee0]" aria-labelledby="karir-list">
    <div class="container-main py-8">
      <div v-if="hasJobs || isLoading || hasActiveFilters" class="grid gap-8 lg:grid-cols-[280px_1fr]">
        <!-- Filter Sidebar -->
        <aside class="space-y-6 bg-white rounded-2xl p-6 shadow-lg shadow-black/5">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-[#1f2937]">{{ t('karirPage.filter.title') }}</h3>
            <button 
              type="button"
              class="text-sm text-[#f6993c] hover:underline font-medium"
              @click="emit('resetFilters')"
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
                :value="searchQuery"
                type="text"
                :placeholder="t('karirPage.filter.searchPlaceholder')"
                class="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#f6993c] focus:outline-none focus:ring-2 focus:ring-[#f6993c]/20"
                @input="emit('updateSearch', ($event.target as HTMLInputElement).value)"
              />
            </div>
          </div>

          <!-- Location Filter -->
          <div class="space-y-3">
            <p class="text-sm font-medium text-[#1f2937]">{{ t('karirPage.filter.locationLabel') }}</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  :checked="selectedLocation === ''"
                  type="radio" 
                  name="location" 
                  value=""
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateLocation', '')"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locationAll') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  :checked="selectedLocation === 'yogyakarta'"
                  type="radio" 
                  name="location" 
                  value="yogyakarta"
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateLocation', 'yogyakarta')"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.yogyakarta') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  :checked="selectedLocation === 'purbalingga'"
                  type="radio" 
                  name="location" 
                  value="purbalingga"
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateLocation', 'purbalingga')"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.purbalingga') }}</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  :checked="selectedLocation === 'kebumen'"
                  type="radio" 
                  name="location" 
                  value="kebumen"
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateLocation', 'kebumen')"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.locations.kebumen') }}</span>
              </label>
            </div>
          </div>

          <!-- Job Type Filter -->
          <div class="space-y-3">
            <p class="text-sm font-medium text-[#1f2937]">{{ t('karirPage.filter.jobTypeLabel') }}</p>
            <div class="space-y-2" :class="hasCategories ? '' : 'opacity-60'">
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  :checked="selectedCategoryId === ''"
                  type="radio" 
                  name="jobType" 
                  value=""
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateCategory', '')"
                />
                <span class="text-sm text-[#4b4b4b]">{{ t('karirPage.filter.jobTypeAll') }}</span>
              </label>
              <label
                v-for="category in categories"
                :key="category.id"
                class="flex items-center gap-2 cursor-pointer"
              >
                <input 
                  :checked="selectedCategoryId === category.id"
                  type="radio" 
                  name="jobType" 
                  :value="category.id"
                  class="w-4 h-4 rounded-full appearance-none border border-gray-300 bg-white checked:border-[#f6993c] checked:bg-[#f6993c] focus:outline-none focus:ring-0"
                  @change="emit('updateCategory', category.id)"
                />
                <span class="text-sm text-[#4b4b4b]">{{ formatCategoryLabel(category) }}</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Job List -->
        <div class="space-y-6">
          <div v-if="isLoading" class="bg-white rounded-2xl p-8 text-center shadow-lg">
            <span class="text-sm text-gray-500">{{ t('common.loading') }}</span>
          </div>
          <template v-else-if="jobs.length > 0">
            <article
              v-for="job in jobs"
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
                  class="inline-flex items-center gap-2 rounded-full border-2 border-[#3d4f92] px-5 py-2 text-sm font-semibold  transition bg-[#3d4f92] text-white"
                  @click="handleOpenDetail(job)"
                >
                  <span>{{ t('karirPage.list.apply') }}</span>
                  <div class="bg-white rounded-full min-w-[20px]"><i class="text-primary-600 mdi mdi-arrow-top-right" aria-hidden="true" /></div>
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
      <div v-else class="space-y-10">
        <div class="grid gap-8 lg:grid-cols-[280px_1fr] items-start">
          <NuxtImg
            :src="karirImage"
            :alt="t('karirPage.empty.imageAlt')"
            class="w-full rounded-2xl object-cover shadow-md"
          />
          <div class="space-y-4 text-[#1f2937]">
            <h3 class="text-xl md:text-2xl font-semibold text-[#3d4f92]">
              {{ t('karirPage.empty.sectionTitle') }}
            </h3>
            <p class="text-sm md:text-base text-[#4b5563] leading-relaxed">
              {{ t('karirPage.empty.sectionDescription1') }}
            </p>
            <p class="text-sm md:text-base text-[#4b5563] leading-relaxed">
              {{ t('karirPage.empty.sectionDescription2') }}
            </p>
          </div>
        </div>
        <div class="relative bg-white rounded-2xl p-10 md:p-12 text-center shadow-lg">
          <NuxtImg
            :src="emptyImage"
            :alt="t('karirPage.empty.emptyImageAlt')"
            class="mx-auto w-full lg:w-[900px] auto lg:absolute lg:mx-auto lg:right-0 lg:left-0 lg:top-[-140px]"
          />
          <h4 class="mt-6 text-base md:text-lg font-semibold text-[#3d4f92] lg:mt-[20rem]">
            {{ t('karirPage.empty.cardTitle') }}
          </h4>
          <p class="mt-2 text-sm md:text-base text-[#6b7280]">
            {{ t('karirPage.empty.cardDescription') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
