<script setup lang="ts">
import UiCard from '~/components/ui/Card.vue'
import logoJps from '~/assets/images/logo-jps.png'
import { popularLayout } from '~/utils/beritaData'

const { t } = useI18n()

const detailPath = (id: string) => `/berita/detail/${id}`
</script>

<template>
  <section class="section-padding bg-[#fdeee0]" aria-labelledby="popular-news">
    <div class="container-main space-y-10">
      <div class="text-center space-y-3">
        <h2 id="popular-news" class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('beritaPage.sections.popularTitle') }}
        </h2>
        <p class="text-lg text-[#4b4b4b] max-w-3xl mx-auto">
          {{ t('beritaPage.sections.popularSubtitle') }}
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-3">
        <!-- Column 1 - Card with text outside -->
        <div class="space-y-4 items-start w-full mx-auto">
          <NuxtLink :to="detailPath(popularLayout.primary.id)" class="block">
            <UiCard
              :image-url="popularLayout.primary.image"
              :company="''"
              :time-ago="''"
              :title="''"
              :description="''"
                  :height="260"
                  :fill-parent="true"
              :aria-label="`Baca ${popularLayout.primary.title}`"
            />
          </NuxtLink>

          <NuxtLink :to="detailPath(popularLayout.primary.id)" class="space-y-2 px-1 block">
            <div class="flex items-center gap-3 text-sm text-[#3d4f92]">
              <img :src="logoJps" alt="Logo JPS" class="w-7 h-7 rounded-full object-cover" />
              <span class="font-semibold text-[#3d4f92]">{{ popularLayout.primary.company }}</span>
              <span class="text-gray-500">•</span>
              <span class="text-gray-600">{{ popularLayout.primary.timeAgo }}</span>
            </div>
            <h3 class="text-xl font-semibold text-[#1f2937] leading-tight">
              {{ popularLayout.primary.title }}
            </h3>
            <p class="text-sm text-[#555] leading-relaxed">
              {{ popularLayout.primary.excerpt }}
            </p>
          </NuxtLink>
        </div>

        <!-- Column 2 - Text inside card -->
        <div class="flex justify-center">
          <NuxtLink :to="detailPath(popularLayout.highlight.id)" class="block">
            <UiCard
              :image-url="popularLayout.highlight.image"
              :company="popularLayout.highlight.company"
              :time-ago="popularLayout.highlight.timeAgo"
              :title="popularLayout.highlight.title"
              :description="popularLayout.highlight.description"
              :avatar-url="logoJps"
              :fill-parent="true"
              :height="460"
              :aria-label="`Baca ${popularLayout.highlight.title}`"
            />
          </NuxtLink>
        </div>

        <!-- Column 3 - Two stacked cards with text outside -->
        <div class="space-y-8 max-w-[360px] w-full mx-auto">
          <div
            v-for="item in popularLayout.stacked"
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
                <img :src="logoJps" alt="Logo JPS" class="w-7 h-7 rounded-full object-cover" />
                <span class="font-semibold text-[#3d4f92]">{{ item.company }}</span>
                <span class="text-gray-500">•</span>
                <span class="text-gray-600">{{ item.timeAgo }}</span>
              </div>
              <h3 class="text-lg font-semibold text-[#1f2937] leading-tight">{{ item.title }}</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
