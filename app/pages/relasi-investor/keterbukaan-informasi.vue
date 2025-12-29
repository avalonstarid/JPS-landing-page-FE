<script setup lang="ts">
import coverImage from '~/assets/images/book-laporan.jpg'
import disclosureShort from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Keterbukaan Informasi_short_041223.a061f70f4fc396b170dd.pdf'
import disclosureFull from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Keterbukaan Informasi_041223.e06bcfcdc321591563e0.pdf'
import appraisalNgawis from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Hasil Penilaian Aset Ngawis.895d6ad8daac5e09b08f.pdf'
import appraisalTuksono from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Hasil Penilaian Aset Tuksono.e185c7d17514e447a828.pdf'
import fairnessNgawis from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Pendapat Kewajaran - Tanah Ngawis.a044f0162379cbe47e8f.pdf'
import fairnessTuksono from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Pendapat Kewajaran - Tanah Tuksono.63bf880b6aaf2bae8517.pdf'
import summaryNgawis from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Pendapat Kewajaran Ringkas - Tanah Ngawis.cbfde83e81c7851fe59e.pdf'
import summaryTuksono from '~/assets/laporan/Keterbukaan Informasi/[AYAM] Laporan Pendapat Kewajaran Ringkas - Tanah Tuksono.c90f0999d6cb99842ede.pdf'

const items = [
  { id: 'k-2023-1', title: '[AYAM] Keterbukaan Informasi_short', href: disclosureShort },
  { id: 'k-2023-2', title: '[AYAM] Keterbukaan Informasi', href: disclosureFull },
  { id: 'k-2023-3', title: '[AYAM] Laporan Hasil Penilaian Aset Ngawis', href: appraisalNgawis },
  { id: 'k-2023-4', title: '[AYAM] Laporan Hasil Penilaian Aset Tuksono', href: appraisalTuksono },
  { id: 'k-2023-5', title: '[AYAM] Laporan Pendapat Kewajaran - Tanah Ngawis', href: fairnessNgawis },
  { id: 'k-2023-6', title: '[AYAM] Laporan Pendapat Kewajaran - Tanah Tuksono pdf', href: fairnessTuksono },
  { id: 'k-2023-7', title: '[AYAM] Laporan Pendapat Kewajaran Ringkas - Tanah Ngawis', href: summaryNgawis },
  { id: 'k-2023-8', title: '[AYAM] Laporan Pendapat Kewajaran Ringkas - Tanah Tuksono', href: summaryTuksono },
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
