<template>
  <section id="about" class="py-16 scroll-mt-14" data-st-container="profile">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-2/3 py-5">
        <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
        <h1 class="px-10 text-3xl font-bold opacity-0" data-st-class="animate-fade-in-left">About me</h1>
        <p
          class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg opacity-0"
          data-st-class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
        >
          My name is <strong> Niki S. Kunos</strong> and I am a cake decorator in IRL. In the last 10 years my cakes
          proud to be featured on
          <a
            href="https://www.huffpost.com/entry/geode-wedding-cakes-totally-rock_n_5780054ae4b0c590f7e95d76"
            target="_blank"
            >Huffington Post Wedding</a
          >, <a href="https://ruffledblog.com/hungarian-chapel-elopement-editorial/" target="_blank">Ruffled Blog</a>,
          <a
            href="https://www.modernwedding.com.au/modern-wedding-cakes-styling-20th-anniversary-edition/"
            target="_blank"
            >The Modern Wedding Magazine (20th-anniversary edition)</a
          >, <strong>Insyle Magazine</strong>,
          <a href="https://www.glamour.hu/g-eletstilus/meztelen-tortak-eheto-arannyal/k55n9nv" target="_blank"
            >Glamour Mag</a
          >
          and I was finalist <strong>“Decorator of the Year!”</strong> on
          <strong>Australian Cake Decorating Network</strong> (2014) but most importantly, I have been able to feed over
          10,000 happy people with sweet bits.
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
