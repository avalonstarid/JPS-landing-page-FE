export interface KarirJob {
  id: string
  title: string
  location: string
  locationType: 'yogyakarta' | 'purbalingga' | 'kebumen'
  jobType: 'marketing' | 'sales' | 'legal'
  jobTypeLabel: string
  postedAt: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

export const karirJobs: KarirJob[] = []

export const findKarirById = (id: string): KarirJob | undefined => {
  return karirJobs.find((job) => job.id === id)
}
