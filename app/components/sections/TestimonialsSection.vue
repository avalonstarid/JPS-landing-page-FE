<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestimonialStore } from '~/stores/testimonial'
const bgMitra = '/images/beranda/testimoni.jpg'
const gradientImage = '/images/gradient.png'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface TestimonialSectionData {
  background?: string
  title?: string
  items?: Array<{
    id: number
    title: string
    description: string
    author: string
    role: string
  }>
}

const props = defineProps<{
  data?: TestimonialSectionData | null
}>()

const testimonialStore = useTestimonialStore()
const { currentTestimonial, currentIndex, totalTestimonials, isLoading } = storeToRefs(testimonialStore)

onMounted(async () => {
  if (!props.data?.items?.length) {
    await testimonialStore.fetchTestimonials()
  }
})

const goToPrev = () => {
  if (isApiData.value) {
    apiIndex.value = apiIndex.value > 0 ? apiIndex.value - 1 : apiTestimonials.value.length - 1
    return
  }
  testimonialStore.prev()
}

const goToNext = () => {
  if (isApiData.value) {
    apiIndex.value = apiIndex.value < apiTestimonials.value.length - 1 ? apiIndex.value + 1 : 0
    return
  }
  testimonialStore.next()
}

const isApiData = computed(() => Array.isArray(props.data?.items) && props.data?.items.length > 0)

const apiIndex = ref(0)

const apiTestimonials = computed(() => props.data?.items || [])

watch(
  () => props.data?.items,
  () => {
    apiIndex.value = 0
  }
)

const activeTestimonial = computed(() => {
  if (isApiData.value) {
    return apiTestimonials.value[apiIndex.value] || null
  }
  return currentTestimonial.value
})

const totalDots = computed(() => {
  return isApiData.value ? apiTestimonials.value.length : totalTestimonials.value
})

const backgroundImage = computed(() => {
  return props.data?.background || bgMitra
})

const sectionLabel = computed(() => {
  return props.data?.title || t('testimonials.label')
})

const activeIndex = computed(() => {
  return isApiData.value ? apiIndex.value : currentIndex.value
})

const setIndex = (index: number) => {
  if (isApiData.value) {
    apiIndex.value = index
    return
  }
  testimonialStore.goTo(index)
}
</script>

<template>
  <!-- Gradient Separator -->
  <div class="w-full absolute z-10">
    <NuxtImg
      :src="gradientImage"
      alt=""
      class="w-full h-[20rem]"
      loading="lazy"
      @error="(event) => applyFallback(event, gradientImage)"
    />
  </div>
  <section
    id="testimoni"
    class="relative py-16 lg:py-24 overflow-hidden"
    aria-labelledby="testimonials-title"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        :src="backgroundImage"
        alt="Latar belakang peternakan"
        class="w-full h-full object-cover"
        loading="lazy"
        @error="(event) => applyFallback(event, bgMitra)"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 container-main">
      <!-- Loading State -->
      <div v-if="!isApiData && isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>

      <!-- Testimonial Content -->
      <div v-reveal v-else-if="activeTestimonial" class="mx-auto reveal">
        <UiTestimonialsFrame
          class="rounded-[30px] px-6 py-8 md:px-10 md:py-12 w-full max-w-5xl min-h-[420px] md:min-h-[500px] mx-auto"
          :prev-label="t('testimonials.ariaPrev')"
          :next-label="t('testimonials.ariaNext')"
          @prev="goToPrev"
          @next="goToNext"
        >
          <!-- Content -->
          <div class="text-center space-y-4">
            <p class="text-lg font-semibold text-[#4c68c4]">
              {{ sectionLabel }}
            </p>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              {{ isApiData ? activeTestimonial.title : t(activeTestimonial.titleKey) }}
            </h3>
            <p class="text-gray-700 text-base md:text-lg leading-relaxed xs lg:max-w-[400px] mx-auto">
              {{ isApiData ? activeTestimonial.description : t(activeTestimonial.contentKey) }}
            </p>
            <div class="pt-2">
              <p class="font-semibold text-gray-900">{{ activeTestimonial.author }}</p>
              <p class="text-sm italic text-gray-600">
                {{ isApiData ? activeTestimonial.role : t(activeTestimonial.roleKey) }}
              </p>
            </div>
          </div>
        </UiTestimonialsFrame>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="index in totalDots"
            :key="index"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/70 focus:ring-offset-2',
              activeIndex === index - 1 ? 'bg-[#f6993c] w-8' : 'bg-white/70 hover:bg-white',
            ]"
            @click="setIndex(index - 1)"
            :aria-label="t('testimonials.ariaDot', { index })"
            :aria-current="activeIndex === index - 1 ? 'true' : undefined"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
