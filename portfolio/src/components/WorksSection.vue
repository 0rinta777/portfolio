<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import ProjectCarousel from '@/components/ProjectCarousel.vue'

const projects = [
  {
    title: 'Skarntyden website',
    description: 'My first website, built with my group - a promotional site for a theater production, built entirely with pure HTML and CSS to really understand the fundamentals from scratch.',
    cover: '/assets/skarntydencover.jpg',
    type: 'link',
    url: 'https://karvin01.github.io/Semester-project-webpage/index.html',
  },
  {
    title: 'Business Region website',
    description: 'My second project with a group. A cross-border business platform connecting companies across the Danish-German border. I mainly focused on the design, UX/UI and the marketing campaign, though I understand the development side too.',
    cover: '/assets/businessregioncover.png',
    type: 'link',
    url: 'https://business-de-dk-20a16.web.app/',
  },
  {
    title: 'International Day 2025',
    description: 'Poster designs for International Day 2025, created in both A4 print and TV screen formats to promote the event.',
    cover: '/assets/intdaycover.png',
    type: 'gallery',
    images: [
      '/assets/intday/intdayA4.jpg',
      '/assets/intday/intdayTV.jpg',
    ],
  },
  {
    title: 'Photography',
    description: 'A collection of personal photography work.',
    cover: '/assets/photographycover.jpg',
    type: 'gallery',
    images: [
      '/assets/photography/church.jpg',
      '/assets/photography/countryside.jpg',
      '/assets/photography/couple.jpg',
      '/assets/photography/cph1.jpg',
      '/assets/photography/cph2.jpg',
      '/assets/photography/cph3.jpg',
      '/assets/photography/cph4.jpg',
      '/assets/photography/ferriswheel.jpg',
      '/assets/photography/fog.jpg',
      '/assets/photography/forest.jpg',
      '/assets/photography/kirkilai.jpg',
      '/assets/photography/lamp.jpg',
      '/assets/photography/mill.jpg',
      '/assets/photography/nature.jpg',
      '/assets/photography/portait1.jpg',
      '/assets/photography/portrait.jpg',
      '/assets/photography/portrait2.jpg',
      '/assets/photography/portrait3.jpg',
      '/assets/photography/ship.jpg',
      '/assets/photography/snow.jpg',
      '/assets/photography/table.jpg',
    ],
  },
  {
    title: 'White picnic branding',
    description: 'White Picnic is a community event in my hometown where I helped with marketing, coordination, and the visual identity as one of the organizers.',
    cover: '/assets/bpcover.png',
    type: 'gallery',
    images: [
      '/assets/bp/bpleaflet1.png',
      '/assets/bp/bpleaflet2.png',
      '/assets/bp/cover.png',
    ],
  },
  {
    title: 'Youth centre branding',
    description: 'Visual branding and print materials for my local youth centre - leaflets and posters I designed as part of my volunteer work there as a visual designer and creative assistant.',
    cover: '/assets/ajccover.png',
    type: 'gallery',
    images: [
      '/assets/ajc/AJCleaflet1.jpg',
      '/assets/ajc/AJCleaflet2.jpg',
      '/assets/ajc/AJCposter.jpg',
    ],
  },
  {
    title: 'Esbjerg city brochure',
    description: 'Interactive digital brochure I did with my group.',
    cover: '/assets/brochurecover.jpg',
    type: 'link',
    url: 'https://heyzine.com/flip-book/68cfafdf50.html',
  },
]

const inProgress = [
  {
    title: 'Glam webshop/blog',
    description: 'Glam is a group project building an online makeup reseller site in WordPress, combining CMS development and digital marketing - from a blog and Sustainability Initiatives page to a RACE-framework campaign across Instagram and TikTok, built around the idea of approachable, conscious, everyday beauty.',
    cover: '/assets/glamcover.png',
    type: 'link',
    url: 'https://github.com/Mihaela1909/glam',
  },
  {
    title: 'To do list app',
    description: "A simple todo list app built with TypeScript, HTML and CSS, using Vite as the development server. Users can add tasks, see them in a list, and remove them when they're done. Empty input shows an error message and a red input border.",
    type: 'link',
    url: 'https://github.com/0rinta777/bde-project',
  },
  {
    title: 'Javascript photobooth app',
    description: 'Y2kam is a Y2K photobooth web app (Vue 3 + Appwrite) - still in the design phase. So far: hero/homepage done in hi-fi (chrome-glitter headline, live camera preview, strip templates, features, Wall preview), plus a simpler lofi-matched home version.',
    cover: '/assets/y2kamcover.png',
  },
  {
    title: 'SEA Lab interior design',
    description: "A redesign of our school's lab into a cozy, organised maker space where people want to spend time. It combines comfy communal seating with a practical workshop, with better storage, black pegboards and warm lighting. The look is warm Scandinavian in oak, black, petrol and red, and we keep costs down by reusing furniture and making decor in the lab ourselves.",
    cover: '/assets/sealabcover.png',
    type: 'link',
    url: 'https://www.figma.com/board/g70FsdIVZHuKyNTuAgRZoS/LAB-interior-design?node-id=0-1&t=ggJRZ4fElTsp2xEo-1',
  },
]

const { el, revealStyle } = useScrollReveal()
const { el: progressEl, revealStyle: progressRevealStyle } = useScrollReveal()

// ── Lightbox ────────────────────────────────────────────────────────────────
const lightboxProject = ref(null)

function handleCardClick(project) {
  if (project.type === 'gallery') {
    lightboxProject.value = project
  } else if (project.type === 'link') {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  }
}

function closeLightbox() {
  lightboxProject.value = null
}

watchEffect(() => {
  document.body.style.overflow = lightboxProject.value ? 'hidden' : ''
})

function onKeyDown(e) {
  if (e.key === 'Escape') closeLightbox()
}
// ────────────────────────────────────────────────────────────────────────────

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section
    ref="el"
    id="works"
    class="min-h-screen flex flex-col relative -mt-16"
  >
    <div class="flex-1 flex flex-col justify-start px-4 md:px-[122px] pt-0 pb-10">

      <h2
        class="works-title font-bold text-left md:text-right mb-0 leading-tight text-black dark:text-white"
        :style="revealStyle(0)"
      >
        some of my <span class="text-[#ea2490]">work</span>
      </h2>

      <div :style="{ ...revealStyle(80), marginTop: '88px' }">
        <ProjectCarousel :projects="projects" @select="handleCardClick" />
      </div>

      <!-- In progress -->
      <div ref="progressEl" class="in-progress">
        <h2
          class="works-title font-bold text-left md:text-right mb-0 leading-tight text-black dark:text-white"
          :style="progressRevealStyle(0)"
        >
          in <span class="text-[#ea2490]">progress...</span>
        </h2>

        <div :style="{ ...progressRevealStyle(80), marginTop: '88px' }">
          <ProjectCarousel :projects="inProgress" @select="handleCardClick" />
        </div>
      </div>

    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lb-fade">
      <div
        v-if="lightboxProject"
        class="fixed inset-0 z-[200] bg-black/95 overflow-y-auto"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="fixed top-6 right-8 z-10 text-white hover:text-[#ea2490] transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Image column -->
        <div class="flex flex-col items-center gap-4 py-16 px-4">
          <img
            v-for="(src, i) in lightboxProject.images"
            :key="i"
            :src="src"
            :alt="`${lightboxProject.title} ${i + 1}`"
            class="max-w-[700px] w-full object-contain rounded-lg"
            loading="lazy"
          >
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.works-title {
  font-size: clamp(56px, 7vw, 128px);
  line-height: 1.05;
}

.in-progress {
  margin-top: 240px;
}

@media (max-width: 767px) {
  .works-title {
    font-size: clamp(36px, 10vw, 52px);
  }

  .in-progress {
    margin-top: 140px;
  }
}

.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
</style>
