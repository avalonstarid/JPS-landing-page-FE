<script setup lang="ts">
import heroImage from '~/assets/images/produk/imageHero.png'

const { t } = useI18n()
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#0f1c3f] min-h-[60vh] md:min-h-[70vh] flex items-center"
    aria-label="Produk hero section"
  >
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        :alt="t('produkPage.hero.imageAlt')"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/20" />
    </div>

    <div class="relative z-10 container-main py-24 lg:py-32 ">
      <div class="max-w-3xl space-y-5 xl:ml-[-30rem]">
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          {{ t('produkPage.hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-white/90 leading-relaxed max-w-md">
          {{ t('produkPage.hero.subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>
