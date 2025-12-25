<script setup lang="ts">
import heroImage from '~/components/tinjauan/tinjauan-section.png'
import sdgImage from '~/components/tinjauan/SDG.png'

useHead({
  title: 'Keberlanjutan - Tinjauan',
})
</script>

<template>
  <div class="bg-[#FDEEE0]">
    <section class="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden" aria-label="Keberlanjutan">
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Keberlanjutan" class="h-full w-full object-cover" loading="eager" />
        <div class="absolute inset-0 bg-black/40" />
      </div>
      <div class="relative z-10 container-main py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white">Keberlanjutan</h1>
      </div>
    </section>

    <section class="container-main py-12 md:py-16">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1f2a5f] text-center">Tinjauan</h2>

      <div class="mt-10 relative flex flex-col items-center gap-8 lg:min-h-[560px]">
        <div class="inline-block rounded-2xl bg-white p-4 shadow-md self-start lg:absolute left-0 lg:top-2 w-[230px]">
          <h3 class="text-lg font-semibold text-[#f6993c]">Lorem Ipsum</h3>
          <p class="mt-3 text-sm text-[#4b5563] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
            placerat.
          </p>
        </div>

        <div class="flex justify-center w-full">
          <img
            :src="sdgImage"
            alt="Sustainable Development Goals"
            class="w-full md:w-[624px]"
          />
        </div>

        <div class="inline-block rounded-2xl bg-white p-4 shadow-md self-start lg:absolute right-0 lg:bottom-2 w-[230px]">
          <h3 class="text-lg font-semibold text-[#f6993c]">Lorem Ipsum</h3>
          <p class="mt-3 text-sm text-[#4b5563] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
            placerat.
          </p>
        </div>
      </div>

      <div class="mt-12 space-y-6 text-center text-sm md:text-base text-[#111827] max-w-3xl mx-auto leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
          vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        </p>
      </div>
    </section>
  </div>
</template>
