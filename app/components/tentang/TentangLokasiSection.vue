<script setup lang="ts">
import backgroundImage from '~/assets/images/tentang/background-lokasi-usaha.jpg'
import bisnisImage from '~/assets/images/bisnis/bisnis-most-top.png'

const { t } = useI18n()

interface LocationItem {
  key: string
  image: string
  title: string
  locations: string[]
  route: string
}

const locationItems = computed<LocationItem[]>(() => [
  {
    key: 'pembibitan',
    image: bisnisImage,
    title: t('tentangPage.lokasi.items.pembibitan.title'),
    locations: [
      t('tentangPage.lokasi.items.pembibitan.loc1'),
      t('tentangPage.lokasi.items.pembibitan.loc2'),
    ],
    route: '/lini-bisnis/pembibitan',
  },
  {
    key: 'broiler',
    image: bisnisImage,
    title: t('tentangPage.lokasi.items.broiler.title'),
    locations: [
      t('tentangPage.lokasi.items.broiler.loc1'),
      t('tentangPage.lokasi.items.broiler.loc2'),
    ],
    route: '/lini-bisnis/broiler',
  },
  {
    key: 'petelur',
    image: bisnisImage,
    title: t('tentangPage.lokasi.items.petelur.title'),
    locations: [
      t('tentangPage.lokasi.items.petelur.loc1'),
      t('tentangPage.lokasi.items.petelur.loc2'),
      t('tentangPage.lokasi.items.petelur.loc3'),
    ],
    route: '/lini-bisnis/petelur',
  },
  {
    key: 'penetasan',
    image: bisnisImage,
    title: t('tentangPage.lokasi.items.penetasan.title'),
    locations: [
      t('tentangPage.lokasi.items.penetasan.loc1'),
    ],
    route: '/lini-bisnis/penetasan',
  },
  {
    key: 'rpa',
    image: bisnisImage,
    title: t('tentangPage.lokasi.items.rpa.title'),
    locations: [
      t('tentangPage.lokasi.items.rpa.loc1'),
    ],
    route: '/lini-bisnis/rpa',
  },
])
</script>

<template>
  <section
    id="lokasi-usaha"
    class="py-12 md:py-20 bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#FDEEE0]/90" />

    <div class="container-main relative z-10">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] text-center mb-10 md:mb-14">
        {{ t('tentangPage.lokasi.sectionTitle') }}
      </h2>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <!-- First Row - 2 cards -->
        <div
          v-for="item in locationItems.slice(0, 2)"
          :key="item.key"
          class="location-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="flex">
            <!-- Image -->
            <div class="w-1/3 min-h-[180px]">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div class="w-2/3 p-4 md:p-5 flex flex-col justify-between">
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {{ item.title }}
                </h3>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="(loc, idx) in item.locations" :key="idx" class="flex items-start">
                    <span class="mr-2">{{ idx + 1 }}.</span>
                    <span>{{ loc }}</span>
                  </li>
                </ul>
              </div>

              <NuxtLink
                :to="item.route"
                class="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#f6993c] text-white text-sm font-medium rounded-full hover:bg-[#e8872e] transition-colors w-fit"
              >
                {{ t('tentangPage.lokasi.viewMore') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Second Row - 2 cards -->
        <div
          v-for="item in locationItems.slice(2, 4)"
          :key="item.key"
          class="location-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="flex">
            <!-- Image -->
            <div class="w-1/3 min-h-[180px]">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div class="w-2/3 p-4 md:p-5 flex flex-col justify-between">
              <div>
                <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {{ item.title }}
                </h3>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li v-for="(loc, idx) in item.locations" :key="idx" class="flex items-start">
                    <span class="mr-2">{{ idx + 1 }}.</span>
                    <span>{{ loc }}</span>
                  </li>
                </ul>
              </div>

              <NuxtLink
                :to="item.route"
                class="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#f6993c] text-white text-sm font-medium rounded-full hover:bg-[#e8872e] transition-colors w-fit"
              >
                {{ t('tentangPage.lokasi.viewMore') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Third Row - 1 card centered -->
        <div class="md:col-span-2 flex justify-center">
          <div
            v-for="item in locationItems.slice(4, 5)"
            :key="item.key"
            class="location-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full md:w-1/2"
          >
            <div class="flex">
              <!-- Image -->
              <div class="w-1/3 min-h-[180px]">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Content -->
              <div class="w-2/3 p-4 md:p-5 flex flex-col justify-between">
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {{ item.title }}
                  </h3>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li v-for="(loc, idx) in item.locations" :key="idx" class="flex items-start">
                      <span v-if="item.locations.length > 1" class="mr-2">{{ idx + 1 }}.</span>
                      <span>{{ loc }}</span>
                    </li>
                  </ul>
                </div>

                <NuxtLink
                  :to="item.route"
                  class="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#f6993c] text-white text-sm font-medium rounded-full hover:bg-[#e8872e] transition-colors w-fit"
                >
                  {{ t('tentangPage.lokasi.viewMore') }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.location-card:hover {
  transform: translateY(-4px);
}
</style>

