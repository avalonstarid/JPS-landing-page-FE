<script setup lang="ts">
import coverImage from '~/assets/images/laporan.png'

const items = [
  { id: 'k-2019-1', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
  { id: 'k-2019-2', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
  { id: 'k-2019-3', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
  { id: 'k-2019-4', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
  { id: 'k-2019-5', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
  { id: 'k-2019-6', title: 'Keterbukaan Informasi 2019 PT JPS Tbk', href: '#' },
]

useHead(() => ({
  title: 'Keterbukaan Informasi | Relasi Investor',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Keterbukaan Informasi" />

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <InvestorDocCard
            v-for="item in items"
            :key="item.id"
            :image-url="coverImage"
            :title="item.title"
            :href="item.href"
          />
        </div>
      </div>
    </section>
  </div>
</template>
