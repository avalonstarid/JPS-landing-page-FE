<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
import { findBeritaById, latestLayout } from '~/utils/beritaData'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

definePageMeta({
  key: (currentRoute) => currentRoute.fullPath,
  prerender: true,
})

const article = computed(() => findBeritaById(route.params.id as string))
const relatedArticles = computed(() =>
  latestLayout.filter((item) => item.id !== article.value.id).slice(0, 3)
)

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
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/30" />
      </div>

      <div class="relative z-10 container-main py-20 lg:py-28 space-y-6">
        <button
          class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur transition hover:bg-white/25"
          type="button"
          @click="goBack"
        >
          <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
          <span>{{ t('beritaPage.detail.back') }}</span>
        </button>

        <div class="space-y-4 max-w-4xl">
          <p class="text-sm uppercase tracking-[0.2em] text-white/75">{{ t('beritaPage.hero.badge') }}</p>
          <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
            {{ article.title }}
          </h1>
          <div class="flex items-center gap-3 text-white/85 text-sm">
            <img :src="logoJps" alt="Logo JPS" class="w-10 h-10 rounded-full object-cover" />
            <span class="font-semibold">{{ article.company }}</span>
            <span class="opacity-70">�</span>
            <span class="opacity-80">{{ article.timeAgo }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="container-main grid gap-10 lg:grid-cols-[2fr_1fr]">
        <article class="bg-white rounded-3xl shadow-2xl shadow-black/10 p-8 lg:p-10 space-y-6">
          <div class="space-y-4 text-[#333] leading-relaxed text-lg">
            <p v-for="(paragraph, idx) in article.content" :key="idx">{{ paragraph }}</p>
          </div>

          <div class="border-t pt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <i class="mdi mdi-account-circle text-[#f6993c] text-xl" aria-hidden="true"></i>
              <span>{{ article.company }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="mdi mdi-clock-outline text-[#f6993c] text-xl" aria-hidden="true"></i>
              <span>{{ article.timeAgo }}</span>
            </div>
          </div>
        </article>

        <aside class="space-y-6">
          <div class="bg-white/80 border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5">
            <h3 class="text-lg font-semibold text-[#3d4f92] mb-3">{{ t('beritaPage.detail.summary') }}</h3>
            <p class="text-sm text-[#4b4b4b] leading-relaxed">{{ article.description }}</p>
          </div>

          <div class="bg-white rounded-3xl shadow-xl shadow-black/10 p-6 space-y-4">
            <h3 class="text-lg font-semibold text-[#3d4f92]">{{ t('beritaPage.detail.related') }}</h3>
            <div class="space-y-4">
              <NuxtLink
                v-for="item in relatedArticles"
                :key="item.id"
                :to="`/berita/detail/${item.id}`"
                class="flex gap-4 rounded-2xl p-3 hover:bg-[#fdeee0] transition"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-20 h-20 rounded-xl object-cover flex-shrink-0 shadow"
                  loading="lazy"
                />
                <div class="space-y-1">
                  <p class="text-xs text-gray-500">{{ item.company }} � {{ item.timeAgo }}</p>
                  <p class="text-sm font-semibold text-[#1f2937] leading-tight">{{ item.title }}</p>
                  <p class="text-xs text-[#555] leading-snug max-h-12 overflow-hidden">{{ item.excerpt }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
