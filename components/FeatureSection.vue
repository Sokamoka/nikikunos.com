<template>
  <!-- eslint-disable vue/no-v-html -->
  <section id="features" class="px-10 py-16 mx-auto scroll-mt-16" data-st-container="features">
    <div class="h-1 bg-rose-500 w-48 mb-10 mx-auto"></div>
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row sm:space-x-8">
      <div class="w-full md:w-1/3 opacity-0" data-st-class="animate__animated animate__fadeIn">
        <div class="h-full p-8 text-center hover:bg-white rounded-md shadow-xl transition duration-200">
          <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-rose-500 rounded-lg">
            <outline-emoji-happy-icon class="w-7 h-7" />
          </div>
          <h3 class="text-xl md:text-2xl leading-tight font-bold uppercase">{{ $t('features.value.title') }}</h3>
          <h4 class="text-lg mb-3">{{ $t('features.value.subtitle') }}</h4>
          <p class="text-gray-500" v-html="$t('features.value.description')"></p>
        </div>
      </div>
      <div class="w-full md:w-1/3  opacity-0" data-st-class="animate__animated animate__fadeIn animate__delay-1s">
        <div class="h-full p-8 text-center hover:bg-white rounded-md shadow-xl transition duration-200">
          <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-rose-500 rounded-lg">
            <outline-cake-icon class="w-7 h-7" />
          </div>
          <h3 class="text-xl md:text-2xl leading-tight font-bold">{{ $t('features.mission.title') }}</h3>
          <h4 class="text-lg mb-3">{{ $t('features.mission.subtitle') }}</h4>
          <p class="text-gray-500" v-html="$t('features.mission.description')"></p>
        </div>
      </div>
      <div class="w-full md:w-1/3  opacity-0" data-st-class="animate__animated animate__fadeIn animate__delay-2s">
        <div class="h-full p-8 text-center hover:bg-white rounded-md shadow-xl transition duration-200">
          <div class="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-rose-500 rounded-lg">
            <outline-heart-icon class="w-7 h-7" />
          </div>
          <h3 class="text-xl md:text-2xl leading-tight font-bold">{{ $t('features.utility.title') }}</h3>
          <h4 class="text-lg mb-3">{{ $t('features.utility.subtitle') }}</h4>
          <p class="text-gray-500" v-html="$t('features.utility.description')"></p>
        </div>
      </div>
    </div>
  </section>
</template>
