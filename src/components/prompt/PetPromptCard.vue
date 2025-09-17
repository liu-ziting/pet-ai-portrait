<template>
    <div class="card p-6 group">
        <!-- Image -->
        <div class="mb-4 relative cursor-pointer" @click="showImagePreview">
            <img 
                :src="prompt.imageUrl" 
                :alt="`Pet ${prompt.id}`" 
                class="w-full aspect-square object-contain bg-gray-50 rounded-lg transition-transform group-hover:scale-105" 
                loading="lazy" 
                @error="handleImageError" 
            />
            <!-- Overlay hint -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div class="bg-white bg-opacity-90 rounded-full p-3">
                        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Preview Modal -->
        <ImagePreview
            :visible="showPreview"
            :image-url="prompt.imageUrl"
            :title="`Pet ${prompt.id}`"
            @close="showPreview = false"
        />

        <!-- Content -->
        <div class="space-y-3">
            <!-- Prompt Preview -->
            <div class="relative">
                <div class="prompt-container">
                    <p 
                        class="text-gray-600 text-sm transition-all duration-300 leading-relaxed"
                        :class="isExpanded ? 'prompt-expanded' : 'prompt-collapsed'"
                    >
                        {{ prompt.prompt }}
                    </p>
                </div>
                
                <!-- Expand/Collapse Button -->
                <div class="mt-2">
                    <button
                        @click="toggleExpanded"
                        class="text-primary-600 hover:text-primary-700 text-xs font-medium flex items-center space-x-1 transition-colors hover:bg-primary-50 px-2 py-1 rounded"
                    >
                        <span>{{ isExpanded ? '收起' : '展开全部' }}</span>
                        <svg 
                            class="w-3 h-3 transition-transform duration-200"
                            :class="{ 'rotate-180': isExpanded }"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Copy Button -->
            <div class="pt-2">
                <button
                    @click="copyPrompt"
                    class="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    :class="{ 'bg-green-600 hover:bg-green-700': copied }"
                >
                    <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{{ copied ? '已复制!' : '复制提示词' }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PetPrompt } from '@/types/prompt'
import { copyToClipboard } from '@/utils/clipboard'
import ImagePreview from '@/components/common/ImagePreview.vue'

interface Props {
    prompt: PetPrompt
}

const props = defineProps<Props>()

const copied = ref(false)
const showPreview = ref(false)
const isExpanded = ref(false)

const showImagePreview = () => {
    showPreview.value = true
}

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
}

const copyPrompt = async () => {
    try {
        await copyToClipboard(props.prompt.prompt)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (error) {
        console.error('Failed to copy:', error)
        // Fallback for browsers that don't support clipboard API
        fallbackCopy(props.prompt.prompt)
    }
}

const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
        document.execCommand('copy')
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Fallback copy failed:', err)
    }
    document.body.removeChild(textArea)
}

const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement
    img.src = 'https://via.placeholder.com/400x300?text=图片加载失败'
}
</script>

<style scoped>
.prompt-container {
    position: relative;
}

.prompt-collapsed {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.prompt-expanded {
    white-space: pre-wrap;
    word-break: break-word;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>