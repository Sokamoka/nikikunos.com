<template>
  <div
    v-if="isOpen"
    class="fixed bottom-5 right-5 flex flex-col items-center p-4 text-white bg-gray-900 shadow-xl justify-center w-[280px] sm:w-full sm:max-w-md rounded-lg"
  >
    <div class="lg:mx-8">
      <p>
        <b>Can I use cookies for analytics?</b><br />
        <!-- Read
        <nuxt-link class="text-link" to="/privacy-policy">the privacy policy</nuxt-link>
        for more information. -->
        <i18n path="cookieConsent.term" tag="label" for="tos">
          <!-- <a :href="url" target="_blank">{{ $t('tos') }}</a> -->
           <nuxt-link class="text-link" to="/privacy-policy">{{ $t('cookieConsent.tos') }}</nuxt-link>
        </i18n>
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0">
      <button
        type="button"
        class="button border border-gray-400 text-gray-400 hover:border-white hover:text-white px-4 py-2 rounded-md"
        @click="deny"
      >
        {{ $t('cookieConsent.buttonDeny') }}
      </button>
      <button type="button" class="button ml-3 bg-lime-600 hover:bg-lime-500 rounded-md py-2 px-4" @click="accept">
        {{ $t('cookieConsent.buttonAccept') }}
      </button>
    </div>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  data() {
    return {
      isOpen: false,
    }
  },

  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },

  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then((gtag) => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
        })
      }
    },
  },
}
</script>
