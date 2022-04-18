<script setup>
import { defineProps, inject, onMounted } from '@nuxtjs/composition-api'
import { GalleryContext, useId } from './internal'

const props = defineProps({
  tag: {
    type: [String, Object],
    default: 'div',
  },

  src: {
    type: String,
    default: '',
  },
})
const api = inject(GalleryContext, null)

const id = useId()

onMounted(() => api.registerImage({ id, src: props.src }))

const onClick = () => {
  api.open(id)
}
</script>

<template>
  <component :is="props.tag" v-bind="$attrs" @click.prevent="onClick">
    <slot />
  </component>
</template>
