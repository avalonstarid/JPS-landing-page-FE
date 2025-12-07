<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  titleClass?: string
  subtitleClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
})

const alignmentClass = computed(() => {
  switch (props.align) {
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    case 'center':
    default:
      return 'text-center'
  }
})
</script>

<template>
  <div :class="['mb-12', alignmentClass]">
    <h2 :class="['text-3xl md:text-4xl font-bold text-gray-900 mb-4', titleClass]">
      {{ title }}
    </h2>
    <p v-if="subtitle" :class="['text-lg text-gray-600 max-w-2xl', align === 'center' ? 'mx-auto' : '', subtitleClass]">
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>

