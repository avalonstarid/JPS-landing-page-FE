<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="route-loader">
    <div
      v-if="show"
      class="fixed inset-0 z-[9999] grid place-items-center bg-white/70 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div class="flex flex-col items-center gap-3">
        <div class="route-spinner" />
        <p class="text-sm font-medium text-gray-700">Loading…</p>
      </div>
    </div>
  </Transition>
</template>

