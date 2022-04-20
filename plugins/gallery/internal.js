export const GalleryContext = Symbol('GalleryContext')

let id = 0
function generateId() {
  return ++id
}

export function useId() {
  return generateId()
}

export const appendTo = (element, targetSelector = 'body') => {
  if (!element) return
  const target = document.querySelector(targetSelector)
  target?.append(element)
}
