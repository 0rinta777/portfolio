<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCarousel } from '@/composables/useCarousel.js'

const props = defineProps({
  projects: { type: Array, required: true },
})

const emit = defineEmits(['select'])

const { extended, trackIdx, current, isHovered, animated, next, prev, goTo, onTransitionEnd } =
  useCarousel(props.projects)

const containerRef = ref(null)
const containerWidth = ref(0)

const cardWidth = computed(() => {
  const w = containerWidth.value
  if (w >= 1024) return w / 3
  if (w >= 640)  return w * 0.75
  return w * 0.88
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

function isClickable(project) {
  return project.type === 'gallery' || project.type === 'link'
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
  <!-- Carousel -->
  <div
    ref="containerRef"
    class="relative overflow-hidden"
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
          class="rounded-2xl overflow-hidden border transition-all duration-500 h-full group"
          :class="[
            isCenterCard(i)
              ? 'border-[#ea2490]/40 shadow-[0_8px_40px_rgba(234,36,144,0.18)] bg-[#f8f8f8] dark:bg-[#111111]'
              : 'border-black/10 dark:border-white/10 bg-[#f8f8f8] dark:bg-[#111111]',
            isClickable(project) ? 'cursor-pointer' : '',
          ]"
          :style="cardStyle(i)"
          @click="isClickable(project) && emit('select', project)"
        >
          <div class="overflow-hidden">
            <img
              v-if="project.cover"
              :src="project.cover"
              :alt="project.title"
              class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
              draggable="false"
            >
            <!-- Placeholder for projects without a cover yet -->
            <div
              v-else
              class="placeholder-cover w-full aspect-video flex items-center justify-center"
            >
              <span class="text-sm font-light tracking-widest uppercase text-black/40 dark:text-white/40">
                coming soon
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-black dark:text-white" :class="{ 'mb-2': project.description }">
              {{ project.title }}
            </h3>
            <p
              v-if="project.description"
              class="text-sm font-light leading-relaxed text-black/65 dark:text-white/65"
            >
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
      class="w-12 h-12 md:w-10 md:h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center
             hover:border-[#ea2490] hover:text-[#ea2490] text-black dark:text-white
             transition-colors duration-200"
      aria-label="Previous project"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div class="flex items-center gap-3 md:gap-2">
      <button
        v-for="(_, i) in projects"
        :key="i"
        @click="goTo(i)"
        class="h-3 md:h-2 rounded-full transition-all duration-300 min-w-[12px]"
        :class="i === current
          ? 'w-8 md:w-6 bg-[#ea2490]'
          : 'w-3 md:w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'"
        :aria-label="`Go to project ${i + 1}`"
      />
    </div>

    <button
      @click="next"
      class="w-12 h-12 md:w-10 md:h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center
             hover:border-[#ea2490] hover:text-[#ea2490] text-black dark:text-white
             transition-colors duration-200"
      aria-label="Next project"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.placeholder-cover {
  background:
    repeating-linear-gradient(
      135deg,
      rgba(234, 36, 144, 0.06) 0 12px,
      transparent 12px 24px
    ),
    rgba(234, 36, 144, 0.04);
}
</style>
