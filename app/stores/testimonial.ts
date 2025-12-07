import { defineStore } from 'pinia'

/**
 * Testimonial interface representing a customer testimonial
 */
export interface Testimonial {
  id: number
  titleKey: string
  contentKey: string
  author: string
  roleKey: string
}

/**
 * Mock testimonial data - to be replaced with API calls later
 */
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    titleKey: 'testimonials.items.trustedBroiler.title',
    contentKey: 'testimonials.items.trustedBroiler.content',
    author: 'Irvan Agustian',
    roleKey: 'testimonials.items.trustedBroiler.role',
  },
  {
    id: 2,
    titleKey: 'testimonials.items.profitablePartnership.title',
    contentKey: 'testimonials.items.profitablePartnership.content',
    author: 'Budi Santoso',
    roleKey: 'testimonials.items.profitablePartnership.role',
  },
  {
    id: 3,
    titleKey: 'testimonials.items.bestQuality.title',
    contentKey: 'testimonials.items.bestQuality.content',
    author: 'Sri Rahayu',
    roleKey: 'testimonials.items.bestQuality.role',
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

