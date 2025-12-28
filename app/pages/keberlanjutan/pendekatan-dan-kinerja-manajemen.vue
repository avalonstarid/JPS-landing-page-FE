<script setup lang="ts">
import KeberlanjutanHeroSection from '~/components/keberlanjutan/KeberlanjutanHeroSection.vue'
import KeberlanjutanDetailSection from '~/components/keberlanjutan/KeberlanjutanDetailSection.vue'
import KeberlanjutanInfoModal from '~/components/keberlanjutan/KeberlanjutanInfoModal.vue'
import imageOne from '~/assets/images/produk/produk-top-left.jpg'
import imageTwo from '~/assets/images/produk/produk-top-right.jpg'
import imageThree from '~/assets/images/bisnis/bisnis-1.png'

const activeModal = ref<null | 'tataKelola' | 'strategiKebijakan' | 'inisiatif'>(null)

const items = [
  {
    title: 'Tata Kelola Keberlanjutan',
    actionKey: 'tataKelola',
    description:
      'PT Janu Putra Sejahtera Tbk meyakini bahwa keberlanjutan merupakan bagian integral dari tata kelola perusahaan yang baik. Oleh karena itu, Perseroan mengintegrasikan prinsip keberlanjutan ke dalam proses pengambilan keputusan strategis, pengelolaan risiko, serta pelaksanaan kegiatan operasional di seluruh lini usaha.',
    image: imageOne,
  },
  {
    title: 'Inisiatif dan Pencapaian',
    actionKey: 'inisiatif',
    description:
      'Keberlanjutan telah menjadi bagian yang tidak terpisahkan dari perjalanan bisnis Perseroan sejak awal berdiri. Prinsip ini menjadi landasan dalam upaya kami menyediakan sumber protein hewani yang berkualitas, aman, dan terjangkau guna mendukung pemenuhan kebutuhan gizi masyarakat Indonesia secara berkelanjutan.',
    image: imageTwo,
  },
  {
    title: 'Strategi dan Kebijakan',
    actionKey: 'strategiKebijakan',
    description:
      'Keberlanjutan menjadi bagian dari arah pertumbuhan Perseroan untuk membangun ketahanan bisnis jangka panjang. Sementara itu Perseroan menerapkan kebijakan perusahaan yang terintegrasi dengan prinsip Good Corporate Governance (GCG) sebagai landasan pelaksanaan strategi keberlanjutan.',
    image: imageThree,
  },
]

const handleOpen = (key: string) => {
  if (key === 'tataKelola' || key === 'strategiKebijakan' || key === 'inisiatif') {
    activeModal.value = key
  }
}

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Keberlanjutan', to: '/keberlanjutan/tinjauan' },
  { label: 'Pendekatan dan Kinerja Manajemen' },
]

useHead(() => ({
  title: 'Pendekatan dan Kinerja Manajemen | Keberlanjutan',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <KeberlanjutanHeroSection />
    <KeberlanjutanDetailSection
      title="Pendekatan dan Kinerja Manajemen"
      :breadcrumbs="breadcrumbs"
      :items="items"
      @open="handleOpen"
    />
    <KeberlanjutanInfoModal
      :is-open="Boolean(activeModal)"
      :variant="activeModal"
      @close="activeModal = null"
    />
  </div>
</template>
