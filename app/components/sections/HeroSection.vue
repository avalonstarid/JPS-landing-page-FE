<script setup lang="ts">
// Hero section with full viewport height and background image
</script>

<template>
  <section
    id="beranda"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    aria-label="Hero section"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&h=1080&fit=crop"
        alt="Peternakan ayam PT Janu Putra Sejahtera"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-main py-20 lg:py-32">
      <div class="max-w-3xl text-center md:text-left">
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          PT Janu Putra Sejahtera
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl lg:text-3xl font-medium text-primary-400 mb-6">
          Perusahaan Peternakan Terintegrasi
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
          Janu Putra Sejahtera berkomitmen menjadi perusahaan ayam integrator terkemuka di Indonesia yang memberikan
          kontribusi positif bagi peternak ayam dan masyarakat.
        </p>

        <!-- CTA Button -->
        <UiBaseButton
          variant="primary"
          size="lg"
          class="group"
          aria-label="Lihat informasi selengkapnya tentang perusahaan"
        >
          <span>Selengkapnya</span>
          <UiIconArrowRight
            size="md"
            class="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </UiBaseButton>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div class="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

