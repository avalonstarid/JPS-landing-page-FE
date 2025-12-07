import { defineStore } from 'pinia'

/**
 * FaqItem interface representing a FAQ entry
 */
export interface FaqItem {
  id: number
  questionKey: string
  answerKey: string
}

/**
 * Mock FAQ data - to be replaced with API calls later
 */
const mockFaqs: FaqItem[] = [
  {
    id: 1,
    questionKey: 'faq.items.about.question',
    answerKey: 'faq.items.about.answer',
  },
  {
    id: 2,
    questionKey: 'faq.items.products.question',
    answerKey: 'faq.items.products.answer',
  },
  {
    id: 3,
    questionKey: 'faq.items.business.question',
    answerKey: 'faq.items.business.answer',
  },
  {
    id: 4,
    questionKey: 'faq.items.why.question',
    answerKey: 'faq.items.why.answer',
  },
]

export const useFaqStore = defineStore('faq', {
  state: () => ({
    faqs: [] as FaqItem[],
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    /**
     * Get all FAQs
     */
    allFaqs: (state): FaqItem[] => state.faqs,

    /**
     * Get FAQ count
     */
    faqCount: (state): number => state.faqs.length,
  },

  actions: {
    /**
     * Fetch all FAQs from API
     * Currently uses mock data, ready for API integration
     */
    async fetchFaqs(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // TODO: Uncomment when Laravel API is ready
        // const api = useApi()
        // const { data } = await api.get<FaqItem[]>('/faqs')
        // this.faqs = data

        // Using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 200)) // Simulate API delay
        this.faqs = mockFaqs
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch FAQs'
      } finally {
        this.isLoading = false
      }
    },
  },
})

