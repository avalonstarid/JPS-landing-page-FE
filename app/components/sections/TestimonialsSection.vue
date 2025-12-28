<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestimonialStore } from '~/stores/testimonial'
import bgMitra from '~/assets/images/beranda/testimoni.jpg'
const { t } = useI18n()

const testimonialStore = useTestimonialStore()
const { currentTestimonial, currentIndex, totalTestimonials, isLoading } = storeToRefs(testimonialStore)

onMounted(async () => {
  await testimonialStore.fetchTestimonials()
})

const goToPrev = () => {
  testimonialStore.prev()
}

const goToNext = () => {
  testimonialStore.next()
}
</script>

<template>
  <!-- Gradient Separator -->
  <div class="w-full absolute z-10">
    <img src="~/assets/images/gradient.png" alt="" class="w-full h-[20rem]" loading="lazy" />
  </div>
  <section
    id="testimoni"
    class="relative py-16 lg:py-24 overflow-hidden"
    aria-labelledby="testimonials-title"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="bgMitra"
        alt="Latar belakang peternakan"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 container-main">
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>

      <!-- Testimonial Content -->
      <div v-reveal v-else-if="currentTestimonial" class="mx-auto reveal">
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
              {{ t('testimonials.label') }}
            </p>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
              {{ t(currentTestimonial.titleKey) }}
            </h3>
            <p class="text-gray-700 text-base md:text-lg leading-relaxed xs lg:max-w-[400px] mx-auto">
              {{ t(currentTestimonial.contentKey) }}
            </p>
            <div class="pt-2">
              <p class="font-semibold text-gray-900">{{ currentTestimonial.author }}</p>
              <p class="text-sm italic text-gray-600">{{ t(currentTestimonial.roleKey) }}</p>
            </div>
          </div>
        </UiTestimonialsFrame>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="index in totalTestimonials"
            :key="index"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/70 focus:ring-offset-2',
              currentIndex === index - 1 ? 'bg-[#f6993c] w-8' : 'bg-white/70 hover:bg-white',
            ]"
            @click="testimonialStore.goTo(index - 1)"
            :aria-label="t('testimonials.ariaDot', { index })"
            :aria-current="currentIndex === index - 1 ? 'true' : undefined"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
