import hero from '~/assets/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
import announce1 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import announce2 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'
import announce3 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import announcer from '~/assets/images/logo-jps.png'

export interface PengumumanItem {
  id: string
  title: string
  company: string
  publishedAt: string
  image: string
  description: string
  content: string[]
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
      'Menjelang puncak permintaan akhir tahun, kami menyesuaikan jadwal distribusi untuk menjaga kelancaran pengiriman.',
      'Setiap rute akan dipantau ketat agar produk tiba tepat waktu dengan standar kualitas terbaik.',
      'Hubungi tim layanan pelanggan kami untuk detail jadwal terbaru atau kebutuhan penjadwalan ulang.',
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
      'Perawatan dilakukan secara bertahap agar tidak mengganggu jadwal produksi dan distribusi utama.',
      'Tim QA dan teknisi memastikan setiap jalur produksi memenuhi standar kebersihan dan keamanan pangan.',
      'Informasi lebih lanjut akan dibagikan kepada mitra yang terdampak penjadwalan sementara.',
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
      'Kami mencari talenta dengan pengalaman teknis kandang untuk mendukung peningkatan efisiensi operasional.',
      'Pelatihan internal akan diberikan terkait pemantauan lingkungan, manajemen pakan, dan perawatan peralatan.',
      'Kandidat dapat mengirimkan CV melalui email resmi dengan subjek “Rekrutmen Teknisi Kandang”.',
    ],
  },
]

export const pengumumanHero = hero
export const pengumumanAvatar = announcer

export const findPengumumanById = (id: string): PengumumanItem => {
  return pengumumanItems.find((item) => item.id === id) ?? pengumumanItems[0]
}

export const pengumumanLatest = pengumumanItems
