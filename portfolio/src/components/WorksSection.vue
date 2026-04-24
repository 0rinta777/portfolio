<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'
import { useCarousel } from '@/composables/useCarousel.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const projects = [
  {
    title: 'International Day 2025',
    description: 'Event posters and promotional materials.',
    cover: '/assets/intdaycover.png',
    type: 'gallery',
    images: [
      '/assets/intday/intdayA4.jpg',
      '/assets/intday/intdayTV.jpg',
    ],
  },
  {
    title: 'Photography',
    description: 'A selection of personal photography work.',
    cover: '/assets/photographycover.jpg',
    type: 'gallery',
    images: [
      '/assets/photography/church.jpg',
      '/assets/photography/countryside.jpg',
      '/assets/photography/couple.jpg',
      '/assets/photography/cph1.jpg',
      '/assets/photography/cph2.jpg',
      '/assets/photography/cph3.jpg',
      '/assets/photography/cph4.jpg',
      '/assets/photography/ferriswheel.jpg',
      '/assets/photography/fog.jpg',
      '/assets/photography/forest.jpg',
      '/assets/photography/kirkilai.jpg',
      '/assets/photography/lamp.jpg',
      '/assets/photography/mill.jpg',
      '/assets/photography/nature.jpg',
      '/assets/photography/portait1.jpg',
      '/assets/photography/portrait.jpg',
      '/assets/photography/portrait2.jpg',
      '/assets/photography/portrait3.jpg',
      '/assets/photography/ship.jpg',
      '/assets/photography/snow.jpg',
      '/assets/photography/table.jpg',
    ],
  },
  {
    title: 'BP',
    description: 'Print collateral and visual identity.',
    cover: '/assets/bpcover.png',
    type: 'gallery',
    images: [
      '/assets/bp/bpleaflet1.png',
      '/assets/bp/bpleaflet2.png',
      '/assets/bp/cover.png',
    ],
  },
  {
    title: 'AJC',
    description: 'Brand identity and print design.',
    cover: '/assets/ajccover.png',
    type: 'gallery',
    images: [
      '/assets/ajc/AJCleaflet1.jpg',
      '/assets/ajc/AJCleaflet2.jpg',
      '/assets/ajc/AJCposter.jpg',
    ],
  },
  {
    title: 'Brochure',
    description: 'Interactive digital brochure.',
    cover: '/assets/brochurecover.jpg',
    type: 'link',
    url: 'https://heyzine.com/flip-book/68cfafdf50.html',
  },
]

const { extended, trackIdx, current, isHovered, animated, next, prev, goTo, onTransitionEnd } =
  useCarousel(projects)

const { el, revealStyle } = useScrollReveal()

const containerRef = ref(null)
const containerWidth = ref(0)

const cardWidth = computed(() => {
  const w = containerWidth.value
  if (w >= 1024) return w / 3
  if (w >= 640)  return w * 0.75
  return w
})

const translateX = computed(() =>
  containerWidth.value / 2 - (trackIdx.value + 0.5) * cardWidth.value
)

function cardStyle(i) {
  const dist = Math.abs(i - trackIdx.value)
  if (dist === 0) return { transform: 'scale(1)',   opacity: '1',   pointerEvents: 'auto' }
  if (dist === 1) return { transform: 'scale(0.9)', opacity: '0.6', pointerEvents: 'none' }
  return              { transform: 'scale(0.75)',  opacity: '0',   pointerEvents: 'none' }
}

function isCenterCard(i) {
  return i === trackIdx.value
}

// ── Lightbox ────────────────────────────────────────────────────────────────
const lightboxProject = ref(null)

function handleCardClick(project) {
  if (project.type === 'gallery') {
    lightboxProject.value = project
  } else if (project.type === 'link') {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  }
}

function closeLightbox() {
  lightboxProject.value = null
}

watchEffect(() => {
  document.body.style.overflow = lightboxProject.value ? 'hidden' : ''
})

function onKeyDown(e) {
  if (e.key === 'Escape') closeLightbox()
}
// ────────────────────────────────────────────────────────────────────────────

let ro = null
onMounted(() => {
  ro = new ResizeObserver(entries => {
    containerWidth.value = entries[0].contentRect.width
  })
  ro.observe(containerRef.value)
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  ro?.disconnect()
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section
    ref="el"
    id="works"
    class="min-h-screen flex flex-col relative -mt-16"
  >
    <div class="flex-1 flex flex-col justify-start px-[122px] pt-0 pb-10">

      <h2
        class="works-title font-bold text-right mb-0 leading-tight text-black dark:text-white"
        :style="revealStyle(0)"
      >
        some of my <span class="text-[#ea2490]">works</span>
      </h2>

      <!-- Carousel -->
      <div
        ref="containerRef"
        class="relative overflow-hidden"
        :style="{ ...revealStyle(80), marginTop: '88px' }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Track -->
        <div
          class="flex"
          :style="{
            transform: `translateX(${translateX}px)`,
            transition: animated ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }"
          @transitionend="onTransitionEnd"
        >
          <div
            v-for="(project, i) in extended"
            :key="i"
            class="flex-shrink-0 px-3"
            :style="{ width: cardWidth + 'px' }"
          >
            <div
              class="rounded-2xl overflow-hidden border transition-all duration-500 h-full cursor-pointer group"
              :class="isCenterCard(i)
                ? 'border-[#ea2490]/40 shadow-[0_8px_40px_rgba(234,36,144,0.18)] bg-[#f8f8f8] dark:bg-[#111111]'
                : 'border-black/10 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#111111]'"
              :style="cardStyle(i)"
              @click="handleCardClick(project)"
            >
              <div class="overflow-hidden">
                <img
                  :src="project.cover"
                  :alt="project.title"
                  class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable="false"
                >
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold mb-2 text-black dark:text-white">
                  {{ project.title }}
                </h3>
                <p class="text-sm font-light leading-relaxed text-black/65 dark:text-white/65">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-6 mt-10 pt-10">
        <button
          @click="prev"
          class="w-10 h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center
                 hover:border-[#ea2490] hover:text-[#ea2490] text-black dark:text-white
                 transition-colors duration-200"
          aria-label="Previous project"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="flex items-center gap-2">
          <button
            v-for="(_, i) in projects"
            :key="i"
            @click="goTo(i)"
            class="h-2 rounded-full transition-all duration-300"
            :class="i === current
              ? 'w-6 bg-[#ea2490]'
              : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'"
            :aria-label="`Go to project ${i + 1}`"
          />
        </div>

        <button
          @click="next"
          class="w-10 h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center
                 hover:border-[#ea2490] hover:text-[#ea2490] text-black dark:text-white
                 transition-colors duration-200"
          aria-label="Next project"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lb-fade">
      <div
        v-if="lightboxProject"
        class="fixed inset-0 z-[200] bg-black/95 overflow-y-auto"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="fixed top-6 right-8 z-10 text-white hover:text-[#ea2490] transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Image column -->
        <div class="flex flex-col items-center gap-4 py-16 px-4">
          <img
            v-for="(src, i) in lightboxProject.images"
            :key="i"
            :src="src"
            :alt="`${lightboxProject.title} ${i + 1}`"
            class="max-w-[700px] w-full object-contain rounded-lg"
            loading="lazy"
          >
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.works-title {
  font-size: clamp(56px, 7vw, 128px);
  line-height: 1.05;
}

.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
</style>
