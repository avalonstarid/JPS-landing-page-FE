import { defineStore } from 'pinia'

/**
 * FaqItem interface representing a FAQ entry
 */
export interface FaqItem {
  id: number
  question: string
  answer: string
}

/**
 * Mock FAQ data - to be replaced with API calls later
 */
const mockFaqs: FaqItem[] = [
  {
    id: 1,
    question: 'Apa itu PT Janu Putra Sejahtera?',
    answer:
      'PT Janu Putra Sejahtera berkomitmen menjadi perusahaan ayam integrator terkemuka di Indonesia yang memberikan kontribusi positif bagi peternak ayam dan masyarakat. Kami mengelola operasi peternakan terintegrasi mulai dari pembibitan, pemeliharaan, hingga distribusi produk unggas berkualitas tinggi.',
  },
  {
    id: 2,
    question: 'Apa produk dari PT Janu Putra Sejahtera?',
    answer:
      'Kami menyediakan berbagai produk unggas berkualitas termasuk Day Old Chick (DOC) Parent Stock, DOC Final Stock, Ayam Hidup, Telur Komersial, dan Karkas Ayam. Semua produk diproduksi dengan standar kualitas tinggi dan praktik peternakan modern.',
  },
  {
    id: 3,
    question: 'Apa saja bisnis di PT Janu Putra Sejahtera?',
    answer:
      'PT Janu Putra Sejahtera memiliki beberapa lini bisnis utama meliputi: pembibitan ayam (breeding farm), peternakan komersial, pabrik pakan ternak, rumah potong ayam (RPA), dan distribusi produk unggas. Semua lini bisnis terintegrasi untuk menjamin kualitas dari hulu ke hilir.',
  },
  {
    id: 4,
    question: 'Mengapa memilih PT Janu Putra Sejahtera?',
    answer:
      'Kami adalah pilihan terpercaya karena: 1) Kualitas produk terjamin dengan standar internasional, 2) Pengalaman lebih dari 20 tahun di industri perunggasan, 3) Kemitraan yang menguntungkan bagi peternak, 4) Dukungan teknis profesional, 5) Komitmen terhadap kesejahteraan hewan dan lingkungan.',
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

