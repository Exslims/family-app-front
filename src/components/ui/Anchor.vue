<script lang="ts" setup>
import {toRef} from "vue";

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: '',
  },
})

// state
const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>

<template>
  <RouterLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`"
  >
    <slot>{{ text }}</slot>
  </RouterLink>
  <a
    v-else
    :class="`transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`"
    :href="href"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
</style>
