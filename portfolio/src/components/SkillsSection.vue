<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, revealStyle } = useScrollReveal()

const skills = [
  { src: '/assets/figma.svg', label: 'Figma', wide: true },
  { src: '/assets/js.svg',    label: 'JavaScript' },
  { src: '/assets/html.svg',  label: 'HTML5' },
  { src: '/assets/id.svg',    label: 'InDesign' },
  { src: '/assets/pr.svg',    label: 'Premiere' },
  { src: '/assets/ps.svg',    label: 'Photoshop' },
  { src: '/assets/ai.svg',    label: 'Illustrator' },
]
</script>

<template>
  <section
    ref="el"
    id="skills"
    class="min-h-screen flex flex-col relative overflow-hidden"
  >
    <div class="relative flex-1 flex flex-col items-center justify-start px-8 pt-20 pb-28 gap-20">

      <h2
        class="skills-title font-bold text-center text-black dark:text-white"
        :style="revealStyle(0)"
      >
        my skills
      </h2>

      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="(skill, i) in skills"
          :key="skill.label"
          class="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl
                 border border-black/10 dark:border-white/10
                 bg-black/[0.02] dark:bg-white/[0.03]
                 hover:border-[#ea2490]/40 hover:bg-[#ea2490]/5
                 transition-all duration-200 cursor-default"
          :style="revealStyle(i * 80)"
        >
          <img
            :src="skill.src"
            :alt="skill.label"
            :class="skill.wide ? 'max-h-14 max-w-14 w-auto h-auto' : 'w-14 h-14 object-contain'"
            class=""
          >
          <span class="text-[13px] font-light text-black/70 dark:text-white/70">{{ skill.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-title {
  font-size: clamp(64px, 8vw, 128px);
  line-height: 1.05;
}
</style>
