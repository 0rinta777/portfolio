<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, isVisible } = useScrollReveal()

</script>

<template>
  <section
    ref="el"
    id="contact"
    class="min-h-screen flex flex-col relative pb-[1px]
           transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
  >
    <div class="flex-1 flex flex-col justify-center px-[122px] py-20">
      <h2 class="contact-title font-bold leading-tight text-black dark:text-white">
        get in touch
      </h2>

      <div class="flex flex-col gap-4" style="margin-top: 70px;">
        <a href="mailto:orinta1133@gmail.com"
           class="contact-line font-light no-underline text-black dark:text-white hover:text-[#ea2490] transition-colors duration-200">
          orinta1133@gmail.com
        </a>
        <a href="tel:+4550314144"
           class="contact-line font-light no-underline text-[#ea2490]">
          +45 50 31 41 44
        </a>
        <a href="https://www.linkedin.com/in/orinta-juodgudyte/"
           target="_blank" rel="noopener"
           class="contact-line font-light no-underline text-black dark:text-white hover:text-[#ea2490] transition-colors duration-200">
          linkedin.com/in/orinta-juodgudyte
        </a>
      </div>

      <!-- QR code: absolutely positioned, bottom-right aligned with "2026" -->
      <img
        src="/assets/qr.svg"
        alt="LinkedIn QR code"
        class="absolute bottom-10 right-[122px] w-[180px] h-[180px] object-contain"
      >
    </div>

    <div class="px-[122px] pb-10 flex items-center justify-between">
      <span class="text-[24px] font-light text-[#ea2490]">2026</span>
    </div>
  </section>
</template>

<style scoped>
.contact-title {
  font-size: clamp(72px, 10vw, 160px);
  line-height: 1.05;
}

.contact-line {
  font-size: clamp(20px, 2.5vw, 36px);
  text-decoration: none;
  line-height: 1.9;
}
</style>
