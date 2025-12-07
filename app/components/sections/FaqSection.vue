<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFaqStore } from '~/stores/faq'
const { t } = useI18n()

const faqStore = useFaqStore()
const { faqs, isLoading } = storeToRefs(faqStore)

const openFaqId = ref<number | null>(null)

const toggleFaq = (id: number) => {
  openFaqId.value = openFaqId.value === id ? null : id
}

onMounted(async () => {
  await faqStore.fetchFaqs()
})
</script>

<template>
  <section id="faq" class="section-padding bg-white" aria-labelledby="faq-title">
    <div class="container-main">
      <!-- Section Header -->
      <UiSectionHeader
        :title="t('faq.title')"
        align="center"
      />

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- FAQ Content Grid -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left: FAQ Accordion -->
        <div class="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 shadow-sm">
          <FaqItem
            v-for="faq in faqs"
            :key="faq.id"
            :faq="faq"
            :is-open="openFaqId === faq.id"
            class="px-6"
            @toggle="toggleFaq"
          />
        </div>

        <!-- Right: Image -->
        <div class="relative rounded-2xl overflow-hidden shadow-lg hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=600&fit=crop"
            :alt="t('faq.imageAlt')"
            class="w-full h-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600">
          {{ t('faq.contactLead') }}
          <a
            href="#kontak"
            class="text-primary-500 font-medium hover:text-primary-600 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
          >
            {{ t('faq.contactLink') }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

