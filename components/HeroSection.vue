<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="bg-[url('../img/niki-waves.svg')] bg-no-repeat bg-cover bg-bottom" data-st-container="hero">
    <div class="max-w-7xl mx-auto py-32 px-10 flex flex-col items-center">
      <div
        class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        data-st-class="animate__animated animate__zoomIn"
        v-html="$t('hero.title')"
      ></div>
      <div
        class="text-xl sm:text-2xl md:text-3xl font-bold p-3 text-center opacity-0"
        data-st-class="animate__animated animate__fadeInUp animate__delay-1s"
        v-html="$t('hero.subtitle')"
      ></div>
      <div
        class="mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center opacity-0"
        data-st-class="animate__animated animate__fadeInUp animate__delay-2s animate__faster"
        v-html="$t('hero.description')"
      ></div>

      <div
        class="mt-8 opacity-0 flex flex-col sm:flex-row space-y-3 sm:space-x-3 sm:space-y-0"
        data-st-class="animate__animated animate__fadeInUp animate__delay-3s animate__faster"
      >
        <div class="rounded-md shadow">
          <a
            href="https://opensea.io/collection/lets-celebrate-with-cake"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
            target="_blank"
          >
            {{ $t('hero.buttonText') }}
          </a>
        </div>

        <div class="rounded-md shadow">
          <a
            href="https://twitter.com/niki_s_kunos"
            class="w-full h-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-5"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 276" fill="#fff" class="w-6 h-6">
              <path
                d="m302 70a195 195 0 0 1 -299 175 142 142 0 0 0 97 -30 70 70 0 0 1 -58 -47 70 70 0 0 0 31 -2 70 70 0 0 1 -57 -66 70 70 0 0 0 28 5 70 70 0 0 1 -18 -90 195 195 0 0 0 141 72 67 67 0 0 1 116 -62 117 117 0 0 0 43 -17 65 65 0 0 1 -31 38 117 117 0 0 0 39 -11 65 65 0 0 1 -32 35"
              />
            </svg>
          </a>
        </div>

        <div class="rounded-md shadow">
          <a
            href="https://www.instagram.com/cakeclub.nft/"
            class="w-full h-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-5"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6" fill="#fff">
              <path
                d="M256 49c67 0 75 1 102 2 24 1 38 5 47 9a78 78 0 0 1 29 18 78 78 0 0 1 18 29c4 9 8 23 9 47 1 27 2 35 2 102l-2 102c-1 24-5 38-9 47a83 83 0 0 1-47 47c-9 4-23 8-47 9-27 1-35 2-102 2l-102-2c-24-1-38-5-47-9a78 78 0 0 1-29-18 78 78 0 0 1-18-29c-4-9-8-23-9-47-1-27-2-35-2-102l2-102c1-24 5-38 9-47a78 78 0 0 1 18-29 78 78 0 0 1 29-18c9-4 23-8 47-9 27-1 35-2 102-2m0-45c-68 0-77 0-104 2-27 1-45 5-61 11a123 123 0 0 0-45 29 123 123 0 0 0-29 45c-6 16-10 34-11 61-2 27-2 36-2 104l2 104c1 27 5 45 11 61a123 123 0 0 0 29 45 123 123 0 0 0 45 29c16 6 34 10 61 11a1796 1796 0 0 0 208 0c27-1 45-5 61-11a129 129 0 0 0 74-74c6-16 10-34 11-61 2-27 2-36 2-104l-2-104c-1-27-5-45-11-61a123 123 0 0 0-29-45 123 123 0 0 0-45-29c-16-6-34-10-61-11-27-2-36-2-104-2Z"
              />
              <path
                d="M256 127a129 129 0 1 0 129 129 129 129 0 0 0-129-129Zm0 213a84 84 0 1 1 84-84 84 84 0 0 1-84 84Z"
              />
              <circle cx="390.5" cy="121.5" r="30.2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
/deep/ strong {
  @apply block text-rose-500;
}
</style>
