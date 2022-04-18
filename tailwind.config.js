module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,vue,ts,}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'roadmap-pattern': "url('../img/pattern-wave.svg')",
        wave: "url('../img/wave.svg')",
      },
    },
  },
  plugins: [],
}
