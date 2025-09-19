<template>
    <div class="card p-5  group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
        <!-- Image -->
        <div class="mb-5 relative cursor-pointer overflow-hidden rounded-xl" @click="showImagePreview">
            <img 
                :src="prompt.imageUrl" 
                :alt="`Pet ${prompt.id}`" 
                class="w-full aspect-square object-cover bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-500 group-hover:scale-110" 
                loading="lazy" 
                @error="handleImageError" 
            />
            <!-- Overlay hint -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div class="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                    </div>
                    <div class="text-white text-xs font-medium mt-2 text-center">点击预览</div>
                </div>
            </div>
        </div>

        <!-- Image Preview Modal -->
        <ImagePreview
            :visible="showPreview"
            :image-url="prompt.imageUrl"
            :title="`Pet ${prompt.id}`"
            :enable-comparison="true"
            :original-image-url="'/images/0.jpg'"
            @close="showPreview = false"
        />

        <!-- Content -->
        <div class="space-y-4">
            <!-- Prompt Preview -->
            <div class="relative">
                <div class="prompt-container bg-gray-50/50 rounded-lg p-3 border border-gray-100">
                    <p 
                        ref="promptRef"
                        class="text-gray-700 text-sm transition-all duration-300 leading-relaxed font-medium"
                        :class="isExpanded ? 'prompt-expanded' : 'prompt-collapsed'"
                    >
                       <span>{{ prompt.prompt }}</span><button
                        v-if="needsExpansion && isExpanded"
                        @click="toggleExpanded"
                        class="ml-2 text-gray-400 hover:text-primary-500 text-xs transition-colors inline-flex items-center space-x-1"
                    >
                        <span>收起</span>
                        <svg 
                            class="w-3 h-3 transition-transform duration-300 rotate-180"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    </p>
                    <button
                        v-if="needsExpansion && !isExpanded"
                        @click="toggleExpanded"
                        class="mt-1 text-gray-400 hover:text-primary-500 text-xs transition-colors inline-flex items-center space-x-1"
                    >
                        <span>...更多</span>
                        <svg 
                            class="w-3 h-3 transition-transform duration-300"
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
            <div class="pt-1">
                <button
                    @click="copyPrompt"
                    class="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                    :class="copied 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white'
                    "
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
import { ref, onMounted, nextTick } from 'vue'
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
const promptRef = ref<HTMLElement>()
const needsExpansion = ref(false)

// 检查文本是否超过2行
const checkTextOverflow = async () => {
    await nextTick()
    if (promptRef.value) {
        const element = promptRef.value
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight)
        const maxHeight = lineHeight * 2 // 2行的高度
        needsExpansion.value = element.scrollHeight > maxHeight
    }
}

onMounted(() => {
    checkTextOverflow()
})

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
    -webkit-line-clamp: 2;
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