<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="text-center text-4xl font-bold text-[#3d4f92]">
    {{ title }}
  </h2>
</template>

