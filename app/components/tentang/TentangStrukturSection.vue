<script setup lang="ts">
const fallbackStrukturImage = '/images/tentang/struktur-oraganisasi-1.png'
import ZoomableImagePanel from '~/components/ui/ZoomableImagePanel.vue'
const { t } = useI18n()

type StrukturData = {
  title: string
  featured: string
}

const props = withDefaults(defineProps<{ data: StrukturData }>(), {
  data: () => ({
    title: '',
    featured: '',
  }),
})
</script>

<template>
  <section id="struktur-organisasi" v-reveal class="reveal py-12 md:py-20 bg-[#27376D]">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-14">
        {{ props.data.title || t('tentangPage.struktur.sectionTitle') }}
      </h2>

      <ZoomableImagePanel
        :src="props.data.featured || fallbackStrukturImage"
        :alt="props.data.title || t('tentangPage.struktur.imageAlt')"
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
        :fallback-src="fallbackStrukturImage"
      />
    </div>
  </section>
</template>
