<script setup>

const componentId = 'div';
</script>

<template>
  <component :is="componentId">
    <slot />
  </component>
</template>
