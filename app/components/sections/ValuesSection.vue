<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useValueStore } from '~/stores/value'
const valuesImage = '/images/beranda/standar.jpg'
const fallbackValueIcon = '/images/jps-standar-section/kualitas.png'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface StandardSectionData {
  title?: string
  subtitle?: string
  featured?: string
  items?: Array<{
    id: number
    title: string
    description: string
    icon: string
    iconCustom?: boolean
  }>
}

const props = defineProps<{
  data?: StandardSectionData | null
}>()

const valueStore = useValueStore()
const { values, isLoading } = storeToRefs(valueStore)

onMounted(async () => {
  if (!props.data?.items?.length) {
    await valueStore.fetchValues()
  }
})

const isApiData = computed(() => Array.isArray(props.data?.items) && props.data?.items.length > 0)

const displayValues = computed(() => {
  if (isApiData.value) {
    return props.data?.items || []
  }
  return values.value.map((value) => ({
    id: value.id,
    title: t(value.titleKey),
    description: t(value.descriptionKey),
    icon: value.icon,
    iconCustom: isIconImage(value.icon),
  }))
})

const isIconImage = (icon?: string) => {
  if (!icon) return true
  return icon.startsWith('http') || icon.startsWith('/') || icon.includes('.')
}

const getIconClass = (icon: string): string => {
  if (icon.startsWith('mdi-')) return icon
  const icons: Record<string, string> = {
    quality: 'mdi-star-circle',
    professionalism: 'mdi-briefcase-variant',
    innovation: 'mdi-lightbulb-on',
    environment: 'mdi-leaf',
    welfare: 'mdi-hand-heart',
    social: 'mdi-account-group',
  }
  return icons[icon] || `mdi-${icon}`
}
</script>

<template>
  <section
    id="nilai-kami"
    class="section-padding"
    aria-labelledby="values-title"
    style="background: #fdeee0;"
  >
    <div v-reveal class="container-main reveal">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-[#4c68c4]">
          {{ props.data?.title || t('values.title') }}
        </h2>
        <p class="text-xl text-[#1c1c1c] mt-3">
          {{ props.data?.subtitle || t('values.subtitle') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="!isApiData && isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Content Grid -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-[.75fr_1.1fr] gap-6 lg:gap-8 items-center">
        <!-- Left: Image -->
        <div class="order-2 lg:order-1 h-full">
          <div class="duration-300 hover:-translate-y-2 rounded-[28px] overflow-hidden shadow-lg h-full">
            <NuxtImg
              :src="props.data?.featured || valuesImage"
              :alt="t('values.imageAlt')"
              class="h-full w-full object-cover"
              loading="lazy"
              @error="(event) => applyFallback(event, valuesImage)"
            />
          </div>
        </div>

        <!-- Right: Value Cards Grid -->
        <div class="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <article
            v-for="value in displayValues"
            :key="value.id"
            class="duration-300 hover:-translate-y-2 bg-white rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] p-4"
          >
            <div class="mb-4">
              <div
                v-if="value.iconCustom === false"
                class="h-12 w-12 rounded-full bg-[#f6993c] flex items-center justify-center shadow-md"
              >
                <i class="mdi text-white text-2xl" :class="getIconClass(value.icon)" aria-hidden="true" />
              </div>
              <NuxtImg
                v-else
                :src="value.icon || fallbackValueIcon"
                :alt="value.title"
                class="h-12 w-12 object-contain"
                @error="(event) => applyFallback(event, fallbackValueIcon)"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ value.title }}
            </h3>
            <p class="text-xs text-gray-700 leading-relaxed">
              {{ value.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
