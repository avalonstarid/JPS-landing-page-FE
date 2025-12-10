<script setup lang="ts">
import UiCard from '~/components/ui/Card.vue'
import logoJps from '~/assets/images/logo-jps.png'
import { latestLayout } from '~/utils/beritaData'

const { t } = useI18n()

const detailPath = (id: string) => `/berita/detail/${id}`
</script>

<template>
  <section class="section-padding bg-[#fdeee0]" aria-labelledby="latest-news">
    <div class="container-main space-y-10">
      <div class="text-center space-y-3">
        <h2 id="latest-news" class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('beritaPage.sections.latestTitle') }}
        </h2>
        <p class="text-lg text-[#4b4b4b] max-w-3xl mx-auto">
          {{ t('beritaPage.sections.latestSubtitle') }}
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in latestLayout"
          :key="item.id"
          class="space-y-3 w-full mx-auto"
        >
          <NuxtLink :to="detailPath(item.id)" class="block">
            <UiCard
              :image-url="item.image"
              :company="''"
              :time-ago="''"
              :title="''"
              :description="''"
              :fill-parent="true"
              :height="240"
              :aria-label="`Baca ${item.title}`"
            />
          </NuxtLink>

          <NuxtLink :to="detailPath(item.id)" class="space-y-1 px-1 block">
            <div class="flex items-center gap-3 text-sm text-[#3d4f92]">
              <img :src="logoJps" alt="Logo JPS" class="w-7 h-7 rounded-full object-cover" />
              <div>
                <div class="font-semibold text-[#3d4f92]">{{ item.company }}</div>
                <div class="text-xs text-gray-600">{{ item.timeAgo }}</div>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-[#1f2937] leading-tight">{{ item.title }}</h3>
            <p class="text-sm text-[#555] leading-relaxed">{{ item.excerpt }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
