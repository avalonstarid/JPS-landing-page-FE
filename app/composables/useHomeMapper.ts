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
          icon: item.icon ? iconMap[item.icon] || '' : '',
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

  return {
    mapHomeData,
  }
}
