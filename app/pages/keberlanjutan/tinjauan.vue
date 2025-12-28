<script setup lang="ts">
import heroImage from '~/components/tinjauan/tinjauan-section.png'
import sdgImage from '~/components/tinjauan/SDG.png'

const { t } = useI18n()

useHead({
  title: 'Keberlanjutan - Tinjauan',
})
</script>

<template>
  <div class="bg-[#FDEEE0]">
    <section class="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Keberlanjutan" class="h-full w-full object-cover" loading="eager" />
        <div class="absolute inset-0 bg-black/40" />
      </div>
      <div class="relative z-10 container-main py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Keberlanjutan</h1>
      </div>
    </section>

    <section class="container-main py-12 md:py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[#3d4f92] text-center">
        {{ t('keberlanjutanPage.tinjauan.title') }}
      </h2>

      <div class="mt-10 relative flex flex-col items-center gap-6 max-w-4xl mx-auto">
        <div class="relative w-full flex justify-center">
          <img :src="sdgImage" :alt="t('keberlanjutanPage.tinjauan.sdgAlt')" class="w-full max-w-[520px] md:max-w-[620px]" />

          <span class="absolute left-0 top-[18%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEconomy') }}
          </span>
          <span class="absolute right-0 top-[30%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillSocial') }}
          </span>
          <span class="absolute left-[8%] bottom-[8%] hidden md:inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEnvironment') }}
          </span>
        </div>
        <div class="flex flex-wrap justify-center gap-3 md:hidden">
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEconomy') }}
          </span>
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillSocial') }}
          </span>
          <span class="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#f6993c] shadow-md">
            {{ t('keberlanjutanPage.tinjauan.pillEnvironment') }}
          </span>
        </div>
      </div>

      <div class="mt-10 space-y-6 text-sm md:text-base text-[#111827] max-w-4xl mx-auto leading-relaxed">
        <p>
          {{ t('keberlanjutanPage.tinjauan.paragraph1') }}
        </p>
        <div class="space-y-2">
          <p class="font-semibold text-[#3d4f92]">
            {{ t('keberlanjutanPage.tinjauan.heading') }}
          </p>
          <p>
            {{ t('keberlanjutanPage.tinjauan.paragraph2Prefix') }}
            <span class="italic">{{ t('keberlanjutanPage.tinjauan.sdgPhrase') }}</span>
            {{ t('keberlanjutanPage.tinjauan.paragraph2Suffix') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
