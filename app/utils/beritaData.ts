import beritaImage1 from '~/assets/images/berita/2fa79353f2c6d11db6ebf3c735e26c6463ee7010.jpg'
import beritaImage2 from '~/assets/images/berita/5185210dd6882a42d78b993139d925e1ca8738f3.jpg'
import beritaImage3 from '~/assets/images/berita/55959f0ca16246400a14b5d0cca9cc4307d77972.jpg'
import beritaImage4 from '~/assets/images/berita/60faff34dda2aa3e5d32fbf3577e7ff171007a1e.jpg'
import beritaImage5 from '~/assets/images/berita/9872d0a0d2ef28751fd00c086e88b73755d4965f.jpg'
import beritaImage6 from '~/assets/images/berita/fe6bc84f1ce918f59574af799012aaf45f97683b.jpg'

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

export interface BeritaArticle {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  timeAgo: string
  company: string
  content: ContentBlock[]
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
      {
        type: 'paragraph',
        text: {
          id: 'PT Janu Putra Sejahtera memperkuat program peningkatan bibit ayam dengan sistem pemantauan kandang real-time.',
          en: 'PT Janu Putra Sejahtera strengthens chick quality programs with real-time poultry house monitoring.',
        },
      },
      {
        type: 'image',
        src: beritaImage2,
        alt: {
          id: 'Pemantauan kandang berbasis sensor',
          en: 'Sensor-based poultry house monitoring',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Perangkat sensor menjaga suhu, kelembapan, dan kualitas pakan agar pertumbuhan bibit stabil.',
          en: 'Sensors maintain temperature, humidity, and feed quality so chick growth stays stable.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Konsistensi data kandang membantu kami menjaga standar bibit di setiap lokasi."',
          en: '"Consistent barn data helps us keep chick standards across all sites."',
        },
        cite: {
          id: 'Tim Produksi',
          en: 'Production Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Langkah ini memastikan pasokan bibit ayam yang lebih merata ke seluruh jaringan mitra.',
          en: 'This ensures a more even supply of chicks across partner networks.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'Lewat sistem integrasi data, JPS memantau pergerakan stok dari peternakan hingga titik distribusi.',
          en: 'Through data integration, JPS tracks inventory movement from farms to distribution points.',
        },
      },
      {
        type: 'image',
        src: beritaImage4,
        alt: {
          id: 'Distribusi unggas terintegrasi',
          en: 'Integrated poultry distribution',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Pengiriman dijadwalkan lebih tepat sehingga mitra menerima produk dalam kondisi terbaik.',
          en: 'Deliveries are scheduled more precisely so partners receive products in top condition.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Transparansi data membuat rantai pasok lebih tangguh."',
          en: '"Data transparency makes the supply chain more resilient."',
        },
        cite: {
          id: 'Tim Supply Chain',
          en: 'Supply Chain Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Inisiatif ini membuka peluang kolaborasi baru dengan pelaku logistik di berbagai wilayah.',
          en: 'This initiative opens new collaboration opportunities with logistics partners across regions.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'JPS memperketat pengujian bahan baku pakan dengan laboratorium internal.',
          en: 'JPS tightens feed ingredient testing through internal labs.',
        },
      },
      {
        type: 'image',
        src: beritaImage5,
        alt: {
          id: 'Pengujian kualitas pakan di laboratorium',
          en: 'Feed quality testing in a lab',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Setiap batch dipantau distribusinya agar riwayat kualitas dapat dilacak.',
          en: 'Each batch is monitored so quality history is traceable.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Kontrol pakan yang ketat menjaga performa ayam di setiap kandang."',
          en: '"Strict feed control keeps poultry performance consistent in every barn."',
        },
        cite: {
          id: 'Quality Control',
          en: 'Quality Control',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Dengan kontrol ini, performa ayam terjaga dan risiko kontaminasi ditekan sejak awal.',
          en: 'With this control, poultry performance is maintained and contamination risks are reduced early.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'Program riset bersama peternak lokal memetakan kebiasaan perawatan yang paling efektif.',
          en: 'Joint research with local farmers maps the most effective care practices.',
        },
      },
      {
        type: 'image',
        src: beritaImage1,
        alt: {
          id: 'Diskusi riset dengan peternak lokal',
          en: 'Research discussion with local farmers',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Data dikumpulkan lintas lokasi untuk membuat panduan praktis bagi peternak di lapangan.',
          en: 'Data is collected across sites to build practical guides for farmers in the field.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Riset lapangan membuat keputusan perawatan lebih tepat sasaran."',
          en: '"Field research makes care decisions more accurate."',
        },
        cite: {
          id: 'Tim Riset',
          en: 'Research Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Dampaknya terlihat pada kualitas panen serta kestabilan pasokan ke konsumen.',
          en: 'The impact shows in harvest quality and more stable consumer supply.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'JPS menambah hub distribusi di kawasan timur untuk mempersingkat waktu pengiriman.',
          en: 'JPS adds distribution hubs in the east to shorten delivery times.',
        },
      },
      {
        type: 'image',
        src: beritaImage6,
        alt: {
          id: 'Aktivitas hub distribusi',
          en: 'Distribution hub activity',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Tim operasional memastikan setiap pengiriman mengikuti standar rantai dingin yang ketat.',
          en: 'Operations teams ensure every shipment follows strict cold-chain standards.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Ekspansi distribusi mempercepat akses produk ke wilayah baru."',
          en: '"Distribution expansion speeds up access to new regions."',
        },
        cite: {
          id: 'Tim Logistik',
          en: 'Logistics Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Ekspansi ini memperkuat kehadiran JPS di pasar regional dan nasional.',
          en: 'This expansion strengthens JPS presence in regional and national markets.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'Di fasilitas pemotongan, setiap karkas melewati proses sterilisasi sebelum dikemas.',
          en: 'At the processing facility, each carcass goes through sterilization before packaging.',
        },
      },
      {
        type: 'image',
        src: beritaImage3,
        alt: {
          id: 'Fasilitas pemotongan modern',
          en: 'Modern processing facility',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Tim QA memonitor suhu ruang, kebersihan alat, dan jalur distribusi agar produk aman.',
          en: 'QA teams monitor room temperature, equipment hygiene, and distribution lines for safety.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Standar berlapis menjaga mutu produk olahan dari hulu ke hilir."',
          en: '"Layered standards protect processed product quality end-to-end."',
        },
        cite: {
          id: 'Tim QA',
          en: 'QA Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Penerapan standar ini menjaga kepercayaan pelanggan terhadap produk olahan unggas JPS.',
          en: 'These standards maintain customer trust in JPS processed poultry products.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'Lewat kemitraan baru, JPS membuka kelas lapangan untuk peternak muda tentang manajemen kandang modern.',
          en: 'Through new partnerships, JPS opens field classes for young farmers on modern barn management.',
        },
      },
      {
        type: 'image',
        src: beritaImage5,
        alt: {
          id: 'Pelatihan peternak muda',
          en: 'Training for young farmers',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Materi mencakup penanganan kesehatan ayam, efisiensi pakan, hingga pencatatan data digital.',
          en: 'Material covers poultry health handling, feed efficiency, and digital data logging.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Edukasi peternak muda penting untuk keberlanjutan industri."',
          en: '"Educating young farmers is vital for industry sustainability."',
        },
        cite: {
          id: 'Tim Kemitraan',
          en: 'Partnership Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Program ini membantu regenerasi peternak berkualitas yang mampu menjaga standar industri.',
          en: 'This program supports the next generation of farmers who uphold industry standards.',
        },
      },
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
      {
        type: 'paragraph',
        text: {
          id: 'Menjelang akhir tahun, JPS menambah armada truk berpendingin untuk mengantisipasi kenaikan permintaan.',
          en: 'Ahead of year-end demand, JPS adds refrigerated trucks to anticipate growth.',
        },
      },
      {
        type: 'image',
        src: beritaImage2,
        alt: {
          id: 'Armada truk berpendingin',
          en: 'Refrigerated truck fleet',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Setiap armada dilengkapi sensor suhu dan pelacakan untuk transparansi pengiriman.',
          en: 'Each fleet is equipped with temperature sensors and tracking for delivery transparency.',
        },
      },
      {
        type: 'quote',
        text: {
          id: '"Armada baru membantu menjaga kualitas hingga ke pelanggan."',
          en: '"The new fleet helps preserve quality all the way to customers."',
        },
        cite: {
          id: 'Tim Operasional',
          en: 'Operations Team',
        },
      },
      {
        type: 'paragraph',
        text: {
          id: 'Konsumen menerima produk dalam kondisi prima dengan jadwal pengiriman yang lebih pasti.',
          en: 'Consumers receive products in prime condition with more reliable delivery schedules.',
        },
      },
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
