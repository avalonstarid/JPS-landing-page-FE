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

export const karirJobs: KarirJob[] = [
  {
    id: 'marketing-specialist-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'marketing',
    jobTypeLabel: 'Marketing',
    postedAt: 'Dipublikasi 1 Minggu lalu',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    requirements: [
      'amet consectetur adipiscing elit.',
      'Quisque faucibus ex sapien vitae pellentesque',
      'sem placerat. In id cursus mi pretium tellus duis convallis.'
    ],
    responsibilities: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.',
      'Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.',
      'Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    ],
    benefits: [
      'Lorem ipsum dolor sit amet',
      'Tempus leo eu aenean sed tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    ]
  },
  {
    id: 'sales-representative-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'sales',
    jobTypeLabel: 'Sales',
    postedAt: 'Dipublikasi 2 Minggu lalu',
    description: 'Duis ullamco sint quis consequat enim labore aliquip proident sit. Deserunt irure eiusmod ut ea ipsum cillum do consectetur consequat esse magna enim cupidatat reprehenderit.',
    requirements: [
      'Minimal pendidikan S1 segala jurusan',
      'Pengalaman minimal 2 tahun di bidang sales',
      'Memiliki kendaraan pribadi dan SIM A/C'
    ],
    responsibilities: [
      'Mencari dan mengembangkan prospek pelanggan baru',
      'Melakukan negosiasi dan closing penjualan',
      'Membuat laporan penjualan mingguan dan bulanan'
    ],
    benefits: [
      'Gaji pokok kompetitif',
      'Insentif penjualan tanpa batas',
      'Asuransi kesehatan'
    ]
  },
  {
    id: 'marketing-executive-2',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'marketing',
    jobTypeLabel: 'Marketing',
    postedAt: 'Dipublikasi 3 Minggu lalu',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    requirements: [
      'Minimal pendidikan S1 Marketing/Komunikasi',
      'Pengalaman minimal 1 tahun',
      'Kreatif dan inovatif'
    ],
    responsibilities: [
      'Membuat konten marketing',
      'Mengelola media sosial',
      'Menganalisis performa kampanye'
    ],
    benefits: [
      'Gaji kompetitif',
      'Lingkungan kerja yang dinamis',
      'Kesempatan pengembangan karir'
    ]
  },
  {
    id: 'legal-officer-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'legal',
    jobTypeLabel: 'Legal',
    postedAt: 'Dipublikasi 1 Bulan lalu',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    requirements: [
      'Minimal pendidikan S1 Hukum',
      'Pengalaman minimal 3 tahun di bidang legal corporate',
      'Memahami peraturan perundang-undangan'
    ],
    responsibilities: [
      'Menyusun dan mereview kontrak',
      'Memberikan pendapat hukum',
      'Menangani perizinan perusahaan'
    ],
    benefits: [
      'Gaji kompetitif',
      'Tunjangan kesehatan',
      'Bonus tahunan'
    ]
  },
  {
    id: 'sales-manager-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'sales',
    jobTypeLabel: 'Sales',
    postedAt: 'Dipublikasi 2 Bulan lalu',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    requirements: [
      'Minimal pendidikan S1 segala jurusan',
      'Pengalaman minimal 5 tahun sebagai Sales Manager',
      'Leadership skill yang kuat'
    ],
    responsibilities: [
      'Memimpin dan mengelola tim sales',
      'Menyusun strategi penjualan',
      'Mencapai target penjualan perusahaan'
    ],
    benefits: [
      'Gaji dan tunjangan menarik',
      'Mobil dinas',
      'Bonus pencapaian target'
    ]
  },
  {
    id: 'marketing-coordinator-1',
    title: 'Lorem Ipsum Dolor Sit Amet',
    location: 'Grantung, Karangmoncol, Purbalingga, Jawa Tengah',
    locationType: 'purbalingga',
    jobType: 'marketing',
    jobTypeLabel: 'Marketing',
    postedAt: 'Dipublikasi 3 Bulan lalu',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.',
    requirements: [
      'Minimal pendidikan S1 Marketing/Komunikasi',
      'Pengalaman minimal 2 tahun',
      'Mampu bekerja dalam tim'
    ],
    responsibilities: [
      'Mengkoordinasikan kegiatan marketing',
      'Mengelola event dan promosi',
      'Berkoordinasi dengan tim sales'
    ],
    benefits: [
      'Gaji kompetitif',
      'BPJS Kesehatan dan Ketenagakerjaan',
      'Tunjangan transportasi'
    ]
  }
]

export const findKarirById = (id: string): KarirJob | undefined => {
  return karirJobs.find((job) => job.id === id)
}

