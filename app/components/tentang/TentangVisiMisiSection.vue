<script setup lang="ts">
import visiMisiImage from '~/assets/images/tentang/visi-misi.jpg'

const { t } = useI18n()

const missions = [
  { key: 'mission1', icon: 'product' },
  { key: 'mission2', icon: 'welfare' },
  { key: 'mission3', icon: 'efficiency' },
  { key: 'mission4', icon: 'environment' },
  { key: 'mission5', icon: 'social' },
  { key: 'mission6', icon: 'profit' },
]
</script>

<template>
  <section id="visi-misi" v-reveal  class="reveal py-12 md:py-20 bg-[#FDEEE0]">
    <div class="container-main">
      <!-- Section Title & Vision Statement - Side by Side -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 items-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] md:w-1/3 flex-shrink-0">
          {{ t('tentangPage.visiMisi.sectionTitle') }}
        </h2>
        <p class="text-base md:text-lg leading-relaxed md:w-2/3 md:text-right">
          {{ t('tentangPage.visiMisi.vision') }}
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        <!-- Left Side: Title, Vision and Mission Cards - 8 columns -->
        <div class="lg:col-span-9 space-y-8">
          <!-- Mission Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-8">
            <div
              v-for="mission in missions"
              :key="mission.key"
              class="relative bg-white rounded-2xl px-4 pt-8 pb-5 shadow-sm hover:shadow-md min-h-[180px] duration-300 hover:-translate-y-2"
            >
              <!-- Icon - Offset to top -->
              <div class="absolute -top-6 left-1/2 -translate-x-1/2">
                <div class="w-20 h-20 rounded-full bg-[#3d4f92] flex items-center justify-center shadow-md">
                  <!-- Product Icon -->
                  <template v-if="mission.icon === 'product'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </template>
                  <!-- Welfare Icon -->
                  <template v-else-if="mission.icon === 'welfare'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </template>
                  <!-- Efficiency Icon -->
                  <template v-else-if="mission.icon === 'efficiency'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </template>
                  <!-- Environment Icon -->
                  <template v-else-if="mission.icon === 'environment'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </template>
                  <!-- Social Icon -->
                  <template v-else-if="mission.icon === 'social'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </template>
                  <!-- Profit Icon -->
                  <template v-else-if="mission.icon === 'profit'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </template>
                </div>
              </div>
              <!-- Mission Text -->
              <p class="text-sm text-gray-700 text-center leading-relaxed mt-10">
                {{ t(`tentangPage.visiMisi.missions.${mission.key}.text`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Image - 4 columns -->
        <div class="lg:col-span-3 flex justify-center lg:justify-end duration-300 hover:-translate-y-2">
          <img
            :src="visiMisiImage"
            :alt="t('tentangPage.visiMisi.imageAlt')"
            class="rounded-2xl shadow-lg w-full max-w-[320px] h-full object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
