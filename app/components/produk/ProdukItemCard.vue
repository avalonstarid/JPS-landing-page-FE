<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
  accent?: string
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  accent: '#f6993c',
})

const router = useRouter()

const goToProduk = () => {
  router.push('/produk')
}
</script>

<template>
  <article class="grid lg:grid-cols-2 gap-8 items-center rounded-[28px] p-2 md:p-4 lg:p-2">
    <div :class="['space-y-4', props.reverse ? 'lg:order-2' : '']">
      <h3 class="text-2xl md:text-3xl font-semibold text-[#2f4172] leading-tight">
        {{ title }}
      </h3>
      <p class="text-base md:text-lg text-[#4b4b4b] leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div :class="[props.reverse ? 'lg:order-1' : '', 'relative flex justify-center']">
      <div class="relative w-full max-w-xl">
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
        <div class="overflow-hidden rounded-[26px]">
          <img
            :src="image"
            :alt="imageAlt"
            class=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </article>
</template>
