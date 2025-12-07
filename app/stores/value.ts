import { defineStore } from 'pinia'
import iconKualitas from '~/assets/images/jps-standar-section/kualitas.png'
import iconProfesionalisme from '~/assets/images/jps-standar-section/profesionalisme.png'
import iconInovasi from '~/assets/images/jps-standar-section/inovasi.png'
import iconLingkungan from '~/assets/images/jps-standar-section/lingkungan.png'
import iconKesejahteraan from '~/assets/images/jps-standar-section/kesejahteraan.png'
import iconSosial from '~/assets/images/jps-standar-section/sosial.png'

/**
 * CompanyValue interface representing company values/features
 */
export interface CompanyValue {
  id: number
  titleKey: string
  descriptionKey: string
  icon: string // asset path
}

/**
 * Mock company values data - to be replaced with API calls later
 */
const mockValues: CompanyValue[] = [
  {
    id: 1,
    titleKey: 'values.items.quality.title',
    descriptionKey: 'values.items.quality.description',
    icon: iconKualitas,
  },
  {
    id: 2,
    titleKey: 'values.items.professionalism.title',
    descriptionKey: 'values.items.professionalism.description',
    icon: iconProfesionalisme,
  },
  {
    id: 3,
    titleKey: 'values.items.innovation.title',
    descriptionKey: 'values.items.innovation.description',
    icon: iconInovasi,
  },
  {
    id: 4,
    titleKey: 'values.items.environment.title',
    descriptionKey: 'values.items.environment.description',
    icon: iconLingkungan,
  },
  {
    id: 5,
    titleKey: 'values.items.welfare.title',
    descriptionKey: 'values.items.welfare.description',
    icon: iconKesejahteraan,
  },
  {
    id: 6,
    titleKey: 'values.items.social.title',
    descriptionKey: 'values.items.social.description',
    icon: iconSosial,
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

