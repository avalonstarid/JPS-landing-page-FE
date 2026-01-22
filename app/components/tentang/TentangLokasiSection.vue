<script setup lang="ts">
const backgroundImage = '/images/tentang/hero.jpg'
const pembibitanImage = '/images/tentang/peternakan-pembibitan.jpg'
const broilerImage = '/images/tentang/peternakan-broiler.jpg'
const petelurImage = '/images/tentang/peternakan-petelur.jpg'
const penetasanImage = '/images/tentang/penetasan-telur.jpg'
const rpaImage = '/images/tentang/rumah-ayam-potong.jpg'
const modalMain = '/images/tentang/modal-lokasi-main.jpg'
const modalThumb1 = '/images/tentang/modal-lokasi-thumbnail-1.jpg'
const modalThumb2 = '/images/tentang/modal-lokasi-thumbnail-2.jpg'
const modalThumb3 = '/images/tentang/modal-lokasi-thumbnail-3.jpg'
const { t } = useI18n()

type LocationEntry = {
  label: string
  href: string
}

type LocationItem = {
  id: number
  key: string
  image: string
  title: string
  locations: LocationEntry[]
  infoText: string
  phone?: string
}

type LocationData = {
  title: string
  items: LocationItem[]
}

const props = withDefaults(defineProps<{ data: LocationData }>(), {
  data: () => ({
    title: '',
    items: [],
  }),
})

const baseGallery = [modalMain, modalThumb1, modalThumb2, modalThumb3]

const fallbackItems = computed<LocationItem[]>(() => [
  {
    id: 0,
    key: 'pembibitan',
    image: pembibitanImage,
    title: t('tentangPage.lokasi.items.pembibitan.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.pembibitan.loc2'), href: 'https://share.google/cOmpKEDkzAuqzI9Ux' },
      { label: t('tentangPage.lokasi.items.pembibitan.loc1'), href: 'https://share.google/VVAeVxrVfv8WCRG2i' },
    ],
    infoText: t('tentangPage.lokasi.items.pembibitan.info'),
    phone: '',
  },
  {
    id: 1,
    key: 'broiler',
    image: broilerImage,
    title: t('tentangPage.lokasi.items.broiler.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.broiler.loc2'), href: 'https://maps.app.goo.gl/QY6K1Bw3vBUZKwgQ8?g_st=aw' },
      { label: t('tentangPage.lokasi.items.broiler.loc1'), href: 'https://maps.app.goo.gl/yBgb2HbGtMvK6b3d6' },
    ],
    infoText: t('tentangPage.lokasi.items.broiler.info'),
    phone: '',
  },
  {
    id: 2,
    key: 'petelur',
    image: petelurImage,
    title: t('tentangPage.lokasi.items.petelur.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.petelur.loc1'), href: 'https://share.google/5YzIn3wIDYOi4qiMu' },
      { label: t('tentangPage.lokasi.items.petelur.loc2'), href: 'https://share.google/hbRvkkC9iA6Jas4Pk' },
      { label: t('tentangPage.lokasi.items.petelur.loc3'), href: 'https://maps.app.goo.gl/vkHuRwxokvJ1bTpb7?g_st=aw' },
    ],
    infoText: t('tentangPage.lokasi.items.petelur.info'),
    phone: '',
  },
  {
    id: 3,
    key: 'penetasan',
    image: penetasanImage,
    title: t('tentangPage.lokasi.items.penetasan.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.penetasan.loc1'), href: 'https://share.google/UkQ3lnVXxJdRhKCrj' },
    ],
    infoText: t('tentangPage.lokasi.items.penetasan.info'),
    phone: '',
  },
  {
    id: 4,
    key: 'rpa',
    image: rpaImage,
    title: t('tentangPage.lokasi.items.rpa.title'),
    locations: [
      { label: t('tentangPage.lokasi.items.rpa.loc1'), href: 'https://share.google/8AsYSZPcpkRYkyJzi' },
    ],
    infoText: t('tentangPage.lokasi.items.rpa.info'),
    phone: '',
  },
])

const locationItems = computed(() => (props.data.items.length ? props.data.items : fallbackItems.value))

const modalOpen = ref(false)
const modalItem = ref<LocationItem | null>(null)
const modalGallery = ref<string[]>([])

const openModal = (item: LocationItem) => {
  modalItem.value = item
  modalGallery.value = item.image ? [item.image, ...baseGallery.slice(1, 3)] : baseGallery
  modalOpen.value = true
  console.log(item)
}

const closeModal = () => {
  modalOpen.value = false
  modalItem.value = null
  modalGallery.value = []
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
        {{ props.data.title || t('tentangPage.lokasi.sectionTitle') }}
      </h2>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <UiLokasiCard
          v-for="item in locationItems"
          :key="item.key"
          class="cursor-pointer"
          :title="item.title"
          :locations="item.locations"
          :image-src="item.image"
          :fallback-image="modalMain"
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
        :whatsapp-href="modalItem.phone || ''"
        :images="modalGallery"
        @close="closeModal"
      />
    </div>
  </section>
</template>

<style scoped>
/* kept empty intentionally */
</style>
