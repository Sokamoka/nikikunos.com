const createObserver = (options = {}) => {
  const { offset = 0, margin = 0, ...restOptions } = options
  const elements = document.querySelectorAll('[data-st-container]')
  const deafultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: buildThresholdList(),
  }
  const mergedOptions = { ...deafultOptions, ...restOptions }

  const callback = (entries) => {
    calculateActiveScene(elements, margin)
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { offset: dataOffset } = getOptions(entry.target)
        const offsetRatio = calculateOffsetRatio(entry, dataOffset || offset)
        if (entry.intersectionRatio < offsetRatio) return
        const animatedElements = entry.target.querySelectorAll('[data-st-class]')
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

const buildThresholdList = () => {
  const thresholds = []
  const numSteps = 20

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps
    thresholds.push(ratio)
  }

  thresholds.push(0)
  return thresholds
}

const calculateOffsetRatio = (entry, offset) => {
  return offset / entry.boundingClientRect.height
}

const getOptions = (target) => {
  const offset = target.dataset.stOffset
  return {
    offset,
  }
}

const calculateActiveScene = (entries, margin) => {
  const current =
    entries.length -
    [...entries].reverse().findIndex((section) => {
      // console.dir(section)
      // console.log(section.dataset.stContainer, section.offsetTop)
      return window.scrollY >= section.offsetTop - margin
    }) -
    1
  console.log(entries[current].dataset.stContainer)
}
