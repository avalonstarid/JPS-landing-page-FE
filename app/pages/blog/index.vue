<script setup lang="ts">
import { blogLatest } from '~/utils/blogData'
import UiCard from '~/components/ui/Card.vue'
import logoJps from '~/assets/images/logo-jps.png'

const { t } = useI18n()

const featured = computed(() => blogLatest[0])
const popularList = computed(() => blogLatest.slice(1, 5))
const latestList = computed(() => blogLatest)

useHead(() => ({
  title: `Blog | ${t('beritaPage.meta.shortTitle')}`,
  meta: [
    {
      name: 'description',
      content: 'Artikel blog terbaru dari PT Janu Putra Sejahtera.',
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="featured?.image" :alt="featured?.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>
      <div class="relative z-10 container-main py-20 lg:py-28 space-y-4">
        <p class="text-sm uppercase tracking-[0.2em] text-white/80">Blog</p>
        <h1 class="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
          Jelajahi wawasan terbaru dari PT Janu Putra Sejahtera
        </h1>
        <p class="text-lg text-white/85 max-w-2xl">
          Perspektif tentang peternakan modern, teknologi kandang, dan inovasi rantai pasok.
        </p>
      </div>
    </section>

    <!-- Blog Terpopuler -->
    <section class="section-padding space-y-6">
      <div class="container-main space-y-8">
        <h2 class="text-center text-3xl md:text-4xl font-bold text-[#3d4f92]">Blog Terpopuler</h2>

        <div class="grid gap-8 lg:grid-cols-[2fr_1fr] items-center">
          <NuxtLink
            v-if="featured"
            :to="`/blog/detail/${featured.id}`"
          >
            <UiCard
              :image-url="featured.image"
              :title="featured.title"
              :company="featured.company"
              :time-ago="featured.timeAgo"
              :avatar-url="logoJps"
              :aria-label="featured.title"
              :height="140"
              :fill-parent="true"
            />
          </NuxtLink>

          <!-- sise list populer -->
          <div class="space-y-4">
            <NuxtLink
              v-for="item in popularList"
              :key="item.id"
              :to="`/blog/detail/${item.id}`"
              class="flex items-start gap-3 rounded-2xl p-3 transition"
            >
              <img :src="item.image" :alt="item.title" class="w-20 h-20 rounded-2xl object-cover flex-shrink-0 shadow" />
              <div class="space-y-2 flex-1">
                <p class="text-base font-semibold text-[#1f2937] leading-snug">{{ item.title }}</p>
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                  <span class="font-medium text-[#3d4f92]">{{ item.company }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Terbaru -->
    <section class="section-padding pt-0">
      <div class="container-main space-y-8">
        <h2 class="text-center text-3xl md:text-4xl font-bold text-[#3d4f92]">Blog Terbaru</h2>

        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="item in latestList"
            :key="item.id"
            class="space-y-3"
          >
            <div class="relative">
              <NuxtLink :to="`/blog/detail/${item.id}`">
                <UiCard
                  :image-url="item.image"
                  company=""
                  time-ago=""
                  title=""
                  description=""
                  avatar-url=""
                  :height="260"
                  :fill-parent="true"
                  :aria-label="item.title"
                />
              </NuxtLink>
            </div>

            <NuxtLink :to="`/blog/detail/${item.id}`" class="space-y-2 block">
              <p class="text-xs text-gray-600 flex items-center gap-2">
                <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                <span class="font-semibold text-[#3d4f92]">{{ item.company }}</span>
                <span class="text-gray-400">•</span>
                <span>{{ item.timeAgo }}</span>
              </p>
              <h3 class="text-lg font-semibold text-[#1f2937] leading-tight">{{ item.title }}</h3>
              <p class="text-sm text-[#555] leading-snug line-clamp-3">{{ item.excerpt }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
