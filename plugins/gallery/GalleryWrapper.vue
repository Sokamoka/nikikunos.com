<script setup>
import { ref, provide, computed, watch, defineProps } from '@nuxtjs/composition-api'
import { GalleryContext } from './internal'

const props = defineProps({
  tag: {
    type: [String, Object],
    default: 'div',
  },
})

const items = ref([])
const isOpen = ref(false)
const currentIndex = ref(0)
const isLoading = ref(false)

const currentItem = computed(() => items.value[currentIndex.value])

const onLoad = () => {
  isLoading.value = false
}

const api = {
  items,
  isOpen,
  registerImage: (item) => items.value.push(item),
  open(id) {
    currentIndex.value = items.value.findIndex((item) => item.id === id) || 0
    isOpen.value = true
    isLoading.value = true
  },
  close() {
    isOpen.value = false
  },
  next() {
    if (currentIndex.value === items.value.length - 1) return
    currentIndex.value = currentIndex.value + 1
    isLoading.value = true
  },
  prev() {
    if (currentIndex.value === 0) return
    currentIndex.value = currentIndex.value - 1
    isLoading.value = true
  },
}
provide(GalleryContext, api)

watch(isOpen, (value) => {
  if (value) {
    window.addEventListener('keydown', onKeydown)
    document.body.classList.add('overflow-hidden')
  } else {
    window.removeEventListener('keydown', onKeydown)
    document.body.classList.remove('overflow-hidden')
  }
})

const onKeydown = (event) => {
  switch (event.key) {
    case 'Escape':
      api.close()
      event.preventDefault()
      event.stopPropagation()
      break
    case 'ArrowRight':
      event.preventDefault()
      event.stopPropagation()
      api.next()
      break
    case 'ArrowLeft':
      event.preventDefault()
      event.stopPropagation()
      api.prev()
      break
  }
}
</script>

<template>
  <component :is="props.tag">
    <slot :items="items" />
    <transition name="fade">
      <div v-if="isOpen" tabindex="0" class="fixed flex items-center justify-center inset-0 z-50">
        <div class="fixed bg-white/80 backdrop-blur-sm inset-0 -z-10"></div>
        <svg
          v-if="isLoading"
          class="absolute top-1/2 left-1/2 animate-spin h-8 w-8 text-rose-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <img
          :key="currentItem.id"
          :src="currentItem.src"
          :class="[
            ' block max-w-[90%] max-h-[90%] overscroll-contain shadow-md transition-opacity duration-700 ease-out',
            isLoading ? 'opacity-0' : 'opacity-1',
          ]"
          @load="onLoad"
        />
        <a
          v-if="currentIndex > 0"
          href="#"
          class="absolute left-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer z-20"
          @click.prevent="api.prev()"
        >
          <outline-chevron-left-icon class="w-5 h-5" />
        </a>
        <a
          href="#"
          class="absolute top-2 right-4 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer z-20"
          @click.prevent="api.close()"
        >
          <outline-x-icon class="w-5 h-5" />
        </a>
        <a
          v-if="currentIndex < items.length - 1"
          href="#"
          class="absolute right-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer z-20"
          @click.prevent="api.next()"
        >
          <outline-chevron-right-icon class="w-5 h-5" />
        </a>
        <div
          v-if="currentItem.alt"
          class="absolute bottom-2 left-1/2 bg-rose-600 rounded-full shadow-md text-white text-sm font-medium transform -translate-x-1/2 px-5 py-2"
        >
          {{ currentItem.alt }}
        </div>
      </div>
    </transition>
  </component>
</template>
