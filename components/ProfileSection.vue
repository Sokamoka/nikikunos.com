<template>
  <!-- eslint-disable vue/no-v-html -->
  <section id="about" class="py-16 scroll-mt-14" data-st-container="profile">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-2/3 py-5">
        <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
        <div class="px-10 text-lg" v-html="$t('profile.content')"></div>
      </div>
      <div class="w-full md:w-1/3 py-5">
        <GalleryWrapper class="grid grid-cols-3 gap-2">
          <GalleryItem
            class="col-span-3 gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651255306/niki_kunos_umhsbu.jpg"
            data-st-class="animate__animated animate__fadeIn"
          >
            <nuxt-img
              provider="cloudinary"
              src="/niki_kunos_umhsbu.jpg"
              loading="lazy"
              class="object-cover aspect-4/3"
            />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651255967/cake-01_bp1avh.webp"
            data-st-class="animate__animated animate__fadeIn animate__delay-1s"
          >
            <nuxt-img
              provider="cloudinary"
              src="/cake-01_bp1avh.webp"
              fit="fill"
              :modifiers="{ ar: '1:1' }"
              width="200"
              height="200"
            />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651255966/cake-02_drdh20.jpg"
            data-st-class="animate__animated animate__fadeIn animate__delay-2s"
          >
            <nuxt-img
              provider="cloudinary"
              src="/cake-02_drdh20.jpg"
              fit="fill"
              :modifiers="{ ar: '1:1' }"
              width="200"
              height="200"
            />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651256196/cake-03_b9qllr.jpg"
            data-st-class="animate__animated animate__fadeIn animate__delay-3s"
          >
            <nuxt-img
              provider="cloudinary"
              src="/cake-03_b9qllr.jpg"
              fit="fill"
              :modifiers="{ ar: '1:1' }"
              width="200"
              height="200"
            />
          </GalleryItem>
        </GalleryWrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfileSection',
}
</script>
