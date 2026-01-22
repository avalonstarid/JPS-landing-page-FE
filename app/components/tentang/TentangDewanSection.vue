<script setup lang="ts">
const fallbackPersonPhoto = '/images/tentang/komisaris.png'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface Person {
  id: number
  name: string
  position: string
  photo: string
}

interface TabData {
  id: number
  key: string
  label: string
  people: Person[]
}

type DewanData = {
  title: string
  tabs: TabData[]
}

const props = withDefaults(defineProps<{ data: DewanData }>(), {
  data: () => ({
    title: '',
    tabs: [],
  }),
})

const activeTab = ref('')

const fallbackTabs = computed<TabData[]>(() => [
  {
    id: 0,
    key: 'komisaris',
    label: t('tentangPage.dewan.tabs.komisaris'),
    people: [
      {
        id: 0,
        name: 'Singgih Januatmoko',
        position: t('tentangPage.dewan.positions.komisarisUtama'),
        photo: fallbackPersonPhoto,
      },
      {
        id: 1,
        name: 'Fadhl Muhammad Firdaus',
        position: t('tentangPage.dewan.positions.komisaris'),
        photo: fallbackPersonPhoto,
      },
    ],
  },
  {
    id: 1,
    key: 'direksi',
    label: t('tentangPage.dewan.tabs.direksi'),
    people: [
      {
        id: 0,
        name: 'Sri Mulyani',
        position: t('tentangPage.dewan.positions.direkturUtama'),
        photo: fallbackPersonPhoto,
      },
    ],
  },
])

const tabs = computed<TabData[]>(() => (props.data.tabs.length ? props.data.tabs : fallbackTabs.value))

const currentTab = computed(() => {
  return tabs.value.find((tab) => tab.key === activeTab.value) || tabs.value[0] || {
    id: 0,
    key: 'empty',
    label: '',
    people: [],
  }
})

watch(
  () => tabs.value,
  (value) => {
    if (!value.length) return
    activeTab.value = value[0].key
  },
  { immediate: true }
)

const setActiveTab = (key: string) => {
  activeTab.value = key
}
</script>

<template>
  <section id="dewan-komisaris" v-reveal  class="reveal py-12 md:py-20 bg-[#FDEEE0]">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] mb-10 md:mb-14">
        {{ props.data.title || t('tentangPage.dewan.sectionTitle') }}
      </h2>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
        <!-- People Cards -->
        <div class="flex justify-center">
          <div class="flex flex-wrap gap-6 md:gap-8 justify-center">
            <div
              v-for="person in currentTab.people"
              :key="person.name"
              class="person-card flex flex-col items-center bg-white rounded-3xl shadow-lg overflow-hidden w-[270px]"
            >
              <div class="relative w-full h-[260px] bg-gradient-to-b from-[#2f428f] via-[#4056a6] to-[#d9a873]">
                <NuxtImg
                  :src="person.photo || fallbackPersonPhoto"
                  :alt="person.name"
                  class="absolute inset-x-0 bottom-0 w-full h-full object-cover object-top"
                  @error="(event) => applyFallback(event, fallbackPersonPhoto)"
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
