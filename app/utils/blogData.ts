import beritaImage1 from '~/assets/images/berita/2fa79353f2c6d11db6ebf3c735e26c6463ee7010.jpg'
import beritaImage2 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import beritaImage3 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import beritaImage4 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'

export interface LocalizedText {
  id: string
  en: string
}

export interface ContentBlock {
  type: 'paragraph' | 'quote' | 'image'
  text?: LocalizedText
  cite?: LocalizedText
  src?: string
  alt?: LocalizedText
  caption?: LocalizedText
}

export interface BlogArticle {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  timeAgo: string
  company: string
  content: ContentBlock[]
}

const sharedExcerpt =
  'Update perspektif bisnis peternakan, teknologi kandang, dan inovasi logistik untuk memperkuat rantai pasok unggas.'

export const blogArticles: BlogArticle[] = [
  {
    id: 'transformasi-digital-kandang',
    title: 'Transformasi Digital Kandang: Data Real-Time untuk Peternak',
    excerpt: sharedExcerpt,
    description:
      'Sensor IoT membantu peternak memantau suhu, kelembapan, dan kualitas pakan secara langsung, meningkatkan produktivitas.',
    image: beritaImage1,
    timeAgo: '1 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Transformasi digital kandang mempermudah pemantauan kondisi ayam secara real-time, dari suhu hingga kualitas udara.',
          en: 'Digital farm transformation simplifies real-time monitoring of flock conditions, from temperature to air quality.',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Dashboard terpusat memberi insight cepat untuk penyesuaian pakan, ventilasi, dan kepadatan kandang.',
          en: 'A centralized dashboard provides fast insights to adjust feed, ventilation, and stocking density.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Data real-time membuat keputusan lapangan lebih presisi dan cepat."',
          en: '"Real-time data makes field decisions more precise and faster."',
        },
        cite: {
          id: 'Tim Operasional JPS',
          en: 'JPS Operations Team',
        },
      },
      {
        type: 'image',
        src: beritaImage2,
        alt: {
          id: 'Sensor IoT di dalam kandang ayam',
          en: 'IoT sensors inside a poultry house',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Model prediktif membantu memperkirakan pertumbuhan berdasarkan pola konsumsi pakan dan suhu harian.',
          en: 'Predictive models estimate growth based on feed intake patterns and daily temperature.',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Hasilnya adalah pertumbuhan lebih stabil, efisiensi energi, dan catatan produksi yang mudah diaudit.',
          en: 'The result is steadier growth, better energy efficiency, and production logs that are easy to audit.',
        },
      },
      {
        type: 'image',
        src: beritaImage3,
        alt: {
          id: 'Visualisasi data produksi unggas',
          en: 'Poultry production data visualization',
        },
      },
    ],
  },
  {
    id: 'rantai-dingin-optimal',
    title: 'Rantai Dingin Optimal: Kunci Menjaga Kesegaran Produk',
    excerpt: sharedExcerpt,
    description:
      'Manajemen suhu armada distribusi memastikan daging dan telur tiba dalam kondisi terbaik hingga ke pelanggan.',
    image: beritaImage2,
    timeAgo: '3 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Armada berpendingin dipantau dengan sensor suhu untuk menjaga konsistensi pengiriman.',
          en: 'Refrigerated fleets are monitored with temperature sensors to maintain consistent deliveries.',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Setiap pengiriman memiliki log suhu yang dapat ditelusuri oleh tim QA dan mitra logistik.',
          en: 'Each shipment has a temperature log that can be traced by QA teams and logistics partners.',
        },
      },
      {
        type: 'image',
        src: beritaImage4,
        alt: {
          id: 'Armada distribusi dengan kontrol suhu',
          en: 'Distribution fleet with temperature control',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Rantai dingin yang konsisten menjaga kualitas produk sampai ke meja konsumen."',
          en: '"A consistent cold chain preserves product quality all the way to consumers."',
        },
        cite: {
          id: 'Quality Assurance',
          en: 'Quality Assurance',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Transparansi ini meningkatkan kepercayaan mitra dan konsumen terhadap kualitas produk.',
          en: 'This transparency increases partner and consumer trust in product quality.',
        },
      },
    ],
  },
  {
    id: 'kesejahteraan-ayam',
    title: 'Kesejahteraan Ayam Sebagai Fondasi Mutu Produk',
    excerpt: sharedExcerpt,
    description:
      'Program kesejahteraan ayam menekankan kenyamanan kandang, nutrisi seimbang, dan pengawasan kesehatan rutin.',
    image: beritaImage3,
    timeAgo: '6 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Kenyamanan kandang berpengaruh langsung pada kualitas daging dan telur.',
          en: 'Housing comfort directly impacts meat and egg quality.',
        },
      },
      {
        type: 'image',
        src: beritaImage1,
        alt: {
          id: 'Kandang ayam dengan ventilasi baik',
          en: 'Poultry house with proper ventilation',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Tim lapangan rutin mengevaluasi kepadatan kandang dan pola makan agar pertumbuhan merata.',
          en: 'Field teams routinely evaluate stocking density and feeding patterns to keep growth uniform.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Kesejahteraan ternak adalah pondasi kualitas produk."',
          en: '"Animal welfare is the foundation of product quality."',
        },
        cite: {
          id: 'Tim Animal Care',
          en: 'Animal Care Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Pendekatan ini menjaga keseimbangan antara produktivitas dan kesejahteraan hewan.',
          en: 'This approach balances productivity with animal welfare.',
        },
      },
    ],
  },
  {
    id: 'kolaborasi-mitra',
    title: 'Kolaborasi Mitra untuk Ekspansi Pasar Regional',
    excerpt: sharedExcerpt,
    description:
      'Kemitraan distribusi baru membuka jalur pengiriman yang lebih cepat ke wilayah-wilayah strategis.',
    image: beritaImage4,
    timeAgo: '9 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Kolaborasi dengan mitra logistik mempersingkat waktu tempuh ke pasar regional.',
          en: 'Collaboration with logistics partners shortens delivery times to regional markets.',
        },
      },
      {
        type: 'image',
        src: beritaImage2,
        alt: {
          id: 'Koordinasi tim logistik',
          en: 'Logistics team coordination',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Skema pelatihan bersama memastikan standar mutu seragam di seluruh rantai pasok.',
          en: 'Joint training ensures consistent quality standards across the supply chain.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Kolaborasi kuat menciptakan pengiriman yang cepat dan terpercaya."',
          en: '"Strong collaboration creates fast and reliable deliveries."',
        },
        cite: {
          id: 'Tim Kemitraan',
          en: 'Partnership Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Inisiatif ini meningkatkan akses konsumen terhadap produk unggas berkualitas.',
          en: 'This initiative expands consumer access to high-quality poultry products.',
        },
      },
    ],
  },
]

export const blogLatest = blogArticles

export const findBlogById = (id: string): BlogArticle => {
  return blogArticles.find((item) => item.id === id) ?? blogArticles[0]
}
