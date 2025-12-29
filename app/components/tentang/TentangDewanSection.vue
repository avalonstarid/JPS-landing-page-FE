<script setup lang="ts">
import komisarisUtamaPhoto from '~/assets/images/tentang/komisaris-utama.png'
import komisarisPhoto from '~/assets/images/tentang/komisaris.png'
import direkturUtamaPhoto from '~/assets/images/tentang/direktur-utama.png'

const { t } = useI18n()

interface Person {
  name: string
  position: string
  photo: string
}

interface TabData {
  key: string
  label: string
  people: Person[]
}

const activeTab = ref('komisaris')

const tabs = computed<TabData[]>(() => [
  {
    key: 'komisaris',
    label: t('tentangPage.dewan.tabs.komisaris'),
    people: [
      {
        name: 'Singgih Januatmoko',
        position: t('tentangPage.dewan.positions.komisarisUtama'),
        photo: komisarisUtamaPhoto,
      },
      {
        name: 'Arsad Idrus',
        position: t('tentangPage.dewan.positions.komisarisIndependen'),
        photo: komisarisPhoto,
      },
    ],
  },
  {
    key: 'direksi',
    label: t('tentangPage.dewan.tabs.direksi'),
    people: [
      {
        name: 'Sri Mulyani',
        position: t('tentangPage.dewan.positions.direkturUtama'),
        photo: direkturUtamaPhoto,
      },
      {
        name: 'Budi Santoso',
        position: t('tentangPage.dewan.positions.direktur'),
        photo: '',
      },
    ],
  },
  // {
  //   key: 'manajerial',
  //   label: t('tentangPage.dewan.tabs.manajerial'),
  //   people: [
  //     {
  //       name: 'Andi Wijaya',
  //       position: t('tentangPage.dewan.positions.managerOperasional'),
  //       photo: '',
  //     },
  //     {
  //       name: 'Dewi Susanti',
  //       position: t('tentangPage.dewan.positions.managerKeuangan'),
  //       photo: '',
  //     },
  //   ],
  // },
])

const currentTab = computed(() => tabs.value.find((tab) => tab.key === activeTab.value) || tabs.value[0])

const setActiveTab = (key: string) => {
  activeTab.value = key
}
</script>

<template>
  <section id="dewan-komisaris" v-reveal  class="reveal py-12 md:py-20 bg-[#FDEEE0]">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] mb-10 md:mb-14">
        {{ t('tentangPage.dewan.sectionTitle') }}
      </h2>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
        <!-- People Cards -->
        <div class="flex justify-center">
          <div class="flex flex-wrap gap-6 md:gap-8 justify-center">
            <div
              v-for="person in currentTab.people"
              :key="person.name"
              class="person-card flex flex-col items-center bg-white rounded-3xl shadow-lg overflow-hidden w-[240px]"
            >
              <div class="relative w-full h-[260px] bg-gradient-to-b from-[#2f428f] via-[#4056a6] to-[#d9a873]">
                <img
                  :src="person.photo"
                  :alt="person.name"
                  class="absolute inset-x-0 bottom-0 w-full h-full object-cover object-top"
                />
              </div>

              <!-- Name and Position -->
              <div class="px-4 py-4 text-center">
                <h3 class="text-base md:text-lg font-semibold text-[#1f2937]">
                  {{ person.name }}
                </h3>
                <p class="text-sm text-[#3d4f92] italic">
                  {{ person.position }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="lg:w-64 flex justify-center">
          <div class="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              type="button"
              class="w-full px-5 py-4 text-left font-medium transition-colors border-b border-gray-100 last:border-b-0"
              :class="[
                activeTab === tab.key
                  ? 'bg-[#3d4f92] text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-50'
              ]"
              @click="setActiveTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.person-card {
  transition: transform 0.2s ease;
}

.person-card:hover {
  transform: translateY(-4px);
}
</style>
