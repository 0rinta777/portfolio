<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import WorksSection from '@/components/WorksSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <WorksSection />
    <ContactSection />
  </main>
  <div class="fixed bottom-0 left-0 right-0 z-40 section-divider"></div>
</template>
