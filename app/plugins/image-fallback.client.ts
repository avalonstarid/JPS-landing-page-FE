import { useImageFallback } from '@/composables/useImageFallback'

export default defineNuxtPlugin(() => {
  const { applyFallback } = useImageFallback()
  const fallback = '/images/svg-main.svg'

  const handler = (event: Event) => {
    const target = event.target as Element | null
    if (!target) return
    if (target instanceof HTMLImageElement || (typeof SVGImageElement !== 'undefined' && target instanceof SVGImageElement)) {
      applyFallback(event, fallback)
    }
  }

  window.addEventListener('error', handler, true)
})
