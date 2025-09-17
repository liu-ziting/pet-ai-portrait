<template>
    <div class="card p-6 group">
        <!-- Image -->
        <div class="mb-4">
            <img 
                :src="prompt.imageUrl" 
                :alt="prompt.title" 
                class="w-full aspect-square object-contain bg-gray-50 rounded-lg" 
                loading="lazy" 
                @error="handleImageError" 
            />
        </div>

        <!-- Content -->
        <div class="space-y-3">

            <!-- Prompt Preview -->
            <p class="text-gray-600 text-sm line-clamp-3">
                {{ prompt.prompt }}
            </p>

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

interface Props {
    prompt: PetPrompt
}

const props = defineProps<Props>()

const copied = ref(false)

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