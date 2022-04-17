<script setup>
import { ref, onMounted, provide } from '@nuxtjs/composition-api'

const GalleryContext = Symbol('GalleryContext')
// reactive state
const count = ref(0)
const items = ref([]);

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

const api = {
  items,
  add: (item) => items.value.push(item)
}
provide(GalleryContext, api)
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
