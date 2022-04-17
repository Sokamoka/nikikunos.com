<template>
  <nav
    :class="[
      'fixed px-10 py-5 font-bold text-xl w-full transition-all duration-500 ease-out z-50',
      {
        'bg-white/80 backdrop-blur-md shadow-md': isOnScroll,
      },
    ]"
  >
    NikiKunos.com
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',

  data() {
    return {
      isOnScroll: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.isOnScroll = window.scrollY > 0
    },
  },
}
</script>
