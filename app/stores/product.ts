import { defineStore } from 'pinia'

/**
 * Product interface representing a product item
 */
export interface Product {
  id: number
  name: string
  slug: string
  description: string
  imageUrl: string
  category: string
}

/**
 * Mock product data - to be replaced with API calls later
 */
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Day Old Chick (DOC) – Parent Stock',
    slug: 'doc-parent-stock',
    description:
      'Day Old Chick (DOC) – Parent Stock adalah anak ayam berusia satu hari dari parent stock yang merupakan indukan ayam untuk menghasilkan DOC Final Stock.',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop',
    category: 'DOC',
  },
  {
    id: 2,
    name: 'Day Old Chick (DOC) – Final Stock',
    slug: 'doc-final-stock',
    description:
      'Day Old Chick (DOC) – Final Stock adalah anak ayam berusia satu hari yang dihasilkan dari parent stock untuk dikirimkan kepada peternak mitra.',
    imageUrl: 'https://images.unsplash.com/photo-1569396116180-90a93b45e583?w=400&h=300&fit=crop',
    category: 'DOC',
  },
  {
    id: 3,
    name: 'Ayam Hidup',
    slug: 'ayam-hidup',
    description:
      'Ayam hidup berkualitas tinggi hasil pemeliharaan dengan standar modern yang mengutamakan kesehatan dan kualitas daging.',
    imageUrl: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&h=300&fit=crop',
    category: 'Ayam',
  },
  {
    id: 4,
    name: 'Telur Komersial',
    slug: 'telur-komersial',
    description:
      'Telur komersial menyediakan telur konsumsi berkualitas tinggi yang dihasilkan dari ayam layer modern, dan segar setiap hari.',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=300&fit=crop',
    category: 'Telur',
  },
  {
    id: 5,
    name: 'Karkas Ayam',
    slug: 'karkas-ayam',
    description:
      'Karkas ayam segar yang diproses dengan standar kebersihan tinggi, siap untuk diolah menjadi berbagai hidangan lezat.',
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop',
    category: 'Karkas',
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

