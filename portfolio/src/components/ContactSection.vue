<script setup>
const qrVectors = [
  'https://www.figma.com/api/mcp/asset/832e7bc8-8c17-4711-9766-83ef7134351e',
  'https://www.figma.com/api/mcp/asset/94426e27-1a23-4949-972e-50d2a6463990',
  'https://www.figma.com/api/mcp/asset/0bc71297-598a-4b47-91d1-6018db6466d7',
  'https://www.figma.com/api/mcp/asset/1f0a309e-4d18-415c-ae2e-ae35c5b1e403',
  'https://www.figma.com/api/mcp/asset/2e11605e-5836-4b0a-b4e2-0703794e313c',
  'https://www.figma.com/api/mcp/asset/93432266-28a0-44ca-9d47-c5cb8f78a85d',
  'https://www.figma.com/api/mcp/asset/2856beac-5dd5-4e2b-85cd-92755183bfaa',
]
const qrRect = 'https://www.figma.com/api/mcp/asset/dfda087c-cfb9-45d3-98f7-3472a5a84e07'
</script>

<template>
  <section id="contact" class="min-h-screen flex flex-col relative pb-[1px]">
    <div class="flex-1 flex flex-col justify-center px-[122px] py-20">
      <h2 class="contact-title font-bold leading-tight mb-16 text-black dark:text-white">
        get in touch
      </h2>

      <div class="flex items-start justify-between gap-12">
        <div class="flex flex-col gap-4">
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

        <div class="relative w-[180px] h-[180px] flex-shrink-0">
          <img v-for="(src, i) in qrVectors" :key="i" :src="src" alt="" class="absolute inset-0 w-full h-full object-contain" aria-hidden="true">
          <img :src="qrRect" alt="LinkedIn QR code" class="absolute inset-[36%] w-[28%] h-[28%] object-contain">
        </div>
      </div>
    </div>

    <div class="px-[122px] pb-10 flex items-center justify-between">
      <span class="text-[24px] font-light text-[#ea2490]">2026</span>
      <span class="text-sm font-light text-black/65 dark:text-white/65">Orinta Juodgudyte</span>
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
</style>
