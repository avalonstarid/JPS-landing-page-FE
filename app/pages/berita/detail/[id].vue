<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
import UiCard from '~/components/ui/Card.vue'
import { findBeritaById, latestLayout } from '~/utils/beritaData'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

definePageMeta({
  key: (currentRoute) => currentRoute.fullPath,
  prerender: true,
})

const article = computed(() => findBeritaById(route.params.id as string))
const latestArticles = computed(() => latestLayout.filter((item) => item.id !== article.value.id).slice(0, 4))

const goBack = () => {
  router.push('/berita')
}

useHead(() => ({
  title: `${article.value.title} | ${t('beritaPage.meta.shortTitle')}`,
  meta: [
    {
      name: 'description',
      content: article.value.description,
    },
    {
      property: 'og:title',
      content: article.value.title,
    },
    {
      property: 'og:description',
      content: article.value.description,
    },
    {
      property: 'og:image',
      content: article.value.image,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0] min-h-screen">
    <!-- Hero Header -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/30" />
      </div>

      <div class="relative z-10 container-main py-20 lg:py-28 space-y-6">
        <div class="min-h-[20rem]"></div>
      </div>
    </section>

    <div class="container-main py-12 lg:py-16 space-y-6">
      <!-- Breadcrumb & Back -->
      <button
        class="inline-flex items-center gap-2 rounded-full bg-white px-3 text-[#3d4f92] shadow hover:shadow-md transition"
        type="button"
        @click="goBack"
      >
        <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
        <span>{{ t('beritaPage.detail.back') }}</span>
      </button>
      <div class="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700">
        <div class="flex items-center gap-2 text-xs sm:text-sm text-[#3d4f92]">
          <NuxtLink to="/" class="hover:underline">{{ t('nav.home') }}</NuxtLink>
          <span>/</span>
          <NuxtLink to="/berita" class="hover:underline">{{ t('nav.news') }}</NuxtLink>
          <span>/</span>
          <span class="text-gray-600 line-clamp-1">{{ article.title }}</span>
        </div>
      </div>
      <div class="flex flex-wrap items-start justify-between gap-4">
        <h1 class="text-3xl md:text-4xl font-bold text-[#3d4f92] leading-tight max-w-3xl">
          {{ article.title }}
        </h1>
        <div class="flex items-center gap-2">
          <button
            class="w-11 h-11 rounded-full flex items-center justify-center text-black hover:shadow-md transition"
            type="button"
            aria-label="Sukai"
          >
            <i class="mdi mdi-heart-outline text-xl" aria-hidden="true"></i>
          </button>
          <button
            class="w-11 h-11 rounded-full flex items-center justify-center text-black hover:shadow-md transition"
            type="button"
            aria-label="Bagikan"
          >
            <i class="mdi mdi-share-variant text-xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="grid gap-10 lg:grid-cols-[1fr_290px]">
        <!-- Main Article -->
        <article class="space-y-6">
          <div class="rounded-3xl">
            

            <div class="flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
              <span class="font-semibold">{{ article.company }}</span>
              <span class="text-gray-400">•</span>
              <span>{{ article.timeAgo }}</span>
            </div>

            <div class="mt-6 text-[#333] leading-relaxed text-lg ">
              <p v-for="(paragraph, idx) in article.content" :key="idx">{{ paragraph }}</p>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="space-y-5 mt-11">
          <h3 class="text-lg font-semibold">Berita Baru</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="item in latestArticles"
              :key="item.id"
              :to="`/berita/detail/${item.id}`"
              class="flex flex-col gap-3"
            >
              <UiCard
                :image-url="item.image"
                company=""
                time-ago=""
                title=""
                description=""
                avatar-url=""
                :fill-parent="true"
                :height="260"
                :aria-label="item.title"
              />
              <div class="px-1 space-y-1">
                <p class="text-xs text-gray-600 flex items-center gap-2">
                  <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                  <span class="font-medium text-[#3d4f92]">{{ item.company }}</span>
                  <span class="text-gray-400">•</span>
                  <span>{{ item.timeAgo }}</span>
                </p>
                <p class="text-sm font-semibold text-[#1f2937] leading-tight">{{ item.title }}</p>
                <p class="text-xs text-[#555] leading-snug line-clamp-2">{{ item.excerpt }}</p>
              </div>
            </NuxtLink>
            <div class="flex items-center gap-2 text-xs sm:text-sm text-[#3d4f92]">
              <NuxtLink to="/" class="hover:underline">Lihat lebih banyak...</NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
