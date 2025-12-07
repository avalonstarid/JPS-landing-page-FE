import { defineStore } from 'pinia'

/**
 * Testimonial interface representing a customer testimonial
 */
export interface Testimonial {
  id: number
  title: string
  content: string
  author: string
  role: string
}

/**
 * Mock testimonial data - to be replaced with API calls later
 */
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Solusi Ayam Broiler Terpercaya',
    content:
      'Saya memiliki mitra ayam broiler terbesar di Indonesia dan bergandengan tangan dengan JPS. Kami percaya bahwa produk yang dihasilkan sangat berkualitas. Para konsumen pun sudah mengenal dan percaya dengan produk dari Janu Putra Sejahtera.',
    author: 'Irvan Agustian',
    role: 'Direktur Ayam Broiler Sejahtera',
  },
  {
    id: 2,
    title: 'Kemitraan yang Menguntungkan',
    content:
      'Sudah 5 tahun kami bermitra dengan PT Janu Putra Sejahtera. Kualitas DOC yang konsisten dan dukungan teknis yang excellent membuat bisnis peternakan kami terus berkembang.',
    author: 'Budi Santoso',
    role: 'Pemilik CV Berkah Farm',
  },
  {
    id: 3,
    title: 'Standar Kualitas Terbaik',
    content:
      'Produk telur komersial dari JPS selalu memenuhi standar kualitas tertinggi. Konsumen kami sangat puas dengan kesegaran dan kualitas telur yang kami distribusikan.',
    author: 'Sri Rahayu',
    role: 'Manager Distributor Telur Nusantara',
  },
]

export const useTestimonialStore = defineStore('testimonial', {
  state: () => ({
    testimonials: [] as Testimonial[],
    currentIndex: 0,
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    /**
     * Get all testimonials
     */
    allTestimonials: (state): Testimonial[] => state.testimonials,

    /**
     * Get the current testimonial based on currentIndex
     */
    currentTestimonial: (state): Testimonial | null =>
      state.testimonials.length > 0 ? state.testimonials[state.currentIndex] : null,

    /**
     * Get total number of testimonials
     */
    totalTestimonials: (state): number => state.testimonials.length,

    /**
     * Check if there is a next testimonial
     */
    hasNext: (state): boolean => state.currentIndex < state.testimonials.length - 1,

    /**
     * Check if there is a previous testimonial
     */
    hasPrev: (state): boolean => state.currentIndex > 0,
  },

  actions: {
    /**
     * Fetch all testimonials from API
     * Currently uses mock data, ready for API integration
     */
    async fetchTestimonials(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // TODO: Uncomment when Laravel API is ready
        // const api = useApi()
        // const { data } = await api.get<Testimonial[]>('/testimonials')
        // this.testimonials = data

        // Using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 200)) // Simulate API delay
        this.testimonials = mockTestimonials
        this.currentIndex = 0
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch testimonials'
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Navigate to the next testimonial
     */
    next(): void {
      if (this.currentIndex < this.testimonials.length - 1) {
        this.currentIndex++
      } else {
        // Loop back to the beginning
        this.currentIndex = 0
      }
    },

    /**
     * Navigate to the previous testimonial
     */
    prev(): void {
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        // Loop to the end
        this.currentIndex = this.testimonials.length - 1
      }
    },

    /**
     * Go to a specific testimonial by index
     */
    goTo(index: number): void {
      if (index >= 0 && index < this.testimonials.length) {
        this.currentIndex = index
      }
    },
  },
})

