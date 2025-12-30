<script setup lang="ts">
import backgroundImage from '~/assets/images/tentang/hero.jpg'
import pembibitanImage from '~/assets/images/tentang/peternakan-pembibitan.jpg'
import broilerImage from '~/assets/images/tentang/peternakan-broiler.jpg'
import petelurImage from '~/assets/images/tentang/peternakan-petelur.jpg'
import penetasanImage from '~/assets/images/tentang/penetasan-telur.jpg'
import rpaImage from '~/assets/images/tentang/rumah-ayam-potong.jpg'
import modalMain from '~/assets/images/tentang/modal-lokasi-main.jpg'
import modalThumb1 from '~/assets/images/tentang/modal-lokasi-thumbnail-1.jpg'
import modalThumb2 from '~/assets/images/tentang/modal-lokasi-thumbnail-2.jpg'
import modalThumb3 from '~/assets/images/tentang/modal-lokasi-thumbnail-3.jpg'

const { t } = useI18n()

interface LocationItem {
  key: string
  image: string
  gallery: string[]
  title: string
  locations: Array<{
    label: string
    href: string
  }>
  infoText: string
  route: string
}

const baseGallery = [modalMain, modalThumb1, modalThumb2, modalThumb3]
const sliceGallery = (count: number) => baseGallery.slice(0, Math.max(count, 1))

const locationItems = computed<LocationItem[]>(() => [
  {
    key: 'pembibitan',
    image: pembibitanImage,
    gallery: sliceGallery(2),
    title: t('tentangPage.lokasi.items.pembibitan.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.pembibitan.loc2'), href: 'https://share.google/cOmpKEDkzAuqzI9Ux' },
      { label: t('tentangPage.lokasi.items.pembibitan.loc1'), href: 'https://share.google/VVAeVxrVfv8WCRG2i' },
    ],
    infoText: t('tentangPage.lokasi.items.pembibitan.info'),
    route: '/lini-bisnis/pembibitan',
  },
  {
    key: 'broiler',
    image: broilerImage,
    gallery: sliceGallery(2),
    title: t('tentangPage.lokasi.items.broiler.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.broiler.loc2'), href: 'https://maps.app.goo.gl/QY6K1Bw3vBUZKwgQ8?g_st=aw' },
      { label: t('tentangPage.lokasi.items.broiler.loc1'), href: 'https://maps.app.goo.gl/yBgb2HbGtMvK6b3d6' },
    ],
    infoText: t('tentangPage.lokasi.items.broiler.info'),
    route: '/lini-bisnis/broiler',
  },
  {
    key: 'petelur',
    image: petelurImage,
    gallery: sliceGallery(3),
    title: t('tentangPage.lokasi.items.petelur.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.petelur.loc1'), href: 'https://share.google/5YzIn3wIDYOi4qiMu' },
      { label: t('tentangPage.lokasi.items.petelur.loc2'), href: 'https://share.google/hbRvkkC9iA6Jas4Pk' },
      { label: t('tentangPage.lokasi.items.petelur.loc3'), href: 'https://maps.app.goo.gl/vkHuRwxokvJ1bTpb7?g_st=aw' },
    ],
    infoText: t('tentangPage.lokasi.items.petelur.info'),
    route: '/lini-bisnis/petelur',
  },
  {
    key: 'penetasan',
    image: penetasanImage,
    gallery: sliceGallery(1),
    title: t('tentangPage.lokasi.items.penetasan.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.penetasan.loc1'), href: 'https://share.google/UkQ3lnVXxJdRhKCrj' },
    ],
    infoText: t('tentangPage.lokasi.items.penetasan.info'),
    route: '/lini-bisnis/penetasan',
  },
  {
    key: 'rpa',
    image: rpaImage,
    gallery: sliceGallery(1),
    title: t('tentangPage.lokasi.items.rpa.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.rpa.loc1'), href: 'https://share.google/8AsYSZPcpkRYkyJzi' },
    ],
    infoText: t('tentangPage.lokasi.items.rpa.info'),
    route: '/lini-bisnis/rpa',
  },
])

const modalOpen = ref(false)
const modalItem = ref<LocationItem | null>(null)

const openModal = (item: LocationItem) => {
  modalItem.value = item
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  modalItem.value = null
}
</script>

<template>
  <section
    id="lokasi-usaha"
    v-reveal  class="reveal py-12 md:py-20 bg-cover bg-center bg-no-repeat relative"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#FDEEE0]/90" />

    <div class="container-main relative z-10">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d4f92] text-center mb-10 md:mb-14">
        {{ t('tentangPage.lokasi.sectionTitle') }}
      </h2>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <UiLokasiCard
          v-for="item in locationItems"
          :key="item.key"
          :title="item.title"
          :locations="item.locations"
          :image-src="item.image"
          :button-text="t('tentangPage.lokasi.viewMore')"
          @more="openModal(item)"
        />
      </div>

      <UiImageGalleryModal
        v-if="modalItem"
        :show="modalOpen"
        :title="modalItem.title"
        :subtitle="modalItem.locations[0]?.label ?? ''"
        :subtitles="modalItem.locations.map((location) => location.label)"
        :info-text="modalItem.infoText"
        :maps-href="modalItem.locations[0]?.href ?? ''"
        :maps-hrefs="modalItem.locations.map((location) => location.href)"
        whatsapp-href="https://wa.me/628123456789"
        :images="modalItem.gallery"
        @close="closeModal"
      />
    </div>
  </section>
</template>

<style scoped>
/* kept empty intentionally */
</style>
