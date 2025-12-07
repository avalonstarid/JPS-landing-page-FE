<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTestimonialStore } from '~/stores/testimonial'
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
  <section
    id="testimoni"
    class="relative py-20 lg:py-28 overflow-hidden"
    aria-labelledby="testimonials-title"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=800&fit=crop"
        alt="Latar belakang peternakan"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-main">
      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>

      <!-- Testimonial Content -->
      <div v-else-if="currentTestimonial" class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
          <!-- Label -->
          <div class="inline-block bg-primary-500 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            {{ t('testimonials.label') }}
          </div>

          <!-- Testimonial Card with Animation -->
          <Transition
            mode="out-in"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-x-4"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-4"
          >
            <div :key="currentTestimonial.id">
              <!-- Title -->
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {{ t(currentTestimonial.titleKey) }}
              </h3>

              <!-- Content -->
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                "{{ t(currentTestimonial.contentKey) }}"
              </p>

              <!-- Author -->
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span class="text-primary-500 font-bold text-lg">
                    {{ currentTestimonial.author.charAt(0) }}
                  </span>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">{{ currentTestimonial.author }}</p>
                  <p class="text-sm text-gray-500">{{ t(currentTestimonial.roleKey) }}</p>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Navigation Arrows -->
          <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16 pointer-events-none">
            <button
              class="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              @click="goToPrev"
              :aria-label="t('testimonials.ariaPrev')"
            >
              <UiIconChevron direction="left" size="md" />
            </button>
            <button
              class="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              @click="goToNext"
              :aria-label="t('testimonials.ariaNext')"
            >
              <UiIconChevron direction="right" size="md" />
            </button>
          </div>

          <!-- Pagination Dots -->
          <div class="flex justify-center gap-2 mt-8">
            <button
              v-for="index in totalTestimonials"
              :key="index"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                currentIndex === index - 1 ? 'bg-primary-500 w-8' : 'bg-gray-300 hover:bg-gray-400',
              ]"
              @click="testimonialStore.goTo(index - 1)"
              :aria-label="t('testimonials.ariaDot', { index })"
              :aria-current="currentIndex === index - 1 ? 'true' : undefined"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

