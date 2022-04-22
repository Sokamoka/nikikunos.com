const createObserver = (options = {}) => {
  const { offset = 0, margin = 0, ...restOptions } = options

  const elements = document.querySelectorAll('[data-st-container]')
  // const spyLinks = document.querySelectorAll('[data-st-spy]')

  const deafultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: buildThresholdList(),
  }
  const mergedOptions = { ...deafultOptions, ...restOptions }

  const callback = (entries) => {
    const spyLinks = document.querySelectorAll('[data-st-spy]')
    calculateActiveScene(elements, margin, spyLinks)
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

const calculateActiveScene = (entries, margin, spyLinks) => {
  const current =
    entries.length - [...entries].reverse().findIndex((section) => window.scrollY >= section.offsetTop - margin) - 1
  removeAllActive(spyLinks)
  makeActive(entries[current].dataset.stContainer)
}

const makeActive = (id) => {
  document.querySelector(`[data-st-spy*=${id}]`)?.classList.add('is-active')
}
const removeActive = (link) => link.classList.remove('is-active')
const removeAllActive = (links) => links.forEach((link) => removeActive(link))
