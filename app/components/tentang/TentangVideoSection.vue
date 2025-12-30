<script setup lang="ts">
const { t } = useI18n()

const youtubeEmbedUrl = 'https://www.youtube.com/embed/qNaC8V1wBDo'
</script>

<template>
  <section id="video-profil" v-reveal  class="reveal py-12 md:py-20 bg-[#FDEEE0]">
    <div class="container-main">
      <!-- Section Title -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] text-center mb-8 md:mb-12">
        {{ t('tentangPage.video.sectionTitle') }}
      </h2>

      <!-- Video Thumbnail -->
      <div class="relative w-full rounded-2xl overflow-hidden shadow-lg">
        <div class="relative aspect-video w-full overflow-hidden">
          <iframe
            :src="youtubeEmbedUrl"
            :title="t('tentangPage.video.imageAlt')"
            class="absolute left-0 top-0 h-[calc(100%+14px)] w-full -translate-y-[8px]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>
