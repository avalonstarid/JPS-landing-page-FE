<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'

const items = [
  { id: 't-2019-1', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
  { id: 't-2019-2', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
  { id: 't-2019-3', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
  { id: 't-2019-4', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
  { id: 't-2019-5', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
  { id: 't-2019-6', title: 'Laporan Tahunan 2019 PT JPS Tbk', href: '#' },
]

useHead(() => ({
  title: 'Laporan Tahunan | Relasi Investor',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Laporan Tahunan" />

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
