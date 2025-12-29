<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'
import announcement2023 from '~/assets/laporan/RUPS/PENGUMUMAN RUPST AYAM.f481fac048c678b66647.pdf'
import announcement2024 from '~/assets/laporan/RUPS/PENGUMUMAN RUPST AYAM_Bahasa.d40ff18e76641c42a188.pdf'
import minutesPubex from '~/assets/laporan/RUPS/Risalah Pubex PT Janu Putra Sejahtera Tbk_corsec.b4aafa0e8303c8bea3d5.pdf'
import invitation2024 from '~/assets/laporan/RUPS/Pemanggilan 2 bahasa Janu Tahun Buku 2024.f3ab5c7dd7dbaa043c59.pdf'

const items = [
  { id: 'r-2023-1', title: 'PENGUMUMAN RUPST AYAM 2023', href: announcement2023 },
  { id: 'r-2023-2', title: 'Risalah Pubex PT Janu Putra Sejahtera Tbk', href: minutesPubex },
  { id: 'r-2024-1', title: 'Pemanggilan 2 bahasa Janu Tahun Buku 2024', href: invitation2024 },
  { id: 'r-2024-2', title: 'PENGUMUMAN RUPST AYAM 2024', href: announcement2024 },
]

useHead(() => ({
  title: 'RUPS | Relasi Investor',
}))
</script>

<template>
  <div class="bg-[#fdeee0]">
    <InvestorHeroSection title="Relasi Investor" />

    <section class="section-padding">
      <div class="container-main space-y-10">
        <InvestorPageTitle title="RUPS" />

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
