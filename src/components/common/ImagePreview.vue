<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      @click="close"
    >
      <div class="relative max-w-4xl max-h-full p-4">
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-2 right-2 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="imageUrl"
          :alt="title"
          class="max-w-full max-h-full object-contain rounded-lg"
          @click.stop
        />

        <!-- Title -->
        <div v-if="title" class="absolute bottom-4 left-4 right-4">
          <div class="bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
            <p class="text-sm font-medium">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface Props {
  visible: boolean
  imageUrl: string
  title?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const close = () => {
  emit('close')
}

// Close on ESC key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.visible) {
    close()
  }
}

// Add event listener when component mounts
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>