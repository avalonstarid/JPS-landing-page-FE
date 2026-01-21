<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFaqStore } from '~/stores/faq'
const faqImage = '/images/beranda/faq.jpg'
const { t } = useI18n()
const { applyFallback } = useImageFallback()

interface FaqSectionData {
  title?: string
  featured?: string
  ctaLead?: string
  ctaText?: string
  ctaLink?: string
  items?: Array<{
    id: number
    question: string
    answer: string
  }>
}

const props = defineProps<{
  data?: FaqSectionData | null
}>()

const faqStore = useFaqStore()
const { faqs, isLoading } = storeToRefs(faqStore)

const openFaqId = ref<number | null>(null)

const toggleFaq = (id: number) => {
  openFaqId.value = openFaqId.value === id ? null : id
}

onMounted(async () => {
  if (!props.data?.items?.length) {
    await faqStore.fetchFaqs()
  }
})

const isApiData = computed(() => Array.isArray(props.data?.items) && props.data?.items.length > 0)

const displayFaqs = computed(() => {
  if (isApiData.value) {
    return props.data?.items || []
  }
  return faqs.value.map((faq) => ({
    id: faq.id,
    questionKey: faq.questionKey,
    answerKey: faq.answerKey,
  }))
})
</script>

<template>
  <section id="faq" class="section-padding bg-white" aria-labelledby="faq-title" 
    style="background: #fdeee0;"
  >
    <div class="container-main">
      <!-- Section Header -->
      <UiSectionHeader
        :title="props.data?.title || t('faq.title')"
        align="center"
      />

      <!-- Loading State -->
      <div v-if="!isApiData && isLoading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>

      <!-- FAQ Content Grid -->
      <div v-reveal v-else class="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left: FAQ Accordion -->
        <div class="bg-[#fdeee0] rounded-xl shadow-none border border-transparent">
          <div class="divide-y divide-gray-900">
            <FaqItem
              v-for="faq in displayFaqs"
              :key="faq.id"
              :faq="faq as any"
              :question="(faq as any).question"
              :answer="(faq as any).answer"
              :is-open="openFaqId === faq.id"
              @toggle="toggleFaq"
            />
          </div>

          <!-- Contact CTA -->
          <div class="mt-4">
            <p class="text-gray-600">
              {{ props.data?.ctaLead || t('faq.contactLead') }}
              <NuxtLink
                :to="props.data?.ctaLink || '/hubungi-kami'"
                class="text-primary-500 font-medium hover:text-primary-600 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              >
                {{ props.data?.ctaText || t('faq.contactLink') }}
              </NuxtLink>
            </p>
          </div>
        </div>
        

        <!-- Right: Image -->
        <div class="duration-300 hover:-translate-y-2 relative rounded-2xl overflow-hidden shadow-lg hidden lg:block">
          <NuxtImg
            :src="props.data?.featured || faqImage"
            :alt="t('faq.imageAlt')"
            class="w-full h-full object-cover aspect-[4/3]"
            loading="lazy"
            @error="(event) => applyFallback(event, faqImage)"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent"></div>
        </div>
      </div>

      
    </div>
  </section>
</template>
