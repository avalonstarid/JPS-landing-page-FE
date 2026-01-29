export const useImageFallback = () => {
  const applyFallback = (event: Event, fallback: string) => {
    const target = event.target as (HTMLImageElement | SVGImageElement | null)
    if (!target) return
    const dataset = (target as HTMLElement).dataset
    if (dataset?.fallbackApplied === 'true') return
    if (dataset) dataset.fallbackApplied = 'true'
    if ('src' in target) {
      target.removeAttribute('srcset')
      target.removeAttribute('sizes')
      target.src = fallback
      return
    }

    if (target.setAttribute) {
      target.setAttribute('href', fallback)
      target.setAttribute('xlink:href', fallback)
    }
    const svgHref = (target as SVGImageElement).href
    if (svgHref && typeof svgHref.baseVal === 'string') {
      svgHref.baseVal = fallback
    }
  }

  return {
    applyFallback,
  }
}
