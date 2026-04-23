<script setup>
import { useDarkMode } from '@/composables/useDarkMode.js'
const { isDark, toggleDark } = useDarkMode()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-[122px]
              bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-sm
              shadow-[0px_10px_30px_6px_rgba(234,36,144,0.25)] dark:shadow-[0px_10px_30px_6px_rgba(234,36,144,0.35)]
              transition-colors duration-300">
    <span class="text-[24px] font-light tracking-wide text-black dark:text-white">
      Orinta Juodgudyte
    </span>

    <div class="flex items-center gap-8">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-[20px] font-light no-underline text-black dark:text-white hover:text-[#ea2490] dark:hover:text-[#ea2490] transition-colors duration-200"
      >
        {{ link.label }}
      </a>

      <button
        @click="toggleDark"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="w-[52px] h-[28px] rounded-full relative cursor-pointer border border-[#ea2490] transition-colors duration-300 flex-shrink-0"
        :class="isDark ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'"
      >
        <span
          class="absolute top-[3px] w-[20px] h-[20px] rounded-full bg-[#ea2490] transition-transform duration-300"
          :class="isDark ? 'translate-x-[1px]' : '-translate-x-[21px]'"
        ></span>
      </button>
    </div>
  </nav>
</template>
