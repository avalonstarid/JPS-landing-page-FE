import { defineStore } from 'pinia'

/**
 * CompanyValue interface representing company values/features
 */
export interface CompanyValue {
  id: number
  title: string
  description: string
  icon: string // emoji or icon name
}

/**
 * Mock company values data - to be replaced with API calls later
 */
const mockValues: CompanyValue[] = [
  {
    id: 1,
    title: 'Kualitas',
    description:
      'Kami berkomitmen menyediakan produk peternakan berkualitas tinggi dengan standar kesehatan dan kebersihan terbaik.',
    icon: '⭐',
  },
  {
    id: 2,
    title: 'Profesionalisme',
    description:
      'Tim profesional kami bekerja dengan dedikasi tinggi untuk memastikan setiap produk memenuhi standar kualitas tertinggi.',
    icon: '👔',
  },
  {
    id: 3,
    title: 'Inovasi',
    description:
      'Kami terus berinovasi dalam teknologi peternakan untuk menghasilkan produk yang lebih baik dan efisien.',
    icon: '💡',
  },
  {
    id: 4,
    title: 'Lingkungan',
    description:
      'Praktik peternakan kami ramah lingkungan dengan pengelolaan limbah yang bertanggung jawab.',
    icon: '🌱',
  },
  {
    id: 5,
    title: 'Kesejahteraan',
    description:
      'Kami menjunjung tinggi kesejahteraan hewan dan karyawan dalam setiap aspek operasional perusahaan.',
    icon: '❤️',
  },
  {
    id: 6,
    title: 'Sosial',
    description:
      'Kami aktif berkontribusi pada pembangunan ekonomi lokal dan kesejahteraan masyarakat sekitar.',
    icon: '🤝',
  },
]

export const useValueStore = defineStore('value', {
  state: () => ({
    values: [] as CompanyValue[],
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    /**
     * Get all company values
     */
    allValues: (state): CompanyValue[] => state.values,

    /**
     * Get featured values (first 6 for 2x3 grid)
     */
    featuredValues: (state): CompanyValue[] => state.values.slice(0, 6),
  },

  actions: {
    /**
     * Fetch all company values from API
     * Currently uses mock data, ready for API integration
     */
    async fetchValues(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // TODO: Uncomment when Laravel API is ready
        // const api = useApi()
        // const { data } = await api.get<CompanyValue[]>('/values')
        // this.values = data

        // Using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 200)) // Simulate API delay
        this.values = mockValues
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch values'
      } finally {
        this.isLoading = false
      }
    },
  },
})

