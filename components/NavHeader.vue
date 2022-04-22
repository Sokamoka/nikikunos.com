<template>
  <nav
    :class="[
      'fixed w-full transition-all duration-500 ease-out z-50',
      {
        'bg-white/80 backdrop-blur-md shadow-md': isOnScroll,
      },
    ]"
  >
    <div class="max-w-7xl mx-auto py-5 px-10 w-full flex flex-col sm:flex-row">
      <a href="#" class="flex-1 font-bold text-xl">NikiKunos.com</a>
      <div class="flex flex-col sm:flex-row sm:space-x-5">
        <a href="#about" class="button is-header" data-st-spy="profile">About</a>
        <a href="#features" class="button is-header" data-st-spy="features">Features</a>
        <a
          href="#roadmap"
          class="button is-header"
          data-st-spy="roadmap lets-celebrate say-it-with-cake information wish carried"
        >
          Road map
        </a>
        <a href="#upcoming" class="button is-header" data-st-spy="upcoming">Upcomming</a>
        <a href="#contact" class="button is-header" data-st-spy="contact">Contact</a>
      </div>
    </div>
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
