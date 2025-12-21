<script setup lang="ts">
import lineConnector from '~/assets/images/Line.png'

const { t } = useI18n()

interface TimelineItem {
  year: string
  icon: string
  shortDesc: string
  detailTitle: string
  detailDesc: string
}

const timelineRef = ref<HTMLElement | null>(null)
const hoveredItem = ref<string | null>(null)
const tooltipPosition = ref({ x: 0, y: 0 })

const timelineItems = computed<TimelineItem[]>(() => [
  {
    year: '2007',
    icon: 'building',
    shortDesc: t('tentangPage.linimasa.items.y2007.short'),
    detailTitle: t('tentangPage.linimasa.items.y2007.title'),
    detailDesc: t('tentangPage.linimasa.items.y2007.detail'),
  },
  {
    year: '2008',
    icon: 'partnership',
    shortDesc: t('tentangPage.linimasa.items.y2008.short'),
    detailTitle: t('tentangPage.linimasa.items.y2008.title'),
    detailDesc: t('tentangPage.linimasa.items.y2008.detail'),
  },
  {
    year: '2009',
    icon: 'expansion',
    shortDesc: t('tentangPage.linimasa.items.y2009.short'),
    detailTitle: t('tentangPage.linimasa.items.y2009.title'),
    detailDesc: t('tentangPage.linimasa.items.y2009.detail'),
  },
  {
    year: '2012',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2012.short'),
    detailTitle: t('tentangPage.linimasa.items.y2012.title'),
    detailDesc: t('tentangPage.linimasa.items.y2012.detail'),
  },
  {
    year: '2013',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2013.short'),
    detailTitle: t('tentangPage.linimasa.items.y2013.title'),
    detailDesc: t('tentangPage.linimasa.items.y2013.detail'),
  },
  {
    year: '2015',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2015.short'),
    detailTitle: t('tentangPage.linimasa.items.y2015.title'),
    detailDesc: t('tentangPage.linimasa.items.y2015.detail'),
  },
  {
    year: '2018',
    icon: 'growth',
    shortDesc: t('tentangPage.linimasa.items.y2018.short'),
    detailTitle: t('tentangPage.linimasa.items.y2018.title'),
    detailDesc: t('tentangPage.linimasa.items.y2018.detail'),
  },
  {
    year: '2019',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2019.short'),
    detailTitle: t('tentangPage.linimasa.items.y2019.title'),
    detailDesc: t('tentangPage.linimasa.items.y2019.detail'),
  },
  {
    year: '2020',
    icon: 'partnership',
    shortDesc: t('tentangPage.linimasa.items.y2020.short'),
    detailTitle: t('tentangPage.linimasa.items.y2020.title'),
    detailDesc: t('tentangPage.linimasa.items.y2020.detail'),
  },
  {
    year: '2021',
    icon: 'international',
    shortDesc: t('tentangPage.linimasa.items.y2021.short'),
    detailTitle: t('tentangPage.linimasa.items.y2021.title'),
    detailDesc: t('tentangPage.linimasa.items.y2021.detail'),
  },
  {
    year: '2022',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2022.short'),
    detailTitle: t('tentangPage.linimasa.items.y2022.title'),
    detailDesc: t('tentangPage.linimasa.items.y2022.detail'),
  },
  {
    year: '2023',
    icon: 'facility',
    shortDesc: t('tentangPage.linimasa.items.y2022b.short'),
    detailTitle: t('tentangPage.linimasa.items.y2022b.title'),
    detailDesc: t('tentangPage.linimasa.items.y2022b.detail'),
  },
])

const scrollLeft = () => {
  if (timelineRef.value) {
    timelineRef.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (timelineRef.value) {
    timelineRef.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const handleMouseEnter = (year: string, event: MouseEvent) => {
  hoveredItem.value = year
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  tooltipPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top,
  }
}

const handleMouseLeave = () => {
  hoveredItem.value = null
}

const getIconClass = (icon: string): string => {
  const icons: Record<string, string> = {
    building: 'mdi-domain',
    partnership: 'mdi-account-group-outline',
    expansion: 'mdi-earth',
    facility: 'mdi-warehouse',
    growth: 'mdi-chart-line',
    international: 'mdi-earth',
  }
  return icons[icon] || icons.building
}
</script>

<template>
  <section id="linimasa-sejarah" class="py-12 md:py-20 bg-[#3A52A3] overflow-hidden">
    <div class="container-main">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10 md:mb-14">
        {{ t('tentangPage.linimasa.sectionTitle') }}
      </h2>

      <div class="relative flex items-center">
        <!-- Left Arrow - White bg with orange arrow -->
        <button
          type="button"
          class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
          :aria-label="t('tentangPage.linimasa.scrollLeft')"
          @click="scrollLeft"
        >
          <svg class="w-6 h-6 md:w-7 md:h-7 text-[#f6993c]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Timeline Container -->
        <div
          ref="timelineRef"
          class="overflow-x-auto scrollbar-hide flex-1 mx-2 md:mx-4"
          style="scroll-behavior: smooth;"
        >
          <div class="flex items-start min-w-max py-6 px-4">
            <div
              v-for="(item, index) in timelineItems"
              :key="item.year"
              class="relative flex flex-col items-center group"
              @mouseenter="handleMouseEnter(item.year, $event)"
              @mouseleave="handleMouseLeave"
            >
              <!-- Year Label -->
              <div class="text-white font-bold text-lg md:text-xl mb-3">
                {{ item.year }}
              </div>

              <!-- Timeline Node with Line Connector -->
              <div class="relative flex items-center">
                <!-- Line Connector Before (except first) -->
                <img
                  :src="lineConnector"
                  alt=""
                  :class="[
                    'h-[28px] md:h-[36px] w-auto mr-[-40px]',
                    index === 0 ? 'invisible' : '',
                  ]"
                />

                <!-- Icon Circle with white ring -->
                <div
                  class="relative z-10 w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-white p-[3px] cursor-pointer transition-transform hover:scale-110"
                >
                  <div class="w-full h-full rounded-full bg-[#f6993c] flex items-center justify-center">
                    <i class="mdi text-white text-2xl md:text-[28px]" :class="getIconClass(item.icon)" aria-hidden="true" />
                  </div>
                </div>

                <!-- Line Connector After (except last) -->
                <img
                  :src="lineConnector"
                  alt=""
                  :class="[
                    'h-[28px] md:h-[36px] w-auto ml-[-40px]',
                    index === timelineItems.length - 1 ? 'invisible' : '',
                  ]"

                />
              </div>

              <!-- Short Description -->
              <div class="text-white text-center text-xs md:text-sm mt-3 w-[90px] md:w-[110px] leading-tight min-h-[48px]">
                {{ item.shortDesc }}
              </div>

              <!-- Tooltip on Hover -->
              <Teleport to="body">
                <Transition name="tooltip">
                  <div
                    v-if="hoveredItem === item.year"
                    class="fixed z-[9999] bg-[#1a1a1a] text-white rounded-xl p-4 md:p-5 shadow-2xl max-w-[320px] md:max-w-[380px]"
                    :style="{
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y - 20}px`,
                      transform: 'translate(-50%, -100%)',
                    }"
                  >
                    <div class="text-sm text-gray-400 mb-2">{{ item.detailTitle }}</div>
                    <p class="text-sm leading-relaxed">{{ item.detailDesc }}</p>
                    <!-- Arrow -->
                    <div class="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-[#1a1a1a] rotate-45" />
                  </div>
                </Transition>
              </Teleport>
            </div>
          </div>
        </div>

        <!-- Right Arrow - White bg with orange arrow -->
        <button
          type="button"
          class="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
          :aria-label="t('tentangPage.linimasa.scrollRight')"
          @click="scrollRight"
        >
          <svg class="w-6 h-6 md:w-7 md:h-7 text-[#f6993c]" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translate(-50%, -90%);
}
</style>
