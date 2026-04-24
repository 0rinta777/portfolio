<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCarousel } from '@/composables/useCarousel.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

// ── Edit projects here ──────────────────────────────────────────────────────
const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    image: 'https://placehold.co/600x400/ea2490/ffffff?text=Project+1',
  },
  {
    title: 'Project 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    image: 'https://placehold.co/600x400/111111/ea2490?text=Project+2',
  },
  {
    title: 'Project 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'https://placehold.co/600x400/ea2490/ffffff?text=Project+3',
  },
  {
    title: 'Project 4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    image: 'https://placehold.co/600x400/111111/ea2490?text=Project+4',
  },
  {
    title: 'Project 5',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    image: 'https://placehold.co/600x400/ea2490/ffffff?text=Project+5',
  },
]
// ───────────────────────────────────────────────────────────────────────────

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

// Centers the current card horizontally in the container
const translateX = computed(() =>
  containerWidth.value / 2 - (trackIdx.value + 0.5) * cardWidth.value
)

function cardStyle(i) {
  const dist = Math.abs(i - trackIdx.value)
  if (dist === 0) return { transform: 'scale(1)',    opacity: '1',   pointerEvents: 'auto' }
  if (dist === 1) return { transform: 'scale(0.9)',  opacity: '0.6', pointerEvents: 'none' }
  return              { transform: 'scale(0.75)',   opacity: '0',   pointerEvents: 'none' }
}

function isCenterCard(i) {
  return i === trackIdx.value
}

let ro = null
onMounted(() => {
  ro = new ResizeObserver(entries => {
    containerWidth.value = entries[0].contentRect.width
  })
  ro.observe(containerRef.value)
})
onUnmounted(() => ro?.disconnect())
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
              class="rounded-2xl overflow-hidden border transition-all duration-500 h-full"
              :class="isCenterCard(i)
                ? 'border-[#ea2490]/40 shadow-[0_8px_40px_rgba(234,36,144,0.18)] bg-[#f8f8f8] dark:bg-[#111111]'
                : 'border-black/10 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#111111]'"
              :style="cardStyle(i)"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full aspect-video object-cover"
                draggable="false"
              >
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
        <!-- Prev -->
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

        <!-- Dot indicators -->
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

        <!-- Next -->
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
</template>

<style scoped>
.works-title {
  font-size: clamp(56px, 7vw, 128px);
  line-height: 1.05;
}
</style>
