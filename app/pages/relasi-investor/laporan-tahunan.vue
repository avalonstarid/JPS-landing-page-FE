<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'
import annualReport2023 from '~/assets/laporan/Annual Report/AnnualReport2023-AYAM-att1.6c1341ede808f00950ca.pdf'
import annualReport2024 from '~/assets/laporan/Annual Report/Annual Report AYAM 2024.4e6c1736ea6fba7e28d9.pdf'

const items = [
  { id: 't-2023-1', title: 'Annual Report AYAM 2023', href: annualReport2023 },
  { id: 't-2024-1', title: 'Annual Report AYAM 2024', href: annualReport2024 },
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
