<template>
  <nav
    :class="[
      'fixed w-full transition-all duration-500 ease-out z-50',
      {
        'bg-white/80 backdrop-blur-md shadow-md': isOnScroll,
      },
    ]"
  >
    <div class="max-w-7xl mx-auto py-5 px-10 font-bold text-xl w-full">NikiKunos.com</div>
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
