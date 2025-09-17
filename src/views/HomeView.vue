<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl">
            <div class="max-w-4xl mx-auto px-4">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span class="text-4xl">🐾</span> Pet AI Portrait
                </h1>
                <p class="text-xl text-gray-600 mb-6 leading-relaxed">
                    AI宠物写真提示词库
                </p>
                <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                    为你的毛孩子生成专属的艺术肖像，让每个瞬间都成为永恒的艺术品
                </p>
                
                <!-- Collapsible Quick Guide -->
                <div class="mb-6">
                    <!-- Collapsible usage guide -->
                    <div class="text-center">
                        <button
                            @click="showGuide = !showGuide"
                            class="inline-flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 text-base font-medium transition-colors bg-white/60 hover:bg-white/80 px-4 py-2 rounded-lg border border-gray-200"
                        >
                            <span>📝 {{ showGuide ? '隐藏使用指南' : '查看使用指南' }}</span>
                            <svg 
                                class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': showGuide }"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        
                        <!-- Collapsible content -->
                        <div 
                            class="overflow-hidden transition-all duration-300"
                            :class="showGuide ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'"
                        >
                            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                                <!-- Upload buttons -->
                                <div class="mb-6">
                                    <div class="flex flex-col sm:flex-row gap-3 items-center justify-center">
                                        <a
                                            href="https://doubao.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>豆包</span>
                                        </a>
                                        <span class="text-gray-500 text-sm sm:text-base font-medium">或</span>
                                        <a
                                            href="https://lmarena.ai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>LMArena</span>
                                        </a>
                                    </div>
                                </div>

                                <!-- Step guide -->
                                <div class="border-t border-gray-200 pt-4">
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                        <div class="flex items-center space-x-3">
                                            <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                            <span class="text-gray-700">上传宠物照片到豆包/LMArena</span>
                                        </div>
                                        <div class="flex items-center space-x-3">
                                            <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                            <span class="text-gray-700">选择并复制下方提示词</span>
                                        </div>
                                        <div class="flex items-center space-x-3">
                                            <span class="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                            <span class="text-gray-700">生成专属AI写真作品</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     

        <!-- Prompts Section -->
        <section>
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🎨 精选提示词</h2>
                <p class="text-gray-600">点击图片查看大图效果，点击按钮复制提示词</p>
            </div>

            <div v-if="isLoading" class="flex justify-center py-12">
                <LoadingSpinner size="lg" text="加载中..." />
            </div>

            <div v-else>
                <PetPromptGrid :prompts="prompts" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PetPromptGrid from '@/components/prompt/PetPromptGrid.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { usePetPromptsStore } from '@/stores/petPrompts'
import type { PetPrompt } from '@/types/prompt'

const petPromptsStore = usePetPromptsStore()
const isLoading = ref(false)
const prompts = ref<PetPrompt[]>([])
const showGuide = ref(false)

onMounted(() => {
    prompts.value = petPromptsStore.getAllPrompts()
})
</script>
