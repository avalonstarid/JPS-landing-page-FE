<script setup lang="ts">
const heroImage = '/images/hubungi-kami/hubungi-kami.jpg'
const whiteCardImage = '/images/white.png'
import UiCard from '~/components/ui/Card.vue'
const instagramIcon = '/images/hubungi-kami/instagram.png'
const linkedinIcon = '/images/hubungi-kami/linkedin.png'
const gmailIcon = '/images/hubungi-kami/gmail.png'
const whatsappIcon = '/images/hubungi-kami/whatsapp.png'
const { t } = useI18n()
const config = useRuntimeConfig()
const { fetcher } = useApiFetch()
const { mapHubungiKamiData } = useHomeMapper()
const { applyFallback } = useImageFallback()

const { data: contactResponse } = await useAsyncData('hubungi-kami', async () => {
  try {
    return await fetcher('/hubungi-kami', {})
  } catch (error) {
    return { error: true }
  }
})

const contactData = computed(() => {
  return (contactResponse.value as { data?: unknown })?.data ?? null
})

const defaultContact = {
  hero: {
    background: '',
    title: '',
    subtitle: '',
  },
  message: {
    title: '',
    mapLink: '',
    address: '',
  },
  contact: {
    title: '',
    items: [],
  },
  seo: {
    title: '',
    description: '',
    url: '',
    type: '',
    siteName: '',
    locale: '',
    robots: '',
    canonicalUrl: '',
  },
}

const mappedContact = computed(() => mapHubungiKamiData(contactData.value as any) || defaultContact)

useHead(() => ({
  title: mappedContact.value.seo.title || t('contactPage.meta.title'),
  meta: [
    {
      name: 'description',
      content: mappedContact.value.seo.description || t('contactPage.meta.description'),
    },
    {
      property: 'og:title',
      content: mappedContact.value.seo.title || t('contactPage.meta.title'),
    },
    {
      property: 'og:description',
      content: mappedContact.value.seo.description || t('contactPage.meta.description'),
    },
    {
      property: 'og:type',
      content: mappedContact.value.seo.type || 'website',
    },
    {
      property: 'og:url',
      content: mappedContact.value.seo.url || `${config.public.siteUrl}/hubungi-kami`,
    },
    {
      property: 'og:site_name',
      content: mappedContact.value.seo.siteName || config.public.siteName,
    },
    {
      property: 'og:locale',
      content: mappedContact.value.seo.locale || 'id_ID',
    },
    {
      name: 'robots',
      content: mappedContact.value.seo.robots || 'index, follow',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: mappedContact.value.seo.canonicalUrl || `${config.public.siteUrl}/hubungi-kami`,
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

const isSubmitting = ref(false)
const errors = reactive({
  name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
})

const clearErrors = () => {
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.location = ''
  errors.message = ''
}

const validateForm = () => {
  clearErrors()
  let isValid = true

  if (!form.name.trim()) {
    errors.name = t('contactPage.message.form.fullNameLabel')
    isValid = false
  }
  if (!form.email.trim()) {
    errors.email = t('contactPage.message.form.emailLabel')
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Email tidak valid'
    isValid = false
  }
  if (!form.phone.trim()) {
    errors.phone = t('contactPage.message.form.phoneLabel')
    isValid = false
  }
  if (!form.location.trim()) {
    errors.location = t('contactPage.message.form.locationLabel')
    isValid = false
  }
  if (!form.message.trim()) {
    errors.message = t('contactPage.message.form.messageLabel')
    isValid = false
  }

  return isValid
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.location = ''
  form.message = ''
}

const onSubmit = async () => {
  if (isSubmitting.value) return
  if (!validateForm()) return
  isSubmitting.value = true
  try {
    await fetcher('/contact-us', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        location: form.location,
        message: form.message,
      },
    })
  resetForm()
  clearErrors()
  } catch (error) {
    // keep form state on failure
  } finally {
    isSubmitting.value = false
  }
}

const mapSrc = computed(() => mappedContact.value.message.mapLink || 'https://www.google.com/maps?q=-7.763563,110.421265&z=17&output=embed')
const emailAddress = 'marketing@jpsejahtera.co.id'
const emailHref = `mailto:${emailAddress}`

const contactCards = computed(() => {
  const fallbackCards = [
    {
      key: 'whatsapp',
      title: t('contactPage.contactMore.cards.whatsapp.title'),
      description: '0878 8548 3781',
      iconUrl: whatsappIcon,
      iconBgClass: 'bg-[#EAF7EF]',
      href: 'https://wa.me/6287885483781',
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
  ]

  if (!mappedContact.value.contact.items.length) return fallbackCards

  return mappedContact.value.contact.items.map((item) => {
    const fallback = fallbackCards.find((card) => card.key === item.key) || fallbackCards[0]
    const iconUrl = item.key === 'instagram'
      ? instagramIcon
      : item.key === 'linkedin'
        ? linkedinIcon
        : item.key === 'email'
          ? gmailIcon
          : whatsappIcon

    const iconBgClass = item.key === 'instagram'
      ? 'bg-[#FFF2F9]'
      : item.key === 'linkedin'
        ? 'bg-[#EAF3FF]'
        : item.key === 'email'
          ? 'bg-[#FFF0F0]'
          : 'bg-[#EAF7EF]'

    return {
      key: item.key || fallback.key,
      title: fallback.title,
      description: item.value || fallback.description,
      iconUrl,
      iconBgClass,
      href: item.link || fallback.href,
      target: item.key === 'email' ? '_self' : '_blank',
      rel: item.key === 'email' ? null : 'noopener noreferrer',
    }
  })
})
</script>

<template>
  <div class="bg-[#fdeee0]">
    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      :aria-label="t('contactPage.hero.title')"
    >
      <div class="absolute inset-0">
        <NuxtImg
          :src="mappedContact.hero.background || heroImage"
          :alt="mappedContact.hero.title || t('contactPage.hero.title')"
          class="w-full h-full object-cover"
          loading="eager"
          @error="(event) => applyFallback(event, heroImage)"
        />
        <div class="absolute inset-0 bg-black/45" />
      </div>

      <div class="relative z-10 container-main py-20 text-center space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white">
          {{ mappedContact.hero.title || t('contactPage.hero.title') }}
        </h1>
        <p class="text-lg md:text-2xl font-semibold text-white/95 max-w-3xl mx-auto leading-snug">
          {{ mappedContact.hero.subtitle || `${t('contactPage.hero.subtitleLine1')} ${t('contactPage.hero.subtitleLine2')}` }}
        </p>
      </div>
    </section>

    <!-- Kirim Pesan ke Kami -->
    <section class="section-padding" aria-labelledby="kirim-pesan">
      <div class="container-main space-y-10">
        <h2 id="kirim-pesan" class="text-center text-3xl md:text-4xl font-bold text-[#3d4f92]">
          {{ mappedContact.message.title || t('contactPage.message.title') }}
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
              <p v-if="errors.name" class="text-xs text-red-600">Wajib diisi</p>
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
              <p v-if="errors.email" class="text-xs text-red-600">{{ errors.email === 'Email tidak valid' ? errors.email : 'Wajib diisi' }}</p>
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
              <p v-if="errors.phone" class="text-xs text-red-600">Wajib diisi</p>
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
              <p v-if="errors.location" class="text-xs text-red-600">Wajib diisi</p>
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
              <p v-if="errors.message" class="text-xs text-red-600">Wajib diisi</p>
            </div>

            <button
              type="submit"
              class="inline-flex items-center gap-2 rounded-full bg-[#f6993c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-70"
              :aria-label="t('contactPage.message.form.submit')"
              :disabled="isSubmitting"
            >
              <span>{{ t('contactPage.message.form.submit') }}</span>
              <span v-if="isSubmitting" class="h-4 w-4 rounded-full border-2 border-white/60 border-t-white animate-spin" aria-hidden="true" />
              <i v-else class="mdi mdi-arrow-right-circle-outline text-lg" aria-hidden="true" />
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
                {{ mappedContact.message.address || t('contactPage.message.address') }}
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
          {{ mappedContact.contact.title || t('contactPage.contactMore.title') }}
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

:deep(.contact-more-card-email p) {
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (min-width: 1024px) {
  :deep(.contact-more-card-email .text-sm) {
    white-space: pre-line;
  }
}
</style>
