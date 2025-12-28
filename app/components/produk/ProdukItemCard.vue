<script setup lang="ts">
// import behindRight from '~/assets/images/produk/produk-behind-right.png'
// import behindLeft from '~/assets/images/produk/produk-behind-left.jpg'
// import topRight from '~/assets/images/produk/behind-1.jpg'
// import topLeft from '~/assets/images/produk/front-1.jpg'

interface Props {
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
  accent?: string
  index?: number
  stackSide?: 'left' | 'right'
  stackBaseImage?: string
  stackTopImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  accent: '#f6993c',
  index: undefined,
})

const router = useRouter()

const goToProduk = () => {
  router.push('/produk')
}

const isTopRight = computed(() => {
  if (props.stackSide) return props.stackSide === 'right'
  if (typeof props.index === 'number') return props.index % 2 === 1
  return !props.reverse
})

const baseImage = computed(() => props.stackBaseImage || props.image)
const topImage = computed(() => props.stackTopImage)
</script>

<template>
  <article v-reveal  class="reveal  grid lg:grid-cols-2 gap-8 items-center rounded-[20px] p-2 md:p-4 lg:p-2">
    <div :class="['space-y-4', props.reverse ? 'lg:order-2' : '']">
      <h3 class="text-2xl md:text-3xl font-semibold text-[#2f4172] leading-tight">
        {{ title }}
      </h3>
      <p class="text-base md:text-lg text-[#4b4b4b] leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div :class="[props.reverse ? 'lg:order-1' : '', 'relative flex justify-center']">
      <div class="group relative w-full max-w-xl">
        <div
          class="absolute -top-6 -left-6 w-20 h-20 rounded-[26px] blur-2xl opacity-40"
          :style="{ backgroundColor: props.accent }"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-10 -right-8 w-24 h-24 rounded-full blur-3xl opacity-50"
          :style="{ backgroundColor: props.accent }"
          aria-hidden="true"
        />

        <!-- Stacked images -->
        <div class="relative aspect-[4/3] w-full">
          <!-- Base image -->
          <div class="absolute inset-0 overflow-hidden rounded-[20px] bg-white shadow-xl">
            <img :src="baseImage" :alt="imageAlt" class="h-full w-full object-cover" loading="lazy" />
          </div>

          <!-- Top image (offset left/right depending on index) -->
          <div
            class="absolute top-1/2 h-[62%] w-[34%] -translate-y-1/2 overflow-hidden rounded-[20px] bg-white shadow-2xl ring-[20px] ring-[#fdeee0] transition-all duration-500 ease-out
              group-hover:-translate-y-[52%] group-hover:scale-[1.03]"
            :class="isTopRight ? 'right-0 translate-x-[10px]' : 'left-0 -translate-x-[10px]'"
          >
            <img :src="topImage" alt="" class="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
