<script setup lang="ts">
import strukturImage from '~/assets/images/tentang/struktur-oraganisasi-1.png'
import ZoomableImagePanel from '~/components/ui/ZoomableImagePanel.vue'

const { t } = useI18n()
</script>

<template>
  <section id="struktur-organisasi" v-reveal class="reveal py-12 md:py-20 bg-[#27376D]">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-14">
        {{ t('tentangPage.struktur.sectionTitle') }}
      </h2>

      <ZoomableImagePanel
        :src="strukturImage"
        :alt="t('tentangPage.struktur.imageAlt')"
        :zoom-in-label="t('tentangPage.struktur.zoomIn')"
        :zoom-out-label="t('tentangPage.struktur.zoomOut')"
        :reset-label="t('tentangPage.struktur.resetZoom')"
        :zoom-hint="t('tentangPage.struktur.zoomHint')"
        control-text-class="text-white"
        control-button-class="bg-white/20 hover:bg-white/30 text-white"
        hint-class="text-white/60"
        scrollbar-thumb-color="rgba(255, 255, 255, 0.35)"
        scrollbar-thumb-hover-color="rgba(255, 255, 255, 0.35)"
        max-height="72vh"
      />
    </div>
  </section>
</template>
