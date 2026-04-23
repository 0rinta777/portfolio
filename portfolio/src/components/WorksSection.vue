<template>
  <section id="works" class="min-h-screen flex flex-col relative">
    <div class="flex-1 flex flex-col justify-center px-[122px] py-20">
      <h2 class="works-title font-bold text-right mb-20 leading-tight" style="color: var(--text)">
        some of my works
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="work in works"
          :key="work.title"
          class="work-card rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div class="aspect-video flex items-center justify-center text-[#ea2490] text-4xl font-bold" :style="{ background: work.bg }">
            {{ work.initial }}
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold mb-2" style="color: var(--text)">{{ work.title }}</h3>
            <p class="text-sm font-light" style="color: var(--text-soft)">{{ work.desc }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const works = [
  { title: 'Photography Portfolio', desc: 'Visual storytelling through lens and light.', initial: 'P', bg: 'rgba(234,36,144,0.08)' },
  { title: 'Brand Identity', desc: 'Logos, color systems and design language.', initial: 'B', bg: 'rgba(234,36,144,0.05)' },
  { title: 'UI Design', desc: 'Web and mobile interface design in Figma.', initial: 'U', bg: 'rgba(234,36,144,0.08)' },
]
</script>

<style scoped>
.works-title {
  font-size: clamp(56px, 7vw, 128px);
  line-height: 1.05;
}

.work-card {
  border: 1px solid rgba(234, 36, 144, 0.15);
  background: var(--bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.work-card:hover {
  border-color: rgba(234, 36, 144, 0.5);
  box-shadow: 0 4px 24px rgba(234, 36, 144, 0.1);
}
</style>
