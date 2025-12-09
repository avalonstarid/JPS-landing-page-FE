import beritaImage1 from '~/assets/images/berita/2fa79353f2c6d11db6ebf3c735e26c6463ee7010.jpg'
import beritaImage2 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import beritaImage3 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import beritaImage4 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'
import beritaImage5 from '~/assets/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
import beritaImage6 from '~/assets/images/berita/fe6bc84f1ce918f59574af799012aaf45f97683b.jpg'

export interface BeritaArticle {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  timeAgo: string
  company: string
  content: string[]
}

const sharedDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

export const beritaArticles: BeritaArticle[] = [
  {
    id: 'perkuat-bibit-ayam',
    title: 'Perkuat Kualitas Bibit Ayam dengan Teknologi Terkini',
    excerpt: sharedDescription,
    description:
      'Tim nutrisi dan produksi JPS memaksimalkan teknologi kandang untuk menjaga kualitas bibit ayam secara konsisten.',
    image: beritaImage1,
    timeAgo: '1 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'PT Janu Putra Sejahtera memperkuat program peningkatan bibit ayam dengan mengadopsi sistem pemantauan kandang secara real-time.',
      'Perangkat sensor membantu menjaga suhu, kelembapan, hingga kualitas pakan agar bibit tumbuh stabil dan sehat.',
      'Langkah ini memastikan pasokan bibit ayam yang lebih merata ke seluruh jaringan mitra di berbagai wilayah.',
    ],
  },
  {
    id: 'optimasi-rantai-pasok',
    title: 'Optimasi Rantai Pasok Unggas dari Hulu ke Hilir',
    excerpt: sharedDescription,
    description:
      'Integrasi data produksi memungkinkan tim JPS memonitor stok, distribusi, serta mutu produk lebih cepat dan transparan.',
    image: beritaImage6,
    timeAgo: '2 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'Lewat sistem integrasi data, JPS memantau pergerakan stok dari peternakan hingga titik distribusi secara menyeluruh.',
      'Pengiriman dapat dijadwalkan lebih tepat sehingga mitra menerima produk dalam kondisi terbaik.',
      'Inisiatif ini juga membuka peluang kolaborasi baru dengan pelaku logistik untuk memperluas jangkauan layanan.',
    ],
  },
  {
    id: 'keamanan-pakan',
    title: 'Keamanan Pakan Jadi Prioritas Utama di Kandang',
    excerpt: sharedDescription,
    description: 'Tim quality control memperketat standar pakan agar nutrisi ternak selalu terukur dan higienis.',
    image: beritaImage3,
    timeAgo: '3 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'JPS memperketat pengujian bahan baku pakan dengan laboratorium internal untuk memastikan kandungan nutrisi sesuai standar.',
      'Setiap batch pakan dipantau distribusinya sehingga riwayat kualitas dapat dilacak dengan mudah.',
      'Dengan kontrol ini, performa ayam tetap terjaga dan risiko kontaminasi dapat ditekan sejak awal.',
    ],
  },
  {
    id: 'riset-produktivitas',
    title: 'Riset Produktivitas Peternak Lokal Meningkatkan Output',
    excerpt: sharedDescription,
    description: 'Kolaborasi riset bersama peternak lokal menghadirkan rekomendasi perawatan dan jadwal panen yang lebih akurat.',
    image: beritaImage5,
    timeAgo: '4 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'Program riset bersama peternak lokal memetakan kebiasaan perawatan yang paling efektif untuk meningkatkan produktivitas.',
      'Data dikumpulkan lintas lokasi dan dianalisis untuk membuat panduan praktis bagi peternak di lapangan.',
      'Langkah ini memberi dampak positif pada kualitas panen serta kestabilan pasokan ke konsumen.',
    ],
  },
  {
    id: 'perluas-distribusi',
    title: 'Perluas Distribusi Produk Unggas ke Kawasan Timur',
    excerpt: sharedDescription,
    description: 'Ekspansi jaringan distribusi menghadirkan pasokan ayam dan telur yang lebih cepat ke pelanggan baru.',
    image: beritaImage2,
    timeAgo: '5 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'JPS menambah hub distribusi di kawasan timur untuk mempersingkat waktu pengiriman ke pelanggan.',
      'Tim operasional memastikan setiap pengiriman mengikuti standar rantai dingin yang ketat.',
      'Ekspansi ini diharapkan memperkuat kehadiran JPS di pasar regional dan nasional.',
    ],
  },
  {
    id: 'standar-karkas',
    title: 'Standar Karkas Ketat Pastikan Mutu Produk Olahan',
    excerpt: sharedDescription,
    description: 'Fasilitas pemotongan modern memastikan karkas ayam diproses higienis dengan kontrol kualitas berlapis.',
    image: beritaImage4,
    timeAgo: '6 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'Di fasilitas pemotongan, setiap karkas melewati proses sterilisasi dan pemeriksaan mutu sebelum dikemas.',
      'Tim QA memonitor suhu ruang, kebersihan alat, dan jalur distribusi agar produk tetap aman dikonsumsi.',
      'Penerapan standar ini menjaga kepercayaan pelanggan terhadap produk olahan unggas JPS.',
    ],
  },
  {
    id: 'kemitraan-baru',
    title: 'Kemitraan Baru Dukung Edukasi Peternak Muda',
    excerpt: sharedDescription,
    description: 'Pelatihan terpadu memperkenalkan praktik beternak efisien bagi peternak muda binaan JPS.',
    image: beritaImage1,
    timeAgo: '7 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'Lewat kemitraan baru, JPS membuka kelas lapangan untuk peternak muda mengenai manajemen kandang modern.',
      'Materi mencakup penanganan kesehatan ayam, efisiensi pakan, hingga pencatatan data digital.',
      'Program ini membantu regenerasi peternak berkualitas yang mampu menjaga standar industri.',
    ],
  },
  {
    id: 'penguatan-logistik',
    title: 'Penguatan Armada Logistik Dukung Permintaan Akhir Tahun',
    excerpt: sharedDescription,
    description: 'Penambahan armada berpendingin menjamin produk tiba segar di berbagai kota menjelang puncak permintaan.',
    image: beritaImage2,
    timeAgo: '8 jam yang lalu',
    company: 'PT Janu Putra Sejahtera',
    content: [
      'Menjelang akhir tahun, JPS menambah armada truk berpendingin untuk mengantisipasi kenaikan permintaan.',
      'Setiap armada dilengkapi sensor suhu dan pelacakan untuk memastikan transparansi pengiriman.',
      'Konsumen mendapatkan produk dalam kondisi prima, sementara mitra bisnis menikmati jadwal pengiriman yang lebih pasti.',
    ],
  },
]

export const popularLayout = {
  primary: beritaArticles[0],
  highlight: beritaArticles[1],
  stacked: [beritaArticles[2], beritaArticles[3]],
}

export const latestLayout = beritaArticles.slice(0, 8)

export const findBeritaById = (id: string): BeritaArticle => {
  return beritaArticles.find((item) => item.id === id) ?? beritaArticles[0]
}
