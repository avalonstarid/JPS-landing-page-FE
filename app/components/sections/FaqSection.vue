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
  <section id="faq" class="section-padding bg-white" aria-labelledby="faq-title" 
    style="background: #fdeee0;"
  >
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
      <div v-reveal v-else class="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left: FAQ Accordion -->
        <div class="bg-[#fdeee0] rounded-xl shadow-none border border-transparent">
          <div class="divide-y divide-gray-900">
            <FaqItem
              v-for="faq in faqs"
              :key="faq.id"
              :faq="faq"
              :is-open="openFaqId === faq.id"
              @toggle="toggleFaq"
            />
          </div>

          <!-- Contact CTA -->
          <div class="mt-4">
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
        

        <!-- Right: Image -->
        <div class="duration-300 hover:-translate-y-2 relative rounded-2xl overflow-hidden shadow-lg hidden lg:block">
          <img
            src="~/assets/images/pertanyaan.png"
            :alt="t('faq.imageAlt')"
            class="w-full h-full object-cover aspect-[4/3]"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
        </div>
      </div>

      
    </div>
  </section>
</template>

