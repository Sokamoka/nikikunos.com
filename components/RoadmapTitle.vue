<template>
  <section id="roadmap" class="bg-rose-600 bg-roadmap-pattern scroll-mt-12" data-st-container="roadmap">
    <div class="max-w-7xl mx-auto py-16 px-10 flex flex-col items-center">
      <div class="h-1 bg-rose-300 w-48 mb-8 mx-10"></div>
      <div
        class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl opacity-0"
        data-st-class="animate-fade-in-left"
      >
        {{ $t('roadMap.title.title') }}
      </div>
      <div class="text-3xl font-bold p-3 text-white text-center opacity-0" data-st-class="animate-fade-in-right">
        {{ $t('roadMap.title.subtitle') }}
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="mt-2 text-base text-rose-200 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center opacity-0"
        data-st-class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
        v-html="$t('roadMap.title.description')"
      />
      <!-- <eslint-enable>-->
    </div>
  </section>
</template>
