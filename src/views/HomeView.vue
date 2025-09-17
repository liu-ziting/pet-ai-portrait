<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl">
            <div class="max-w-4xl mx-auto px-4">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span class="text-4xl">🐾</span> Pet AI Portrait
                </h1>
                <p class="text-xl text-gray-600 mb-6 leading-relaxed">
                    精选的宠物AI肖像提示词库
                </p>
                <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                    为你的毛孩子生成专属的艺术肖像，让每个瞬间都成为永恒的艺术品
                </p>
                
                <!-- Quick Guide -->
                <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">💡 快速使用指南</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div class="flex items-center space-x-2">
                            <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span class="text-gray-700">上传宠物照片到豆包/lmarena</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span class="text-gray-700">选择并复制下方提示词</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span class="text-gray-700">生成专属AI肖像作品</span>
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

onMounted(() => {
    prompts.value = petPromptsStore.getAllPrompts()
})
</script>
