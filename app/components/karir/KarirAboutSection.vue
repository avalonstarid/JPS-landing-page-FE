<script setup lang="ts">
import aboutImage from '~/assets/images/karir/karir.jpg'

const { t } = useI18n()
</script>

<template>
  <section class="py-16 lg:py-24 bg-[#fdeee0]" aria-labelledby="karir-about">
    <div class="container-main">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <!-- Image -->
        <div class="order-2 lg:order-1">
          <div class="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <img
              :src="aboutImage"
              alt="Tim PT Janu Putra Sejahtera"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 lg:order-2 space-y-6">
          <h2 id="karir-about" class="text-3xl md:text-4xl font-bold text-[#3d4f92]">
            {{ t('karirPage.about.title') }}
          </h2>
          <div class="space-y-4 text-[#4b4b4b] leading-relaxed">
            <p>{{ t('karirPage.about.description1') }}</p>
            <p>{{ t('karirPage.about.description2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

