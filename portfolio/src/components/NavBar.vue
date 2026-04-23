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
  <nav class="navbar fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-[122px]">
    <span class="text-[24px] font-light tracking-wide" style="color: var(--text)">
      Orinta Juodgudyte
    </span>

    <div class="flex items-center gap-8">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-[20px] font-light transition-colors duration-200 hover:text-pink no-underline"
        style="color: var(--text)"
      >
        {{ link.label }}
      </a>

      <button
        @click="toggleDark"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="w-[52px] h-[28px] rounded-full relative cursor-pointer border border-[#ea2490] transition-colors duration-300 flex-shrink-0"
        :style="{ background: isDark ? '#1a1a1a' : '#f0f0f0' }"
      >
        <span
          class="absolute top-[3px] w-[20px] h-[20px] rounded-full bg-[#ea2490] transition-transform duration-300"
          :style="{ transform: isDark ? 'translateX(1px)' : 'translateX(-21px)' }"
        ></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: var(--nav-bg);
  box-shadow: var(--nav-shadow);
  backdrop-filter: blur(8px);
}
.hover\:text-pink:hover {
  color: #ea2490;
}
</style>
