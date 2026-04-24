import { ref, onMounted, onUnmounted } from 'vue'

const CLONES = 2

export function useCarousel(items, interval = 4000) {
  const count = items.length

  const extended = [
    ...items.slice(-CLONES),
    ...items,
    ...items.slice(0, CLONES),
  ]

  const trackIdx = ref(CLONES)
  const current = ref(0)
  const isHovered = ref(false)
  const animated = ref(true)

  function next() {
    trackIdx.value++
    current.value = (current.value + 1) % count
  }

  function prev() {
    trackIdx.value--
    current.value = (current.value - 1 + count) % count
  }

  function goTo(i) {
    trackIdx.value += i - current.value
    current.value = i
  }

  function onTransitionEnd(e) {
    if (e.propertyName !== 'transform') return
    if (trackIdx.value >= count + CLONES) {
      animated.value = false
      trackIdx.value = CLONES
      requestAnimationFrame(() => requestAnimationFrame(() => { animated.value = true }))
    } else if (trackIdx.value < CLONES) {
      animated.value = false
      trackIdx.value = count + CLONES - 1
      requestAnimationFrame(() => requestAnimationFrame(() => { animated.value = true }))
    }
  }

  let timer = null
  onMounted(() => {
    timer = setInterval(() => { if (!isHovered.value) next() }, interval)
  })
  onUnmounted(() => { if (timer) clearInterval(timer) })

  return { extended, trackIdx, current, isHovered, animated, next, prev, goTo, onTransitionEnd }
}
