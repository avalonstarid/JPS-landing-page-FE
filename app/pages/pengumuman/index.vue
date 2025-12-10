<script setup lang="ts">
import { pengumumanAvatar, pengumumanHero, pengumumanItems } from '~/utils/pengumumanData'

const { t } = useI18n()
</script>

<template>
  <div class="bg-[#fdeee0] min-h-screen">
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img :src="pengumumanHero" alt="Pengumuman" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />
      </div>
      <div class="relative z-10 container-main py-20 lg:py-24 space-y-3">
        <p class="text-sm uppercase tracking-[0.2em] text-white/80">Pengumuman</p>
        <h1 class="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">
          Informasi terbaru dari PT Janu Putra Sejahtera
        </h1>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="container-main space-y-4">
        <NuxtLink
          v-for="item in pengumumanItems"
          :key="item.id"
          :to="`/pengumuman/detail/${item.id}`"
          class="flex flex-col sm:flex-row items-center gap-5 rounded-[28px] bg-white shadow-xl shadow-black/10 p-4 sm:p-6 hover:shadow-2xl transition"
        >
          <img :src="item.image" :alt="item.title" class="w-full sm:w-40 h-40 rounded-2xl object-cover shadow-md" />

          <div class="flex-1 space-y-3">
            <h2 class="text-xl md:text-2xl font-semibold text-[#1f2937] leading-tight">
              {{ item.title }}
            </h2>
            <div class="flex items-center gap-2 text-sm text-[#3d4f92]">
              <img :src="pengumumanAvatar" alt="Logo JPS" class="w-8 h-8 rounded-full object-cover" />
              <span class="font-semibold">{{ item.company }}</span>
            </div>
            <p class="text-sm text-gray-600">Diterbitkan pada {{ item.publishedAt }}</p>
            <div>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-4 py-2 text-white font-semibold shadow hover:shadow-lg transition"
              >
                <span>{{ t('common.viewAll') }}</span>
                <i class="mdi mdi-arrow-top-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
