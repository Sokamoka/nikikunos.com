<script setup>
import { defineProps, inject, onMounted } from '@nuxtjs/composition-api'
import { GalleryContext } from './internal'

const props = defineProps({
  tag: {
    type: [String, Object],
    default: 'div',
  },
  imageSrc: {
    type: String,
    default: '',
  },
})
const api = inject(GalleryContext, null)

const id = 'first'

onMounted(() => api.registerImage({ id, src: props.imageSrc }))

const onClick = () => {
   api.open(id)
}
</script>

<template>
  <component :is="props.tag" v-bind="$attrs" @click="onClick">
    <slot />
  </component>
</template>
