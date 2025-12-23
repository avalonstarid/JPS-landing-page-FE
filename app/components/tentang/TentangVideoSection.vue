<script setup lang="ts">
import videoThumbnail from '~/assets/images/tentang/Video.png'

const { t } = useI18n()
</script>

<template>
  <section id="video-profil" v-reveal  class="reveal py-12 md:py-20 bg-[#FDEEE0]">
    <div class="container-main">
      <!-- Section Title -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] text-center mb-8 md:mb-12">
        {{ t('tentangPage.video.sectionTitle') }}
      </h2>

      <!-- Video Thumbnail -->
      <div class="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg cursor-pointer group duration-300 hover:-translate-y-2">
        <img
          :src="videoThumbnail"
          :alt="t('tentangPage.video.imageAlt')"
          class="w-full h-auto object-cover aspect-video"
        />
        <!-- Play Button Overlay -->
        <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div class="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 md:w-10 md:h-10 text-[#3d4f92] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

