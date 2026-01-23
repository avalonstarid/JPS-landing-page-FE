<script setup lang="ts">
import UiCard from '~/components/ui/Card.vue'
const logoJps = '/images/logo-jps.png'
const { t } = useI18n()

type BeritaItem = {
  id: string
  title: string
  image: string
  excerpt?: string
  description?: string
  timeAgo?: string
  company?: string
}

type PopularLayout = {
  primary?: BeritaItem
  highlight?: BeritaItem
  stacked?: BeritaItem[]
}

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  layout?: PopularLayout
  isLoading?: boolean
}>(), {
  title: '',
  subtitle: '',
  layout: () => ({}),
  isLoading: false,
})

const detailPath = (id: string) => `/berita/detail/${id}`

const primaryItem = computed(() => props.layout?.primary)
const highlightItem = computed(() => props.layout?.highlight)
const stackedItems = computed(() => props.layout?.stacked || [])
const hasContent = computed(() => Boolean(primaryItem.value || highlightItem.value || stackedItems.value.length))
</script>

<template>
  <section class="section-padding bg-[#fdeee0]" aria-labelledby="popular-news">
    <div class="container-main space-y-10">
      <div class="text-center space-y-3">
        <h2 id="popular-news" class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ props.title || t('beritaPage.sections.popularTitle') }}
        </h2>
        <p class="text-lg text-[#4b4b4b] max-w-3xl mx-auto">
          {{ props.subtitle || t('beritaPage.sections.popularSubtitle') }}
        </p>
      </div>

      <div v-if="props.isLoading" class="rounded-2xl bg-white py-8 text-center shadow-lg">
        <span class="text-sm text-gray-500">{{ t('common.loading') }}</span>
      </div>
      <div v-else-if="hasContent" class="grid gap-10 lg:grid-cols-3">
        <!-- Column 1 - Card with text outside -->
        <div class="space-y-4 w-full">
          <NuxtLink v-if="primaryItem" :to="detailPath(primaryItem.id)" class="block">
            <UiCard
              :image-url="primaryItem.image"
              :company="''"
              :time-ago="''"
              :title="''"
              :description="''"
              :height="260"
              :fill-parent="true"
              :aria-label="`Baca ${primaryItem.title}`"
            />
          </NuxtLink>

          <NuxtLink v-if="primaryItem" :to="detailPath(primaryItem.id)" class="space-y-2 px-1 block">
            <div class="flex items-center gap-3 text-sm text-[#3d4f92]">
              <NuxtImg :src="logoJps" alt="Logo JPS" class="w-7 h-7 rounded-full object-cover" />
              <span class="font-semibold text-[#3d4f92]">{{ primaryItem.company }}</span>
              <span v-if="primaryItem.timeAgo" class="text-gray-500">&bull;</span>
              <span v-if="primaryItem.timeAgo" class="text-gray-600">{{ primaryItem.timeAgo }}</span>
            </div>
            <h3 class="text-xl font-semibold text-[#1f2937] leading-tight">
              {{ primaryItem.title }}
            </h3>
            <p class="text-sm text-[#555] leading-relaxed">
              {{ primaryItem.excerpt }}
            </p>
          </NuxtLink>
        </div>

        <!-- Column 2 - Text inside card -->
        <div class="w-full">
          <NuxtLink v-if="highlightItem" :to="detailPath(highlightItem.id)" class="block">
            <UiCard
              :image-url="highlightItem.image"
              :company="highlightItem.company"
              :time-ago="highlightItem.timeAgo"
              :title="highlightItem.title"
              :description="highlightItem.description"
              :avatar-url="logoJps"
              :fill-parent="true"
              :height="430"
              :aria-label="`Baca ${highlightItem.title}`"
            />
          </NuxtLink>
        </div>

        <!-- Column 3 - Two stacked cards with text outside -->
        <div class="space-y-8 w-full">
          <div
            v-for="item in stackedItems"
            :key="item.id"
            class="space-y-3"
          >
            <NuxtLink :to="detailPath(item.id)" class="block">
              <UiCard
                :image-url="item.image"
                :company="''"
                :time-ago="''"
                :title="''"
                :description="''"
                :fill-parent="true"
                :height="150"
                :aria-label="`Baca ${item.title}`"
              />
            </NuxtLink>

            <NuxtLink :to="detailPath(item.id)" class="space-y-1 px-1 block">
              <div class="flex items-center gap-3 text-sm text-[#3d4f92]">
                <NuxtImg :src="logoJps" alt="Logo JPS" class="w-7 h-7 rounded-full object-cover" />
                <span class="font-semibold text-[#3d4f92]">{{ item.company }}</span>
                <span v-if="item.timeAgo" class="text-gray-500">&bull;</span>
                <span v-if="item.timeAgo" class="text-gray-600">{{ item.timeAgo }}</span>
              </div>
              <h3 class="text-lg font-semibold text-[#1f2937] leading-tight">{{ item.title }}</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="rounded-2xl bg-white py-8 text-center shadow-lg">
        <span class="text-sm text-gray-500">{{ props.subtitle || t('beritaPage.sections.popularSubtitle') }}</span>
      </div>
    </div>
  </section>
</template>
