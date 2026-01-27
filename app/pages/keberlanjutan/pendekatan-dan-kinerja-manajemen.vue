<script setup lang="ts">
import KeberlanjutanHeroSection from '~/components/keberlanjutan/KeberlanjutanHeroSection.vue'
import KeberlanjutanDetailSection from '~/components/keberlanjutan/KeberlanjutanDetailSection.vue'
import KeberlanjutanInfoModal from '~/components/keberlanjutan/KeberlanjutanInfoModal.vue'
const imageOne = '/images/pendekatan/pendekatan-keberlanjutan-1.jpg'
const imageTwo = '/images/pendekatan/pendekatan-keberlanjutan-2.jpg'
const imageThree = '/images/pendekatan/pendekatan-keberlanjutan-3.jpg'
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapKeberlanjutanPendekatanData } = useHomeMapper()
const activeItem = ref<null | { title: string; contentHtml?: string }>(null)

const { data: pendekatanResponse } = await useAsyncData('keberlanjutan-pendekatan', async () => {
  try {
    return await fetcher('/keberlanjutan/pendekatan-dan-kinerja-manajemen', {})
  } catch (error) {
    return { error: true }
  }
})

const pendekatanData = computed(() => {
  return (pendekatanResponse.value as { data?: unknown })?.data ?? null
})

const mappedPendekatan = computed(() => mapKeberlanjutanPendekatanData(pendekatanData.value as any))

const fallbackItems = [
  {
    title: 'Tata Kelola Keberlanjutan',
    actionKey: 'tataKelola',
    description:
      'PT Janu Putra Sejahtera Tbk meyakini bahwa keberlanjutan merupakan bagian integral dari tata kelola perusahaan yang baik. Oleh karena itu, Perseroan mengintegrasikan prinsip keberlanjutan ke dalam proses pengambilan keputusan strategis, pengelolaan risiko, serta pelaksanaan kegiatan operasional di seluruh lini usaha.',
    contentHtml:
      '<p>PT Janu Putra Sejahtera Tbk meyakini bahwa keberlanjutan merupakan bagian integral dari tata kelola perusahaan yang baik. Oleh karena itu, Perseroan mengintegrasikan prinsip keberlanjutan ke dalam proses pengambilan keputusan strategis, pengelolaan risiko, serta pelaksanaan kegiatan operasional di seluruh lini usaha.</p>',
    image: imageOne,
  },
  {
    title: 'Inisiatif dan Pencapaian',
    actionKey: 'inisiatif',
    description:
      'Keberlanjutan telah menjadi bagian yang tidak terpisahkan dari perjalanan bisnis Perseroan sejak awal berdiri. Prinsip ini menjadi landasan dalam upaya kami menyediakan sumber protein hewani yang berkualitas, aman, dan terjangkau guna mendukung pemenuhan kebutuhan gizi masyarakat Indonesia secara berkelanjutan.',
    contentHtml:
      '<p>Keberlanjutan telah menjadi bagian yang tidak terpisahkan dari perjalanan bisnis Perseroan sejak awal berdiri. Prinsip ini menjadi landasan dalam upaya kami menyediakan sumber protein hewani yang berkualitas, aman, dan terjangkau guna mendukung pemenuhan kebutuhan gizi masyarakat Indonesia secara berkelanjutan.</p>',
    image: imageTwo,
  },
  {
    title: 'Strategi dan Kebijakan',
    actionKey: 'strategiKebijakan',
    description:
      'Keberlanjutan menjadi bagian dari arah pertumbuhan Perseroan untuk membangun ketahanan bisnis jangka panjang. Sementara itu Perseroan menerapkan kebijakan perusahaan yang terintegrasi dengan prinsip Good Corporate Governance (GCG) sebagai landasan pelaksanaan strategi keberlanjutan.',
    contentHtml:
      '<p>Keberlanjutan menjadi bagian dari arah pertumbuhan Perseroan untuk membangun ketahanan bisnis jangka panjang. Sementara itu Perseroan menerapkan kebijakan perusahaan yang terintegrasi dengan prinsip Good Corporate Governance (GCG) sebagai landasan pelaksanaan strategi keberlanjutan.</p>',
    image: imageThree,
  },
]

const items = computed(() => (mappedPendekatan.value.items.length ? mappedPendekatan.value.items : fallbackItems))

const handleOpen = (item: { title: string; contentHtml?: string }) => {
  activeItem.value = item
}

const breadcrumbs = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.sustainability'), to: '/keberlanjutan/tinjauan' },
  { label: mappedPendekatan.value.detail.title || 'Pendekatan dan Kinerja Manajemen' },
])

useHead(() => ({
  title: mappedPendekatan.value.seo.title || 'Pendekatan dan Kinerja Manajemen | Keberlanjutan',
  meta: [
    {
      name: 'description',
      content: mappedPendekatan.value.seo.description || '',
    },
    {
      property: 'og:title',
      content: mappedPendekatan.value.seo.title || 'Pendekatan dan Kinerja Manajemen | Keberlanjutan',
    },
    {
      property: 'og:description',
      content: mappedPendekatan.value.seo.description || '',
    },
    {
      property: 'og:type',
      content: mappedPendekatan.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedPendekatan.value.seo.url || `${config.public.siteUrl}/keberlanjutan/pendekatan-dan-kinerja-manajemen`,
    },
    {
      property: 'og:site_name',
      content: mappedPendekatan.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedPendekatan.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedPendekatan.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedPendekatan.value.seo.canonicalUrl || `${config.public.siteUrl}/keberlanjutan/pendekatan-dan-kinerja-manajemen`,
    },
  ],
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <KeberlanjutanHeroSection :data="mappedPendekatan.hero" />
    <KeberlanjutanDetailSection
      :title="mappedPendekatan.detail.title || 'Pendekatan dan Kinerja Manajemen'"
      :breadcrumbs="breadcrumbs"
      :items="items"
      @open="handleOpen"
    />
    <KeberlanjutanInfoModal
      :is-open="Boolean(activeItem)"
      :title="activeItem?.title"
      :content-html="activeItem?.contentHtml"
      @close="activeItem = null"
    />
  </div>
</template>
