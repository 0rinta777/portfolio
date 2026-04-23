<script setup>
const works = [
  { title: 'Photography Portfolio', desc: 'Visual storytelling through lens and light.', initial: 'P' },
  { title: 'Brand Identity', desc: 'Logos, color systems and design language.', initial: 'B' },
  { title: 'UI Design', desc: 'Web and mobile interface design in Figma.', initial: 'U' },
]
</script>

<template>
  <section id="works" class="min-h-screen flex flex-col relative">
    <div class="flex-1 flex flex-col justify-center px-[122px] py-20">
      <h2 class="works-title font-bold text-right mb-20 leading-tight text-black dark:text-white">
        some of my works
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="work in works"
          :key="work.title"
          class="rounded-2xl overflow-hidden cursor-pointer border border-[rgba(234,36,144,0.15)]
                 bg-[#f8f8f8] dark:bg-[#111111]
                 hover:border-[rgba(234,36,144,0.5)] hover:shadow-[0_4px_24px_rgba(234,36,144,0.1)]
                 transition-all duration-200"
        >
          <div class="aspect-video flex items-center justify-center text-[#ea2490] text-4xl font-bold bg-[rgba(234,36,144,0.08)]">
            {{ work.initial }}
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2 text-black dark:text-white">{{ work.title }}</h3>
            <p class="text-sm font-light text-black/65 dark:text-white/65">{{ work.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.works-title {
  font-size: clamp(56px, 7vw, 128px);
  line-height: 1.05;
}
</style>
