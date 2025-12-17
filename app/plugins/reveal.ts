type RevealEl = HTMLElement & { __jpsRevealObserver?: IntersectionObserver }

const prefersReducedMotion = () =>
  import.meta.client && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches === true

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) document.documentElement.classList.add('js')

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      if (!import.meta.client) return

      if (prefersReducedMotion()) {
        el.classList.add('is-revealed')
        return
      }

      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-revealed')
        return
      }

      const target = el as RevealEl
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              target.classList.add('is-revealed')
              observer.unobserve(target)
              observer.disconnect()
              target.__jpsRevealObserver = undefined
            }
          }
        },
        { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
      )

      target.__jpsRevealObserver = observer
      observer.observe(target)
    },
    beforeUnmount(el: HTMLElement) {
      if (!import.meta.client) return
      const target = el as RevealEl
      target.__jpsRevealObserver?.unobserve(target)
      target.__jpsRevealObserver?.disconnect()
      target.__jpsRevealObserver = undefined
    },
  })
})

