export const useImageFallback = () => {
  const applyFallback = (event: Event, fallback: string) => {
    const target = event.target as HTMLImageElement | null
    if (!target) return
    if (target.dataset.fallbackApplied === 'true') return
    target.dataset.fallbackApplied = 'true'
    target.src = fallback
  }

  return {
    applyFallback,
  }
}
