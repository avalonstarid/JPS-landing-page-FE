import { defineStore } from 'pinia'

/**
 * Product interface representing a product item
 */
export interface Product {
  id: number
  nameKey: string
  slug: string
  descriptionKey: string
  imageUrl: string
  categoryKey: string
}

/**
 * Mock product data - to be replaced with API calls later
 */
const mockProducts: Product[] = [
  {
    id: 1,
    nameKey: 'products.items.docParent.name',
    slug: 'doc-parent-stock',
    descriptionKey: 'products.items.docParent.description',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop',
    categoryKey: 'products.categories.doc',
  },
  {
    id: 2,
    nameKey: 'products.items.docFinal.name',
    slug: 'doc-final-stock',
    descriptionKey: 'products.items.docFinal.description',
    imageUrl: 'https://images.unsplash.com/photo-1569396116180-90a93b45e583?w=400&h=300&fit=crop',
    categoryKey: 'products.categories.doc',
  },
  {
    id: 3,
    nameKey: 'products.items.liveChicken.name',
    slug: 'ayam-hidup',
    descriptionKey: 'products.items.liveChicken.description',
    imageUrl: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&h=300&fit=crop',
    categoryKey: 'products.categories.chicken',
  },
  {
    id: 4,
    nameKey: 'products.items.commercialEgg.name',
    slug: 'telur-komersial',
    descriptionKey: 'products.items.commercialEgg.description',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=300&fit=crop',
    categoryKey: 'products.categories.egg',
  },
  {
    id: 5,
    nameKey: 'products.items.chickenCarcass.name',
    slug: 'karkas-ayam',
    descriptionKey: 'products.items.chickenCarcass.description',
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop',
    categoryKey: 'products.categories.carcass',
  },
]

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    /**
     * Get all products
     */
    allProducts: (state): Product[] => state.products,

    /**
     * Get featured/highlighted products (first 5)
     */
    featuredProducts: (state): Product[] => state.products.slice(0, 5),

    /**
     * Get products by category
     */
    productsByCategory:
      (state) =>
      (category: string): Product[] =>
        state.products.filter((product) => product.category === category),

    /**
     * Get a single product by slug
     */
    getProductBySlug:
      (state) =>
      (slug: string): Product | undefined =>
        state.products.find((product) => product.slug === slug),
  },

  actions: {
    /**
     * Fetch all products from API
     * Currently uses mock data, ready for API integration
     */
    async fetchProducts(): Promise<void> {
      this.isLoading = true
      this.error = null

      try {
        // TODO: Uncomment when Laravel API is ready
        // const api = useApi()
        // const { data } = await api.get<Product[]>('/products')
        // this.products = data

        // Using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 300)) // Simulate API delay
        this.products = mockProducts
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch products'
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Get a single product by ID
     */
    async fetchProductById(id: number): Promise<Product | null> {
      // TODO: Uncomment when Laravel API is ready
      // const api = useApi()
      // const { data } = await api.get<Product>(`/products/${id}`)
      // return data

      return this.products.find((product) => product.id === id) || null
    },
  },
})

