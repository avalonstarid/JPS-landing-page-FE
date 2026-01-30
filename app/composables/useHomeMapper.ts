type LocaleText = Record<string, string> | string | undefined
type LocaleArray = Record<string, string[]> | string[] | undefined

type HomeApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
    rotation_words?: LocaleArray
    cta?: {
      link?: string
      text?: LocaleText
    }
  }
  product?: {
    title?: LocaleText
    subtitle?: LocaleText
    cta?: {
      link?: string
      text?: LocaleText
    }
    data?: Array<{
      featured_thumb?: string
      title?: LocaleText
      short_desc?: LocaleText
    }>
  }
  standard?: {
    title?: LocaleText
    subtitle?: LocaleText
    featured?: string
    data?: Array<{
      title?: LocaleText
      desc?: LocaleText
      icon?: string
    }>
  }
  testimonial?: {
    title?: LocaleText
    background?: string
    data?: Array<{
      client_name?: string
      client_role?: string
      title?: LocaleText
      desc?: LocaleText
    }>
  }
  faq?: {
    title?: LocaleText
    featured?: string
    cta?: {
      lead?: LocaleText
      link?: string
      text?: LocaleText
    }
    data?: Array<{
      question?: LocaleText
      answer?: LocaleText
    }>
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type TentangApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
    stat?: Array<{
      icon?: string
      icon_custom?: string | boolean
      label?: LocaleText
      value?: string
    }>
  }
  video?: {
    link?: string
    title?: LocaleText
  }
  visi_misi?: {
    title?: LocaleText
    subtitle?: LocaleText
    featured?: string
    data?: Array<{
      desc?: LocaleText
      icon?: string
      icon_custom?: boolean
    }>
  }
  history_timeline?: {
    title?: LocaleText
    data?: Array<{
      year?: number
      icon?: string
      icon_custom?: boolean
      title?: LocaleText
      desc?: LocaleText
    }>
  }
  location?: {
    title?: LocaleText
    data?: Array<{
      featured_thumb?: string
      title?: LocaleText
      phone?: string
      whatsapp?: string
      locations?: Array<{
        address?: string
        lat?: string
        lng?: string
      }>
    }>
  }
  organization?: {
    featured?: string
    title?: LocaleText
  }
  dewan?: {
    title?: LocaleText
    data?: Array<{
      name?: LocaleText
      people?: Array<{
        avatar?: string
        name?: string
        jabatan?: LocaleText
      }>
    }>
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type LiniBisnisApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  business_line?: {
    title?: LocaleText
    data?: {
      title?: LocaleText
      desc?: LocaleText
      images?: Array<{
        original_url?: string
        thumb_url?: string
      }>
    }
  }
  cta?: {
    text?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type LiniBisnisListApiData = {
  data?: Array<{
    featured_thumb?: string
    slug?: string
    title?: LocaleText
  }>
}

type ProdukApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  product?: {
    data?: Array<{
      title?: LocaleText
      full_desc?: LocaleText
      images?: Array<{
        original_url?: string
        thumb_url?: string
      }>
    }>
  }
  commercial?: {
    title?: LocaleText
    stock?: {
      title?: LocaleText
      last_update?: LocaleText
      products?: Array<{
        title?: LocaleText
        stat?: string
      }>
    }
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type HubungiKamiApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  title?: LocaleText
  map?: {
    address?: string
    link?: string
  }
  contact?: {
    title?: LocaleText
    data?: Array<{
      key?: string
      icon?: string
      icon_custom?: boolean
      link?: string
      value?: string
    }>
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type KarirApiData = {
  categories?: {
    data?: Array<{
      id?: string
      jobs_count?: number
      name?: LocaleText
    }>
  }
  header?: {
    title?: LocaleText
    desc?: LocaleText
  }
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  about?: {
    title?: LocaleText
    description_1?: LocaleText
    description_2?: LocaleText
    desc_1?: LocaleText
    desc_2?: LocaleText
    image?: string
    featured?: string
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type KarirListApiData = {
  data?: Array<Record<string, unknown>>
  list?: {
    data?: Array<Record<string, unknown>>
  }
  jobs?: Array<Record<string, unknown>>
}

type KarirCategoryApiData = {
  data?: Array<{
    id?: string
    name?: LocaleText
  }>
}

type KarirDetailApiData = {
  id?: string
  slug?: string
  title?: LocaleText
  name?: LocaleText
  desc?: LocaleText
  desc_short?: LocaleText
  description?: LocaleText
  content?: LocaleText
  location?: LocaleText
  address?: LocaleText
  category?: {
    id?: string
    name?: LocaleText
  }
  published_at?: string
  created_at?: string
  requirements?: LocaleArray | string
  requirement?: LocaleArray | string
  responsibilities?: LocaleArray | string
  tasks?: LocaleArray | string
  benefits?: LocaleArray | string
  benefit?: LocaleArray | string
}

type FooterApiData = {
  company?: {
    company_address?: string
    company_desc?: string
    company_name?: string
    company_phone?: string
    company_social?: Array<{
      icon?: string
      icon_custom?: boolean
      key?: string
      link?: string
      value?: string
    }>
  }
  visitor?: {
    total?: number
    today?: number
    month?: number
    year?: number
  }
}

type InvestorListApiData = {
  data?: Array<Record<string, unknown>>
}

type InvestorFinanceItem = {
  penjualan?: number
  laba_bersih?: number
  liabilitas?: number
  ekuitas?: number
  arus_kas_bersih?: number
  tahun?: number
  document?: {
    id?: number
    original_url?: string
  }
  featured?: {
    original_url?: string
    thumb_url?: string
  }
  title?: LocaleText
  name?: LocaleText
}

type KeberlanjutanPendekatanApiData = {
  detail?: {
    title?: LocaleText
  }
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  pendekatan_kinerja?: Array<{
    title?: LocaleText
    content?: LocaleText
    featured?: {
      original_url?: string
      thumb_url?: string
    }
    slug?: string
  }>
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type KeberlanjutanTinjauanApiData = {
  detail?: {
    title?: LocaleText
  }
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  tinjauan?: {
    title?: LocaleText
    content?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type BeritaPageApiData = {
  featured?: {
    data?: Array<Record<string, unknown>>
  }
  popular?: {
    title?: LocaleText
    subtitle?: LocaleText
    data?: Array<Record<string, unknown>>
  }
  news?: {
    title?: LocaleText
    subtitle?: LocaleText
    data?: Array<Record<string, unknown>>
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type BeritaListApiData = {
  data?: Array<Record<string, unknown>>
}

type BeritaDetailApiData = {
  post?: {
    author?: {
      name?: string
    }
    content?: LocaleText
    featured?: {
      original_url?: string
      thumb_url?: string
    }
    published_at?: string
    slug?: string
    title?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    author?: string
    image?: string
    url?: string
    published_time?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type PengumumanPageApiData = {
  hero?: {
    background?: string
    title?: LocaleText
    subtitle?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type PengumumanListApiData = {
  data?: Array<Record<string, unknown>>
}

type PengumumanDetailApiData = {
  post?: {
    author?: {
      name?: string
    }
    content?: LocaleText
    featured?: {
      original_url?: string
      thumb_url?: string
    }
    published_at?: string
    slug?: string
    title?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    author?: string
    image?: string
    url?: string
    published_time?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type BlogPageApiData = {
  featured?: {
    data?: Array<Record<string, unknown>>
  }
  popular?: {
    title?: LocaleText
    subtitle?: LocaleText
    data?: Array<Record<string, unknown>>
  }
  news?: {
    title?: LocaleText
    subtitle?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    url?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

type BlogListApiData = {
  data?: Array<Record<string, unknown>>
}

type BlogDetailApiData = {
  post?: {
    author?: {
      name?: string
    }
    content?: LocaleText
    featured?: {
      original_url?: string
      thumb_url?: string
    }
    published_at?: string
    slug?: string
    title?: LocaleText
  }
  seo?: {
    title?: string
    description?: string
    author?: string
    image?: string
    url?: string
    published_time?: string
    type?: string
    site_name?: string
    locale?: string
    robots?: string
    canonical_url?: string
  }
}

const iconMap: Record<string, string> = {
  kualitas: '/images/jps-standar-section/kualitas.png',
  profesionalisme: '/images/jps-standar-section/profesionalisme.png',
  innovation: '/images/jps-standar-section/inovasi.png',
  lingkungan: '/images/jps-standar-section/lingkungan.png',
  kesejahteraan: '/images/jps-standar-section/kesejahteraan.png',
  sosial: '/images/jps-standar-section/sosial.png',
}

export const useHomeMapper = () => {
  const { locale } = useI18n()
  const { resolveLocaleText } = useLocaleText()

  const resolveLocaleArray = (value?: LocaleArray) => {
    if (!value) return []
    if (Array.isArray(value)) return value
    return value[locale.value] || value.id || value.en || []
  }

  const normalizeStringList = (value?: unknown) => {
    if (!value) return []
    if (Array.isArray(value)) {
      return value.map((item) => String(item)).filter((item) => item.trim().length > 0)
    }
    if (typeof value === 'string') {
      return value
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
    }
    const localized = resolveLocaleArray(value as LocaleArray)
    if (Array.isArray(localized)) {
      return localized.map((item) => String(item)).filter((item) => item.trim().length > 0)
    }
    return []
  }

  const normalizeSlug = (value?: string) => {
    if (!value) return ''
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const stripHtml = (value?: string) => {
    if (!value) return ''
    return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  }

  const formatDateLabel = (value?: string) => {
    if (!value) return ''
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return ''
    const localeCode = locale.value === 'en' ? 'en-US' : 'id-ID'
    return parsed.toLocaleDateString(localeCode, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  const normalizeLocationType = (value?: string) => {
    const raw = (value || '').toLowerCase()
    if (raw.includes('yogya') || raw.includes('jogja')) return 'yogyakarta'
    if (raw.includes('purbalingga')) return 'purbalingga'
    if (raw.includes('kebumen')) return 'kebumen'
    return normalizeSlug(raw)
  }

  const normalizeJobType = (value?: string) => {
    const raw = (value || '').toLowerCase()
    if (raw.includes('marketing')) return 'marketing'
    if (raw.includes('sales') || raw.includes('penjualan')) return 'sales'
    if (raw.includes('legal')) return 'legal'
    return normalizeSlug(raw)
  }

  const mapHomeData = (raw?: HomeApiData | null) => {
    const hero = raw?.hero
    const product = raw?.product
    const standard = raw?.standard
    const testimonial = raw?.testimonial
    const faq = raw?.faq

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
        rotationWords: resolveLocaleArray(hero?.rotation_words),
        ctaText: resolveLocaleText(hero?.cta?.text),
        ctaLink: hero?.cta?.link || '',
      },
      product: {
        title: resolveLocaleText(product?.title),
        subtitle: resolveLocaleText(product?.subtitle),
        ctaText: resolveLocaleText(product?.cta?.text),
        ctaLink: product?.cta?.link || '',
        items: (product?.data || []).map((item, index) => ({
          id: index,
          title: resolveLocaleText(item.title),
          description: resolveLocaleText(item.short_desc),
          image: item.featured_thumb || '',
        })),
      },
      standard: {
        title: resolveLocaleText(standard?.title),
        subtitle: resolveLocaleText(standard?.subtitle),
        featured: standard?.featured || '',
        items: (standard?.data || []).map((item, index) => ({
          id: index,
          title: resolveLocaleText(item.title),
          description: resolveLocaleText(item.desc),
          icon: item.icon ? item.icon || '' : '',
          iconCustom: Boolean(item.icon_custom),
        })),
      },
      testimonial: {
        title: resolveLocaleText(testimonial?.title),
        background: testimonial?.background || '',
        items: (testimonial?.data || []).map((item, index) => ({
          id: index,
          title: resolveLocaleText(item.title),
          description: resolveLocaleText(item.desc),
          author: item.client_name || '',
          role: item.client_role || '',
        })),
      },
      faq: {
        title: resolveLocaleText(faq?.title),
        featured: faq?.featured || '',
        ctaLead: resolveLocaleText(faq?.cta?.lead),
        ctaText: resolveLocaleText(faq?.cta?.text),
        ctaLink: faq?.cta?.link || '',
        items: (faq?.data || []).map((item, index) => ({
          id: index,
          question: resolveLocaleText(item.question),
          answer: resolveLocaleText(item.answer),
        })),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapTentangData = (raw?: TentangApiData | null) => {
    const hero = raw?.hero
    const video = raw?.video
    const visiMisi = raw?.visi_misi
    const history = raw?.history_timeline
    const location = raw?.location
    const organization = raw?.organization
    const dewan = raw?.dewan

    const mapsHref = (lat?: string, lng?: string, address?: string) => {
      const hasCoords = Boolean(lat && lng)
      if (hasCoords) {
        return `https://www.google.com/maps?q=${lat},${lng}`
      }
      const safeAddress = (address || '').trim()
      if (!safeAddress) return ''
      return `https://www.google.com/maps?q=${encodeURIComponent(safeAddress)}`
    }

    const visiMisiIconKeys = ['product', 'welfare', 'efficiency', 'environment', 'social', 'profit']

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
        stats: (hero?.stat || []).map((item, index) => ({
          id: index,
          icon: item.icon || '',
          label: resolveLocaleText(item.label),
          value: item.value || '',
        })),
      },
      video: {
        title: resolveLocaleText(video?.title),
        link: video?.link || '',
      },
      visiMisi: {
        title: resolveLocaleText(visiMisi?.title),
        subtitle: resolveLocaleText(visiMisi?.subtitle),
        featured: visiMisi?.featured || '',
        items: (visiMisi?.data || []).map((item, index) => ({
          id: index,
          description: resolveLocaleText(item.desc),
          icon: visiMisiIconKeys[index] || 'product',
        })),
      },
        history: {
          title: resolveLocaleText(history?.title),
          items: (history?.data || []).map((item, index) => ({
            id: index,
            year: item.year ? String(item.year) : '',
            icon: item.icon || '',
            iconCustom: Boolean(item.icon_custom),
            shortDesc: resolveLocaleText(item.title),
            detailTitle: resolveLocaleText(item.title),
            detailDesc: resolveLocaleText(item.desc),
          })),
        },
      location: {
        title: resolveLocaleText(location?.title),
        items: (location?.data || []).map((item, index) => ({
          id: index,
          key: `location-${index}`,
          image: item.featured_thumb || '',
          title: resolveLocaleText(item.title),
          infoText: '',
          phone: item.phone || item.whatsapp || '',
          locations: (item.locations || [])
            .map((loc) => ({
              label: loc.address || '',
              href: mapsHref(loc.lat, loc.lng, loc.address),
              phone: loc.phone || item.phone || item.whatsapp || '',
            }))
            .filter((loc) => Boolean(loc.label)),
        })),
      },
      organization: {
        title: resolveLocaleText(organization?.title),
        featured: organization?.featured || '',
      },
      dewan: {
        title: resolveLocaleText(dewan?.title),
        tabs: (dewan?.data || []).map((tab, tabIndex) => ({
          id: tabIndex,
          key: `dewan-${tabIndex}`,
          label: resolveLocaleText(tab.name),
          people: (tab.people || []).map((person, personIndex) => ({
            id: personIndex,
            name: person.name || '',
            position: resolveLocaleText(person.jabatan),
            photo: person.avatar || '',
          })),
        })),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapLiniBisnisData = (raw?: LiniBisnisApiData | null) => {
    const hero = raw?.hero
    const line = raw?.business_line
    const lineData = line?.data
    const images = lineData?.images || []

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      detail: {
        title: resolveLocaleText(lineData?.title),
        description: resolveLocaleText(lineData?.desc),
        ctaText: resolveLocaleText(raw?.cta?.text),
        images: images.map((image) => image.original_url || image.thumb_url || '').filter(Boolean),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapLiniBisnisListData = (raw?: LiniBisnisListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items
        .map((item, index) => {
          const data = item || {}
          const slug = String((data as any).slug || '')

          return {
            id: slug || String(index),
            slug,
            title: resolveLocaleText((data as any).title),
            image: (data as any).featured_thumb || '',
          }
        })
        .filter((item) => item.slug.length > 0),
    }
  }

  const mapProdukData = (raw?: ProdukApiData | null) => {
    const hero = raw?.hero
    const product = raw?.product
    const commercial = raw?.commercial
    const stock = commercial?.stock

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      list: {
        title: resolveLocaleText(commercial?.title),
      },
      stock: {
        title: resolveLocaleText(stock?.title),
        lastUpdate: resolveLocaleText(stock?.last_update),
        items: (stock?.products || []).map((item, index) => ({
          id: index,
          title: resolveLocaleText(item.title),
          value: item.stat || '',
        })),
      },
      products: {
        items: (product?.data || []).map((item, index) => ({
          id: index,
          title: resolveLocaleText(item.title),
          description: resolveLocaleText(item.full_desc),
          images: (item.images || [])
            .map((image) => image.original_url || image.thumb_url || '')
            .filter(Boolean),
        })),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapHubungiKamiData = (raw?: HubungiKamiApiData | null) => {
    const hero = raw?.hero
    const contact = raw?.contact
    const map = raw?.map

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      message: {
        title: resolveLocaleText(raw?.title),
        mapLink: map?.link || '',
        address: map?.address || '',
      },
      contact: {
        title: resolveLocaleText(contact?.title),
        items: (contact?.data || []).map((item, index) => ({
          id: index,
          key: item.key || `contact-${index}`,
          icon: item.icon || '',
          link: item.link || '',
          value: item.value || '',
        })),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapKarirData = (raw?: KarirApiData | null) => {
    const hero = raw?.hero
    const about = raw?.about
    const header = raw?.header
    const categories = raw?.categories?.data || []

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      about: {
        title: resolveLocaleText(header?.title || about?.title),
        description1: resolveLocaleText(header?.desc || about?.description_1 || about?.desc_1),
        description2: resolveLocaleText(about?.description_2 || about?.desc_2),
        image: about?.image || about?.featured || '',
      },
      categories: categories.map((item) => ({
        id: String(item.id || ''),
        name: resolveLocaleText(item.name),
        jobsCount: item.jobs_count || 0,
      })),
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapKarirListData = (raw?: KarirListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || raw?.list?.data || raw?.jobs || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        const title = resolveLocaleText((data as any).title || (data as any).position || (data as any).name)
        const locationText = resolveLocaleText((data as any).location || (data as any).address || (data as any).city || (data as any).region)
        const locationTypeRaw = (data as any).location_type || (data as any).location_key || (data as any).location_slug || locationText
        const category = (data as any).category || {}
        const jobTypeRaw = (data as any).job_type || (data as any).type || (data as any).category || category?.name || (data as any).department
        const jobTypeLabel = resolveLocaleText(
          (data as any).job_type_label || (data as any).type_label || (data as any).category_label || category?.name
        )

        return {
          id: String((data as any).id || (data as any).slug || index),
          slug: String((data as any).slug || ''),
          categoryId: String(category?.id || ''),
          title,
          location: locationText,
          locationType: normalizeLocationType(String(locationTypeRaw || '')),
          jobType: normalizeJobType(String(jobTypeRaw || '')),
          jobTypeLabel,
          postedAt: resolveLocaleText((data as any).posted_at || (data as any).created_at || (data as any).date || (data as any).published_at),
          description: resolveLocaleText((data as any).description || (data as any).desc || (data as any).summary || (data as any).desc_short),
          requirements: normalizeStringList((data as any).requirements || (data as any).requirement),
          responsibilities: normalizeStringList((data as any).responsibilities || (data as any).tasks),
          benefits: normalizeStringList((data as any).benefits || (data as any).benefit),
        }
      }),
    }
  }

  const mapKarirCategoryData = (raw?: KarirCategoryApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        return {
          id: String((data as any).id || index),
          name: resolveLocaleText((data as any).name),
        }
      }),
    }
  }

  const mapKarirDetailData = (raw?: KarirDetailApiData | null) => {
    const category = raw?.category
    const title = resolveLocaleText(raw?.title || raw?.name)
    const description = stripHtml(resolveLocaleText(raw?.description || raw?.desc || raw?.content || raw?.desc_short))

    return {
      id: String(raw?.id || raw?.slug || ''),
      slug: String(raw?.slug || ''),
      title,
      categoryId: String(category?.id || ''),
      categoryName: resolveLocaleText(category?.name),
      location: resolveLocaleText(raw?.location || raw?.address),
      postedAt: resolveLocaleText(raw?.published_at || raw?.created_at),
      description,
      requirements: normalizeStringList(raw?.requirements || raw?.requirement),
      responsibilities: normalizeStringList(raw?.responsibilities || raw?.tasks),
      benefits: normalizeStringList(raw?.benefits || raw?.benefit),
    }
  }

  const mapInvestorListData = (raw?: InvestorListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        const title = resolveLocaleText((data as any).title || (data as any).name)
        const document = (data as any).document || {}
        const featured = (data as any).featured || {}

        return {
          id: String(document.id || (data as any).id || index),
          title,
          href: document.original_url || '',
          image: featured.original_url || featured.thumb_url || '',
        }
      }),
    }
  }

  const mapInvestorFinanceData = (raw?: InvestorListApiData | Array<Record<string, unknown>> | null) => {
    const items = (Array.isArray(raw) ? raw : raw?.data || []) as InvestorFinanceItem[]

    const mappedItems = items.map((item, index) => ({
      id: String(item.document?.id || index),
      title: resolveLocaleText(item.name || item.title),
      href: item.document?.original_url || '',
      image: item.featured?.original_url || item.featured?.thumb_url || '',
      year: item.tahun ? String(item.tahun) : '',
      sales: item.penjualan || 0,
      profit: item.laba_bersih || 0,
      liabilities: item.liabilitas || 0,
      equity: item.ekuitas || 0,
      cashflow: item.arus_kas_bersih || 0,
    }))

    const sorted = [...mappedItems].sort((a, b) => Number(a.year) - Number(b.year))

    return {
      items: mappedItems,
      metrics: [
        {
          key: 'sales',
          label: 'Penjualan',
          values: sorted.map((item) => ({
            period: item.year || '-',
            value: item.sales,
          })),
        },
        {
          key: 'profit',
          label: 'Laba Bersih',
          values: sorted.map((item) => ({
            period: item.year || '-',
            value: item.profit,
          })),
        },
        {
          key: 'liabilities',
          label: 'Liabilitas',
          values: sorted.map((item) => ({
            period: item.year || '-',
            value: item.liabilities,
          })),
        },
        {
          key: 'equity',
          label: 'Ekuitas',
          values: sorted.map((item) => ({
            period: item.year || '-',
            value: item.equity,
          })),
        },
        {
          key: 'cashflow',
          label: 'Arus Kas Bersih',
          values: sorted.map((item) => ({
            period: item.year || '-',
            value: item.cashflow,
          })),
        },
      ],
    }
  }

  const mapKeberlanjutanPendekatanData = (raw?: KeberlanjutanPendekatanApiData | null) => {
    const hero = raw?.hero
    const detail = raw?.detail
    const items = raw?.pendekatan_kinerja || []

    const resolveActionKey = (slug?: string) => {
      const normalized = normalizeSlug(slug || '')
      if (normalized.includes('tata-kelola')) return 'tataKelola'
      if (normalized.includes('inisiatif')) return 'inisiatif'
      if (normalized.includes('strategi') || normalized.includes('kebijakan')) return 'strategiKebijakan'
      return ''
    }

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      detail: {
        title: resolveLocaleText(detail?.title),
      },
        items: items.map((item, index) => ({
          id: String(index),
          title: resolveLocaleText(item.title),
          description: resolveLocaleText(item.headline),
          contentHtml: resolveLocaleText(item.content),
          image: item.featured?.original_url || item.featured?.thumb_url || '',
          actionKey: resolveActionKey(item.slug),
        })),
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapKeberlanjutanTinjauanData = (raw?: KeberlanjutanTinjauanApiData | null) => {
    const hero = raw?.hero
    const detail = raw?.detail
    const tinjauan = raw?.tinjauan

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      detail: {
        title: resolveLocaleText(detail?.title),
      },
      tinjauan: {
        title: resolveLocaleText(tinjauan?.title),
        contentHtml: resolveLocaleText(tinjauan?.content),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapBeritaPageData = (raw?: BeritaPageApiData | null) => {
    const popular = raw?.popular
    const news = raw?.news

    return {
      popular: {
        title: resolveLocaleText(popular?.title),
        subtitle: resolveLocaleText(popular?.subtitle),
      },
      latest: {
        title: resolveLocaleText(news?.title),
        subtitle: resolveLocaleText(news?.subtitle),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapBeritaListData = (raw?: BeritaListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        const title = resolveLocaleText((data as any).title)
        const featured = (data as any).featured || {}
        const authorName = (data as any).author?.name || 'PT Janu Putra Sejahtera'
        const publishedAt = (data as any).published_at || ''
        const slug = String((data as any).slug || '')
        const seo = (data as any).seo || {}
        const excerpt = seo.description || title

        return {
          id: slug || String(index),
          slug,
          title,
          excerpt,
          description: seo.description || excerpt,
          image: featured.original_url || featured.thumb_url || '',
          timeAgo: formatDateLabel(publishedAt),
          company: authorName,
          publishedAt,
        }
      }),
    }
  }

    const mapBeritaDetailData = (raw?: BeritaDetailApiData | null) => {
    const post = raw?.post
    const featured = post?.featured
    const contentHtml = resolveLocaleText(post?.content)
    const publishedAt = post?.published_at || ''
    const title = resolveLocaleText(post?.title)

      return {
        id: String(post?.slug || ''),
        slug: String(post?.slug || ''),
        title,
        author: post?.author?.name || 'PT Janu Putra Sejahtera',
        image: featured?.original_url || featured?.thumb_url || '',
        timeAgo: formatDateLabel(publishedAt),
        description: raw?.seo?.description || '',
        contentHtml,
        seo: {
          title: raw?.seo?.title || '',
          description: raw?.seo?.description || '',
          url: raw?.seo?.url || '',
          type: raw?.seo?.type || '',
          siteName: raw?.seo?.site_name || '',
          locale: raw?.seo?.locale || '',
          robots: raw?.seo?.robots || '',
          canonicalUrl: raw?.seo?.canonical_url || '',
          image: raw?.seo?.image || '',
          publishedTime: raw?.seo?.published_time || '',
          author: raw?.seo?.author || '',
        },
      }
    }

    const mapFooterData = (raw?: FooterApiData | null) => {
      const company = raw?.company
      const visitor = raw?.visitor
      const socials = company?.company_social || []
      const footerEmails = socials.filter((item) => item.key === 'footer')
      const socialMedia = socials.filter((item) => item.key !== 'footer')

      return {
        company: {
          name: company?.company_name || '',
          address: company?.company_address || '',
          description: company?.company_desc || '',
          phone: company?.company_phone || '',
          footerEmails: footerEmails.map((item, index) => ({
            id: `${item.key || 'footer'}-${index}`,
            icon: item.icon || '',
            iconCustom: Boolean(item.icon_custom),
            link: item.link || '',
            value: item.value || '',
          })),
          socials: socialMedia.map((item, index) => ({
            id: `${item.key || 'social'}-${index}`,
            icon: item.icon || '',
            iconCustom: Boolean(item.icon_custom),
            link: item.link || '',
            value: item.value || '',
            key: item.key || '',
          })),
        },
        visitor: {
          total: visitor?.total ?? null,
          today: visitor?.today ?? null,
          month: visitor?.month ?? null,
          year: visitor?.year ?? null,
        },
      }
    }

  const mapBlogListData = (raw?: BlogListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        const title = resolveLocaleText((data as any).title)
        const featured = (data as any).featured || {}
        const authorName = (data as any).author?.name || 'PT Janu Putra Sejahtera'
        const publishedAt = (data as any).published_at || ''
        const slug = String((data as any).slug || '')
        const seo = (data as any).seo || {}
        const excerpt = seo.description || title

        return {
          id: slug || String(index),
          slug,
          title,
          excerpt,
          description: seo.description || excerpt,
          image: featured.original_url || featured.thumb_url || '',
          timeAgo: formatDateLabel(publishedAt),
          company: authorName,
          publishedAt,
        }
      }),
    }
  }

  const mapBlogPageData = (raw?: BlogPageApiData | null) => {
    const popular = raw?.popular
    const news = raw?.news

    return {
      featuredItems: mapBlogListData(raw?.featured?.data as Array<Record<string, unknown>>).items,
      popularItems: mapBlogListData(popular?.data as Array<Record<string, unknown>>).items,
      popular: {
        title: resolveLocaleText(popular?.title),
        subtitle: resolveLocaleText(popular?.subtitle),
      },
      latest: {
        title: resolveLocaleText(news?.title),
        subtitle: resolveLocaleText(news?.subtitle),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapBlogDetailData = (raw?: BlogDetailApiData | null) => {
    const post = raw?.post
    const featured = post?.featured
    const contentHtml = resolveLocaleText(post?.content)
    const publishedAt = post?.published_at || ''
    const title = resolveLocaleText(post?.title)

    return {
      id: String(post?.slug || ''),
      slug: String(post?.slug || ''),
      title,
      author: post?.author?.name || 'PT Janu Putra Sejahtera',
      image: featured?.original_url || featured?.thumb_url || '',
      timeAgo: formatDateLabel(publishedAt),
      description: raw?.seo?.description || '',
      contentHtml,
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
        image: raw?.seo?.image || '',
        publishedTime: raw?.seo?.published_time || '',
        author: raw?.seo?.author || '',
      },
    }
  }

  const mapPengumumanPageData = (raw?: PengumumanPageApiData | null) => {
    const hero = raw?.hero

    return {
      hero: {
        background: hero?.background || '',
        title: resolveLocaleText(hero?.title),
        subtitle: resolveLocaleText(hero?.subtitle),
      },
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
      },
    }
  }

  const mapPengumumanListData = (raw?: PengumumanListApiData | Array<Record<string, unknown>> | null) => {
    const items = Array.isArray(raw) ? raw : raw?.data || []

    return {
      items: items.map((item, index) => {
        const data = item || {}
        const title = resolveLocaleText((data as any).title)
        const featured = (data as any).featured || {}
        const authorName = (data as any).author?.name || 'PT Janu Putra Sejahtera'
        const publishedAt = (data as any).published_at || ''
        const slug = String((data as any).slug || '')
        const seo = (data as any).seo || {}
        const excerpt = seo.description || title

        return {
          id: slug || String(index),
          slug,
          title,
          excerpt,
          description: seo.description || excerpt,
          image: featured.original_url || featured.thumb_url || '',
          timeAgo: formatDateLabel(publishedAt),
          company: authorName,
          publishedAt,
        }
      }),
    }
  }

  const mapPengumumanDetailData = (raw?: PengumumanDetailApiData | null) => {
    const post = raw?.post
    const featured = post?.featured
    const contentHtml = resolveLocaleText(post?.content)
    const publishedAt = post?.published_at || ''
    const title = resolveLocaleText(post?.title)

    return {
      id: String(post?.slug || ''),
      slug: String(post?.slug || ''),
      title,
      author: post?.author?.name || 'PT Janu Putra Sejahtera',
      image: featured?.original_url || featured?.thumb_url || '',
      timeAgo: formatDateLabel(publishedAt),
      description: raw?.seo?.description || '',
      contentHtml,
      seo: {
        title: raw?.seo?.title || '',
        description: raw?.seo?.description || '',
        url: raw?.seo?.url || '',
        type: raw?.seo?.type || '',
        siteName: raw?.seo?.site_name || '',
        locale: raw?.seo?.locale || '',
        robots: raw?.seo?.robots || '',
        canonicalUrl: raw?.seo?.canonical_url || '',
        image: raw?.seo?.image || '',
        publishedTime: raw?.seo?.published_time || '',
        author: raw?.seo?.author || '',
      },
    }
  }

  return {
    mapHomeData,
    mapTentangData,
    mapLiniBisnisData,
    mapLiniBisnisListData,
    mapProdukData,
    mapHubungiKamiData,
    mapKarirData,
    mapKarirListData,
    mapKarirCategoryData,
    mapKarirDetailData,
    mapInvestorListData,
    mapInvestorFinanceData,
    mapKeberlanjutanPendekatanData,
    mapKeberlanjutanTinjauanData,
    mapBeritaPageData,
    mapBeritaListData,
      mapBeritaDetailData,
      mapBlogPageData,
      mapBlogListData,
      mapBlogDetailData,
      mapPengumumanPageData,
      mapPengumumanListData,
      mapPengumumanDetailData,
      mapFooterData,
    }
  }
