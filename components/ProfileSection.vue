<template>
  <section id="about" class="py-16 scroll-mt-16">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-2/3 py-5">
        <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
        <h1
          class="px-10 text-3xl font-bold opacity-0"
          data-st-class="animate-fade-in-left"
        >
          About me
        </h1>
        <p
          class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg opacity-0"
          data-st-class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
        >
          My name is Niki S. Kunos and I am a cake decorator in IRL. In the last 10 years my cakes proud to be featured
          on
          <b
            >Huffington Post Wedding, Ruffled Blog, The Modern Wedding Magazine (20th-anniversary edition), Insyle
            Magazine, Glamour Mag</b
          >
          and I was finalist <b>“Decorator of the Year!”</b> on <b>Australian Cake Decorating Network</b> (2014) but
          most importantly, I have been able to feed over 10,000 happy people with sweet bits.
        </p>
        <p
          class="px-10 mt-3 text-base text-gray-500 sm:text-lg md:text-lg opacity-0"
          data-st-class="animate__animated animate__fadeInUp animate__delay-2s animate__faster"
        >
          Here in WEB3, it is amazing that i could combine cake decorating with my other passion, illustration.
        </p>
        <h1
          class="px-10 mt-10 text-base font-bold opacity-0"
          data-st-class="animate__animated animate__fadeInUp animate__delay-3s animate__faster"
        >
          Niki S. Kunos
        </h1>
        <h1
          class="px-10 text-sm opacity-0"
          data-st-class="animate__animated animate__fadeInUp animate__delay-4s animate__faster"
        >
          Artist/Founder
        </h1>
      </div>
      <div class="w-full md:w-1/3 py-5">
        <GalleryWrapper class="grid grid-cols-3">
          <GalleryItem
            class="col-span-3 gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/cld-sample.jpg"
            data-st-class="animate__animated animate__fadeIn"
          >
            <nuxt-img provider="cloudinary" src="/cld-sample.jpg" loading="lazy" class="object-cover aspect-video" />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/sample.jpg"
            data-st-class="animate__animated animate__fadeIn animate__delay-1s"
          >
            <nuxt-img
              provider="cloudinary"
              src="/sample.jpg"
              fit="fill"
              :modifiers="{ ar: '1:1' }"
              width="200"
              height="200"
            />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://shuffle.dev/pstls-assets/images/headers/header-1-woman.jpg"
            data-st-class="animate__animated animate__fadeIn animate__delay-2s"
          >
            <img src="https://shuffle.dev/pstls-assets/images/headers/header-1-woman.jpg" />
          </GalleryItem>
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://shuffle.dev/pstls-assets/images/headers/header-1-woman.jpg"
            data-st-class="animate__animated animate__fadeIn animate__delay-3s"
          >
            <img src="https://shuffle.dev/pstls-assets/images/headers/header-1-woman.jpg" />
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
