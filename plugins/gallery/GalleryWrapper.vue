<script setup>
import { ref, provide, computed, watch, nextTick } from '@nuxtjs/composition-api'
import { GalleryContext } from './internal'

const items = ref([])
const isOpen = ref(false)
const currentIndex = ref(0)
const galleryRef = ref(null)
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
    nextTick(() => galleryRef.value?.focus())
    document.body.classList.add('overflow-hidden')
  } else {
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
  <div @keydown="onKeydown">
    <slot :items="items" />
    <transition name="fade">
      <div
        v-if="isOpen"
        ref="galleryRef"
        tabindex="0"
        class="fixed flex items-center justify-center bg-white/70 backdrop-blur-sm inset-0 z-50 overscroll-auto"
      >
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
          class="absolute left-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer"
          @click.prevent="api.prev()"
        >
          <outline-chevron-left-icon class="w-5 h-5" />
        </a>
        <a
          href="#"
          class="absolute top-2 right-4 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer"
          @click.prevent="api.close()"
        >
          <outline-x-icon class="w-5 h-5" />
        </a>
        <a
          v-if="currentIndex < items.length - 1"
          href="#"
          class="absolute right-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer"
          @click.prevent="api.next()"
        >
          <outline-chevron-right-icon class="w-5 h-5" />
        </a>
      </div>
    </transition>
  </div>
</template>
