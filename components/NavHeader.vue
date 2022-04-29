<template>
  <nav
    :class="[
      'fixed w-full transition-all duration-500 ease-out z-50',
      {
        'bg-white/80 backdrop-blur-md shadow-md': isOnScroll || (isMenuVisible && isSmallScreen),
      },
    ]"
  >
    <div class="max-w-7xl mx-auto py-5 px-10 w-full flex flex-col sm:flex-row sm:items-center">
      <a href="#" class="flex-1 font-bold text-xl hover:no-underline">NikiKunos.com</a>
      <div
        v-if="isMenuVisible"
        class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 sm:bg-transparent -mx-10 sm:mx-0 pt-5 sm:pt-0 px-10 sm:px-0"
      >
        <a href="#" class="button is-header" data-st-spy="hero">Home</a>
        <a href="#about" class="button is-header" data-st-spy="profile">About</a>
        <a href="#features" class="button is-header" data-st-spy="features">Features</a>
        <a
          href="#roadmap"
          class="button is-header"
          data-st-spy="roadmap lets-celebrate say-it-with-cake information wish carried"
        >
          Road Map
        </a>
        <a href="#upcoming" class="button is-header" data-st-spy="upcoming">Upcomming</a>
        <a href="#contact" class="button is-header" data-st-spy="contact">Contact</a>
      </div>
      <button type="button" class="sm:hidden absolute right-3 top-5" @click="toggleMenu">
        <outline-menu-icon class="w-5 h-5" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavHeader',

  data() {
    return {
      isOnScroll: false,
      isMenuVisible: true,
      isSmallScreen: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted() {
    const match = (matches) => {
      if (matches) {
        this.isSmallScreen = true
        this.isMenuVisible = false
      } else {
        this.isSmallScreen = false
        this.isMenuVisible = true
      }
    }

    const mql = window.matchMedia('(max-width: 640px)')
    mql.onchange = (e) => {
      match(e.matches)
    }
  },

  methods: {
    handleScroll() {
      this.isOnScroll = window.scrollY > 0
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
  },
}
</script>
