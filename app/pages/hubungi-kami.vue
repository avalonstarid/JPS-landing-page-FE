<script setup lang="ts">
import heroImage from '~/assets/images/hubungi-kami/hubungi-kami.jpg'
import whiteCardImage from '~/assets/images/white.png'
import UiCard from '~/components/ui/Card.vue'
import instagramIcon from '~/components/hubungi-kami/instagram.png'
import linkedinIcon from '~/components/hubungi-kami/linkedin.png'
import gmailIcon from '~/components/hubungi-kami/gmail.png'
import whatsappIcon from '~/components/hubungi-kami/whatsapp.png'

const { t } = useI18n()

useHead(() => ({
  title: t('contactPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('contactPage.meta.description'),
    },
  ],
}))

const form = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
})

const onSubmit = () => {
  // Intentionally no-op (UI only)
}

const mapSrc = 'https://www.google.com/maps?q=-7.763563,110.421265&z=17&output=embed'
const emailAddress = 'marketing@jpsejahtera.co.id'
const emailHref = `mailto:${emailAddress}`

const contactCards = computed(() => [
  {
    key: 'whatsapp',
    title: t('contactPage.contactMore.cards.whatsapp.title'),
    description: '0878 0941 2474',
    iconUrl: whatsappIcon,
    iconBgClass: 'bg-[#EAF7EF]',
    href: 'https://wa.me/6287809412474',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    key: 'email',
    title: t('contactPage.contactMore.cards.email.title'),
    description: 'marketing@jpsejah\ntera.co.id',
    iconUrl: gmailIcon,
    iconBgClass: 'bg-[#FFF0F0]',
    href: emailHref,
    target: '_self',
    rel: null,
  },
  {
    key: 'instagram',
    title: t('contactPage.contactMore.cards.instagram.title'),
    description: t('contactPage.contactMore.cards.instagram.value'),
    iconUrl: instagramIcon,
    iconBgClass: 'bg-[#FFF2F9]',
    href: 'https://www.instagram.com/januputrasejahtera/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    key: 'linkedin',
    title: t('contactPage.contactMore.cards.linkedin.title'),
    description: t('contactPage.contactMore.cards.linkedin.value'),
    iconUrl: linkedinIcon,
    iconBgClass: 'bg-[#EAF3FF]',
    href: 'https://www.linkedin.com/company/janu-putra-group/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
])
</script>

<template>
  <div class="bg-[#fdeee0]">
    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      :aria-label="t('contactPage.hero.title')"
    >
      <div class="absolute inset-0">
        <img :src="heroImage" :alt="t('contactPage.hero.title')" class="w-full h-full object-cover" loading="eager" />
        <div class="absolute inset-0 bg-black/45" />
      </div>

      <div class="relative z-10 container-main py-20 text-center space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white">{{ t('contactPage.hero.title') }}</h1>
        <p class="text-lg md:text-2xl font-semibold text-white/95 max-w-3xl mx-auto leading-snug">
          {{ t('contactPage.hero.subtitleLine1') }}<br />
          {{ t('contactPage.hero.subtitleLine2') }}
        </p>
      </div>
    </section>

    <!-- Kirim Pesan ke Kami -->
    <section class="section-padding" aria-labelledby="kirim-pesan">
      <div class="container-main space-y-10">
        <h2 id="kirim-pesan" class="text-center text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('contactPage.message.title') }}
        </h2>

        <div class="grid gap-10 lg:grid-cols-2 items-start">
          <form class="space-y-4" @submit.prevent="onSubmit">
            <div class="space-y-1">
              <label class="text-sm font-semibold text-[#3d4f92]" for="nama">{{ t('contactPage.message.form.fullNameLabel') }}</label>
              <input
                id="nama"
                v-model="form.name"
                type="text"
                :placeholder="t('contactPage.message.form.fullNamePlaceholder')"
                class="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1f2937] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/40"
              />
            </div>

            <div class="space-y-1">
              <label class="text-sm font-semibold text-[#3d4f92]" for="email">{{ t('contactPage.message.form.emailLabel') }}</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                :placeholder="t('contactPage.message.form.emailPlaceholder')"
                class="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1f2937] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/40"
              />
            </div>

            <div class="space-y-1">
              <label class="text-sm font-semibold text-[#3d4f92]" for="telepon">{{ t('contactPage.message.form.phoneLabel') }}</label>
              <input
                id="telepon"
                v-model="form.phone"
                type="tel"
                :placeholder="t('contactPage.message.form.phonePlaceholder')"
                class="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1f2937] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/40"
              />
            </div>

            <div class="space-y-1">
              <label class="text-sm font-semibold text-[#3d4f92]" for="lokasi">{{ t('contactPage.message.form.locationLabel') }}</label>
              <input
                id="lokasi"
                v-model="form.location"
                type="text"
                :placeholder="t('contactPage.message.form.locationPlaceholder')"
                class="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1f2937] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/40"
              />
            </div>

            <div class="space-y-1">
              <label class="text-sm font-semibold text-[#3d4f92]" for="pesan">{{ t('contactPage.message.form.messageLabel') }}</label>
              <textarea
                id="pesan"
                v-model="form.message"
                rows="5"
                :placeholder="t('contactPage.message.form.messagePlaceholder')"
                class="w-full rounded-xl bg-white px-4 py-3 text-sm text-[#1f2937] placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#f6993c]/40"
              />
            </div>

            <button
              type="submit"
              class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
              :aria-label="t('contactPage.message.form.submit')"
            >
              {{ t('contactPage.message.form.submit') }}
              <i class="mdi mdi-arrow-right-circle-outline text-lg" aria-hidden="true" />
            </button>
          </form>

          <div class="space-y-4">
            <div class="rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-white">
              <iframe
                :src="mapSrc"
                :title="t('contactPage.message.mapTitle')"
                class="w-full h-[320px] lg:h-[420px]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>

            <div class="flex items-start gap-3 text-sm text-[#1f2937]">
              <i class="mdi mdi-map-marker text-[#f6993c] text-2xl leading-none" aria-hidden="true" />
              <p class="leading-snug">
                {{ t('contactPage.message.address') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontak Lebih Lanjut -->
    <section class="section-padding pt-0" aria-labelledby="kontak-lebih-lanjut">
      <div class="container-main space-y-10">
        <h2 id="kontak-lebih-lanjut" class="text-center text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ t('contactPage.contactMore.title') }}
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="card in contactCards"
            :key="card.key"
            :href="card.href"
            :target="card.target ?? null"
            :rel="card.rel ?? null"
            class="block"
            :aria-label="card.title"
          >
            <UiCard
              :image-url="whiteCardImage"
              :company="card.title"
              :time-ago="''"
              :title="''"
              :description="card.description"
              :icon-class="card.iconClass"
              :icon-url="card.iconUrl"
              :icon-bg-class="card.iconBgClass"
              :icon-color-class="card.iconColorClass"
              :is-white="true"
              variant="simple"
              :height="269"
              :fill-parent="true"
              :aria-label="card.title"
              :class="['contact-more-card', { 'contact-more-card-email': card.key === 'email' }]"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
:deep(.contact-more-card .text-base) {
  font-size: 1.125rem;
  line-height: 1.65rem;
}

:deep(.contact-more-card .text-sm) {
  font-size: 0.975rem;
  line-height: 1.45rem;
}

@media (min-width: 1024px) {
  :deep(.contact-more-card-email .text-sm) {
    white-space: pre-line;
  }
}
</style>
