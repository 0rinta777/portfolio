<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, revealStyle } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    id="about"
    class="min-h-screen flex flex-col relative overflow-hidden"
  >
    <div class="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-[122px] py-12 md:py-20 gap-10 lg:gap-16">

      <!-- Left content -->
      <div class="flex flex-col gap-8 md:gap-10 flex-1 max-w-full lg:max-w-[660px] w-full">
        <h2
          class="about-title font-bold leading-tight text-black dark:text-white"
          :style="revealStyle(0)"
        >
          <span class="block whitespace-nowrap">nice to</span>
          <span class="block whitespace-nowrap">meet you!</span>
        </h2>

        <p
          class="text-[16px] md:text-[20px] font-light leading-loose md:leading-relaxed text-[#ea2490]"
          :style="revealStyle(80)"
        >
          I am a Multimedia Design student from Lithuania, currently studying at Syddansk Erhvervsakademi. While I enjoy the visual side of design and Illustrator, I have developed a strong interest in the technical side of the web and plan to study Web Development after finishing my MMD degree. I am a social person who loves being part of a team and learning from others. I'm eager to contribute to collaborative projects and keep growing my skills.
        </p>

        <div class="flex gap-4 md:gap-6 mt-2" :style="revealStyle(160)">
          <a
            href="https://youtu.be/I1VWcb_VAVM"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[15px] font-normal tracking-wide px-6 md:px-8 py-3 md:py-4 min-h-[44px] rounded-full no-underline inline-flex items-center justify-center
                   border border-black/80 dark:border-white/70
                   text-black dark:text-white
                   hover:bg-[#ea2490] hover:border-[#ea2490] hover:text-white
                   transition-colors duration-200"
          >
            Video CV
          </a>
          <a
            href="/CV_ORINTA_JUODGUDYTE.pdf" target="_blank"
            class="text-[15px] font-normal tracking-wide px-6 md:px-8 py-3 md:py-4 min-h-[44px] rounded-full no-underline inline-flex items-center justify-center
                   border border-black/80 dark:border-white/70
                   text-black dark:text-white
                   hover:bg-[#ea2490] hover:border-[#ea2490] hover:text-white
                   transition-colors duration-200"
          >
            CV (PDF)
          </a>
        </div>
      </div>

      
      <div
        class="flex-shrink-0 w-[420px] h-[570px] md:w-[420px] md:h-[580px] lg:w-[755px] lg:h-[1050px] lg:translate-x-[-40px]"
        :style="revealStyle(240)"
      >
        <img
          src="/assets/digicam.svg"
          alt="Orinta Juodgudyte"
          class="w-full h-full object-contain rotate-90 transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(234,36,144,0.7)] hover:scale-105"
        >
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-title {
  font-size: clamp(64px, 8vw, 128px);
  line-height: 1.05;
}

@media (max-width: 767px) {
  .about-title {
    font-size: clamp(40px, 10vw, 56px);
  }
}
</style>
