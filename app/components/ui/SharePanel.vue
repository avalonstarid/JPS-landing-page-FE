<script setup lang="ts">
const props = defineProps<{
  title: string
  copyLabel: string
  url?: string
}>()

const requestURL = useRequestURL()
const shareUrl = computed(() => props.url ?? requestURL.href)
const copied = ref(false)

const copyLink = async () => {
  if (process.server) {
    return
  }

  try {
    await navigator.clipboard.writeText(shareUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1600)
  } catch (error) {
    // Clipboard access may be blocked; fail silently.
    copied.value = false
  }
}

const shareIcons = [
  { icon: 'mdi-instagram', label: 'Instagram' },
  { icon: 'mdi-whatsapp', label: 'WhatsApp' },
  { icon: 'mdi-linkedin', label: 'LinkedIn' },
  { icon: 'mdi-twitter', label: 'X' },
  { icon: 'mdi-facebook', label: 'Facebook' },
]
</script>

<template>
  <div class="absolute right-[16px] w-full sm:w-auto rounded-3xl px-4 py-4">
    <p class="text-base font-semibold text-[#1b1f3b]">{{ title }}</p>
    <div class="mt-3 flex flex-wrap items-center gap-3">
      <button
        v-for="item in shareIcons"
        :key="item.label"
        type="button"
        class="w-11 h-11 rounded-full bg-white text-[#1b1f3b] flex items-center justify-center shadow-sm hover:shadow-md transition"
        :aria-label="item.label"
      >
        <i class="mdi" :class="item.icon" aria-hidden="true"></i>
      </button>
    </div>
    <div class="mt-4 space-y-2">
      <p class="text-sm font-medium text-[#1b1f3b]">{{ copyLabel }}</p>
      <div class="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2">
        <input
          :value="shareUrl"
          type="text"
          class="w-full bg-transparent text-sm text-gray-600 focus:outline-none"
          readonly
          aria-readonly="true"
        />
        <button
          type="button"
          class="w-9 h-9 rounded-full flex items-center justify-center text-[#1b1f3b] hover:bg-gray-100 transition"
          :aria-label="copied ? 'Copied' : 'Copy link'"
          @click="copyLink"
        >
          <i class="mdi" :class="copied ? 'mdi-check' : 'mdi-content-copy'" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>
