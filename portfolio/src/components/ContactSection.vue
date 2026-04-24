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
    <div class="flex-1 flex flex-col justify-start md:justify-center px-6 md:px-[50px] py-12 md:py-20">
      <h2 class="contact-title font-bold leading-tight text-black dark:text-white">
        get in touch
      </h2>

      <div class="h-[30px]"></div>

      <!-- Contact info -->
      <div class="flex flex-col gap-4 mt-[52px] md:mt-[70px]">
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

      <!-- QR code: desktop only (absolute bottom-right) -->
      <img
        src="/assets/qr.svg"
        alt="LinkedIn QR code"
        class="hidden md:block w-[180px] h-[180px] object-contain
               md:absolute md:bottom-10 md:right-[122px]"
      >
    </div>

    <div class="px-6 md:px-[122px] pb-10 flex items-center justify-between -mt-10 md:mt-0">
      <div class="flex flex-col md:block">
        <!-- QR: mobile only, 5px above "2026" -->
        <img
          src="/assets/qr.svg"
          alt="LinkedIn QR code"
          class="md:hidden w-[140px] h-[140px] object-contain"
        >
        <div class="h-[30px] md:hidden"></div>
        <span class="text-[20px] md:text-[24px] font-light text-[#ea2490]">2026</span>
      </div>
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

@media (max-width: 767px) {
  .contact-title {
    font-size: clamp(40px, 12vw, 60px);
  }

  .contact-line {
    font-size: clamp(16px, 4.5vw, 22px);
    line-height: 1.7;
  }
}
</style>
