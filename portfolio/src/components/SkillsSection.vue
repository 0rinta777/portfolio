<script setup>
const ellipse = 'https://www.figma.com/api/mcp/asset/46041096-728a-47e8-8f90-6b4cd982d8fc'
const star = 'https://www.figma.com/api/mcp/asset/1525ec7e-a2b2-4cb3-b61f-cba3d1c7231c'

const icons = [
  { src: 'https://www.figma.com/api/mcp/asset/c12a01c0-3560-495f-8422-5cfd23511a54', label: 'Figma', pos: 'top-center' },
  { src: 'https://www.figma.com/api/mcp/asset/1ef3ac81-98b1-49ff-9da6-9f5d854cade5', label: 'JavaScript', pos: 'top-right' },
  { src: 'https://www.figma.com/api/mcp/asset/af567565-01ab-44be-849b-24565f1855a5', label: 'HTML5', pos: 'top-left' },
  { src: 'https://www.figma.com/api/mcp/asset/4dcbd2e0-6cb3-41a8-a200-6f5dd5334cdb', label: 'InDesign', pos: 'bottom-left' },
  { src: 'https://www.figma.com/api/mcp/asset/c9c4eb4f-e60f-464a-a995-a76814fb16a4', label: 'Premiere', pos: 'mid-left' },
  { src: 'https://www.figma.com/api/mcp/asset/c2b850b2-474a-4c18-8b1b-dfc809144a9f', label: 'Photoshop', pos: 'mid-right' },
  { src: 'https://www.figma.com/api/mcp/asset/dc6c4ca8-b54e-4ce2-b728-5b2dd866406a', label: 'Illustrator', pos: 'bottom-right' },
]
</script>

<template>
  <section id="skills" class="min-h-screen flex flex-col relative">
    <div class="flex-1 flex flex-col items-center justify-start pt-20 pb-12 px-8">
      <h2 class="skills-title font-bold text-center mb-16" style="color: var(--text)">
        my skills
      </h2>

      <!-- Skills orbit layout -->
      <div class="skills-orbit relative mx-auto">
        <!-- Pink circle -->
        <img :src="ellipse" alt="" class="orbit-circle absolute" aria-hidden="true">

        <!-- Star decoration (center) -->
        <img :src="star" alt="" class="star-icon absolute" aria-hidden="true">

        <!-- Icons positioned around circle -->
        <!-- top-center: Figma -->
        <div class="skill-icon top-center">
          <img :src="icons[0].src" :alt="icons[0].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[0].label }}</span>
        </div>
        <!-- top-right: JS -->
        <div class="skill-icon top-right">
          <img :src="icons[1].src" :alt="icons[1].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[1].label }}</span>
        </div>
        <!-- top-left: HTML -->
        <div class="skill-icon top-left">
          <img :src="icons[2].src" :alt="icons[2].label" class="w-14 h-14 object-contain">
          <span class="icon-label">{{ icons[2].label }}</span>
        </div>
        <!-- mid-left: Premiere -->
        <div class="skill-icon mid-left">
          <img :src="icons[4].src" :alt="icons[4].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[4].label }}</span>
        </div>
        <!-- bottom-left: InDesign -->
        <div class="skill-icon bottom-left">
          <img :src="icons[3].src" :alt="icons[3].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[3].label }}</span>
        </div>
        <!-- mid-right: Photoshop -->
        <div class="skill-icon mid-right">
          <img :src="icons[5].src" :alt="icons[5].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[5].label }}</span>
        </div>
        <!-- bottom-right: Illustrator -->
        <div class="skill-icon bottom-right">
          <img :src="icons[6].src" :alt="icons[6].label" class="w-16 h-16 object-contain">
          <span class="icon-label">{{ icons[6].label }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.skills-title {
  font-size: clamp(64px, 8vw, 128px);
}

.skills-orbit {
  width: 600px;
  height: 600px;
}

.orbit-circle {
  width: 420px;
  height: 420px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
}

.star-icon {
  width: 200px;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.skill-icon {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transform: translate(-50%, -50%);
}

.icon-label {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-soft);
  white-space: nowrap;
}

/* Positions relative to 600×600 container */
.top-center  { left: 50%;   top: 2%; }
.top-right   { left: 78%;  top: 12%; }
.top-left    { left: 22%;  top: 12%; }
.mid-left    { left: 8%;   top: 50%; }
.mid-right   { left: 92%;  top: 50%; }
.bottom-left { left: 14%;  top: 84%; }
.bottom-right{ left: 86%;  top: 84%; }
</style>
