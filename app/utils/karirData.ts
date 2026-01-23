export interface KarirJob {
  id: string
  slug?: string
  categoryId?: string
  title: string
  location: string
  locationType: 'yogyakarta' | 'purbalingga' | 'kebumen' | string
  jobType: 'marketing' | 'sales' | 'legal' | string
  jobTypeLabel: string
  postedAt: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}
