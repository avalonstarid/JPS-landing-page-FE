<script setup lang="ts">
// Default layout with navbar and footer
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <LayoutAppNavbar />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutAppFooter />
  </div>
</template>

