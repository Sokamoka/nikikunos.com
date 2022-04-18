<script setup>
import { ref, provide, computed } from '@nuxtjs/composition-api'
import { GalleryContext } from './internal'

const items = ref([])
const isOpen = ref(false)
const currentIndex = ref(0)

const currentItem = computed(() => items.value[currentIndex.value])

const api = {
  items,
  isOpen,
  registerImage: (item) => items.value.push(item),
  open(id) {
    currentIndex.value = items.value.findIndex((item) => item.id === id) || 0
    isOpen.value = true
  },
  close() {
    isOpen.value = false
  },
  next() {
    let nextIndex = currentIndex.value + 1
    if (nextIndex >= items.value.length) nextIndex = items.value.length - 1
    currentIndex.value = nextIndex
  },
  prev() {
    let nextIndex = currentIndex.value - 1
    if (nextIndex < 0) nextIndex = 0
    currentIndex.value = nextIndex
  },
}
provide(GalleryContext, api)
</script>

<template>
  <div>
    <slot :items="items" />
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed flex items-center justify-center bg-white/70 backdrop-blur-sm inset-0 z-50"
      >
        <div
          v-if="currentIndex > 0"
          class="absolute left-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer"
          @click="api.prev()"
        >
          <outline-chevron-left-icon class="w-5 h-5" />
        </div>
        <transition name="fade" mode="out-in">
          <img
            :key="currentItem.id"
            :src="currentItem.src"
            class="block max-w-[90%] max-h-[90%] overscroll-contain shadow-md"
          />
        </transition>
        <div class="absolute top-2 right-4 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer" @click="api.close()">
          <outline-x-icon class="w-5 h-5" />
        </div>
        <div
          v-if="currentIndex < items.length - 1"
          class="absolute right-4 top-1/2 rounded-full bg-white hover:bg-rose-600 hover:text-white shadow-md p-2 cursor-pointer"
          @click="api.next()"
        >
          <outline-chevron-right-icon class="w-5 h-5" />
        </div>
      </div>
    </transition>
  </div>
</template>
