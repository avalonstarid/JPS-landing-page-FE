<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'
import prospektus2023 from '~/assets/laporan/prospektus/prospektus-2023.pdf'

const items = [
  { id: 'p-2023-1', title: 'Prospektus 2023', href: prospektus2023 },
]

useHead(() => ({
  title: 'Prospektus | Relasi Investor',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="Prospektus" />

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
