import hero from '~/assets/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
import announce1 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import announce2 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'
import announce3 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import announcer from '~/assets/images/logo-jps.png'
import type { ContentBlock } from '~/utils/contentTypes'

export interface PengumumanItem {
  id: string
  title: string
  company: string
  publishedAt: string
  image: string
  description: string
  content: ContentBlock[]
}

export const pengumumanItems: PengumumanItem[] = [
  {
    id: 'pengumuman-1',
    title: 'Pembaruan Jadwal Distribusi Akhir Tahun',
    company: 'PT Janu Putra Sejahtera',
    publishedAt: '17 Oktober 2025',
    image: announce1,
    description:
      'Penyesuaian jadwal distribusi menjelang akhir tahun untuk memastikan pengiriman tepat waktu ke seluruh mitra.',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Menjelang puncak permintaan akhir tahun, kami menyesuaikan jadwal distribusi untuk menjaga kelancaran pengiriman.',
          en: 'Ahead of peak year-end demand, we are adjusting distribution schedules to keep deliveries smooth.',
        },
      },
      {
        type: 'image',
        src: announce2,
        alt: {
          id: 'Aktivitas distribusi produk unggas',
          en: 'Poultry product distribution activity',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Setiap rute dipantau agar produk tiba tepat waktu dengan standar kualitas terbaik.',
          en: 'Each route is monitored so products arrive on time with the best quality standards.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Koordinasi jadwal lebih awal membantu mitra merencanakan stok dengan baik."',
          en: '"Early schedule coordination helps partners plan stock more effectively."',
        },
        cite: {
          id: 'Tim Distribusi',
          en: 'Distribution Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Hubungi tim layanan pelanggan untuk detail jadwal terbaru atau kebutuhan penjadwalan ulang.',
          en: 'Contact customer service for the latest schedule details or rescheduling needs.',
        },
      },
    ],
  },
  {
    id: 'pengumuman-2',
    title: 'Perawatan Fasilitas RPH Terjadwal',
    company: 'PT Janu Putra Sejahtera',
    publishedAt: '05 November 2025',
    image: announce2,
    description:
      'Pemeliharaan berkala fasilitas rumah potong hewan untuk menjaga standar higienitas dan kualitas produk.',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Perawatan dilakukan secara bertahap agar tidak mengganggu jadwal produksi dan distribusi utama.',
          en: 'Maintenance is performed in stages to avoid disrupting core production and distribution schedules.',
        },
      },
      {
        type: 'image',
        src: announce3,
        alt: {
          id: 'Fasilitas produksi yang sedang dipelihara',
          en: 'Production facility under maintenance',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Tim QA dan teknisi memastikan setiap jalur produksi memenuhi standar kebersihan dan keamanan pangan.',
          en: 'QA teams and technicians ensure every production line meets hygiene and food safety standards.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Perawatan rutin menjaga mutu produk dan kesiapan operasional."',
          en: '"Routine maintenance safeguards product quality and operational readiness."',
        },
        cite: {
          id: 'Tim QA',
          en: 'QA Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Informasi lanjutan dibagikan kepada mitra yang terdampak penjadwalan sementara.',
          en: 'Further information will be shared with partners affected by the temporary scheduling.',
        },
      },
    ],
  },
  {
    id: 'pengumuman-3',
    title: 'Rekrutmen Teknisi Kandang Baru',
    company: 'PT Janu Putra Sejahtera',
    publishedAt: '21 November 2025',
    image: announce3,
    description:
      'Pembukaan rekrutmen teknisi kandang untuk memperkuat operasional peternakan dan memastikan performa unggas optimal.',
    content: [
      {
        type: 'paragraph',
        text: {
          id: 'Kami mencari talenta dengan pengalaman teknis kandang untuk mendukung peningkatan efisiensi operasional.',
          en: 'We are looking for talent with poultry house technical experience to support operational efficiency.',
        },
      },
      {
        type: 'image',
        src: announce1,
        alt: {
          id: 'Teknisi kandang melakukan inspeksi',
          en: 'Poultry house technician performing inspection',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Pelatihan internal akan diberikan terkait pemantauan lingkungan, manajemen pakan, dan perawatan peralatan.',
          en: 'Internal training covers environmental monitoring, feed management, and equipment maintenance.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Kami mencari teknisi yang teliti dan siap belajar di lapangan."',
          en: '"We are looking for technicians who are detail-oriented and ready to learn in the field."',
        },
        cite: {
          id: 'Tim HR',
          en: 'HR Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Kandidat dapat mengirimkan CV melalui email resmi dengan subjek "Rekrutmen Teknisi Kandang".',
          en: 'Candidates can submit their CVs via the official email with the subject "Poultry House Technician Hiring".',
        },
      },
    ],
  },
]

export const pengumumanHero = hero
export const pengumumanAvatar = announcer

export const findPengumumanById = (id: string): PengumumanItem => {
  return pengumumanItems.find((item) => item.id === id) ?? pengumumanItems[0]
}

export const pengumumanLatest = pengumumanItems
