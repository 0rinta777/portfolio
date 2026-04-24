<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, revealStyle } = useScrollReveal()

const portrait = 'https://www.figma.com/api/mcp/asset/eeb61041-141d-4a01-bf7f-239659ab4027'
const camera = 'https://www.figma.com/api/mcp/asset/4d0ef7d9-a56c-4cea-8ccc-0a2d9e3ac2db'
</script>

<template>
  <section
    ref="el"
    id="about"
    class="min-h-screen flex flex-col relative overflow-hidden"
  >
    <div class="flex-1 flex items-center px-[122px] py-20 gap-16">
      <!-- Left content -->
      <div class="flex flex-col gap-10 flex-1 max-w-[660px]">
        <h2
          class="about-title font-bold leading-tight text-black dark:text-white"
          :style="revealStyle(0)"
        >
          nice to<br>meet you!
        </h2>

        <p
          class="text-[20px] font-light leading-relaxed text-[#ea2490]"
          :style="revealStyle(80)"
        >
          I'm Orinta — a creative based in Denmark with a passion for design, photography, and frontend development. I love bringing ideas to life through visual storytelling and clean, thoughtful interfaces.
        </p>

        <div class="flex gap-6 mt-2" :style="revealStyle(160)">
          <a
            href="#"
            class="text-[15px] font-normal tracking-wide px-8 py-4 rounded-full no-underline inline-block
                   border border-black/80 dark:border-white/70
                   text-black dark:text-white
                   hover:bg-[#ea2490] hover:border-[#ea2490] hover:text-white
                   transition-colors duration-200"
          >
            Video CV
          </a>
          <a
            href="#"
            class="text-[15px] font-normal tracking-wide px-8 py-4 rounded-full no-underline inline-block
                   border border-black/80 dark:border-white/70
                   text-black dark:text-white
                   hover:bg-[#ea2490] hover:border-[#ea2490] hover:text-white
                   transition-colors duration-200"
          >
            CV.pdf
          </a>
        </div>
      </div>

      <!-- Right: photos -->
      <div
        class="relative flex-shrink-0 w-[420px] h-[580px] hidden lg:block"
        :style="revealStyle(240)"
      >
        <!-- Camera image (background) -->
        <div class="absolute -right-8 top-0 w-[340px] h-full rounded-2xl overflow-hidden opacity-80 rotate-90">
          <img :src="camera" alt="" class="w-full h-full object-cover">
        </div>
        <!-- Portrait (foreground) -->
        <div class="absolute left-0 top-[10%] w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(234,36,144,0.2)]">
          <img :src="portrait" alt="Orinta Juodgudyte" class="w-full h-full object-cover object-top">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-title {
  font-size: clamp(64px, 8vw, 128px);
  line-height: 1.05;
}
</style>
