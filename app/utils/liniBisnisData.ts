// Types for Lini Bisnis (Business Lines) data

export interface LiniBisnis {
  id: string
  slug: string
  titleKey: string
  description1Key: string
  description2Key: string
  buttonKey: string
}

// Business lines configuration - references i18n keys
export const liniBisnisList: LiniBisnis[] = [
  {
    id: 'pembibitan',
    slug: 'pembibitan',
    titleKey: 'liniBisnisPage.businesses.pembibitan.title',
    description1Key: 'liniBisnisPage.businesses.pembibitan.description1',
    description2Key: 'liniBisnisPage.businesses.pembibitan.description2',
    buttonKey: 'liniBisnisPage.businesses.pembibitan.button',
  },
  {
    id: 'broiler',
    slug: 'broiler',
    titleKey: 'liniBisnisPage.businesses.broiler.title',
    description1Key: 'liniBisnisPage.businesses.broiler.description1',
    description2Key: 'liniBisnisPage.businesses.broiler.description2',
    buttonKey: 'liniBisnisPage.businesses.broiler.button',
  },
  {
    id: 'petelur',
    slug: 'petelur',
    titleKey: 'liniBisnisPage.businesses.petelur.title',
    description1Key: 'liniBisnisPage.businesses.petelur.description1',
    description2Key: 'liniBisnisPage.businesses.petelur.description2',
    buttonKey: 'liniBisnisPage.businesses.petelur.button',
  },
  {
    id: 'penetasan',
    slug: 'penetasan',
    titleKey: 'liniBisnisPage.businesses.penetasan.title',
    description1Key: 'liniBisnisPage.businesses.penetasan.description1',
    description2Key: 'liniBisnisPage.businesses.penetasan.description2',
    buttonKey: 'liniBisnisPage.businesses.penetasan.button',
  },
  {
    id: 'rpa',
    slug: 'rpa',
    titleKey: 'liniBisnisPage.businesses.rpa.title',
    description1Key: 'liniBisnisPage.businesses.rpa.description1',
    description2Key: 'liniBisnisPage.businesses.rpa.description2',
    buttonKey: 'liniBisnisPage.businesses.penetasan.button',
  },
]

// Tab configuration - maps slug to i18n key
export const tabConfig = [
  { slug: 'pembibitan', labelKey: 'liniBisnisPage.tabs.pembibitan' },
  { slug: 'broiler', labelKey: 'liniBisnisPage.tabs.broiler' },
  { slug: 'petelur', labelKey: 'liniBisnisPage.tabs.petelur' },
  { slug: 'penetasan', labelKey: 'liniBisnisPage.tabs.penetasan' },
  { slug: 'rpa', labelKey: 'liniBisnisPage.tabs.rpa' },
]

// Helper function to find business line by slug
export function findLiniBisnisBySlug(slug: string): LiniBisnis | undefined {
  return liniBisnisList.find((item) => item.slug === slug)
}

// Get all valid slugs
export function getValidSlugs(): string[] {
  return liniBisnisList.map((item) => item.slug)
}

