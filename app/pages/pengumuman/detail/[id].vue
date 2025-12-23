<script setup lang="ts">
import logoJps from '~/assets/images/logo-jps.png'
import UiCard from '~/components/ui/Card.vue'
import SharePanel from '~/components/ui/SharePanel.vue'
import { findPengumumanById, pengumumanLatest } from '~/utils/pengumumanData'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

definePageMeta({
  key: (currentRoute) => currentRoute.fullPath,
  prerender: true,
})

const pengumuman = computed(() => findPengumumanById(route.params.id as string))
const latestPengumuman = computed(() => pengumumanLatest.filter((item) => item.id !== pengumuman.value.id).slice(0, 4))

const goBack = () => {
  router.push('/pengumuman')
}

const shareTitle = computed(() => t('share.title', { label: t('nav.newsItems.pengumuman') }))
const shareCopyLabel = computed(() => t('share.copy', { label: t('nav.newsItems.pengumuman') }))

const resolveText = (value?: { id: string; en: string } | string) => {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  const currentLocale = locale.value === 'en' ? 'en' : 'id'
  return value[currentLocale] ?? value.id
}

useHead(() => ({
  title: `${pengumuman.value.title} | Pengumuman`,
  meta: [
    {
      name: 'description',
      content: pengumuman.value.description,
    },
    {
      property: 'og:title',
      content: pengumuman.value.title,
    },
    {
      property: 'og:description',
      content: pengumuman.value.description,
    },
    {
      property: 'og:image',
      content: pengumuman.value.image,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0] min-h-screen">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-end">
      <div class="absolute inset-0">
        <img :src="pengumuman.image" :alt="pengumuman.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />
      </div>
    </section>

    <div class="relative container-main py-12 lg:py-16 space-y-6">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <button
          class="inline-flex items-center gap-2 rounded-full bg-white px-3 text-[#3d4f92] shadow hover:shadow-md transition"
          type="button"
          @click="goBack"
        >
          <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
          <span>{{ t('pengumumanPage.detail.back') }}</span>
        </button>
        <SharePanel :title="shareTitle" :copy-label="shareCopyLabel" />
      </div>

      <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#3d4f92]">
        <NuxtLink to="/" class="hover:underline">{{ t('nav.home') }}</NuxtLink>
        <span>/</span>
        <NuxtLink to="/pengumuman" class="hover:underline">Pengumuman</NuxtLink>
        <span>/</span>
        <span class="text-gray-600 line-clamp-1">{{ pengumuman.title }}</span>
      </div>

      <div class="flex flex-wrap items-start justify-between gap-4">
        <h1 class="text-3xl md:text-4xl font-bold text-[#3d4f92] leading-tight max-w-3xl">
          {{ pengumuman.title }}
        </h1>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1fr_290px]">
        <article class="space-y-6">
          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
            <span class="font-semibold">{{ pengumuman.company }}</span>
            <span class="text-gray-400">•</span>
            <span>{{ pengumuman.publishedAt }}</span>
          </div>

          <div class="mt-2 text-[#333] leading-relaxed text-lg space-y-4">
            <template v-for="(block, idx) in pengumuman.content" :key="idx">
              <p v-if="block.type === 'paragraph'">{{ resolveText(block.text) }}</p>
              <figure v-else-if="block.type === 'image'" class="space-y-2">
                <img
                  :src="block.src"
                  :alt="resolveText(block.alt)"
                  class="w-full aspect-video rounded-2xl object-cover"
                />
                <figcaption v-if="block.caption" class="text-xs text-gray-500">
                  {{ resolveText(block.caption) }}
                </figcaption>
              </figure>
              <blockquote
                v-else-if="block.type === 'quote'"
                class="border-l-4 border-[#3d4f92] pl-4 text-lg italic text-[#3d4f92]"
              >
                <p>{{ resolveText(block.text) }}</p>
                <footer v-if="block.cite" class="mt-2 text-sm text-gray-500 not-italic">
                  - {{ resolveText(block.cite) }}
                </footer>
              </blockquote>
            </template>
          </div>
        </article>

        <aside class="space-y-5 mt-4">
          <h3 class="text-lg font-semibold">Pengumuman Lainnya</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="item in latestPengumuman"
              :key="item.id"
              :to="`/pengumuman/detail/${item.id}`"
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
                :height="200"
                :aria-label="item.title"
              />
              <div class="px-1 space-y-1">
                <p class="text-xs text-gray-600 flex items-center gap-2">
                  <img :src="logoJps" alt="Logo JPS" class="w-6 h-6 rounded-full object-cover" />
                  <span class="font-medium text-[#3d4f92]">{{ item.company }}</span>
                  <span class="text-gray-400">•</span>
                  <span>{{ item.publishedAt }}</span>
                </p>
                <p class="text-sm font-semibold text-[#1f2937] leading-tight">{{ item.title }}</p>
                <p class="text-xs text-[#555] leading-snug line-clamp-2">{{ item.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
