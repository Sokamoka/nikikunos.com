<template>
  <div>
    <GalleryWrapper tag="section" class="py-16" data-st-container="lets-celebrate" data-st-offset="220">
      <div class="flex flex-col md:flex-row max-w-7xl mx-auto">
        <div class="w-full md:w-1/2 mb-5 opacity-0" data-st-class="animate-fade-in-left">
          <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
          <h1 class="px-10 text-3xl font-bold">{{ $t('roadMap.letsCelebrate.title') }}</h1>
          <!-- eslint-disable vue/no-v-html -->
          <p
            class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg"
            v-html="$t('roadMap.letsCelebrate.content')"
          >
            <!-- <eslint-enable>-->
          </p>
        </div>
        <div class="w-full md:w-1/2 overflow-hidden">
          <GalleryItem
            class="gallery-thumb opacity-0"
            src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650478171/celebrate/debbie.letsceleb_df3dfb.jpg"
            alt="Inspired by Boss Beauties"
            data-st-class="animate-fade-in-right"
          >
            <nuxt-img provider="cloudinary" src="/celebrate/debbie.letsceleb_df3dfb.jpg" width="640" loading="lazy" />
          </GalleryItem>
          <p class="text-xs text-gray-400 text-right px-2">Debbie - Inspired by Boss Beauties</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto overflow-hidden">
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650225825/celebrate/Lily.lets1_zbalhz.jpg"
          alt="Inspired by WOW PIXIES"
          data-st-class="animate__animated animate__zoomIn animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/Lily.lets1_zbalhz.jpg" width="430" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Lily - Inspired by WOW PIXIES</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650478171/celebrate/laura.letsceleb_qb41dd.jpg"
          alt="Inspired by Not So Dead"
          data-st-class="animate__animated animate__zoomIn animate__delay-1s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/laura.letsceleb_qb41dd.jpg" width="430" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Laura - Inspired by Not So Dead</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650478171/celebrate/notyoubro.letsceleb_ieopm1.jpg"
          alt="Inspired by Not Your Bro"
          data-st-class="animate__animated animate__zoomIn animate__delay-2s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img
              provider="cloudinary"
              src="/celebrate/notyoubro.letsceleb_ieopm1.jpg"
              width="430"
              loading="lazy"
            />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Not Your Bro</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650478171/celebrate/metaangels.letsceleb_eedbtk.jpg"
          alt="Inspired by Meta Angels"
          data-st-class="animate__animated animate__zoomIn animate__delay-3s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img
              provider="cloudinary"
              src="/celebrate/metaangels.letsceleb_eedbtk.jpg"
              width="430"
              loading="lazy"
            />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Meta Angels</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650481882/celebrate/ice.letsceleb_bjy5dj.jpg"
          alt="Inspired by Eyes of Fashion"
          data-st-class="animate__animated animate__zoomIn animate__delay-4s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/ice.letsceleb_bjy5dj.jpg" width="430" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Eyes of Fashion</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650481882/celebrate/pixxy.letsceleb_p5rvql.jpg"
          alt="Inspired by Crypto Coven"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/pixxy.letsceleb_p5rvql.jpg" width="430" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Crypto Coven</p>
        </GalleryItem>
      </div>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-7xl mx-auto overflow-hidden">
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652514423/celebrate/randi.letsceleb_mnz0ma.jpg"
          alt="Randi"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/randi.letsceleb_mnz0ma.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Randi</p>
        </GalleryItem>

        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652514423/celebrate/riji.letsceleb_yzpmfb.jpg"
          alt="Riji"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/riji.letsceleb_yzpmfb.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Riji</p>
        </GalleryItem>

        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652514423/celebrate/cryptokalisian.letsceleb_ka3nwx.jpg"
          alt="Crypto Kalikasan"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/cryptokalisian.letsceleb_ka3nwx.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Crypto Kalikasan</p>
        </GalleryItem>

        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652514423/celebrate/sylvo.carried_hktjza.jpg"
          alt="Sylvo"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/sylvo.carried_hktjza.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Sylvo</p>
        </GalleryItem>

        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652514423/celebrate/smartly.carried_thok2k.jpg"
          alt="Smartly Creative"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/smartly.carried_thok2k.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Smartly Creative</p>
        </GalleryItem>

        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1652515156/celebrate/lisa.letsceleb_hb912j.jpg"
          alt="Lisa"
          data-st-class="animate__animated animate__zoomIn animate__delay-5s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/lisa.letsceleb_hb912j.jpg" width="215" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Lisa</p>
        </GalleryItem>
      </div>
    </GalleryWrapper>
  </div>
</template>
