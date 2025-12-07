<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useValueStore } from '~/stores/value'
const { t } = useI18n()

const valueStore = useValueStore()
const { values, isLoading } = storeToRefs(valueStore)

onMounted(async () => {
  await valueStore.fetchValues()
})
</script>

<template>
  <section
    id="nilai-kami"
    class="section-padding"
    aria-labelledby="values-title"
    style="background: #fdeee0;"
  >
    <div class="container-main">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-[#4c68c4]">
          {{ t('values.title') }}
        </h2>
        <p class="text-xl text-[#1c1c1c] mt-3">
          {{ t('values.subtitle') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Content Grid -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-[.75fr_1.1fr] gap-6 lg:gap-8 items-center">
        <!-- Left: Image -->
        <div class="order-2 lg:order-1 h-full">
          <div class="rounded-[28px] overflow-hidden shadow-lg h-full">
            <img
              src="~/assets/images/standar-main.png"
              :alt="t('values.imageAlt')"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right: Value Cards Grid -->
        <div class="order-1 lg:order-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <ValuesValueCard v-for="value in values" :key="value.id" :value="value" />
        </div>
      </div>
    </div>
  </section>
</template>
