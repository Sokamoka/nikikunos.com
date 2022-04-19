const createObserver = (options) => {
  const elements = document.querySelectorAll('[data-st-container]')
  const deafultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
  const mergedOptions = { ...deafultOptions, ...options }

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elem = entry.target
        // console.log('itersecting:', elem)
        const animatedElements = elem.querySelectorAll('[data-st-class]')
        animatedElements.forEach((element) => {
          const classes = element.dataset.stClass?.split(' ') ?? []
          element.classList.add(...classes)
        })
      }
    })
  }
  const observer = new IntersectionObserver(callback, mergedOptions)
  elements.forEach((element) => observer.observe(element))
}
export default ({ app }, inject) => {
  inject('scrollTap', (options) => createObserver(options))
}
