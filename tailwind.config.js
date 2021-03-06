module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,vue,ts,}',
    './nuxt.config.{js,ts}',
  ],
  safelist: ['animate-fade-in-left', 'animate-fade-in-right', 'mb-0'],
  theme: {
    extend: {
      backgroundImage: {
        'roadmap-pattern': "url('../img/pattern-wave.svg')",
        wave: "url('../img/wave.svg')",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      animation: {
        'fade-in-left': 'twFadeInLeft 0.5s ease-in-out forwards',
        'fade-in-right': 'twFadeInRight 0.5s ease-in-out both',
      },
      keyframes: {
        twFadeInLeft: {
          from: { transform: 'translateX(-40px)', opacity: 0 },
          to: { transform: 'translateX(0px)', opacity: 1 },
        },
        twFadeInRight: {
          from: { transform: 'translateX(40px)', opacity: 0 },
          to: { transform: 'translateX(0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
