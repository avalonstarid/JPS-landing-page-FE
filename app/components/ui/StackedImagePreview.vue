<script setup lang="ts">
type Props = {
  topSrc: string
  backTopSrc: string
  backBottomSrc: string
  topAlt?: string
  backTopAlt?: string
  backBottomAlt?: string
}

withDefaults(defineProps<Props>(), {
  topAlt: '',
  backTopAlt: '',
  backBottomAlt: '',
})
</script>

<template>
  <div class="group relative w-full max-w-[420px] mx-auto aspect-[4/3] lg:aspect-square">
    <div
      class="absolute right-[2%] top-[8%] w-[68%] rotate-8 rounded-3xl overflow-hidden shadow-xl opacity-90 transition-all duration-500 ease-out
        group-hover:-translate-y-4 group-hover:translate-x-2 group-hover:rotate-[16deg] group-hover:opacity-100 group-hover:scale-[1.02]"
    >
      <img :src="backTopSrc" :alt="backTopAlt" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div
      class="absolute left-[2%] bottom-[4%] w-[72%] -rotate-8 rounded-3xl overflow-hidden shadow-xl opacity-85 transition-all duration-500 ease-out
        group-hover:translate-y-4 group-hover:-translate-x-2 group-hover:-rotate-[16deg] group-hover:opacity-100 group-hover:scale-[1.02]"
    >
      <img :src="backBottomSrc" :alt="backBottomAlt" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div
      class="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[34px] overflow-hidden shadow-2xl ring-4 ring-white transition-all duration-500 ease-out
        group-hover:scale-[1.06] group-hover:-translate-y-[52%] group-hover:rotate-[0.8deg]"
    >
      <img :src="topSrc" :alt="topAlt" class="h-full w-full object-cover" loading="lazy" />
    </div>

    <div
      class="pointer-events-none absolute inset-0 rounded-[34px] opacity-0 transition-opacity duration-500 ease-out
        group-hover:opacity-100"
      aria-hidden="true"
      style="background: radial-gradient(closest-side, rgba(246,153,60,0.18), rgba(246,153,60,0) 65%);"
    />
  </div>
</template>
