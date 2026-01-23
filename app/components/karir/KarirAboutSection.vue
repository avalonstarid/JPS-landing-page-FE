<script setup lang="ts">
const aboutImage = '/images/karir/karir.jpg'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface AboutData {
  title?: string
  description1?: string
  description2?: string
  image?: string
}

const props = defineProps<{
  data?: AboutData
}>()

const aboutTitle = computed(() => props.data?.title || t('karirPage.about.title'))
const aboutDescription1 = computed(() => props.data?.description1 || t('karirPage.about.description1'))
const aboutDescription2 = computed(() => props.data?.description2 || t('karirPage.about.description2'))
const aboutBackground = computed(() => props.data?.image || aboutImage)
</script>

<template>
  <section class="py-16 lg:py-24 bg-[#fdeee0]" aria-labelledby="karir-about">
    <div class="container-main">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <!-- Image -->
        <div class="order-2 lg:order-1">
          <div class="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <NuxtImg
              :src="aboutBackground"
              alt="Tim PT Janu Putra Sejahtera"
              class="w-full h-auto object-cover"
              loading="lazy"
              @error="(event) => applyFallback(event, aboutImage)"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 lg:order-2 space-y-6">
          <h2 id="karir-about" class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
            {{ aboutTitle }}
          </h2>
          <div class="space-y-4 text-[#4b4b4b] leading-relaxed">
            <p>{{ aboutDescription1 }}</p>
            <p>{{ aboutDescription2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

