<script setup lang="ts">
interface Props {
  direction?: 'up' | 'down' | 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'down',
  size: 'md',
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-4 h-4'
    case 'lg':
      return 'w-6 h-6'
    case 'md':
    default:
      return 'w-5 h-5'
  }
})

const rotationClass = computed(() => {
  switch (props.direction) {
    case 'up':
      return 'rotate-180'
    case 'left':
      return 'rotate-90'
    case 'right':
      return '-rotate-90'
    case 'down':
    default:
      return ''
  }
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    :class="[sizeClass, rotationClass, 'transition-transform duration-200']"
    aria-hidden="true"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
</template>

