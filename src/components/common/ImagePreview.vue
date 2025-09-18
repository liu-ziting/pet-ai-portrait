<template>
    <Teleport to="body">
        <div 
            v-if="visible" 
            class="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm" 
            @click="close"
        >
            <!-- Modal Container with responsive sizing -->
            <div 
                class="relative w-full h-full max-w-[95vw] max-h-[95vh] p-2 sm:p-4 lg:p-8"
                @click.stop
            >
                <!-- Close Button -->
                <button
                    @click="close"
                    class="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    aria-label="关闭图片预览"
                >
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Image Container -->
                <div class="w-full h-full flex items-center justify-center">
                    <img 
                        :src="imageUrl" 
                        :alt="title || '宠物写真预览'" 
                        class="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
                        @load="handleImageLoad"
                        @error="handleImageError"
                    />
                </div>

                <!-- Image Info Overlay -->
                <div 
                    v-if="showImageInfo && title" 
                    class="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium"
                >
                    {{ title }}
                </div>

                <!-- Loading Spinner -->
                <div 
                    v-if="isLoading" 
                    class="absolute inset-0 flex items-center justify-center"
                >
                    <div class="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, toRefs, watch } from 'vue'

interface Props {
    visible: boolean
    imageUrl: string
    title?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    close: []
}>()

// Reactive state
const isLoading = ref(true)
const showImageInfo = ref(true)

const close = () => {
    emit('close')
}

const handleImageLoad = () => {
    isLoading.value = false
}

const handleImageError = () => {
    isLoading.value = false
    console.error('Failed to load image:', props.imageUrl)
}

// Close on ESC key
const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.visible) {
        close()
    }
}

// Reset loading state when image changes
const resetLoadingState = () => {
    if (props.visible) {
        isLoading.value = true
    }
}

// Add event listener when component mounts
onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})

// Watch for prop changes
const { visible, imageUrl } = toRefs(props)
watch([visible, imageUrl], () => {
    resetLoadingState()
})
</script>
