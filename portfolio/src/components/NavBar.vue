<script setup>
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode.js'
const { isDark, toggleDark } = useDarkMode()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-6 md:px-[122px]
              bg-white/95 dark:bg-[#0d0d0d]/95 backdrop-blur-sm
              shadow-[0px_10px_30px_6px_rgba(234,36,144,0.25)] dark:shadow-[0px_10px_30px_6px_rgba(234,36,144,0.35)]
              transition-colors duration-300">

    <!-- Logo -->
    <span class="text-[18px] md:text-[24px] font-light tracking-wide text-black dark:text-white">
      Orinta Juodgudyte
    </span>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-8">
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
        class="flex items-center justify-center min-w-[44px] min-h-[44px] flex-shrink-0 cursor-pointer"
      >
        <span
          class="w-[52px] h-[28px] rounded-full relative border border-[#ea2490] transition-colors duration-300 flex-shrink-0 block"
          :class="isDark ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'"
        >
          <span
            class="absolute top-[3px] w-[20px] h-[20px] rounded-full bg-[#ea2490] transition-transform duration-300"
            :class="isDark ? 'translate-x-[1px]' : '-translate-x-[21px]'"
          ></span>
        </span>
      </button>
    </div>

    <!-- Mobile: toggle + hamburger -->
    <div class="flex md:hidden items-center gap-3">
      <button
        @click="toggleDark"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="flex items-center justify-center min-w-[44px] min-h-[44px] flex-shrink-0 cursor-pointer"
      >
        <span
          class="w-[44px] h-[24px] rounded-full relative border border-[#ea2490] transition-colors duration-300 block"
          :class="isDark ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'"
        >
          <span
            class="absolute top-[2px] w-[18px] h-[18px] rounded-full bg-[#ea2490] transition-transform duration-300"
            :class="isDark ? 'translate-x-[2px]' : '-translate-x-[18px]'"
          ></span>
        </span>
      </button>

      <button
        @click="toggleMenu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        class="flex items-center justify-center w-[44px] h-[44px] text-black dark:text-white"
      >
        <!-- Hamburger / X icon -->
        <svg v-if="!menuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile dropdown menu -->
  <Teleport to="body">
    <Transition name="menu-slide">
      <div
        v-if="menuOpen"
        class="fixed top-[80px] left-0 right-0 z-40 md:hidden
               bg-white/98 dark:bg-[#0d0d0d]/98 backdrop-blur-sm
               shadow-[0px_10px_30px_6px_rgba(234,36,144,0.15)]
               border-t border-[#ea2490]/20"
      >
        <div class="flex flex-col px-6 py-4">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="closeMenu"
            class="text-[20px] font-light no-underline text-black dark:text-white
                   hover:text-[#ea2490] dark:hover:text-[#ea2490]
                   transition-colors duration-200 py-4 border-b border-black/5 dark:border-white/5 last:border-0"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
