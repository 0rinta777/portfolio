<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, revealStyle } = useScrollReveal()

const skills = [
  { src: 'https://www.figma.com/api/mcp/asset/af567565-01ab-44be-849b-24565f1855a5', label: 'Figma', wide: true },
  { src: 'https://www.figma.com/api/mcp/asset/1ef3ac81-98b1-49ff-9da6-9f5d854cade5', label: 'JavaScript' },
  { src: 'https://www.figma.com/api/mcp/asset/c12a01c0-3560-495f-8422-5cfd23511a54', label: 'HTML5' },
  { src: 'https://www.figma.com/api/mcp/asset/4dcbd2e0-6cb3-41a8-a200-6f5dd5334cdb', label: 'InDesign' },
  { src: 'https://www.figma.com/api/mcp/asset/c9c4eb4f-e60f-464a-a995-a76814fb16a4', label: 'Premiere' },
  { src: 'https://www.figma.com/api/mcp/asset/c2b850b2-474a-4c18-8b1b-dfc809144a9f', label: 'Photoshop' },
  { src: 'https://www.figma.com/api/mcp/asset/dc6c4ca8-b54e-4ce2-b728-5b2dd866406a', label: 'Illustrator' },
]
</script>

<template>
  <section
    ref="el"
    id="skills"
    class="min-h-screen flex flex-col relative overflow-hidden"
  >
    <div class="relative flex-1 flex flex-col items-center justify-center px-8 pt-12 pb-28 gap-20">

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
          <img :src="skill.src" :alt="skill.label" :class="skill.wide ? 'max-h-14 max-w-14 w-auto h-auto' : 'w-14 h-14 object-contain'">
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
