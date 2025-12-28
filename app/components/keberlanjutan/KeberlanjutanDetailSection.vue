<script setup lang="ts">
import KeberlanjutanInfoCard from '~/components/ui/KeberlanjutanCard.vue'

type Breadcrumb = {
  label: string
  to?: string
}

type Item = {
  title: string
  description: string
  image: string
  actionKey?: string
}

defineProps<{
  title: string
  breadcrumbs: Breadcrumb[]
  items: Item[]
}>()

const emit = defineEmits<{
  open: [string]
}>()
</script>

<template>
  <section class="section-padding">
    <div class="container-main space-y-10">
      <nav class="text-sm text-gray-500">
        <template v-for="(crumb, idx) in breadcrumbs" :key="`${crumb.label}-${idx}`">
          <NuxtLink v-if="crumb.to" :to="crumb.to" class="hover:text-gray-700">{{ crumb.label }}</NuxtLink>
          <span v-else class="text-gray-900">{{ crumb.label }}</span>
          <span v-if="idx < breadcrumbs.length - 1" class="mx-2">/</span>
        </template>
      </nav>

      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-[#3d4f92]">{{ title }}</h1>
      </div>

      <div class="space-y-12">
        <KeberlanjutanInfoCard
          v-for="(item, index) in items"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :image-src="item.image"
          :reverse="index % 2 === 1"
          @action="item.actionKey ? emit('open', item.actionKey) : null"
        />
      </div>
    </div>
  </section>
</template>
