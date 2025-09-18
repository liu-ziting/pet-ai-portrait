<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl">
            <div class="max-w-4xl mx-auto px-4">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span class="text-4xl">🐾</span> AI宠物写真
                </h1>
                <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                    为你的毛孩子生成专属的艺术肖像，让每个瞬间都成为永恒的艺术品
                </p>
                
                <!-- Quick Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center ">
                    <RouterLink 
                        to="/about" 
                        class="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        <span>查看使用指南</span>
                    </RouterLink>
                </div>
            </div>
        </section>

     

        <!-- Prompts Section -->
        <section id="prompts">
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

onMounted(() => {
    prompts.value = petPromptsStore.getAllPrompts()
})
</script>
