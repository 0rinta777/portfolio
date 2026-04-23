<script setup>
const star = 'https://www.figma.com/api/mcp/asset/1525ec7e-a2b2-4cb3-b61f-cba3d1c7231c'

const devSkills = [
  { src: 'https://www.figma.com/api/mcp/asset/af567565-01ab-44be-849b-24565f1855a5', label: 'HTML5' },
  { src: 'https://www.figma.com/api/mcp/asset/1ef3ac81-98b1-49ff-9da6-9f5d854cade5', label: 'JavaScript' },
  { src: 'https://www.figma.com/api/mcp/asset/c12a01c0-3560-495f-8422-5cfd23511a54', label: 'Figma' },
]

const designSkills = [
  { src: 'https://www.figma.com/api/mcp/asset/4dcbd2e0-6cb3-41a8-a200-6f5dd5334cdb', label: 'InDesign' },
  { src: 'https://www.figma.com/api/mcp/asset/c9c4eb4f-e60f-464a-a995-a76814fb16a4', label: 'Premiere' },
  { src: 'https://www.figma.com/api/mcp/asset/c2b850b2-474a-4c18-8b1b-dfc809144a9f', label: 'Photoshop' },
  { src: 'https://www.figma.com/api/mcp/asset/dc6c4ca8-b54e-4ce2-b728-5b2dd866406a', label: 'Illustrator' },
]
</script>

<template>
  <section id="skills" class="min-h-screen flex flex-col relative overflow-hidden">

    <!-- Decorative background glow -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div class="w-[560px] h-[560px] rounded-full border border-[#ea2490]/20 dark:border-[#ea2490]/30"></div>
    </div>
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div class="w-[340px] h-[340px] rounded-full bg-[#ea2490]/5 dark:bg-[#ea2490]/8 blur-3xl"></div>
    </div>

    <div class="relative flex-1 flex flex-col items-center justify-center px-8 py-28 gap-20">

      <!-- Heading + star -->
      <div class="flex flex-col items-center gap-6">
        <h2 class="skills-title font-bold text-center text-black dark:text-white">
          my skills
        </h2>
        <img :src="star" alt="" class="w-16 h-16 opacity-80">
      </div>

      <!-- Skill groups -->
      <div class="flex flex-col items-center gap-16 w-full max-w-4xl">

        <!-- Development row -->
        <div class="flex flex-col items-center gap-6">
          <p class="text-xs font-light tracking-[0.2em] uppercase text-[#ea2490]">Development</p>
          <div class="flex flex-wrap justify-center gap-6">
            <div
              v-for="skill in devSkills"
              :key="skill.label"
              class="skill-card flex flex-col items-center gap-3 px-8 py-6 rounded-2xl
                     border border-black/10 dark:border-white/10
                     bg-black/[0.02] dark:bg-white/[0.03]
                     hover:border-[#ea2490]/40 hover:bg-[#ea2490]/5
                     transition-all duration-200 cursor-default"
            >
              <img :src="skill.src" :alt="skill.label" class="w-14 h-14 object-contain">
              <span class="text-[13px] font-light text-black/70 dark:text-white/70">{{ skill.label }}</span>
            </div>
          </div>
        </div>

        <!-- Design row -->
        <div class="flex flex-col items-center gap-6">
          <p class="text-xs font-light tracking-[0.2em] uppercase text-[#ea2490]">Design & Creative</p>
          <div class="flex flex-wrap justify-center gap-6">
            <div
              v-for="skill in designSkills"
              :key="skill.label"
              class="skill-card flex flex-col items-center gap-3 px-8 py-6 rounded-2xl
                     border border-black/10 dark:border-white/10
                     bg-black/[0.02] dark:bg-white/[0.03]
                     hover:border-[#ea2490]/40 hover:bg-[#ea2490]/5
                     transition-all duration-200 cursor-default"
            >
              <img :src="skill.src" :alt="skill.label" class="w-14 h-14 object-contain">
              <span class="text-[13px] font-light text-black/70 dark:text-white/70">{{ skill.label }}</span>
            </div>
          </div>
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
