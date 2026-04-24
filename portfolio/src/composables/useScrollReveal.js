import { ref, onMounted, onUnmounted } from 'vue'

const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const DURATION = 1600

export function useScrollReveal(threshold = 0.20) {
  const el = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  function revealStyle(delay = 0) {
    return {
      opacity: isVisible.value ? '1' : '0',
      transform: isVisible.value
        ? 'translateY(0px) scale(1)'
        : 'translateY(60px) scale(0.96)',
      transition: `opacity ${DURATION}ms ${EASING}, transform ${DURATION}ms ${EASING}`,
      transitionDelay: `${delay}ms`,
      willChange: 'transform, opacity',
    }
  }

  return { el, isVisible, revealStyle }
}
