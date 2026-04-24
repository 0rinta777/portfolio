<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
const { el, revealStyle } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    id="hero"
    class="min-h-screen flex flex-col justify-center items-center relative pt-[80px] px-6 md:px-0"
  >
    <div class="flex-1 flex items-center justify-center w-full">
      <h1
        class="hero-title text-center font-bold leading-tight text-black dark:text-white"
        :style="revealStyle(0)"
      >
        welcome to <br>
        my <span class="text-[#ea2490]">portfolio.</span>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(80px, 11vw, 160px);
  line-height: 1.05;
}

@media (max-width: 767px) {
  .hero-title {
    font-size: clamp(36px, 10vw, 56px);
  }
}
</style>
