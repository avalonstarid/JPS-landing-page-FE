import beritaImage1 from '~/assets/images/berita/2fa79353f2c6d11db6ebf3c735e26c6463ee7010.jpg'
import beritaImage2 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import beritaImage3 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import beritaImage4 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'

export interface BlogArticle {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  timeAgo: string
  company: string
  content: string[]
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
      'Transformasi digital kandang mempermudah pemantauan kondisi ayam secara real-time.',
      'Dashboard terpusat memberi insight cepat untuk penyesuaian pakan dan ventilasi.',
      'Hasilnya adalah pertumbuhan yang lebih stabil dan efisiensi operasional yang lebih tinggi.',
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
      'Armada berpendingin dipantau dengan sensor suhu untuk menjaga konsistensi pengiriman.',
      'Setiap pengiriman memiliki log suhu yang dapat ditelusuri oleh tim QA.',
      'Transparansi ini meningkatkan kepercayaan mitra dan konsumen terhadap kualitas produk.',
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
      'Kenyamanan kandang berpengaruh langsung pada kualitas daging dan telur.',
      'Tim lapangan rutin mengevaluasi kepadatan kandang dan pola makan.',
      'Pendekatan ini menjaga keseimbangan antara produktivitas dan kesejahteraan hewan.',
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
      'Kolaborasi dengan mitra logistik mempersingkat waktu tempuh ke pasar regional.',
      'Skema pelatihan bersama memastikan standar mutu seragam di seluruh rantai pasok.',
      'Inisiatif ini meningkatkan akses konsumen terhadap produk unggas berkualitas.',
    ],
  },
]

export const blogLatest = blogArticles

export const findBlogById = (id: string): BlogArticle => {
  return blogArticles.find((item) => item.id === id) ?? blogArticles[0]
}
