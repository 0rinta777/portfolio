<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center items-center relative pt-[80px]">
    <div class="flex-1 flex items-center justify-center w-full">
      <h1 class="hero-title text-center font-bold leading-tight whitespace-pre-wrap">
        <span style="color: var(--text)">welcome to </span><br>
        <span style="color: var(--text)">my </span><span class="text-[#ea2490]">portfolio.</span>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(80px, 11vw, 160px);
  line-height: 1.05;
}
</style>
