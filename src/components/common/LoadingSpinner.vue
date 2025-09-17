<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div
      class="animate-spin rounded-full border-2 border-gray-300 border-t-primary-500"
      :class="spinnerClass"
    ></div>
    <span v-if="text" class="ml-3 text-gray-600" :class="textClass">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const containerClass = computed(() => {
  const sizeMap = {
    sm: 'py-2',
    md: 'py-4',
    lg: 'py-8',
  }
  return sizeMap[props.size]
})

const spinnerClass = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }
  return sizeMap[props.size]
})

const textClass = computed(() => {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }
  return sizeMap[props.size]
})
</script>