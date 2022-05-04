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
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Boss Beauties</p>
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
          <p class="text-xs text-gray-400 text-right px-2">Inspired by WOW PIXIES</p>
        </GalleryItem>
        <GalleryItem
          src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650478171/celebrate/laura.letsceleb_qb41dd.jpg"
          alt="Inspired by Not So Dead"
          data-st-class="animate__animated animate__zoomIn animate__delay-1s animate__faster"
        >
          <div class="gallery-thumb">
            <nuxt-img provider="cloudinary" src="/celebrate/laura.letsceleb_qb41dd.jpg" width="430" loading="lazy" />
          </div>
          <p class="text-xs text-gray-400 text-right px-2">Inspired by Not So Dead</p>
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
    </GalleryWrapper>
    <section class="pt-16" data-st-container="say-it-with-cake" data-st-offset="100">
      <div class="flex flex-col md:flex-row-reverse max-w-7xl mx-auto">
        <div class="w-full md:w-1/2 mb-5 opacity-0" data-st-class="animate-fade-in-right">
          <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
          <h1 class="px-10 text-3xl font-bold">{{ $t('roadMap.sayItWithCake.title') }}</h1>
          <p
            class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg"
            v-html="$t('roadMap.sayItWithCake.content')"
          ></p>
        </div>
        <div class="w-full md:w-1/2 opacity-0" data-st-class="animate-fade-in-left">
          <GalleryWrapper class="grid grid-cols-2 sm:grid-cols-3 grid-rows-1 gap-2">
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651168306/saywithcake/saywithcake-01_ha4trp.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/saywithcake/saywithcake-01_ha4trp.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <!-- <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651168307/saywithcake/saywithcake-02_o6jzwz.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/saywithcake/saywithcake-02_o6jzwz.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem> -->
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651168308/saywithcake/saywithcake-03_hgi3a2.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/saywithcake/saywithcake-03_hgi3a2.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651168311/saywithcake/saywithcake-04_ch8fk0.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/saywithcake/saywithcake-04_ch8fk0.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
          </GalleryWrapper>
        </div>
      </div>
    </section>

    <section class="bg-rose-50" data-st-container="information" data-st-offset="120">
      <div class="max-w-7xl mx-auto mt-5 text-center flex flex-col items-center pt-8">
        <p
          class="px-10 text-base text-rose-400 sm:text-base md:text-lg md:w-4/5 opacity-0"
          data-st-class="animate__animated animate__fadeIn"
          v-html="$t('roadMap.membersClub')"
        />
      </div>
    </section>

    <section class="py-16" data-st-container="carried">
      <div class="flex flex-col md:flex-row max-w-7xl mx-auto">
        <div class="w-full md:w-1/2 mb-5 opacity-0" data-st-class="animate-fade-in-left">
          <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
          <h1 class="px-10 text-3xl font-bold">“I carried the cake” (PFP)</h1>
          <p class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg">
            Carrying the cake is like stepping into a totally different world like Baby in “Dirty Dancing”, who carried
            a watermelon. First steps into WEB3 is not easy, but if you are curious enough you will find a genuine,
            creative and supportive community. Everyone is happy for the one who adds the cake to the party.
          </p>
          <p class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg">
            Together with our community members, we would like to support women-led project. We will decide together
            what new upcoming project to support each quarter with x % of the collection’s revenue. We will purchase
            from the voted collections, which we giveaway among our members. We are here to lift each other up. WAGMI
          </p>
        </div>
        <div class="w-full md:w-1/2 opacity-0" data-st-class="animate-fade-in-right">
          <GalleryWrapper class="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-2">
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306990/carried/riji.carried_acjery.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/riji.carried_acjery.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306990/carried/debbie.carried_i1ooto.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/debbie.carried_i1ooto.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306990/carried/lily.carried_rn2n5x.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/lily.carried_rn2n5x.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306990/carried/smarty.carried_vps9i0.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/smarty.carried_vps9i0.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306990/carried/mimi.carried_catkwi.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/mimi.carried_catkwi.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1650306991/carried/sylvo.carried_ozfdd2.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/carried/sylvo.carried_ozfdd2.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
          </GalleryWrapper>
        </div>
      </div>
    </section>
    <section class="py-16" data-st-container="wish">
      <div class="flex flex-col md:flex-row-reverse max-w-7xl mx-auto">
        <div class="w-full md:w-1/2 mb-5 opacity-0" data-st-class="animate-fade-in-left">
          <div class="h-1 bg-rose-500 w-48 mb-8 mx-10"></div>
          <h1 class="px-10 text-3xl font-bold">“Make a wish”</h1>
          <p class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg">
            (3000 generative animated pieces) Can you imagine any celebration without cake? We all love the special
            moment when all the candles are blown out and the celebrated one makes a wish. If you have a “Say with
            cakes” piece here you can blow the candles on the matching cake.
          </p>
          <p class="px-10 mt-5 text-base text-gray-500 sm:text-lg md:text-lg">
            The X % profit of this collection supporting special movement like “Grandpa Kitchen” who feed with giant
            cakes hundreds children. We need your help here, to find additional special human or community all over the
            world.
          </p>
        </div>
        <div class="w-full md:w-1/2 opacity-0" data-st-class="animate-fade-in-right">
          <GalleryWrapper class="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-2">
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169651/makeawish/makeawish-01_jyjgso.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish/makeawish-01_jyjgso.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169677/makeawish/makeqwish-02_ak6hvu.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish/makeqwish-02_ak6hvu.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169656/makeawish/makeawish-03_cfchdt.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish/makeawish-03_cfchdt.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169662/makeawish/makeawish-04_qojit5.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish/makeawish-04_qojit5.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169669/makeawish/makeawish-05_bocett.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish/makeawish-05_bocett.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
            <GalleryItem
              class="gallery-thumb"
              src="https://res.cloudinary.com/dmnwv4n97/image/upload/v1651169686/makeawish/makewish-06_sboufo.jpg"
            >
              <nuxt-img
                provider="cloudinary"
                src="/makeawish//makewish-06_sboufo.jpg"
                width="320"
                height="320"
                loading="lazy"
              />
            </GalleryItem>
          </GalleryWrapper>
        </div>
      </div>
    </section>
  </div>
</template>
