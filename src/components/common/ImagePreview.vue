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
                    <!-- 对比模式：主图+右下角小图 -->
                    <div v-if="enableComparison" class="relative w-full h-full flex items-center justify-center">
                        <!-- 主图片（AI生成结果） -->
                        <img 
                            :src="imageUrl" 
                            :alt="title || 'AI生成的宠物写真'" 
                            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
                            @load="handleImageLoad"
                            @error="handleImageError"
                        />
                        
                        <!-- 右下角原始图片小预览 -->
                        <div class="absolute bottom-4 right-4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-lg p-1 group hover:scale-110 transition-all duration-300 cursor-pointer">
                            <img 
                                :src="originalImageUrl" 
                                alt="原始宠物照片" 
                                class="w-full h-full object-cover rounded opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                                @load="handleOriginalImageLoad"
                                @error="handleOriginalImageError"
                            />
                            <!-- 标签 -->
                            <div class="absolute -top-2 -left-2 bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded text-xs font-medium">
                                原图
                            </div>
                        </div>
                        
                    </div>
                    
                    <!-- 普通模式：只显示一张图片 -->
                    <img 
                        v-else
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
    enableComparison?: boolean
    originalImageUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
    enableComparison: false,
    originalImageUrl: '/images/0.jpg'
})

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

const handleOriginalImageLoad = () => {
    // 原始图片加载成功，可以在这里添加额外逻辑
}

const handleOriginalImageError = () => {
    console.error('Failed to load original image:', props.originalImageUrl)
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
