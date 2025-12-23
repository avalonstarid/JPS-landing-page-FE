<script setup lang="ts">
import dewanPhoto from '~/assets/images/tentang/dewan-komisaris.png'

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
        photo: dewanPhoto,
      },
      {
        name: 'Arsad Idrus',
        position: t('tentangPage.dewan.positions.komisarisIndependen'),
        photo: dewanPhoto,
      },
    ],
  },
  {
    key: 'direksi',
    label: t('tentangPage.dewan.tabs.direksi'),
    people: [
      {
        name: 'Ahmad Suryanto',
        position: t('tentangPage.dewan.positions.direkturUtama'),
        photo: dewanPhoto,
      },
      {
        name: 'Budi Santoso',
        position: t('tentangPage.dewan.positions.direktur'),
        photo: dewanPhoto,
      },
    ],
  },
  {
    key: 'manager',
    label: t('tentangPage.dewan.tabs.manager'),
    people: [
      {
        name: 'Andi Wijaya',
        position: t('tentangPage.dewan.positions.managerOperasional'),
        photo: dewanPhoto,
      },
      {
        name: 'Dewi Susanti',
        position: t('tentangPage.dewan.positions.managerKeuangan'),
        photo: dewanPhoto,
      },
    ],
  },
  {
    key: 'staff',
    label: t('tentangPage.dewan.tabs.staff'),
    people: [
      {
        name: 'Rizki Pratama',
        position: t('tentangPage.dewan.positions.staffAdministrasi'),
        photo: dewanPhoto,
      },
      {
        name: 'Sari Indah',
        position: t('tentangPage.dewan.positions.staffKeuangan'),
        photo: dewanPhoto,
      },
    ],
  },
  {
    key: 'lorem',
    label: 'Lorem Ipsum',
    people: [
      {
        name: 'Lorem Ipsum',
        position: 'Lorem Ipsum Dolor',
        photo: dewanPhoto,
      },
      {
        name: 'Sit Amet',
        position: 'Consectetur Adipiscing',
        photo: dewanPhoto,
      },
    ],
  },
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
              class="person-card flex flex-col items-center"
            >
              <!-- Photo with gradient border -->
              <div class="relative w-40 h-48 md:w-48 md:h-56 rounded-2xl overflow-hidden shadow-lg mb-4">
                <!-- Gradient background -->
                <div class="absolute inset-0 bg-gradient-to-b from-[#3d4f92] via-[#3d4f92]/80 to-[#D4A84B]" />

                <!-- Photo -->
                <img
                  :src="person.photo"
                  :alt="person.name"
                  class="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover object-top rounded-xl"
                />
              </div>

              <!-- Name and Position -->
              <h3 class="text-base md:text-lg font-semibold text-[#3d4f92] text-center">
                {{ person.name }}
              </h3>
              <p class="text-sm text-[#D4A84B] italic text-center">
                {{ person.position }}
              </p>
            </div>
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="lg:w-64 flex justify-center">
          <div class="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              type="button"
              class="w-full px-5 py-4 text-left font-medium transition-colors border-b border-gray-100 last:border-b-0"
              :class="[
                activeTab === tab.key
                  ? 'bg-[#3d4f92] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
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
