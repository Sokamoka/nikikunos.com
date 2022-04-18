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
    currentIndex.value = items.value.findIndex(item => item.id === id) || 0;
    isOpen.value = true
  },
  close() {
    isOpen.value = false
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
        class="fixed flex bg-white/70 backdrop-blur-sm inset-0 z-50 p-10"
        @click="api.close()"
      >
        <img
          :src="currentItem.src"
          class="w-full h-auto"
        />
      </div>
    </transition>
  </div>
</template>
