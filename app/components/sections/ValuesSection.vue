<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useValueStore } from '~/stores/value'

const valueStore = useValueStore()
const { values, isLoading } = storeToRefs(valueStore)

onMounted(async () => {
  await valueStore.fetchValues()
})
</script>

<template>
  <section id="nilai-kami" class="section-padding bg-gradient-to-b from-cream-100 to-white" aria-labelledby="values-title">
    <div class="container-main">
      <!-- Section Header -->
      <UiSectionHeader
        title="Nilai Kami"
        subtitle="Mengapa harus memilih produk kami?"
        align="center"
      />

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- Content Grid -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Image -->
        <div class="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop"
            alt="Interior peternakan ayam modern PT Janu Putra Sejahtera"
            class="w-full h-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
        </div>

        <!-- Right: Value Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2">
          <ValuesValueCard v-for="value in values" :key="value.id" :value="value" />
        </div>
      </div>
    </div>
  </section>
</template>

